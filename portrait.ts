// A photo as a stipple of dots. In ink mode (for a light page) darker areas
// and edges get more, larger dots; in light mode (for a dark page) brighter
// areas do, so the portrait reads as a positive on either. The backdrop gets
// none. Sampling walks a Hilbert curve with stratified steps, so dots spread
// evenly instead of clumping. A shallow dome in z gives the head some depth
// when it sways.

import { emptyCloud, rng } from './particle-kit/src/index.ts'
import type { Form } from './shapeshift.ts'

const G = 256 // sampling grid (power of two for the Hilbert walk)

function hilbert(d: number, out: [number, number]) {
  let x = 0
  let y = 0
  let t = d
  for (let s = 1; s < G; s *= 2) {
    const rx = 1 & (t / 2)
    const ry = 1 & (t ^ rx)
    if (ry === 0) {
      if (rx === 1) {
        x = s - 1 - x
        y = s - 1 - y
      }
      const tmp = x
      x = y
      y = tmp
    }
    x += s * rx
    y += s * ry
    t = Math.floor(t / 4)
  }
  out[0] = x
  out[1] = y
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export function portrait(
  n: number,
  img: HTMLImageElement,
  { seed = 21, fadeBottom = 0.26, ink = true }: { seed?: number; fadeBottom?: number; ink?: boolean } = {}
): Form {
  const r = rng(seed)
  const aspect = img.naturalWidth / img.naturalHeight
  const cv = document.createElement('canvas')
  cv.width = cv.height = G
  const ctx = cv.getContext('2d', { willReadFrequently: true })!
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(img, 0, 0, G, G)
  const px = ctx.getImageData(0, 0, G, G).data

  const raw = new Float32Array(G * G)
  for (let i = 0; i < G * G; i++) raw[i] = (0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2]) / 255

  // Box blur (separable), for smoothing and for local mean brightness.
  const blur = (src: Float32Array, rad: number) => {
    const tmp = new Float32Array(G * G)
    const out = new Float32Array(G * G)
    for (let y = 0; y < G; y++)
      for (let x = 0; x < G; x++) {
        let s = 0
        let c = 0
        for (let k = -rad; k <= rad; k++) {
          const xx = x + k
          if (xx >= 0 && xx < G) (s += src[y * G + xx]), c++
        }
        tmp[y * G + x] = s / c
      }
    for (let y = 0; y < G; y++)
      for (let x = 0; x < G; x++) {
        let s = 0
        let c = 0
        for (let k = -rad; k <= rad; k++) {
          const yy = y + k
          if (yy >= 0 && yy < G) (s += tmp[yy * G + x]), c++
        }
        out[y * G + x] = s / c
      }
    return out
  }
  // A light smoothing first, so JPEG noise doesn't turn into speckle.
  const lum = blur(raw, 1)
  const mean = blur(lum, 6)

  // The backdrop: grow a region in from the top and upper sides, stepping
  // only between near-identical neighbours, so a smooth gradient is followed
  // but any outline (hair, shoulders) stops it.
  const bgMask = new Uint8Array(G * G)
  const queue: number[] = []
  const flood = (i: number) => {
    if (!bgMask[i] && lum[i] > 0.6) {
      bgMask[i] = 1
      queue.push(i)
    }
  }
  for (let x = 0; x < G; x++) flood(x)
  for (let y = 0; y < G * 0.6; y++) {
    flood(y * G)
    flood(y * G + G - 1)
  }
  while (queue.length) {
    const i = queue.pop()!
    const x = i % G
    for (const j of [x > 0 ? i - 1 : -1, x < G - 1 ? i + 1 : -1, i - G, i + G]) {
      if (j < 0 || j >= G * G || bgMask[j]) continue
      if (Math.abs(lum[j] - lum[i]) < 0.014 && lum[j] > 0.6) {
        bgMask[j] = 1
        queue.push(j)
      }
    }
  }

  // Stretch the subject's own tonal range (5th to 97th percentile), so the
  // face uses the full scale from shadow to highlight.
  const vals: number[] = []
  for (let i = 0; i < G * G; i += 3) if (!bgMask[i]) vals.push(lum[i])
  vals.sort((a, b) => a - b)
  const lo = vals[Math.floor(vals.length * 0.05)] ?? 0
  const hi = vals[Math.floor(vals.length * 0.97)] ?? 1
  const norm = (v: number) => Math.min(1, Math.max(0, (v - lo) / (hi - lo || 1)))

  const weight = new Float32Array(G * G)
  const toneMap = new Float32Array(G * G)
  for (let y = 1; y < G - 1; y++)
    for (let x = 1; x < G - 1; x++) {
      const i = y * G + x
      if (bgMask[i]) continue
      // Sobel edge strength.
      const gx = lum[i - G + 1] + 2 * lum[i + 1] + lum[i + G + 1] - lum[i - G - 1] - 2 * lum[i - 1] - lum[i + G - 1]
      const gy = lum[i + G - 1] + 2 * lum[i + G] + lum[i + G + 1] - lum[i - G - 1] - 2 * lum[i - G] - lum[i - G + 1]
      const edge = Math.min(1, Math.hypot(gx, gy) * 1.3)
      const v = y / G
      // Fade out toward the bottom, and narrow to the neck there so the
      // shoulders' outline doesn't trail off to the sides.
      let fade = v > 1 - fadeBottom ? Math.max(0, 1 - (v - (1 - fadeBottom)) / fadeBottom) ** 1.5 : 1
      if (v > 0.6) fade *= Math.exp(-(((x / G - 0.5) / (0.36 - (v - 0.6) * 0.6)) ** 4))
      // Tone: how much "ink" this pixel wants, plus local contrast so features
      // (eyes, brows, lips, nostrils) stand out from the skin around them.
      const t = Math.pow(ink ? 1 - norm(lum[i]) : norm(lum[i]), 1.7)
      const local = Math.min(1, Math.max(0, (ink ? mean[i] - lum[i] : lum[i] - mean[i]) * 6))
      toneMap[i] = Math.min(1, Math.max(t, local * 1.3))
      weight[i] = (0.9 * t + 1.3 * local + 0.38 * edge + 0.012) * fade
    }

  // Cumulative weight along the Hilbert curve, then evenly spaced picks.
  const order = new Uint32Array(G * G)
  const cdf = new Float32Array(G * G)
  const p: [number, number] = [0, 0]
  let total = 0
  for (let d = 0; d < G * G; d++) {
    hilbert(d, p)
    const i = p[1] * G + p[0]
    order[d] = i
    total += weight[i]
    cdf[d] = total
  }

  const form: Form = emptyCloud(n)
  const size = new Float32Array(n)
  const alpha = new Float32Array(n)
  form.s = size
  form.a = alpha
  const step = total / n
  let d = 0
  for (let k = 0; k < n; k++) {
    const target = (k + r()) * step
    while (d < G * G - 1 && cdf[d] < target) d++
    const i = order[d]
    const gx = (i % G) + r()
    const gy = Math.floor(i / G) + r()
    // Height spans -1..1; width follows the photo's aspect.
    const x = (gx / G - 0.5) * 2 * aspect
    const y = (gy / G - 0.5) * 2
    const tone = toneMap[i]
    form.x[k] = x
    form.y[k] = y
    // A shallow dome over the head, so it turns like a solid when it sways.
    form.z[k] = -0.3 * Math.sqrt(Math.max(0, 1 - (x / 0.8) ** 2 - ((y + 0.15) / 1.05) ** 2))
    form.c[k] = tone > 0.5 ? 0 : 1
    size[k] = 0.85 + tone * 1.05
    alpha[k] = 0.5 + 0.5 * Math.min(1, tone * 1.3)
  }
  return form
}
