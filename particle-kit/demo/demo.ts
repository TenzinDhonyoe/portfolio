import {
  glucose,
  helix,
  isDark,
  morphScene,
  mountStage,
  onTrackScroll,
  ring,
  rotate,
  setTheme,
  smooth,
  sphere,
  text,
  themedPalette,
  trackProgress,
  type Scene,
} from '../src/index.ts'

// One accent, with a brighter twin for dark mode.
const palette = themedPalette('#12a150', '#00e676')

// ---- Hero: a sphere that becomes a word as you scroll -------------------
const track = document.getElementById('hero')!
const heroCanvas = document.getElementById('hero-canvas') as HTMLCanvasElement
const small = window.innerWidth < 640
const N = small ? 1800 : 3600
const progress = trackProgress(track)

const hero = morphScene(
  {
    from: sphere(N),
    to: text(N, 'TENZIN', { color: 1 }),
    progress,
    range: [0.08, 0.6],
    fromSpin: 0.035,
    toScale: 1.25,
  },
  {
    lean: 0.35,
    // Desktop: right of centre, the copy owns the left. Phones: upper half.
    center: (w, h) => (w >= 1024 ? [w * 0.64, h * 0.5] : [w / 2, h * 0.34]),
    radius: (w, h) => (w >= 1024 ? Math.min(w, h) * 0.3 : Math.min(w * 0.36, h * 0.2)),
  }
)
mountStage(heroCanvas, hero, {
  palette,
  pointerArea: heroCanvas.parentElement!,
  floor: { horizon: 0.68, glide: progress },
  redrawOnScroll: true,
})

// Copy out, caption in, as the track scrolls.
const intro = document.getElementById('intro')!
const caption = document.getElementById('caption')!
onTrackScroll(track, (p) => {
  const out = smooth(0.02, 0.18, p)
  intro.style.opacity = String(1 - out)
  intro.style.transform = `translateY(${-out * 24}px)`
  const cap = smooth(0.5, 0.7, p)
  caption.style.opacity = String(cap)
  caption.style.transform = `translateY(${(1 - cap) * 20}px)`
})

// ---- Live figures ---------------------------------------------------------
/** A still cloud as a scene, with an optional per-frame touch. */
function still(cloud: ReturnType<typeof sphere>, extra: Partial<Scene> = {}): Scene {
  return {
    count: cloud.n,
    spin: 0.04,
    ...extra,
    frame(_t, b, first) {
      if (!first) return
      b.x.set(cloud.x)
      b.y.set(cloud.y)
      b.z.set(cloud.z)
      b.c.set(cloud.c)
      if (cloud.nx) {
        b.nx = cloud.nx
        b.ny = cloud.ny
        b.nz = cloud.nz
      }
      for (let i = 0; i < cloud.n; i++) b.s[i] = 1.4 + ((i * 7919) % 97) / 97
    },
  }
}

const figure = (id: string, scene: Scene) =>
  mountStage(document.getElementById(id) as HTMLCanvasElement, scene, { palette, repelRadius: 70 })

figure('fig-helix', still(helix(1400), { spin: 0.06, radius: (w, h) => Math.min(w, h) * 0.4 }))
figure('fig-ring', still(rotate(ring(1500, { gap: 0.2 }), { x: 0.58 }), { spin: 0.05, radius: (w, h) => Math.min(w, h) * 0.36 }))
figure('fig-molecule', still(glucose(1600), { spin: 0.04, radius: (w, h) => Math.min(w, h) * 0.42 }))

// ---- Theme toggle ---------------------------------------------------------
document.getElementById('toggle')!.addEventListener('click', () => setTheme(isDark() ? 'light' : 'dark'))
