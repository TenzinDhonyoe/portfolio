// Point-cloud shapes for the stage. Every sampler returns `n` points in
// roughly -1..1 (y down, z away), a palette index per point and, where it
// makes sense, surface normals for shading. Seeded, so shapes are stable.

import { rng } from './rng.ts'

export type Cloud = {
  n: number
  x: Float32Array
  y: Float32Array
  z: Float32Array
  /** Palette index per point. */
  c: Uint8Array
  nx?: Float32Array
  ny?: Float32Array
  nz?: Float32Array
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

export function emptyCloud(n: number, withNormals = false): Cloud {
  const cl: Cloud = { n, x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), c: new Uint8Array(n) }
  if (withNormals) {
    cl.nx = new Float32Array(n)
    cl.ny = new Float32Array(n)
    cl.nz = new Float32Array(n)
  }
  return cl
}

/** An even sphere of dots (Fibonacci lattice). The hero orb. */
export function sphere(n: number, { color = 0, jitter = 0.05, seed = 1 } = {}): Cloud {
  const r = rng(seed)
  const cl = emptyCloud(n, true)
  for (let i = 0; i < n; i++) {
    const y = 1 - ((i + 0.5) / n) * 2
    const rr = Math.sqrt(1 - y * y)
    const th = i * GOLDEN_ANGLE
    const k = 1 + (r() - 0.5) * jitter
    cl.x[i] = Math.cos(th) * rr * k
    cl.y[i] = y * k
    cl.z[i] = Math.sin(th) * rr * k
    cl.nx![i] = Math.cos(th) * rr
    cl.ny![i] = y
    cl.nz![i] = Math.sin(th) * rr
    cl.c[i] = color
  }
  return cl
}

/**
 * A strap looped into a ring (a wristband, a bracelet, a halo): outer and
 * inner faces plus crisp rims, with an optional gap. The loop lies in the XZ
 * plane; tip it toward the viewer with `rotate(cloud, { x: 0.58 })`.
 */
export function ring(
  n: number,
  { rx = 1, rz = 0.8, height = 0.42, thickness = 0.08, gap = 0, color = 0, seed = 2 } = {}
): Cloud {
  const r = rng(seed)
  const cl = emptyCloud(n, true)
  const span = Math.PI * 2 - gap * 2
  const t0 = -Math.PI / 2 + gap
  for (let i = 0; i < n; i++) {
    const th = t0 + ((i + 0.5 + (r() - 0.5) * 0.8) / n) * span
    const c = Math.cos(th)
    const s = Math.sin(th)
    let ox = rz * c
    let oz = rx * s
    const ol = Math.hypot(ox, oz)
    ox /= ol
    oz /= ol
    // 40% outer face, 30% inner face, 30% on the two rims.
    const pick = r()
    let off: number
    let v: number
    let nOut = 0
    let nUp = 0
    if (pick < 0.4) {
      off = thickness / 2
      v = (((i * 0.618) % 1) * 2 - 1) * (height / 2)
      nOut = 1
    } else if (pick < 0.7) {
      off = -thickness / 2
      v = (((i * 0.618) % 1) * 2 - 1) * (height / 2)
      nOut = -1
    } else {
      off = (r() - 0.5) * thickness
      v = (r() < 0.5 ? -1 : 1) * (height / 2)
      nUp = Math.sign(v)
    }
    cl.x[i] = rx * c + ox * off
    cl.y[i] = v
    cl.z[i] = rz * s + oz * off
    cl.nx![i] = ox * nOut
    cl.ny![i] = nUp
    cl.nz![i] = oz * nOut
    cl.c[i] = color
  }
  return cl
}

/** A double helix with rungs, standing upright. Strands take colours 0 and 1, rungs 2. */
export function helix(n: number, { turns = 2.5, radius = 0.45, height = 2, rungs = 22, seed = 3 } = {}): Cloud {
  const r = rng(seed)
  const cl = emptyCloud(n)
  const rungDots = Math.floor(n * 0.22)
  const strand = n - rungDots
  for (let i = 0; i < strand; i++) {
    const u = (i / 2 / (strand / 2)) % 1
    const second = i % 2
    const a = u * turns * Math.PI * 2 + second * Math.PI
    const wob = (r() - 0.5) * 0.04
    cl.x[i] = Math.cos(a) * (radius + wob)
    cl.z[i] = Math.sin(a) * (radius + wob)
    cl.y[i] = (u - 0.5) * height
    cl.c[i] = second
  }
  for (let j = 0; j < rungDots; j++) {
    const i = strand + j
    const k = Math.floor(r() * rungs)
    const u = (k + 0.5) / rungs
    const a = u * turns * Math.PI * 2
    const f = r() * 2 - 1
    cl.x[i] = Math.cos(a) * radius * f
    cl.z[i] = Math.sin(a) * radius * f
    cl.y[i] = (u - 0.5) * height
    cl.c[i] = 2
  }
  return cl
}

