# Product

## Register

brand

## Users

1. **Sponsors** reviewing the New Frontiers hackathon application (OpenAI first). About 60 seconds to decide whether RHDevs is credible and can run a 200-person event. Usually on a laptop.
2. **NUS students** deciding whether to join RHDevs or sign up for New Frontiers. Usually on a phone.
3. **Raffles Hall residents and staff**, who already use what we build.

The first screen must answer: who we are, what we have shipped, and why that proves we can deliver.

## Product purpose

The public site for RHDevs, a 25-person student engineering and design team at Raffles Hall, National University of Singapore. It proves delivery with shipped products and real usage numbers, then points to New Frontiers.

## Facts (exact, do not exaggerate)

All facts live in `src/content.ts`. Nothing on the site may be invented, rounded up, or implied:
- Never say New Frontiers is with, powered by, or partnered with any sponsor that has not signed. Sponsors go in `newFrontiers.sponsors`, which renders nothing while empty.
- Co-organisers render only while `newFrontiers.coOrganisersConfirmed` is true.
- Heartfelt bot numbers are conversations, never users.
- Unknown values stay `null` with a `TODO(content)` comment; components skip them.

## Brand personality

Plain, specific, confident. Engineers describing what they run, not a club describing what it hopes to do. Numbers and names over adjectives.

## Anti-references

- SaaS dark + neon glow, gradient text, glassmorphism.
- Partner logo walls for partners that have not signed.
- Workshop calendars and roadmaps: the site shows shipped work, not plans (New Frontiers is the one upcoming item, clearly marked).

## Accessibility

WCAG AA contrast, visible focus states, semantic landmarks, alt text on every image, reduced-motion respected, all content in the static HTML.
