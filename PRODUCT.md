# Product

## Register

brand

## Users

Three audiences land on rhdevs.org, with recruitment first:

1. **Prospective student members** at Raffles (RH), browsing on phones between classes or at home in the evening. They are deciding whether this CCA is somewhere they want to spend their time. They want to see that the club takes itself seriously, that the people are real, and that the work is something they would be proud to be part of. Curiosity outweighs commitment, so the surface has to earn the next click.

2. **Faculty and school leadership**, opening the site to vet the club, approve programmes, or share with parents. They are reading on a laptop in good light. They want signals of operational maturity: a real cohort, named leadership, a real annual programme, real partners. Anything that reads as student-handicraft costs trust.

3. **External partners** (OpenAI, NUS StartIT, future collaborators). They are deciding whether co-signing this club is on-brand for them. They want to see that the club operates at a level that does not embarrass the partner. Logos belong where the partnership is, not on a generic strip.

## Product Purpose

A single-page portfolio for RHDevs, a student-led developer community at Raffles. It exists to position the club as a credible, ambitious, partner-grade tech org, not a hobbyist student group. Success looks like: a Sec-2 student decides to attend the first workshop after thirty seconds on the page; a teacher forwards the link to the head of department without hedging; OpenAI or NUS feels good about the co-sign.

The site is not a content-management product. It is a one-shot statement: who we are, who runs it, what we are doing this year, who we work with, how to reach us.

## Brand Personality

Bold, ambitious, prestigious. Closer to a research lab or a design studio than to a school club. Voice is direct and unhedged. Confident without bragging. Plainspoken on what we do; precise on the names, dates, and partners that prove it.

Tone calibration:
- *Confident, not chest-thumping.* "We run an annual programme of seven workshops" beats "we are the best student tech club".
- *Specific, not generic.* "Seven workshops, one flagship hackathon, in partnership with OpenAI and NUS StartIT" beats "innovative tech experiences".
- *Plain, not corporate.* Short sentences. Active voice. No "leveraging", no "empowering", no "synergies".
- *Adult, not student.* Reads like the people running it are already practitioners, even though they are 16.

## Anti-references

**Hard avoids:**
- Generic SaaS dark + neon accent. Linear/Vercel-clone landings: pure black background, indigo or cyan glow, grid pattern, glassmorphism, "Build the future" pseudo-tagline. The current rhdevs site flirts with this and must move away from it.
- Corporate-school-club look. Bootstrap-card grids of mission/vision/values, stock-photo team rows, navy + gold prestige cosplay, clip-art-tier badges.
- Bento-grid SaaS landing. Repeating equal-rounded cards with icon + heading + supporting copy.
- Editorial-magazine fallback. Display-serif italic headlines + lowercase tracked metadata + ruled separators. We are not a magazine; we should not borrow magazine costume.
- Hackathon-poster maximalism. Acid green on black, glitched text, "the future is now", overpromising graphics.

**Soft avoids (use only with a reason):**
- Glow / blur / "tech-feels" decoration. No radial-glow halos, no grid backgrounds as ambient texture.
- Gradient text. Single solid color, hierarchy through weight and scale.
- Hero-metric template (big number, small label, gradient accent stack).
- All-caps body. Caps for short labels only.
- Bouncy spring motion. Ease-out exponential only.

## Design Principles

1. **Earn the seriousness.** Every visible element should justify being read by an adult. If a teacher could mistake it for a student-run blog template, it has not earned it.
2. **Specificity is the design.** Names of people. Dates of events. Names of partners. Numbered sections. Real artifacts beat decoration; a real workshop title outperforms any abstract graphic.
3. **One committed surface.** Warm graphite with one oxblood accent. The color carries the brand; we do not hedge by adding neutrals back in.
4. **Show the cohort like a roster, not like a team page.** Photographs are large, named, and undecorated. The people are the proof.
5. **Programme, not roadmap.** Seven workshops are a yearly programme, not a SaaS roadmap. Present them as a real schedule with the flagship spotlit, not as seven identical scroll-snap screens.

## Accessibility & Inclusion

- WCAG 2.2 AA contrast minimum on all body text against the graphite surface. Confirm with the chosen oklch tokens; the oxblood accent never carries body type.
- Respect `prefers-reduced-motion`: replace scroll-reveal fades and entrance staggers with static reveals; preserve the layout, drop the choreography.
- Keyboard reachable: all CTAs, social links, and milestone expanders. Visible `:focus-visible` ring in oxblood or cream, never relying on outline-none + box-shadow tricks alone.
- Real alt text on every photograph (`alt="Patrick Steve Harrison, Head of RHDevs"`), not `alt="team member"`.
- Mobile-first read order; the page must make sense narrated by a screen reader top-to-bottom.
