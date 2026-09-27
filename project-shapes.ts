// One dot figure per project, all in the kit's units (roughly -1..1, y down,
// z away). Figures are assembled from simple parts (lines, shells, boxes,
// discs), each taking a share of the dots. Palette: 0 ink, 1 graphite, 2 gray.

import { helix, rng } from './particle-kit/src/index.ts'
import { build, inBall, lerp, onBoxEdges, onBoxSurface, onLine, onRoundRect, onShell, type Rand, type V } from './parts.ts'
import type { Figure } from './shapeshift.ts'

// ---- Figures ------------------------------------------------------------------

/** 0risk.ai: a knee joint with a replacement (femoral and tibial components in ink). */
function knee(n: number): Figure {
  const femur = (y: number) => lerp(0.12, 0.2, Math.max(0, (y + 1) / 0.72) ** 2)
  const tibia = (y: number) => lerp(0.22, 0.11, Math.min(1, Math.max(0, (y - 0.08) / 0.32)) ** 0.7)
  const form = build(n, 31, [
    {
      share: 0.2,
      color: 1,
      at(r, _u, o) {
        const y = lerp(-1, -0.3, r())
        const a = r() * Math.PI * 2
        o.splice(0, 3, Math.cos(a) * femur(y), y, Math.sin(a) * femur(y))
      },
    },
    { share: 0.1, color: 0, size: 1.9, at: (r, _u, o) => onShell(r, [-0.12, -0.2, 0.02], [0.13, 0.13, 0.19], o) },
    { share: 0.1, color: 0, size: 1.9, at: (r, _u, o) => onShell(r, [0.12, -0.2, 0.02], [0.13, 0.13, 0.19], o) },
    {
      // Tibial tray: a flat disc, top and bottom faces plus its rim.
      share: 0.13,
      color: 0,
      size: 1.9,
      at(r, _u, o) {
        const a = r() * Math.PI * 2
        const rim = r() < 0.3
        const k = rim ? 1 : Math.sqrt(r())
        o.splice(0, 3, Math.cos(a) * 0.3 * k, rim ? lerp(-0.035, 0.035, r()) : r() < 0.5 ? -0.035 : 0.035, Math.sin(a) * 0.22 * k)
        o[1] += 0.02
      },
    },
    {
      share: 0.26,
      color: 1,
      at(r, _u, o) {
        const y = lerp(0.07, 1, r())
        const a = r() * Math.PI * 2
        o.splice(0, 3, Math.cos(a) * tibia(y), y, Math.sin(a) * tibia(y) * 0.9)
      },
    },
    {
      share: 0.07,
      color: 2,
      at(r, u, o) {
        const a = r() * Math.PI * 2
        o.splice(0, 3, 0.25 + Math.cos(a) * 0.04, lerp(0.16, 0.96, u), 0.08 + Math.sin(a) * 0.04)
      },
    },
    { share: 0.06, color: 1, at: (r, _u, o) => onShell(r, [0, -0.2, -0.27], [0.1, 0.13, 0.05], o) },
  ])
  return { form, spin: 0.04, pitch: 0.12 }
}

