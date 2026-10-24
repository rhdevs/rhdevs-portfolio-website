# Design

Source of truth for tokens is `src/styles.css`. This file explains the intent and the rules for using them.

## Stance

Engineers describing what they run. The page proves delivery with shipped products and real numbers. The stage is black and white; **colour comes only from the real product screenshots**, which is the point: the work is the brightest thing on the page. Life comes from motion and real imagery, not from an accent hue or ornament.

## Colour

Black and white only. Hierarchy comes from contrast, weight and scale, never hue.

| Token | Dark field | Light field (`.field-light`) | Use |
|---|---|---|---|
| `bg` | #040707 | #F6F6F4 | page ground |
| `raised` | #111617 | #E9EBE8 | one tone step up: alternating bands, panels, screenshot frames |
| `fg` | #F6F6F4 | #040707 | text, solid buttons |
| `fg-2` | #8A9092 (6.2:1) | #4D5355 (7.2:1) | secondary text at any size, labels |
| `muted` | #6B7173 (4.1:1) | #6B7173 | large text (24px+) and decoration only; fails AA for small text |
| `line` / `line-strong` | #1E2425 / #343B3D | #D6D9D6 / #B4B9B7 | 1px borders and list rules |

**`.field-light`** re-points the tokens, so everything inside (utilities, buttons, links) flips with no per-component variants. It is the page's single emphasis move and is used sparingly: the New Frontiers band on the home page, the main-track card on `/new-frontiers`. Semester 2 in the cohort diagram uses a plain `bg-fg text-bg` panel for the same reason.

Surfaces separate by a tone step (`bg` → `raised`), not by lines. Lines are kept for real lists (the hero ledger, contact rows) and for card edges.

## Type

One sans, one mono. Inter (variable, self-hosted) carries everything; JetBrains Mono (variable, self-hosted) is reserved for **labels and numbers**. Both have metric-matched fallbacks, so the font swap causes no layout shift.

| Class | Size (fluid) | Use |
|---|---|---|
| `.text-display` | 2.75rem → 9.5rem | weight 500; the `/new-frontiers` `h1` and the New Frontiers name in its band |
| `.text-hero` | 2.75rem → 7.25rem | weight 500; the home `h1`, which shares its row with the product stage |
| `.text-h2` | 2.25rem → 5.25rem | section headings, max ~20ch |
| `.text-h3` | 1.5rem → 2.6rem | product names, dates, contact values |
| `.text-statement` | 1.6rem → 3.4rem | a sentence set large (the proof line); a `<p>`, never a heading |
| `.text-lead` | 1.15rem → 1.5rem | the sentence under a heading |
| body | 17px, line-height 1.65 | running text, max 65ch |
| `.label` | 13px mono, sentence case | names a thing: section rail, fact terms, product kind |
| `.num` | mono, tabular figures | every number |

Display and headings: weight 600, tracking -0.03 to -0.05em, leading 0.93–1.05. Labels are **sentence case and untracked**: no uppercase letter-spaced eyebrows, no index numbering (01 / 02).

## Layout

- **Frame:** full width, one pair of outer margins (`--gutter`, 16–48px). No max-width container.
- **Grid:** `.grid-12`, column gap `--col-gap`.
- **Section head:** `SectionHead` puts the label in the left three columns and the heading (plus optional intro) in the right nine. On phones the label stacks above. Every section opens this way except the hero and the New Frontiers band, which compose themselves.
- **Rhythm:** `--space-section` (88–176px) between sections, `--space-head` between a head and its content, `--space-group` inside. The gap between sections is always larger than any gap inside one.
- **Bands:** sections alternate `bg` and `raised`, with the light field once. Neighbouring sections never share a composition.

## Components

