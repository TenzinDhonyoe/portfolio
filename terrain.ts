// A Himalayan massif as a stipple, laid out after a photo of one: a tall
// main peak with a shoulder on its left, a ridge running off to a smaller
// summit on the right, a dark rocky mountain in front on the left and low
// forested hills in the foreground.
//
// The terrain is a heightfield: a crest of pointed summits falling toward
// the viewer, plus a few hills in front, carved by ridged noise into flutes
// and gullies. Each visible patch gets a tone from light and
// material (snow above a ragged snowline, bare rock where it's too steep to
// hold snow, dark forest low down), and dots land in proportion to tone like
// the portrait: ink where the photo would be dark for a light page, light
// where it would be bright for a dark one.

import { clamp01, emptyCloud, rng, smooth } from './particle-kit/src/index.ts'
import type { Form } from './shapeshift.ts'

// ---- Noise ----------------------------------------------------------------------------

function gradientNoise(seed: number) {
  const r = rng(seed)
  const perm = new Uint8Array(512)
  const p = Array.from({ length: 256 }, (_, i) => i)
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(r() * (i + 1))
    ;[p[i], p[j]] = [p[j], p[i]]
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]
  const grad = (h: number, x: number, y: number) => {
    const a = (h / 256) * Math.PI * 2
    return Math.cos(a) * x + Math.sin(a) * y
  }
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
  return (x: number, y: number) => {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const xf = x - xi
    const yf = y - yi
    const X = xi & 255
    const Y = yi & 255
    const aa = perm[perm[X] + Y]
    const ab = perm[perm[X] + Y + 1]
    const ba = perm[perm[X + 1] + Y]
    const bb = perm[perm[X + 1] + Y + 1]
    const u = fade(xf)
    const v = fade(yf)
    const x1 = grad(aa, xf, yf) + (grad(ba, xf - 1, yf) - grad(aa, xf, yf)) * u
    const x2 = grad(ab, xf, yf - 1) + (grad(bb, xf - 1, yf - 1) - grad(ab, xf, yf - 1)) * u
    return (x1 + (x2 - x1) * v) * 1.4 // roughly -1..1
  }
}

// ---- The massif -----------------------------------------------------------------------

// The main range: summits along one crest, joined by high saddles.
// [x, height, width of falloff]; pointed because the falloff is exponential.
const SUMMITS: [number, number, number][] = [
  [-0.38, 0.96, 0.32], // the left shoulder
  [0.08, 1.3, 0.38], // the main summit
  [0.6, 0.86, 0.36], // the ridge running right
  [1.02, 0.8, 0.26], // a smaller summit at the end
]
const CREST_Z = 0.36

// Separate masses in front: [x, z, height, radius x, radius z].
const HILLS: [number, number, number, number, number][] = [
  [-1.08, -0.04, 1.0, 0.36, 0.42], // dark rock, front left
  [0.98, -0.24, 0.5, 0.5, 0.36], // forested hill, front right
  [-0.5, -0.38, 0.28, 0.5, 0.3], // low hills in front
]

const X0 = -1.2
const X1 = 1.2
const Z0 = -0.58
const Z1 = 0.7
const GX = 260
const GZ = 140

