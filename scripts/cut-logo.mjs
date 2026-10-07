import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.join(__dirname, '../public/logo-source.png')
const dst = path.join(__dirname, '../public/logo.png')
const TOLERANCE = 18
const TOL_SQ = TOLERANCE * TOLERANCE
const PAD = 2

function distSq(r, g, b, br, bg, bb) {
  const dr = r - br
  const dg = g - bg
  const db = b - bb
  return dr * dr + dg * dg + db * db
}

function matchesWhite(r, g, b, wr, wg, wb) {
  return distSq(r, g, b, wr, wg, wb) <= TOL_SQ
}

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: w, height: h, channels: ch } = info

const wr = 255
const wg = 255
const wb = 255

const isBg = new Uint8Array(w * h)
const queue = []

const trySeed = (x, y) => {
  const idx = y * w + x
  if (isBg[idx]) return
  const i = idx * ch
  if (matchesWhite(data[i], data[i + 1], data[i + 2], wr, wg, wb)) {
    isBg[idx] = 1
    queue.push(idx)
  }
}

for (let x = 0; x < w; x++) {
  trySeed(x, 0)
  trySeed(x, h - 1)
}
for (let y = 0; y < h; y++) {
  trySeed(0, y)
  trySeed(w - 1, y)
}

while (queue.length) {
  const idx = queue.pop()
  const x = idx % w
  const y = (idx / w) | 0
  for (const [dx, dy] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    const nx = x + dx
    const ny = y + dy
    if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
    const nIdx = ny * w + nx
    if (isBg[nIdx]) continue
    const i = nIdx * ch
    if (matchesWhite(data[i], data[i + 1], data[i + 2], wr, wg, wb)) {
      isBg[nIdx] = 1
      queue.push(nIdx)
    }
  }
}

let minX = w
let minY = h
let maxX = 0
let maxY = 0

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = y * w + x
    const i = idx * ch
    if (isBg[idx]) {
      data[i + 3] = 0
    } else {
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }
}

minX = Math.max(0, minX - PAD)
minY = Math.max(0, minY - PAD)
maxX = Math.min(w - 1, maxX + PAD)
maxY = Math.min(h - 1, maxY + PAD)
const cw = maxX - minX + 1
const chOut = maxY - minY + 1

const cropped = Buffer.alloc(cw * chOut * ch)
for (let y = 0; y < chOut; y++) {
  for (let x = 0; x < cw; x++) {
    const sx = x + minX
    const sy = y + minY
    const srcIdx = (sy * w + sx) * ch
    const dstIdx = (y * cw + x) * ch
    cropped[dstIdx] = data[srcIdx]
    cropped[dstIdx + 1] = data[srcIdx + 1]
    cropped[dstIdx + 2] = data[srcIdx + 2]
    cropped[dstIdx + 3] = data[srcIdx + 3]
  }
}

await sharp(cropped, { raw: { width: cw, height: chOut, channels: ch } }).png().toFile(dst)

console.log(`Logo from logo-source.png -> ${cw}x${chOut} (white background removed)`)