/**
 * Text as dots: renders `str` offscreen and samples the filled pixels. Great
 * as a scroll target (a name, a word). Width is 2 units; height follows.
 */
export function text(
  n: number,
  str: string,
  { font = '700 180px system-ui, sans-serif', color = 0, depth = 0.08, seed = 4 } = {}
): Cloud {
  const r = rng(seed)
  const cv = document.createElement('canvas')
  const ctx = cv.getContext('2d', { willReadFrequently: true })!
  ctx.font = font
  const m = ctx.measureText(str)
  const W = Math.ceil(m.width) + 20
  const H = Math.ceil((m.actualBoundingBoxAscent || 150) + (m.actualBoundingBoxDescent || 40)) + 20
  cv.width = W
  cv.height = H
  ctx.font = font
  ctx.fillStyle = '#000'
  ctx.textBaseline = 'alphabetic'
  ctx.fillText(str, 10, 10 + (m.actualBoundingBoxAscent || 150))
  const data = ctx.getImageData(0, 0, W, H).data
  const filled: number[] = []
  for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (data[(y * W + x) * 4 + 3] > 128) filled.push(x, y)
  const cl = emptyCloud(n)
  const count = filled.length / 2
  const scale = 2 / W
  for (let i = 0; i < n; i++) {
    const k = Math.floor(r() * count) * 2
    cl.x[i] = (filled[k] + r() * 2 - W / 2) * scale
    cl.y[i] = (filled[k + 1] + r() * 2 - H / 2) * scale
    cl.z[i] = (r() - 0.5) * depth
    cl.c[i] = color
  }
  return cl
}

type Atom = { p: [number, number, number]; color: number; r: number }

/** A ball-and-stick molecule: dotted atom shells plus dotted bonds. */
export function molecule(n: number, atoms: Atom[], bonds: [number, number][], { seed = 5, atomShare = 0.58 } = {}): Cloud {
  const r = rng(seed)
  const cl = emptyCloud(n)
  const atomDots = Math.round(n * atomShare)
  const totalR = atoms.reduce((s, a) => s + a.r, 0)
  const lens = bonds.map(([a, b]) => Math.hypot(...atoms[a].p.map((v, k) => v - atoms[b].p[k])))
  const totalLen = lens.reduce((s, l) => s + l, 0)
  let i = 0
  atoms.forEach((a, ai) => {
    const k = ai === atoms.length - 1 ? atomDots - i : Math.round((atomDots * a.r) / totalR)
    for (let j = 0; j < k && i < atomDots; j++, i++) {
      const y = 1 - ((j + 0.5) / k) * 2
      const rr = Math.sqrt(1 - y * y)
      const th = j * GOLDEN_ANGLE
      const rad = a.r * (0.85 + r() * 0.15)
      cl.x[i] = a.p[0] + Math.cos(th) * rr * rad
      cl.y[i] = a.p[1] + y * rad
      cl.z[i] = a.p[2] + Math.sin(th) * rr * rad
      cl.c[i] = a.color
    }
  })
  bonds.forEach(([ia, ib], bi) => {
    const A = atoms[ia]
    const B = atoms[ib]
    const k = bi === bonds.length - 1 ? n - i : Math.round(((n - atomDots) * lens[bi]) / totalLen)
    const t0 = A.r / lens[bi]
    const t1 = 1 - B.r / lens[bi]
    for (let j = 0; j < k && i < n; j++, i++) {
      const t = t0 + (t1 - t0) * ((j + r()) / k)
      for (let d = 0; d < 3; d++) {
        const key = (['x', 'y', 'z'] as const)[d]
        cl[key][i] = A.p[d] + (B.p[d] - A.p[d]) * t + (r() - 0.5) * 0.02
      }
      cl.c[i] = t < 0.5 ? A.color : B.color
    }
  })
  return cl
}

/**
 * β-D-glucose in its chair form (6 C, 6 O, 12 H), unit radius. Colours:
 * oxygen 0 (accent), carbon 1 (ink), hydrogen 2 (gray).
 */
