# Designing with the particle kit

The kit makes the dots move; these rules make them look considered instead
of like a screensaver. They come from a lot of iteration on the GlucoSolutions
site. Adapt the colours and content; keep the restraint.

## Principles

1. **One visual idea.** Dots are the illustration style. Don't mix in stock
   photos, 3D renders or icon sets as decoration beside them.
2. **A studio stage.** Hero-scale moments sit on a soft radial "stage" (bright
   centre falling off to the page colour) with an endless floor grid. Between
   them, the plain page. The stage ends in the page colour, so it never seams.
3. **Words on one side, dots in the room.** Copy holds the left (or the bottom
   on phones); the shape sits right of centre. Text never sits on top of dense
   dots; fields that pass behind copy stay faint.
4. **Understood in one glance.** The first screen says what it is and what to
   do: one plain headline, one short line, one action. The motion is the
   hook, not the message.
5. **Motion is calm.** Slow spins (0.03–0.06 turns a second), gentle floats,
   springy pointer response. Nothing flashes or loops fast. Scroll-driven
   changes follow the reader, never autoplay past them.
6. **Colour carries meaning.** One accent plus ink and a soft gray. Use the
   accent for what matters (the subject, the "rising" line) and ink for
   structure. Extra colours only where the content needs them (a spectrum).

## Numbers that worked

| Thing | Value |
| --- | --- |
| Dot size | 1.4–2.8 px at unit depth |
| Hero dots | about 3,500 (about 1,800 on phones) |
| Figure dots | 1,200–1,600 |
| Depth fade | farthest dots at about 20% opacity |
| Pointer scatter | 70–110 px radius, spring back over about half a second |
| Pointer lean | up to about 0.35 rad |
| Hero shape placement | centre at 64% across, 50% down; radius 30% of the short side |
| Pinned scroll track | 190–220vh; morph over roughly the first 60% of it |
| Morph stagger / swirl | 0.35 / 0.32 |
| Floor horizon | 68% down |

## Type and layout that pair well

- One sans family (Geist, Inter or system UI). Headlines semibold, tight
  tracking (about -0.035em), leading about 1.05. Body regular, 16–17px, 1.6
  leading.
- Small grey kickers above headlines in sentence case. Never all caps or
  letter-spaced.
- One container width (about 1320px) with 24px / 40px side gutters, so every
  left edge lines up.
- Structure from hairlines and spacing, not boxed cards.

## Dark mode

Same system at night: charcoal page (about `#0f0f10`), warm off-white ink,
and a **brighter twin of the accent** (deep accents drop to about 3.5:1 on
near-black; aim for 6:1 or more). Everything is tokens, so one attribute
flips it; the canvas follows.

## Don'ts

- No text over dense dots.
- No fast or constant flashy motion; no autoplaying morphs.
- No rainbow palettes outside content that needs them.
- No all-caps eyebrows, gradient buttons or icon tiles around the dots.
- Don't make the particles the only way to read something: it's
  `aria-hidden` decoration, and the words carry the meaning.