- **Buttons:** `.btn-solid` (fills with `fg`) and `.btn-ghost` (outline in `line-strong`). 2px radius, decided once. Hover swaps fill; arrows nudge 3px; press drops 1px. At most two per group, one solid.
- **Cards:** `.card`, 1px `line` border, square, lifts 3px on hover. Used for products and subtracks only. Nothing inside a card gets its own rules or boxes.
- **Facts:** a `dl` of label over value with spacing, not a ruled table.
- **Proof:** said as one sentence in `.text-statement`, numbers in `fg` mono, product names linking to their cards. Not a row of stat tiles.
- **Hero stage:** the home hero is split: headline and copy left (`.text-hero`, smaller than `.text-display` because it shares the row), the stage right. The stage is a `raised` tone panel bleeding off the right edge; RHApp sits in a `BrowserFrame` (real URL in the bar) peeking out of it, and the Finance and Heartfelt bots stand in front as `PhoneFrame`s with their real full-height Telegram screenshots. Each layer has its own scroll depth and a slight tilt. The only place shadows and rounded corners appear, because these are physical objects floating above the page.
- **Marquee:** `Marquee`, a running band at `.text-h2` size separated by the logo mark. Home: products and their numbers. New Frontiers: the tracks. Pauses on hover.
- **Live dot:** a pulsing dot marks something that is running now (RHApp's URL, the hero caption).
- **Countdown:** days to the proposed New Frontiers kickoff, from `newFrontiers.dates.kickoffISO`. Rendered by JS only, so a stale number can never ship in HTML.
- **Screenshots:** `ScreenshotSlot`, on a `raised` frame, with a 640w variant for phones. Residents' names are blurred before an image enters `assets-src/products/`.
- **Portraits:** greyscale at rest, full colour on hover, 4:5. The Head gets a full row (photo left, name at display scale right); Vice Heads share the row below at one step down.
- **Partner logos:** official logos shown as they are, with no plates, borders or cards, all at one height (`PartnerLogo`). Organisers section: the full RH Developers lockup large on the left; the five partners on the right as logo with name and role underneath, three on the first row and two centred on the second. Intros show the same logos small, in a row.
- **Contact rows:** the row fills with `fg` from the left on hover and the text inverts.
- **Footer:** links, then the wordmark at full width in `muted` (decorative, `aria-hidden`), letters rising in sequence.

## Motion

Motion is how this page stays alive in two colours. One rule over all of it: **the page is complete without it.** Content is in the HTML, nothing waits on JS to be readable, and `prefers-reduced-motion` removes all travel (the marquee becomes a wrapped list).

| Move | Where | How |
|---|---|---|
| Word rise | page `h1`s (`RiseText`) | CSS keyframes on load, 55ms stagger, transform only so text paints at once |
| Devices float in | hero stage | CSS keyframes, staggered 250 / 550 / 700ms |
| Parallax | hero stage | one rAF-throttled scroll handler sets `--p`; each plate multiplies by its `--depth` |
| Marquee | below each hero | CSS, 32–40s loop |
| Count-up | proof sentence numbers | JS on reveal, 1.4s ease-out-quart, final text restored exactly |
| Fade and rise | sections below the fold (`.reveal`) | 18px, 800ms ease-out-expo, 60–80ms stagger |
| Merge | cohort diagram | tracks slide in from the edges, Semester 2 bar draws across |
| Letter rise | footer wordmark (`.rise`) | 60ms per letter |
| Hover | cards, screenshots, portraits, rows, buttons | lift 3px, zoom 1.035, grey to colour, row fill, arrow nudge |

Transform and opacity only. Easing is ease-out-quart / ease-out-expo; no bounce.

## Logo

`assets-src/logo.png` has a #2F302F bar that vanishes on #040707. `npm run assets` makes an on-dark variant that remaps the bar to `muted` grey. The header, favicons and OG images use that variant.

## Don't

- Add a hue, a gradient, a glow or a shadow on anything at rest.
- Use uppercase tracked eyebrows or numbered section labels.
- Put rules inside cards, or nest cards.
- Lay out numbers as big-number-small-label stat tiles.
- Use the light field more than once per page; repeated, it stops meaning anything.
