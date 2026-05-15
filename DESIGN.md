# Design

Visual system for the RHDevs portfolio. Pairs with PRODUCT.md (strategy). This file is the source of truth for tokens, type, motion, and components.

## Visual Theme

**Surface mood:** warm graphite, gallery-dark, ink-on-paper at night. The page reads like a museum wall caption or a research-lab "About" page after hours, not a SaaS landing. No glow, no grid pattern, no ambient blur. Light comes from the type and the photographs, not from decoration.

**Scene sentence:** a Sec-2 student opens rhdevs.org on their phone at 10pm in their bedroom, lamp on; a teacher opens the same page on a laptop in the staffroom at 11am with the blinds half-down. Both should feel like they are reading something published, not generated.

This forces dark, but warm-dark: a graphite tinted slightly toward red so it never reads as the cold-blue tech-product default. The oxblood accent is a single committed move; it never appears as a stripe or a halo.

## Color

**Strategy:** Committed. The graphite surface carries 70%+ of the page. One saturated accent (oxblood) carries primary CTAs, the flagship-milestone marker, and section numerals. A warm cream is the text and is the only other commitment. Everything else is a tinted neutral on the graphite axis.

All values OKLCH. No `#000`, no `#fff`. Hue tinted toward 25 (warm red) at low chroma on every neutral, so the page feels coherent rather than gray.

### Tokens

```
/* Surfaces */
--ink:        oklch(0.145 0.012 25);   /* base graphite, "the page" */
--ink-raised: oklch(0.195 0.014 25);   /* one step up, for delineated regions */
--ink-sunk:   oklch(0.115 0.010 25);   /* one step down, for footer / underlays */

/* Type */
--paper:        oklch(0.945 0.018 75); /* warm cream, primary body text */
--paper-muted:  oklch(0.755 0.014 60); /* secondary text, captions */
--paper-faint:  oklch(0.555 0.010 50); /* metadata, dividers context */

/* Accent — used boldly, never as decoration */
--oxblood:        oklch(0.495 0.135 25);  /* primary accent */
--oxblood-deep:   oklch(0.385 0.115 25);  /* hover / pressed */
--oxblood-paper:  oklch(0.945 0.018 75);  /* type laid on oxblood */

/* Rule lines & dividers */
--rule:        oklch(0.265 0.012 25);  /* primary divider */
--rule-faint:  oklch(0.215 0.010 25);  /* secondary divider */

/* Focus / selection */
--focus:       var(--oxblood);
--selection:   oklch(0.495 0.135 25 / 0.35);
```

**Usage rules:**
- Oxblood is for: primary CTA fills, flagship milestone numerals + dot, focus rings, the "26 / 27" cohort badge, the wordmark dot. Never as a stripe, never as a border-side accent, never as a card background tint.
- Paper-muted is the most common secondary text. Paper-faint is only for very small metadata that doesn't need full readability.
- Rule lines are always 1px and always full-edge; never partial decorative ticks.

## Typography

**Two families. Both off the impeccable reflex-reject list. Both free.**

- **Display + headlines:** `Cabinet Grotesk` (Fontshare, Indian Type Foundry). Geometric grotesque with a slight stencil/condensed feeling. Carries gravity at size, doesn't feel like Inter or Plex. Used for all headings, the wordmark, and tabular numerals.
- **Body + UI:** `General Sans` (Fontshare). Humanist neutral grotesque, very readable at body size, pairs cleanly with Cabinet's tighter character.

No mono. The old `JetBrains Mono` was costume — RHDevs is not a "developer-tools" brand, it's a developer *community*. Metadata uses small Cabinet caps with letter-spacing.

### Scale (modular, 1.333 ratio, fluid)

```
--text-meta:    clamp(0.70rem, 0.66rem + 0.18vw, 0.78rem);   /* section labels, captions */
--text-body:    clamp(0.95rem, 0.90rem + 0.25vw, 1.12rem);   /* body */
--text-lead:    clamp(1.10rem, 1.00rem + 0.45vw, 1.42rem);   /* lead paragraphs */
--text-h4:      clamp(1.35rem, 1.20rem + 0.65vw, 1.90rem);
--text-h3:      clamp(1.75rem, 1.45rem + 1.20vw, 2.65rem);
--text-h2:      clamp(2.40rem, 1.85rem + 2.30vw, 4.00rem);
--text-h1:      clamp(3.20rem, 2.20rem + 4.80vw, 7.00rem);
--text-display: clamp(4.50rem, 2.40rem + 8.80vw, 11.0rem);   /* one-shot wordmark / cohort numerals */
```

**Weight choices:**
- Cabinet 800 for display (the wordmark, cohort numerals, milestone titles).
- Cabinet 500 for section headings.
- General 400 for body, 500 for emphasis, 600 for inline labels.
- Never italic for emphasis — italic Cabinet/General are reserved for foreign words and titles, not for "feel."

**Measure & rhythm:**
- Body cap: 65ch. Lead paragraph: 55ch.
- Light-on-dark line-height bump: body uses 1.55, lead uses 1.45, display uses 0.92.
- Headlines use tracking `-0.025em` at H1/display, `-0.015em` at H2/H3, `0` at H4 and below.

## Layout

