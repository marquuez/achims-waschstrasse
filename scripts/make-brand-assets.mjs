// Erzeugt aus public/logo.png (grünes Banner mit Waschbär) die Marken-Grafiken:
//  - public/logo-banner.png  : Banner ohne weißen Rand, nahtlos auf #028a02
//  - public/wordmark.png     : nur Schriftzug, weiß auf TRANSPARENT (Header/Footer)
//  - public/mascot.png       : Waschbär, freigestellt (transparent), 2x hochskaliert
//  - public/favicon.png      : quadratisches Icon (Waschbär-Kopf)
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pub = (f) => path.join(__dirname, '../public', f)

const BRAND = { r: 2, g: 138, b: 2 } // #028a02
const CROP = { left: 8, top: 4, width: 912, height: 188 }

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const smooth = (v) => v * v * (3 - 2 * v)

const { data, info } = await sharp(pub('logo.png'))
  .extract(CROP)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width: w, height: h, channels: ch } = info

// Weiße, abgerundete Ecken oben links/rechts mit Markengrün auffüllen
for (let y = 0; y < 24; y++) {
  for (let x = 0; x < w; x++) {
    if (x > 26 && x < w - 27) continue
    const i = (y * w + x) * ch
    const isGreen = data[i + 1] > 100 && data[i] < 90 && data[i + 2] < 90
    if (!isGreen) {
      data[i] = BRAND.r
      data[i + 1] = BRAND.g
      data[i + 2] = BRAND.b
    }
  }
}

const banner = sharp(data, { raw: { width: w, height: h, channels: ch } })
await banner.clone().png().toFile(pub('logo-banner.png'))

// ---------- Schriftzug: weiß auf transparent ----------
{
  const R = { left: 66, top: 8, width: 520, height: 178 }
  const out = Buffer.alloc(R.width * R.height * 4)
  for (let y = 0; y < R.height; y++) {
    for (let x = 0; x < R.width; x++) {
      const i = ((y + R.top) * w + (x + R.left)) * ch
      // Rot-Kanal trennt Weiß (≈255) sauber vom Markengrün (≈2)
      const a = smooth(clamp01((data[i] - 35) / 190))
      const o = (y * R.width + x) * 4
      out[o] = out[o + 1] = out[o + 2] = 255
      out[o + 3] = Math.round(a * 255)
    }
  }
  await sharp(out, { raw: { width: R.width, height: R.height, channels: 4 } })
    .trim({ threshold: 1 })
    .resize({ width: R.width * 2, kernel: 'lanczos3' })
    .png()
    .toFile(pub('wordmark.png'))
}

// ---------- Waschbär: grünen Hintergrund entfernen ----------
{
  const R = { left: 590, top: 0, width: w - 590 - 2, height: h }
  const n = R.width * R.height
  const px = (x, y) => ((y + R.top) * w + (x + R.left)) * ch
  const dist = (x, y) => {
    const i = px(x, y)
    const dr = data[i] - BRAND.r
    const dg = data[i + 1] - BRAND.g
    const db = data[i + 2] - BRAND.b
    return Math.sqrt(dr * dr + dg * dg + db * db)
  }
  const TOL = 85
  const bg = new Uint8Array(n)
  const stack = []
  const seed = (x, y) => {
    const k = y * R.width + x
    if (!bg[k] && dist(x, y) < TOL) {
      bg[k] = 1
      stack.push(k)
    }
  }
  for (let x = 0; x < R.width; x++) {
    seed(x, 0)
    seed(x, R.height - 1)
  }
  for (let y = 0; y < R.height; y++) {
    seed(0, y)
    seed(R.width - 1, y)
  }
  while (stack.length) {
    const k = stack.pop()
    const x = k % R.width
    const y = (k / R.width) | 0
    if (x > 0) seed(x - 1, y)
    if (x < R.width - 1) seed(x + 1, y)
    if (y > 0) seed(x, y - 1)
    if (y < R.height - 1) seed(x, y + 1)
  }

  const out = Buffer.alloc(n * 4)
  for (let y = 0; y < R.height; y++) {
    for (let x = 0; x < R.width; x++) {
      const k = y * R.width + x
      const i = px(x, y)
      const o = k * 4
      out[o] = data[i]
      out[o + 1] = data[i + 1]
      out[o + 2] = data[i + 2]
      // Grüne Taschen unterhalb der Mütze (zwischen Arm, Körper und Schwanz)
      const greenDominance = data[i + 1] - Math.max(data[i], data[i + 2])
      if (y > 95 && greenDominance > 40) bg[k] = 1
      if (bg[k]) {
        out[o + 3] = 0
        continue
      }
      // Weiche Kante: Pixel direkt am Hintergrund teilweise transparent
      let edge = false
      for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        const nx = x + dx
        const ny = y + dy
        if (nx >= 0 && ny >= 0 && nx < R.width && ny < R.height && bg[ny * R.width + nx]) edge = true
      }
      out[o + 3] = edge ? Math.round(clamp01((dist(x, y) - 20) / 90) * 255) : 255
    }
  }
  await sharp(out, { raw: { width: R.width, height: R.height, channels: 4 } })
    .trim({ threshold: 1 })
    .resize({ width: R.width * 2, kernel: 'lanczos3' })
    .sharpen({ sigma: 1.1 })
    .png()
    .toFile(pub('mascot.png'))
}

// Favicon: Kopf des Waschbären
await banner
  .clone()
  .extract({ left: 618, top: 0, width: 188, height: 188 })
  .resize(128, 128)
  .png()
  .toFile(pub('favicon.png'))

console.log('Marken-Grafiken erzeugt: logo-banner.png, wordmark.png, mascot.png, favicon.png')
