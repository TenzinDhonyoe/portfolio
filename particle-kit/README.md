# Particle kit

Dots in 3D on a canvas: perspective-projected, fading with depth, leaning
toward the cursor and scattering from it, with scroll-driven morphs between
shapes and light/dark themes. It's the engine behind the GlucoSolutions site,
pulled out and made generic. Plain TypeScript, no dependencies, no framework.

```
particle-kit/
  src/
    engine.ts   mountStage(): camera, depth, pointer, floor, glow, theme, pausing
    morph.ts    morphScene(): one shape into another as you scroll
    shapes.ts   sphere, ring, helix, text, molecule, glucose, rotate, scale
    scroll.ts   trackProgress(), onTrackScroll() for pinned scroll sections
    theme.ts    isDark(), setTheme(), onThemeChange(), themedPalette()
    rng.ts      seeded random, smooth, easeInOut
    index.ts    everything above
  demo/         a working page: sphere → your name on scroll, three live figures
  DESIGN.md     the visual rules that make it look right
  PROMPT.md     a prompt for handing this to an AI coding agent
```

## See it

```sh
bun particle-kit/demo/serve.ts
# open http://localhost:3456
```

Scroll the first screen to watch the sphere become a word, move the pointer
over any dots, and try the ◐ toggle.

## Use it

### 1. A canvas that CSS sizes

```html
<canvas id="orb" style="width: 100%; height: 480px; display: block"></canvas>
```

The stage reads the canvas's CSS size and handles device pixel ratio itself.

### 2. Mount a scene

```ts
import { mountStage, morphScene, sphere, text, themedPalette } from './particle-kit/src/index.ts'

const palette = themedPalette('#12a150', '#00e676') // accent by day, brighter twin at night

const stage = mountStage(canvas, {
  count: 3000,
  spin: 0.04, // turns per second
  frame(t, b, first) {
    if (!first) return
    const s = sphere(3000)
    b.x.set(s.x); b.y.set(s.y); b.z.set(s.z); b.c.set(s.c)
  },
}, { palette })

// Later: stage.destroy()
```

A **scene** is just `count` and a `frame(t, buffers, first, info)` function
that writes where each dot is: `x, y, z` (roughly -1..1, y down, z away),
`c` (palette index), `a` (opacity), `s` (size in px). Write positions once
for a still shape, or every frame for motion. Optional `nx, ny, nz` normals
shade the dots so shapes read as solids; optional `glow` flags draw a soft
halo in the accent.

Scene options: `spin`, `pitch`, `lean` (how far the pointer turns it),
`center(w, h)` and `radius(w, h)` for placement, `still` (the moment to hold
under reduced motion) and `overlay(ctx, info)` to draw labels or frames on top.

Stage options: `palette` (required), `pointerArea` (track the pointer over a
whole section, not just the canvas), `repelRadius`, `depthFloor`, `floor`
(an endless perspective floor, optionally gliding with scroll),
`redrawOnScroll`.

### 3. Scroll morphs: the pinned-stage pattern

A tall track with a sticky child; progress through the track drives the morph.

```html
<section id="hero" style="position: relative; height: 220vh">
  <div style="position: sticky; top: 0; height: 100svh; overflow: hidden">
    <canvas id="hero-canvas" style="position: absolute; inset: 0; width: 100%; height: 100%"></canvas>
    <!-- your copy, absolutely positioned bottom-left -->
  </div>
</section>
```

```ts
import { morphScene, mountStage, sphere, text, trackProgress, onTrackScroll, smooth } from './particle-kit/src/index.ts'

const progress = trackProgress(track)
const scene = morphScene(
  { from: sphere(3600), to: text(3600, 'TENZIN', { color: 1 }), progress, range: [0.08, 0.6], fromSpin: 0.035 },
  { center: (w, h) => [w * 0.64, h * 0.5], radius: (w, h) => Math.min(w, h) * 0.3 }
)
mountStage(canvas, scene, { palette, floor: { glide: progress }, redrawOnScroll: true })

// Fade DOM with the same progress so text and dots stay in step.
onTrackScroll(track, (p) => { intro.style.opacity = String(1 - smooth(0.02, 0.18, p)) })
```

`from` and `to` should have the same number of points. Swap in any shapes:
`sphere`, `ring`, `helix`, `text`, `glucose`, `molecule(atoms, bonds)`, or
your own (any object with `n, x, y, z, c`).

### 4. Dark mode

The page owns the theme: `data-theme="dark"` or `"light"` on `<html>`, which
your CSS keys off too (absent means light). The canvas follows it and redraws
when it flips. Put this in `<head>` so a saved choice applies before first
paint:

```html
<script>
  try { var t = localStorage.getItem('theme'); if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t } catch (e) {}
</script>
```

Then `setTheme('dark' | 'light')` from a toggle. Give the accent a brighter
twin for dark mode (`themedPalette(day, night)`). Deep reds and blues sink
into near-black.

### In React / Next.js

```tsx
useEffect(() => {
  const stage = mountStage(ref.current!, scene, { palette })
  return () => stage.destroy()
}, [])
```

Mark the component `"use client"`. Build scenes inside the effect (text
sampling needs `document`).

## Built in

- Pauses when the canvas is offscreen or the tab is hidden.
- Caps pixel ratio at 2. Aim for about 3,500 dots in a hero and 1,500 in a
  small figure; use roughly half on phones.
- `prefers-reduced-motion`: no spin, no pointer response; the scene holds at
  `still`, and scroll morphs still follow the scroll (the reader drives them).
- Seeded shapes, so the dots land in the same places on every visit.

## Adding to this site

The homepage runs on the kit: `main.ts` mounts one full-screen stage with the
`shapeshift` scene (`../shapeshift.ts`), which flies the dots between a stipple
portrait (`../portrait.ts`) and one figure per project (`../project-shapes.ts`)
as you hover the list. The engine and shapes here are used unchanged.
