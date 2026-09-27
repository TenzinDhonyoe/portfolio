import { clamp01 } from './rng.ts'

/**
 * Progress (0–1) through a tall "track" element whose child is
 * `position: sticky`, the pinned-stage pattern: 0 when the track's top meets
 * the top of the viewport, 1 when its bottom meets the bottom.
 */
export function trackProgress(track: HTMLElement): () => number {
  return () => {
    const rect = track.getBoundingClientRect()
    const span = rect.height - window.innerHeight
    return span > 0 ? clamp01(-rect.top / span) : 0
  }
}

/**
 * Call `fn(progress)` on every scroll frame (throttled to animation frames),
 * for DOM that moves with the track: copy fading out, captions fading in.
 */
export function onTrackScroll(track: HTMLElement, fn: (p: number) => void): () => void {
  const progress = trackProgress(track)
  let raf = 0
  const tick = () => {
    raf = 0
    fn(progress())
  }
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(tick)
  }
  tick()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  }
}
