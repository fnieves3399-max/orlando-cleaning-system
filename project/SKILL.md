---
name: orlando-cleaning-design
description: Use this skill to generate well-branded interfaces and assets for Orlando Cleaning Growth System (a CRM + quoting + jobs + marketing platform for an Orlando, FL house-cleaning business), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Map
- `readme.md` — the full design guide: brand context, CONTENT FUNDAMENTALS (voice/tone), VISUAL FOUNDATIONS (color, type, spacing, motion, shadows), ICONOGRAPHY, and an index of everything.
- `styles.css` — global entry point. Link this one file; it `@import`s all tokens + fonts + base element styles.
- `tokens/` — CSS custom properties (colors, typography, spacing, elevation, fonts, base).
- `components/` — React UI primitives. Build the bundle, then read components from `window.OrlandoCleaningGrowthSystemDesignSystem_e087c1` (e.g. `Button`, `StatCard`, `Table`, `Badge`, `Field`, `Input`, `Select`). Each has a `.prompt.md` with usage.
- `foundations/` — specimen cards illustrating the visual foundations.
- `ui_kits/app/` — the internal product (dashboard, CRM, quote tool, jobs, marketing, SEO).
- `ui_kits/public/` — the customer-facing landing page + quote form (self-contained).

## Quick brand cheatsheet
- **Primary** Tide Blue `--brand-600 #0E7DC9`; **money/positive** Fresh Green `--green-600 #1FA968`; **structure** Navy `--navy-900 #0C2138`; cool-gray neutrals.
- **Type**: Plus Jakarta Sans (display/UI), Public Sans (body), JetBrains Mono (figures). Sentence case everywhere; uppercase only for eyebrows/table headers.
- **Feel**: crisp, airy, water-fresh. White surfaces, soft navy-tinted shadows, 12px card radius, calm 120–300ms motion, no gradients in-app. Lucide outline icons (1.6px stroke).
- **Voice**: confident, friendly, local. Outcome-first. No emoji in product UI; sparingly in generated social copy.

> Note: this brand was designed fresh from a product spec (no source codebase/Figma). Fonts are Google Fonts and icons are Lucide — both flagged substitutions in `readme.md`.