export function himalaya(n: number, { dark = false, seed = 7, base = 0.5, pitch = 0.2 } = {}): Form {
  const noise = gradientNoise(seed)
  const noise2 = gradientNoise(seed + 1)
  const ridged = (x: number, z: number) => {
    let sum = 0
    let amp = 0.55
    let f = 3.2
    for (let o = 0; o < 5; o++) {
      const v = 1 - Math.abs(noise(x * f + o * 13.1, z * f - o * 7.7))
      sum += v * v * amp
      amp *= 0.5
      f *= 2.05
    }
    return sum // about 0..1
  }
  const crest = (x: number) => {
    let h = 0
    for (const [sx, sh, sw] of SUMMITS) h = Math.max(h, sh * Math.exp(-Math.abs(x - sx) / sw))
    // Serrate the crest, so ridgelines break into rock teeth like the real thing.
    const jag = 1 + 0.07 * noise2(x * 9, 3.3) + 0.035 * noise2(x * 24, 7.1)
    return h * jag * smooth(-0.95, -0.55, x)
  }
  const height = (x: number, z: number) => {
    // The range falls away toward the viewer from its crest.
    const c = crest(x)
    let macro = c * Math.pow(Math.max(0, 1 - Math.abs(z - CREST_Z) / 0.85), 1.25)
    for (const [hx, hz, hh, rx, rz] of HILLS) {
      const d = Math.hypot((x - hx) / rx, (z - hz) / rz)
      macro = Math.max(macro, hh * Math.pow(Math.max(0, 1 - d), 1.45))
    }
    // Flutes and gullies running down the faces: noise that changes fast
    // across the slope and slowly down it.
    const flutes = ridged(x * 1.5, z * 0.5)
    return macro * (0.7 + 0.44 * flutes) + 0.012 * noise2(x * 22, z * 22)
  }

  // Heights on a grid.
  const dx = (X1 - X0) / (GX - 1)
  const dz = (Z1 - Z0) / (GZ - 1)
  const H = new Float32Array(GX * GZ)
  for (let j = 0; j < GZ; j++) for (let i = 0; i < GX; i++) H[j * GX + i] = height(X0 + i * dx, Z0 + j * dz)

  // Light from the upper left, slightly toward the viewer (x right, up, z away).
  const L = [-0.62, 0.66, -0.42]
  const Ll = Math.hypot(L[0], L[1], L[2])
  const cp = Math.cos(pitch)
  const sp = Math.sin(pitch)

  const weight = new Float32Array(GX * GZ)
  const tone = new Float32Array(GX * GZ)
  // Silhouette: for each column, the cell that tops the view.
  const skyZ = new Int32Array(GX).fill(-1)
  for (let i = 1; i < GX - 1; i++) {
    let horizon = -Infinity
    for (let j = 1; j < GZ - 1; j++) {
      const k = j * GX + i
      const h = H[k]
      // How high it sits on screen, seen from slightly above: farther rises a little.
      const screen = h * cp + (Z0 + j * dz) * sp
      const visible = screen > horizon + 0.002
      if (screen > horizon) {
        horizon = screen
        if (h > 0.05) skyZ[i] = j
      }
      if (!visible || h < 0.012) continue
      const gx = (H[k + 1] - H[k - 1]) / (2 * dx)
      const gz = (H[k + GX] - H[k - GX]) / (2 * dz)
      const nl = Math.hypot(gx, 1, gz)
      const diffuse = clamp01((-gx * L[0] + 1 * L[1] - gz * L[2]) / (nl * Ll))
      const slope = Math.hypot(gx, gz)
      const x = X0 + i * dx
      const z = Z0 + j * dz
      // Snow above a ragged snowline, except on faces too steep to hold it.
      const line = 0.46 + 0.12 * noise2(x * 3, z * 3)
      // (Heights are exaggerated, so "too steep" is steep indeed.)
      const snow = smooth(line - 0.04, line + 0.1, h) * (1 - smooth(4.5, 7, slope))
      const rockT = 0.5 + 0.45 * (1 - diffuse)
      const snowT = 0.08 + 0.6 * Math.pow(1 - diffuse, 1.3)
      // Gullies hold shadow: darker where the flutes dip.
      const gully = 0.5 - ridged(x * 1.5, z * 0.5)
      let t = clamp01(rockT + (snowT - rockT) * snow + gully * 0.35)
      // Forest low in the foreground: dark, clumpy.
      const forest = (1 - smooth(0.12, 0.34, h)) * smooth(0.1, -0.2, z)
      t += (0.78 + 0.18 * noise(x * 26, z * 26) - t) * forest
      const ink = dark ? 1 - t : t
      tone[k] = ink
      weight[k] = Math.pow(ink, 1.5) + 0.015
    }
  }

  const form: Form = emptyCloud(n)
  const size = new Float32Array(n)
  const alpha = new Float32Array(n)
  form.s = size
  form.a = alpha
  const r = rng(seed + 2)

  // 10% of the dots trace the skyline, the rest stipple the faces.
  const skyN = Math.round(n * 0.1)
  const cols: number[] = []
  for (let i = 0; i < GX; i++) if (skyZ[i] >= 0) cols.push(i)
  const place = (k: number, x: number, h: number, z: number, t: number) => {
    form.x[k] = x
    form.y[k] = base - h
    form.z[k] = z
    form.c[k] = t > 0.62 ? 0 : t > 0.32 ? 1 : 2
    size[k] = 0.85 + t * 1.15
    alpha[k] = 0.45 + 0.55 * t
  }
  for (let k = 0; k < skyN; k++) {
    const f = (k + r()) / skyN
    const i = cols[Math.min(cols.length - 1, Math.floor(f * cols.length))]
    const j = skyZ[i]
    const x = X0 + (i + r() - 0.5) * dx
    place(k, x, H[j * GX + i] + (r() - 0.5) * 0.006, Z0 + j * dz, 0.9)
  }

  // Stratified picks through the cumulative weight.
  const cdf = new Float32Array(GX * GZ)
  let total = 0
  for (let k = 0; k < GX * GZ; k++) cdf[k] = total += weight[k]
  const rest = n - skyN
  const step = total / rest
  let c = 0
  for (let m = 0; m < rest; m++) {
    const target = (m + r()) * step
    while (c < GX * GZ - 1 && cdf[c] < target) c++
    const i = c % GX
    const j = Math.floor(c / GX)
    const fx = r() - 0.5
    const fz = r() - 0.5
    const x = X0 + (i + fx) * dx
    const z = Z0 + (j + fz) * dz
    place(skyN + m, x, height(x, z), z, tone[c])
  }
  return form
}
