param(
  [string]$Src = "$PSScriptRoot\..\public\logo.jpg",
  [string]$Dst = "$PSScriptRoot\..\public\logo.png",
  [int]$Tolerance = 48,
  [int]$Pad = 4
)

Add-Type -AssemblyName System.Drawing

function ColorDistSq($r, $g, $b, $br, $bg, $bb) {
  $dr = $r - $br
  $dg = $g - $bg
  $db = $b - $bb
  return ($dr * $dr + $dg * $dg + $db * $db)
}

function MatchesBg($r, $g, $b, $br, $bg, $bb, $tol) {
  return (ColorDistSq $r $g $b $br $bg $bb) -le ($tol * $tol)
}

$img = [System.Drawing.Bitmap]::FromFile($Src)
$w = $img.Width
$h = $img.Height

$rs = New-Object System.Collections.Generic.List[int]
$gs = New-Object System.Collections.Generic.List[int]
$bs = New-Object System.Collections.Generic.List[int]

for ($x = 0; $x -lt $w; $x++) {
  foreach ($y in @(0, 1, 2, ($h - 3), ($h - 2), ($h - 1))) {
    if ($y -lt 0 -or $y -ge $h) { continue }
    $c = $img.GetPixel($x, $y)
    $rs.Add($c.R); $gs.Add($c.G); $bs.Add($c.B)
  }
}
for ($y = 0; $y -lt $h; $y++) {
  foreach ($x in @(0, 1, 2, ($w - 3), ($w - 2), ($w - 1))) {
    if ($x -lt 0 -or $x -ge $w) { continue }
    $c = $img.GetPixel($x, $y)
    $rs.Add($c.R); $gs.Add($c.G); $bs.Add($c.B)
  }
}

$rs.Sort(); $gs.Sort(); $bs.Sort()
$mid = [int]($rs.Count / 2)
$br = $rs[$mid]
$bgC = $gs[$mid]
$bb = $bs[$mid]

$isBg = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Generic.Queue[object]

function EnqueueBg {
  param([int]$x, [int]$y)
  if ($x -lt 0 -or $y -lt 0 -or $x -ge $w -or $y -ge $h) { return }
  if ($isBg[$x, $y]) { return }
  $c = $img.GetPixel($x, $y)
  if (MatchesBg $c.R $c.G $c.B $br $bgC $bb $Tolerance) {
    $isBg[$x, $y] = $true
    $queue.Enqueue([object[]]@($x, $y))
  }
}

for ($x = 0; $x -lt $w; $x++) {
  EnqueueBg -x $x -y 0
  EnqueueBg -x $x -y ($h - 1)
}
for ($y = 0; $y -lt $h; $y++) {
  EnqueueBg -x 0 -y $y
  EnqueueBg -x ($w - 1) -y $y
}

while ($queue.Count -gt 0) {
  $p = $queue.Dequeue()
  $x = [int]$p[0]
  $y = [int]$p[1]
  foreach ($d in @(@(-1, 0), @(1, 0), @(0, -1), @(0, 1))) {
    $nx = $x + $d[0]
    $ny = $y + $d[1]
    if ($nx -lt 0 -or $ny -lt 0 -or $nx -ge $w -or $ny -ge $h) { continue }
    if ($isBg[$nx, $ny]) { continue }
    $c = $img.GetPixel($nx, $ny)
    if (MatchesBg $c.R $c.G $c.B $br $bgC $bb $Tolerance) {
      $isBg[$nx, $ny] = $true
      $queue.Enqueue([object[]]@($nx, $ny))
    }
  }
}

$minX = $w
$minY = $h
$maxX = 0
$maxY = 0
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    if (-not $isBg[$x, $y]) {
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

if ($maxX -lt $minX) {
  throw 'No foreground pixels detected.'
}

$minX = [Math]::Max(0, $minX - $Pad)
$minY = [Math]::Max(0, $minY - $Pad)
$maxX = [Math]::Min($w - 1, $maxX + $Pad)
$maxY = [Math]::Min($h - 1, $maxY + $Pad)
$cw = $maxX - $minX + 1
$ch = $maxY - $minY + 1

$out = New-Object System.Drawing.Bitmap $cw, $ch, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $ch; $y++) {
  for ($x = 0; $x -lt $cw; $x++) {
    $sx = $x + $minX
    $sy = $y + $minY
    if ($isBg[$sx, $sy]) {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    } else {
      $c = $img.GetPixel($sx, $sy)
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
    }
  }
}

$out.Save($Dst, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$out.Dispose()

Write-Host "Background median: $br,$bgC,$bb"
Write-Host "Output: ${cw}x${ch} -> $Dst"
