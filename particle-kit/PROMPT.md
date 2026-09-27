# Prompt: using the particle kit in a new site

Copy the `particle-kit/` folder into the new project, then give an AI coding
agent something like this. Fill in the brackets.

---

I've added a particle system in `particle-kit/`. Before writing anything, read
`particle-kit/README.md`, `particle-kit/DESIGN.md` and every file in
`particle-kit/src/`, and run the demo (`bun particle-kit/demo/serve.ts`) to see
how it looks and moves.

Build [the homepage / the hero / this section] of [project] in the kit's
visual language. Use the kit's engine as-is (`mountStage`, `morphScene`, the
shapes, `trackProgress`); don't rewrite it. Make these choices:

- **Hero shape:** [a sphere / a ring / a helix / text "…" / a custom cloud of …]
- **Scroll morph:** as the reader scrolls a pinned 200vh section, it becomes
  [target shape], and the copy swaps from [intro] to [caption].
- **Accent:** [#hex] by day, [brighter #hex] at night; ink and gray from
  `themedPalette`.
- **Figures:** [N] small live scenes below: [what each shows].
- **Copy:** headline "[…]", one short line, and [the one action].
- **Theme:** a light/dark toggle in the nav, using `setTheme` and the pre-paint
  script from the README.

Rules: follow `DESIGN.md` (copy on the left and shape on the right, calm
motion, no text over dense dots, one accent). Keep the kit's reduced-motion
and offscreen pausing. Check every step in a browser on desktop and a 390px
phone, in light and dark, and show me screenshots before moving on.