- **No global grid pattern.** The page is plain graphite.
- **Left-aligned by default,** with deliberate asymmetric exceptions (e.g. the cohort head photograph + name occupies an off-axis composition, not a centered stack).
- **Container width:** 1280px max, with content commonly inside an inner 920px (`--measure-prose`) or 720px (`--measure-narrow`) column. Full-bleed sections used for the wordmark and the partners.
- **Section numbering:** every section labeled `Nº 01 · about`, `Nº 02 · cohort`, etc., in Cabinet caps with letter-spacing. Numerals are the rhythm device, replacing decorative graphics.
- **Spacing scale:** 4-based tokens, fluid. `--space-1` through `--space-12`. Vertical rhythm varies deliberately between sections; do not pad every section identically.

```
--space-1:  0.25rem;
--space-2:  0.5rem;
--space-3:  0.75rem;
--space-4:  1rem;
--space-5:  1.5rem;
--space-6:  2rem;
--space-7:  3rem;
--space-8:  4.5rem;
--space-9:  6.5rem;
--space-10: 9rem;
--space-11: 12rem;
--space-12: 16rem;
```

- **No card grid for About / mission / vision / values.** That section is a single statement with three numbered pillars laid out as a stacked, numbered manifesto. Cards are banned for that use.
- **Team uses a roster, not card-grid.** Large head photograph + name + role as a typographic composition. Engineering + design heads sit below in a wide, asymmetric two-column layout.
- **Milestones become a programme.** A vertical year-schedule: month label on the left, workshop name + description in the middle, flagship highlighted with a thicker rule and oxblood numeral. Not seven full-screen scrolls.

## Components

### Wordmark
The lockup is "RH · Developers" with the `·` rendered in oxblood. Cabinet 800. Display size. The current gradient-text effect is removed.

### Section number label
`Nº 03 — cohort` in Cabinet 500 caps, tracked `+0.18em`, paper-faint color. Sits flush left above each section heading.

### Primary CTA
Solid oxblood fill, paper text, Cabinet 600 caps, tracked `+0.06em`. Underline-pseudo on hover (`::after` width 0 → 100%, 220ms ease-out-quart). No rounded pill default; radius 6px. Focus-visible: 2px paper outline offset by 3px.

### Secondary CTA
Paper outline, paper text, no fill. Same type style. Hover: fills with `var(--paper) / 0.06` background. No box-shadow on either CTA.

### Photo treatment
Photographs sit on a 1.2px paper-faint rule border, radius 4px. No glow border, no shadow halo, no opacity dim. Aspect-ratio 4/5 for portraits. Object-fit cover, object-position adjusted per portrait.

### Rule lines
Single 1px line, `var(--rule)`. Always full-section-width or full-column-width — never decorative dashes.

### Milestone row (programme)
Three-column row at desktop: numeral · title · period.
- Numeral: Cabinet 800, paper, large.
- Flagship row: numeral becomes oxblood, an additional 1.2px oxblood rule above and below the row, "Flagship" Cabinet caps label.
- Description expands inline with a `<details>` element transitioning `grid-template-rows`, not `height`.

### Footer
A single ruled strip with the wordmark left, links right, copyright below. No social-icon grid. Links are typographic only (Instagram, GitHub, Email, Discord) with an arrow glyph; no rounded icon buttons.

## Motion

**Posture:** restrained. Type and color do the work. Motion is calibration, not flair.

- **No bounce, no elastic, no spring with bounce > 0.** Replace existing `type: spring, bounce: 0.4-0.6` calls entirely.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) for entrance/state transitions; `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for slower hero reveals.
- **Durations:** 200–280ms for state transitions, 600–800ms for first-view section reveals. Nothing slower.
- **Allowed:** opacity, transform (translate, scale ≤ 1.02), filter blur (sparingly, only on the wordmark first-load), `clip-path` reveals.
- **Disallowed:** animating width / height / margin / padding / top / left. Animating `grid-template-rows` for collapsible content is fine.
- **Page transition:** the current "geometric shutter" is dropped. A single 400ms fade with a 1.5% scale settle replaces it.
- **Reduced motion:** any entrance reveal becomes a static `opacity: 1` paint. Hover micro-motions stay.

## Imagery

- **Team photographs** are the only image content. Treat them as portraits, not avatars. Recompose them at consistent 4/5 ratio, neutral background tone, no filters or duotone. Faces should sit at consistent eye-level across the three portraits below the head.
- **No decorative imagery, no abstract graphics, no SVG flourishes.** The brand register is "research-lab confident" and that lane carries its weight through type and structure.
- **Partner logos** appear once, in the partners section, monochromatic against graphite. The current Plus-lighter blend mode on logos can stay if it preserves logo legibility on the new graphite surface.

## Iconography

Minimal. Lucide icons stay in the codebase but are used only where they add information: arrows (`ArrowUpRight`, `ArrowRight`), the menu chevron, the play/star marker for flagship. No icon above every heading. All icons render at 1.2× the cap-height of the surrounding type, paper-muted color by default.

## Tailwind / Token Implementation Notes

- Replace the existing `hsl(0 0% N)` neutral ramp in `styles.css` with the OKLCH tokens above.
- Drop the `glow-border`, `bg-grid`, `bg-radial-glow`, `text-gradient`, `text-glow*` utility classes. The redesign does not use them.
- Load Cabinet Grotesk + General Sans via Fontshare CDN (`@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,800&f[]=general-sans@400,500,600&display=swap')`). Drop the Google Fonts Inter + JetBrains Mono import.
- Keep `class-variance-authority` for the button variants; rebuild `hero` and `heroOutline` variants to match the new CTAs above.
- Snap-scroll container stays for the cohort head and milestones-title moments only; About, the cohort body, and the programme should be normal flowing scroll.