/** Mobile QA Engine: a phone running a test suite, every row checked off. */
function phone(n: number): Figure {
  const W = 0.5
  const H = 0.98
  const D = 0.055
  const rows = [-0.42, -0.2, 0.02, 0.24, 0.46]
  const lens = [0.46, 0.34, 0.5, 0.28, 0.4]
  const form = build(n, 41, [
    { share: 0.15, color: 0, at: (_r, u, o) => (onRoundRect(W, H, 0.14, u, o), (o[2] = -D)) },
    { share: 0.07, color: 1, at: (_r, u, o) => (onRoundRect(W, H, 0.14, u, o), (o[2] = D)) },
    { share: 0.07, color: 2, at: (r, u, o) => (onRoundRect(W, H, 0.14, u, o), (o[2] = lerp(-D, D, r()))) },
    { share: 0.05, color: 2, at: (_r, u, o) => (onRoundRect(W - 0.05, H - 0.05, 0.1, u, o), (o[2] = -D)) },
    {
      // The island.
      share: 0.025,
      color: 0,
      at(r, _u, o) {
        o.splice(0, 3, lerp(-0.1, 0.1, r()), -0.86 + lerp(-0.022, 0.022, r()), -D)
      },
    },
    {
      // Title line.
      share: 0.04,
      color: 0,
      size: 2,
      at(r, u, o) {
        o.splice(0, 3, lerp(-0.36, 0.06, u), -0.66 + (r() - 0.5) * 0.03, -D)
      },
    },
    {
      // A check in a circle at the start of each row.
      share: 0.2,
      color: 0,
      size: 1.9,
      at(r, u, o) {
        const row = rows[Math.min(4, Math.floor(u * 5))]
        const cx = -0.33
        if (r() < 0.55) {
          const a = r() * Math.PI * 2
          o.splice(0, 3, cx + Math.cos(a) * 0.06, row + Math.sin(a) * 0.06, -D)
        } else {
          const t = r()
          const p: V = t < 0.35 ? [cx - 0.03 + (t / 0.35) * 0.022, row + (t / 0.35) * 0.025, -D] : [cx - 0.008 + ((t - 0.35) / 0.65) * 0.045, row + 0.025 - ((t - 0.35) / 0.65) * 0.055, -D]
          o.splice(0, 3, p[0], p[1], p[2])
        }
      },
    },
    {
      // Each row's label and a fainter detail line under it.
      share: 0.24,
      color: 1,
      at(r, u, o) {
        const k = Math.min(4, Math.floor(u * 5))
        const sub = r() < 0.4
        const len = sub ? lens[k] * 0.6 : lens[k]
        o.splice(0, 3, lerp(-0.2, -0.2 + len, r()), rows[k] + (sub ? 0.045 : -0.02) + (r() - 0.5) * 0.02, -D)
      },
    },
    {
      // A filled "run" button at the bottom.
      share: 0.1,
      color: 0,
      at(r, _u, o) {
        o.splice(0, 3, lerp(-0.34, 0.34, r()), 0.74 + lerp(-0.055, 0.055, r()), -D)
      },
    },
  ])
  return { form, sway: 0.55, pitch: -0.08 }
}

/** Tumor detection: a brain in gray, a dense mass in ink, a bounding box around it. */
function brain(n: number): Figure {
  const tumor: V = [0.4, -0.26, -0.42]
  const hemisphere = (side: number) => (r: Rand, _u: number, o: V) => {
    // Most dots trace thin wavy contours (the folds); the rest fill the surface.
    const fold = r() < 0.7
    for (let tries = 0; tries < 40; tries++) {
      onShell(r, [side * 0.36, 0, 0], [0.36, 0.56, 0.92], o)
      const band = Math.sin(o[2] * 15 + Math.sin(o[1] * 9 + o[0] * 6) * 2.6 + o[1] * 7)
      if (!fold || Math.abs(band) < 0.22) {
        const k = 1 + Math.cos(band * 1.5) * 0.03
        o[0] = side * 0.36 + (o[0] - side * 0.36) * k
        o[1] *= k
        o[2] *= k
        break
      }
    }
    if (o[1] > 0.3) o[1] = 0.3 + (o[1] - 0.3) * 0.45
  }
  const form = build(n, 51, [
    { share: 0.32, color: 1, at: hemisphere(-1) },
    { share: 0.32, color: 1, at: hemisphere(1) },
    {
      share: 0.08,
      color: 2,
      at(r, _u, o) {
        for (let tries = 0; tries < 12; tries++) {
          onShell(r, [0, 0.42, 0.62], [0.42, 0.18, 0.26], o)
          if (Math.sin(o[1] * 70) > -0.2) break
        }
      },
    },
    {
      share: 0.05,
      color: 2,
      at(r, _u, o) {
        const a = r() * Math.PI * 2
        o.splice(0, 3, Math.cos(a) * 0.1, lerp(0.35, 0.95, r()), 0.34 + Math.sin(a) * 0.1)
      },
    },
    { share: 0.12, color: 0, size: 2.1, at: (r, _u, o) => inBall(r, tumor, 0.15, o) },
    { share: 0.11, color: 0, size: 1.6, at: (r, u, o) => onBoxEdges(tumor, [0.25, 0.25, 0.25], u, o, r) },
  ])
  return { form, spin: 0.035, pitch: 0.18 }
}

