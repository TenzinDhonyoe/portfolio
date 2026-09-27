// Light / dark for canvas art. The page decides the theme with a data-theme
// attribute on <html> ("dark" or "light"; absent means light), the same
// attribute its CSS keys off, so the dots always match the page. The stage
// reads it and redraws its dots when it flips.

export type Palette = readonly string[]

/** A palette per theme: index 0 is usually the accent, 1 ink, 2 a soft gray. */
export type ThemedPalette = { light: Palette; dark: Palette }

export const isDark = () => document.documentElement.dataset.theme === 'dark'

/** Calls back whenever the theme flips. Returns an unsubscribe. */
export function onThemeChange(cb: (dark: boolean) => void): () => void {
  const mo = new MutationObserver(() => cb(isDark()))
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => mo.disconnect()
}

/** Set and remember the theme (pair with a pre-paint script; see README). */
export function setTheme(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // Private mode: the choice just won't persist.
  }
}

/**
 * A reasonable default: an accent, ink and gray for each theme. Accents that
 * sink into a dark page (deep reds, blues) should get a brighter night twin.
 */
export function themedPalette(accentLight: string, accentDark = accentLight): ThemedPalette {
  return {
    light: [accentLight, '#1c1c1b', '#a8a8a3'],
    dark: [accentDark, '#ecebe6', '#76756f'],
  }
}
