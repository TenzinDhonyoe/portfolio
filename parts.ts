// Building blocks for dot figures: share `n` dots among parts, and a few
// primitives (lines, shells, balls, boxes, rounded rectangles) that place a
// dot on a shape. Units are the kit's: roughly -1..1, y down, z away.

import { emptyCloud, rng } from './particle-kit/src/index.ts'
import type { Form } from './shapeshift.ts'

export type V = [number, number, number]
export type Rand = () => number
/** A part of a figure: its share of the dots, and where dot `i` (the `u`-th of the part, 0–1) goes. */
export type Part = { share: number; color: number; size?: number; at: (r: Rand, u: number, out: V, i: number) => void }

/** Share `n` dots among parts and let each place its own. */
export function build(n: number, seed: number, parts: Part[]): Form {
  const r = rng(seed)
  const size = new Float32Array(n)
  const form: Form = { ...emptyCloud(n), s: size }
  const total = parts.reduce((s, p) => s + p.share, 0)
  const out: V = [0, 0, 0]
  let i = 0
  parts.forEach((p, pi) => {
    const k = pi === parts.length - 1 ? n - i : Math.round((n * p.share) / total)
    for (let j = 0; j < k && i < n; j++, i++) {
      p.at(r, (j + 0.5) / k, out, i)
      form.x[i] = out[0]
      form.y[i] = out[1]
      form.z[i] = out[2]
      form.c[i] = p.color
      size[i] = (p.size ?? 1.7) * (0.85 + r() * 0.35)
    }
  })
  return form
}

// ---- Primitives -------------------------------------------------------------

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export function onLine(a: V, b: V, t: number, out: V, r: Rand, jitter = 0.01) {
  out[0] = lerp(a[0], b[0], t) + (r() - 0.5) * jitter
  out[1] = lerp(a[1], b[1], t) + (r() - 0.5) * jitter
  out[2] = lerp(a[2], b[2], t) + (r() - 0.5) * jitter
}

/** A random point on an ellipsoid's surface. */
export function onShell(r: Rand, c: V, rad: V, out: V) {
  const y = r() * 2 - 1
  const a = r() * Math.PI * 2
  const q = Math.sqrt(1 - y * y)
  out[0] = c[0] + Math.cos(a) * q * rad[0]
  out[1] = c[1] + y * rad[1]
  out[2] = c[2] + Math.sin(a) * q * rad[2]
}

/** A random point inside a ball (denser toward the middle). */
export function inBall(r: Rand, c: V, rad: number, out: V) {
  onShell(r, c, [rad, rad, rad], out)
  const k = Math.pow(r(), 0.6)
  out[0] = c[0] + (out[0] - c[0]) * k
  out[1] = c[1] + (out[1] - c[1]) * k
  out[2] = c[2] + (out[2] - c[2]) * k
}

/** A point along the 12 edges of an axis-aligned box, evenly by `u`. */
export function onBoxEdges(c: V, h: V, u: number, out: V, r: Rand) {
  const lens = [h[0], h[0], h[0], h[0], h[1], h[1], h[1], h[1], h[2], h[2], h[2], h[2]]
  const sum = lens.reduce((s, l) => s + l, 0)
  let d = u * sum
  let e = 0
  while (e < 11 && d > lens[e]) d -= lens[e++]
  const t = (d / lens[e]) * 2 - 1
  const s1 = e & 1 ? 1 : -1
  const s2 = e & 2 ? 1 : -1
  const axis = e >> 2
  const p: V = [0, 0, 0]
  if (axis === 0) p.splice(0, 3, t * h[0], s1 * h[1], s2 * h[2])
  if (axis === 1) p.splice(0, 3, s1 * h[0], t * h[1], s2 * h[2])
  if (axis === 2) p.splice(0, 3, s1 * h[0], s2 * h[1], t * h[2])
  out[0] = c[0] + p[0] + (r() - 0.5) * 0.008
  out[1] = c[1] + p[1] + (r() - 0.5) * 0.008
  out[2] = c[2] + p[2] + (r() - 0.5) * 0.008
}

/** A random point on the surface of an axis-aligned box, even by area. */
export function onBoxSurface(r: Rand, c: V, h: V, out: V) {
  const areas = [h[1] * h[2], h[0] * h[2], h[0] * h[1]]
  const pick = r() * (areas[0] + areas[1] + areas[2])
  const face = pick < areas[0] ? 0 : pick < areas[0] + areas[1] ? 1 : 2
  const s = r() < 0.5 ? -1 : 1
  for (let k = 0; k < 3; k++) out[k] = c[k] + (k === face ? s * h[k] : (r() * 2 - 1) * h[k])
}

/** A point on a rounded rectangle's outline (in x/y), evenly by `u`. */
export function onRoundRect(w: number, h: number, rad: number, u: number, out: V) {
  const sw = 2 * (w - rad)
  const sh = 2 * (h - rad)
  const arc = (Math.PI / 2) * rad
  const segs = [sw, arc, sh, arc, sw, arc, sh, arc]
  let d = u * segs.reduce((s, l) => s + l, 0)
  let k = 0
  while (k < 7 && d > segs[k]) d -= segs[k++]
  const corner = (cx: number, cy: number, a0: number) => {
    const a = a0 + (d / arc) * (Math.PI / 2)
    out[0] = cx + Math.cos(a) * rad
    out[1] = cy + Math.sin(a) * rad
  }
  if (k === 0) (out[0] = -w + rad + d), (out[1] = -h)
  else if (k === 1) corner(w - rad, -h + rad, -Math.PI / 2)
  else if (k === 2) (out[0] = w), (out[1] = -h + rad + d)
  else if (k === 3) corner(w - rad, h - rad, 0)
  else if (k === 4) (out[0] = w - rad - d), (out[1] = h)
  else if (k === 5) corner(-w + rad, h - rad, Math.PI / 2)
  else if (k === 6) (out[0] = -w), (out[1] = h - rad - d)
  else corner(-w + rad, -h + rad, Math.PI)
}