export function glucose(n: number, seed = 6): Cloud {
  const atoms: Atom[] = []
  const bonds: [number, number][] = []
  const add = (p: [number, number, number], el: 'C' | 'O' | 'H') =>
    atoms.push({ p, color: el === 'O' ? 0 : el === 'C' ? 1 : 2, r: el === 'H' ? 0.2 : el === 'O' ? 0.38 : 0.36 }) - 1
  const plus = (a: number[], b: number[]): [number, number, number] => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  const ring: number[] = []
  const els = ['O', 'C', 'C', 'C', 'C', 'C'] as const
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3
    ring.push(add([Math.cos(a) * 1.45, Math.sin(a) * 1.45, i % 2 ? -0.25 : 0.25], els[i]))
  }
  for (let i = 0; i < 6; i++) bonds.push([ring[i], ring[(i + 1) % 6]])
  const dir = (i: number) => [Math.cos((i * Math.PI) / 3), Math.sin((i * Math.PI) / 3)]
  for (let i = 1; i <= 4; i++) {
    const c = atoms[ring[i]].p
    const [rx, ry] = dir(i)
    const zs = i % 2 === 0 ? 1 : -1
    const o = add(plus(c, [rx * 1.35, ry * 1.35, -zs * 0.35]), 'O')
    bonds.push([ring[i], o])
    bonds.push([o, add(plus(atoms[o].p, [rx * 0.6 - ry * 0.55, ry * 0.6 + rx * 0.55, -zs * 0.3]), 'H')])
    bonds.push([ring[i], add(plus(c, [0, 0, zs * 1.05]), 'H')])
  }
  {
    const c = atoms[ring[5]].p
    const [rx, ry] = dir(5)
    const c6 = add(plus(c, [rx * 1.45, ry * 1.45, 0.35]), 'C')
    bonds.push([ring[5], c6], [ring[5], add(plus(c, [0, 0, -1.05]), 'H')])
    const p6 = atoms[c6].p
    const o6 = add(plus(p6, [rx * 0.75 - ry * 0.95, ry * 0.75 + rx * 0.95, 0.35]), 'O')
    bonds.push([c6, o6], [o6, add(plus(atoms[o6].p, [rx * 0.8, ry * 0.8, 0.45]), 'H')])
    bonds.push([c6, add(plus(p6, [rx * 0.35 + ry * 0.6, ry * 0.35 - rx * 0.6, 0.85]), 'H')])
    bonds.push([c6, add(plus(p6, [rx * 0.35 + ry * 0.5, ry * 0.35 - rx * 0.5, -0.9]), 'H')])
  }
  // Centre, scale to unit radius, tip back so it reads as a chair.
  const mean = [0, 1, 2].map((k) => atoms.reduce((s, a) => s + a.p[k], 0) / atoms.length)
  let max = 0
  for (const a of atoms) {
    a.p = [a.p[0] - mean[0], a.p[1] - mean[1], a.p[2] - mean[2]]
    max = Math.max(max, Math.hypot(...a.p))
  }
  const ct = Math.cos(-1.05)
  const st = Math.sin(-1.05)
  for (const a of atoms) {
    const [x, y, z] = a.p.map((v) => v / max)
    a.p = [x, y * ct - z * st, y * st + z * ct]
    a.r /= max
  }
  return molecule(n, atoms, bonds, { seed })
}

/** Rotate a cloud (and its normals) in place: about X, then Y, then Z. */
export function rotate(cl: Cloud, { x = 0, y = 0, z = 0 }: { x?: number; y?: number; z?: number }): Cloud {
  const turn = (ax: Float32Array, ay: Float32Array, az: Float32Array) => {
    for (let i = 0; i < cl.n; i++) {
      let px = ax[i]
      let py = ay[i]
      let pz = az[i]
      let t = py * Math.cos(x) - pz * Math.sin(x)
      pz = py * Math.sin(x) + pz * Math.cos(x)
      py = t
      t = px * Math.cos(y) - pz * Math.sin(y)
      pz = px * Math.sin(y) + pz * Math.cos(y)
      px = t
      t = px * Math.cos(z) - py * Math.sin(z)
      py = px * Math.sin(z) + py * Math.cos(z)
      px = t
      ax[i] = px
      ay[i] = py
      az[i] = pz
    }
  }
  turn(cl.x, cl.y, cl.z)
  if (cl.nx && cl.ny && cl.nz) turn(cl.nx, cl.ny, cl.nz)
  return cl
}

/** Scale a cloud in place. */
export function scale(cl: Cloud, k: number): Cloud {
  for (let i = 0; i < cl.n; i++) {
    cl.x[i] *= k
    cl.y[i] *= k
    cl.z[i] *= k
  }
  return cl
}