/** ML trading bot: a rising candlestick chart with a moving average. */
function candles(n: number): Figure {
  const r0 = rng(61)
  const count = 13
  const price: number[] = [0]
  for (let i = 1; i <= count; i++) price.push(price[i - 1] + (r0() - 0.36) * 1.1)
  const lo = Math.min(...price) - 0.5
  const hi = Math.max(...price) + 0.5
  const Y = (p: number) => lerp(0.72, -0.8, (p - lo) / (hi - lo))
  const X = (i: number) => lerp(-0.92, 0.92, i / (count - 1))
  const bars = Array.from({ length: count }, (_, i) => {
    const open = price[i]
    const close = price[i + 1]
    const high = Math.max(open, close) + r0() * 0.45
    const low = Math.min(open, close) - r0() * 0.45
    return { x: X(i), open: Y(open), close: Y(close), high: Y(high), low: Y(low), up: close > open }
  })
  const area = bars.map((b) => Math.max(0.04, Math.abs(b.open - b.close)))
  const areaSum = area.reduce((s, a) => s + a, 0)
  const pickBar = (u: number) => {
    let d = u * areaSum
    let i = 0
    while (i < count - 1 && d > area[i]) d -= area[i++]
    return bars[i]
  }
  const ma = (x: number) => {
    // A smooth line through the closes (Catmull-Rom).
    const f = ((x + 0.92) / 1.84) * (count - 1)
    const i = Math.max(0, Math.min(count - 2, Math.floor(f)))
    const t = f - i
    const p = (k: number) => bars[Math.max(0, Math.min(count - 1, k))]
    const c = (k: number) => (p(k).open + p(k).close) / 2
    const [a, b, cc, d] = [c(i - 1), c(i), c(i + 1), c(i + 2)]
    return 0.5 * (2 * b + (-a + cc) * t + (2 * a - 5 * b + 4 * cc - d) * t * t + (-a + 3 * b - 3 * cc + d) * t * t * t)
  }
  const form = build(n, 62, [
    {
      share: 0.58,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        const b = pickBar(u)
        const top = Math.min(b.open, b.close)
        const h = Math.max(0.012, Math.abs(b.open - b.close) / 2)
        // Up candles are solid, down candles hollow.
        if (b.up) onBoxSurface(r, [b.x, top + h, 0], [0.045, h, 0.045], o)
        else onBoxEdges([b.x, top + h, 0], [0.045, h, 0.045], r(), o, r)
      },
    },
    {
      share: 0.14,
      color: 1,
      at(r, u, o) {
        const b = bars[Math.min(count - 1, Math.floor(u * count))]
        onLine([b.x, b.high, 0], [b.x, b.low, 0], r(), o, r, 0.006)
      },
    },
    {
      share: 0.16,
      color: 2,
      at(r, u, o) {
        const x = lerp(-0.92, 0.92, u)
        o.splice(0, 3, x, ma(x) + (r() - 0.5) * 0.012, 0.16)
      },
    },
    {
      share: 0.12,
      color: 2,
      size: 1.3,
      at(r, u, o) {
        o.splice(0, 3, lerp(-1.02, 1.02, u), 0.84 + (r() - 0.5) * 0.006, (r() - 0.5) * 0.04)
      },
    },
  ])
  return { form, sway: 0.5, pitch: 0.14 }
}

/** ML gym app: a pose-estimation skeleton doing barbell squats. */
function squat(n: number): Figure {
  type Pose = Record<string, V>
  const stand: Pose = {
    head: [0, -0.8, 0],
    neck: [0, -0.62, 0],
    ls: [-0.24, -0.54, 0],
    rs: [0.24, -0.54, 0],
    le: [-0.44, -0.4, 0.1],
    re: [0.44, -0.4, 0.1],
    lh: [-0.36, -0.58, 0.07],
    rh: [0.36, -0.58, 0.07],
    pelvis: [0, 0.04, 0],
    lp: [-0.14, 0.06, 0],
    rp: [0.14, 0.06, 0],
    lk: [-0.17, 0.5, -0.02],
    rk: [0.17, 0.5, -0.02],
    la: [-0.18, 0.92, 0],
    ra: [0.18, 0.92, 0],
    lt: [-0.22, 0.96, -0.14],
    rt: [0.22, 0.96, -0.14],
  }
  const drop = 0.36
  const low: Pose = Object.fromEntries(
    Object.entries(stand).map(([k, [x, y, z]]) => {
      if (k === 'la' || k === 'ra' || k === 'lt' || k === 'rt') return [k, [x, y, z]]
      if (k === 'lk' || k === 'rk') return [k, [x * 1.9, y + 0.02, z - 0.24]]
      if (k === 'lp' || k === 'rp' || k === 'pelvis') return [k, [x * 1.1, y + drop + 0.04, z + 0.22]]
      return [k, [x, y + drop, z + 0.12]]
    })
  ) as Pose
  const bones: [string, string][] = [
    ['neck', 'pelvis'], ['ls', 'rs'], ['ls', 'le'], ['le', 'lh'], ['rs', 're'], ['re', 'rh'],
    ['lp', 'rp'], ['lp', 'lk'], ['lk', 'la'], ['rp', 'rk'], ['rk', 'ra'], ['la', 'lt'], ['ra', 'rt'],
  ]
  const joints = ['ls', 'rs', 'le', 're', 'lh', 'rh', 'lp', 'rp', 'lk', 'rk', 'la', 'ra', 'neck']
  const figure = (P: Pose) =>
    build(n, 71, [
      {
        share: 0.34,
        color: 1,
        at(r, u, o) {
          const [a, b] = bones[Math.min(bones.length - 1, Math.floor(u * bones.length))]
          onLine(P[a], P[b], r(), o, r, 0.014)
        },
      },
      {
        share: 0.2,
        color: 0,
        size: 1.9,
        at(r, u, o) {
          const j = P[joints[Math.min(joints.length - 1, Math.floor(u * joints.length))]]
          onShell(r, j, [0.04, 0.04, 0.04], o)
        },
      },
      { share: 0.1, color: 1, at: (r, _u, o) => onShell(r, P.head, [0.11, 0.13, 0.11], o) },
      {
        share: 0.12,
        color: 1,
        at(r, u, o) {
          const y = (P.lh[1] + P.rh[1]) / 2
          const z = P.lh[2] + 0.02
          onLine([-0.95, y, z], [0.95, y, z], u, o, r, 0.012)
        },
      },
      {
        // Two plates on each end.
        share: 0.24,
        color: 0,
        at(r, u, o) {
          const k = Math.min(3, Math.floor(u * 4))
          const x = [-0.84, -0.76, 0.76, 0.84][k]
          const y = (P.lh[1] + P.rh[1]) / 2
          const z = P.lh[2] + 0.02
          const a = r() * Math.PI * 2
          const rr = r() < 0.5 ? 0.24 : 0.24 * Math.sqrt(r())
          o.splice(0, 3, x + (r() - 0.5) * 0.03, y + Math.sin(a) * rr, z + Math.cos(a) * rr)
        },
      },
    ])
  return { form: figure(stand), alt: { form: figure(low), period: 3.4 }, sway: 0.5 }
}

/** AFib detection: a heart with an irregular ECG trace running across it. */
function heart(n: number): Figure {
  // AFib: no P waves, a fibrillating baseline, irregular R-R spacing.
  const beats = [-0.86, -0.5, -0.3, 0.08, 0.26, 0.62, 0.8]
  const g = (x: number, c: number, w: number) => Math.exp(-((x - c) ** 2) / (2 * w * w))
  const ecg = (x: number) => {
    let y = Math.sin(x * 88) * 0.012 + Math.sin(x * 53 + 1) * 0.01
    for (const c of beats) y += 0.05 * g(x, c - 0.028, 0.009) - 0.46 * g(x, c, 0.011) + 0.14 * g(x, c + 0.03, 0.01) - 0.07 * g(x, c + 0.14, 0.035)
    return y + 0.06
  }
  // Even spacing along the trace, by arc length.
  const M = 2400
  const cum = new Float32Array(M)
  let len = 0
  for (let i = 1; i < M; i++) {
    const x0 = lerp(-1.15, 1.15, (i - 1) / (M - 1))
    const x1 = lerp(-1.15, 1.15, i / (M - 1))
    len += Math.hypot(x1 - x0, ecg(x1) - ecg(x0))
    cum[i] = len
  }
  const along = (u: number) => {
    const d = u * len
    let a = 0
    let b = M - 1
    while (a < b) {
      const m = (a + b) >> 1
      if (cum[m] < d) a = m + 1
      else b = m
    }
    return lerp(-1.15, 1.15, a / (M - 1))
  }
  const form = build(n, 81, [
    {
      share: 0.64,
      color: 2,
      at(r, _u, o) {
        const t = r() * Math.PI * 2
        const s = Math.sqrt(r())
        const hx = 16 * Math.sin(t) ** 3
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
        const zz = 0.32 * Math.sqrt(Math.max(0, 1 - s * s)) * (r() < 0.5 ? -1 : 1)
        o.splice(0, 3, (hx / 17) * s * 0.92, (-hy / 17) * s * 0.92 - 0.06, zz)
      },
    },
    {
      share: 0.36,
      color: 0,
      size: 2,
      at(r, u, o) {
        const x = along(u)
        o.splice(0, 3, x, ecg(x) + (r() - 0.5) * 0.012, -0.42 + (r() - 0.5) * 0.03)
      },
    },
  ])
  return { form, sway: 0.45 }
}

/** Gene sequence analysis: the kit's double helix. */
const gene = (n: number): Figure => ({ form: helix(n, { turns: 2.6, radius: 0.4, height: 1.95 }), spin: 0.06, pitch: 0.1 })

export const PROJECT_FIGURES: Record<string, (n: number) => Figure> = {
  zerisk: knee,
  mobileqa: phone,
  tumor: brain,
  trading: candles,
  gym: squat,
  afib: heart,
  gene,
}
