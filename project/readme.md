# Orlando Cleaning Growth System — Design System

A design system for **Orlando Cleaning Growth System**, an all-in-one growth & operations platform for a local house-cleaning business that books jobs and dispatches subcontractors across the Orlando, FL metro (Winter Park, Lake Nona, Kissimmee, Windermere, Clermont). The product combines a CRM, an online quote calculator, job scheduling, subcontractor management, a financial dashboard, and a marketing/local-SEO content studio.

The audience for the product is a **busy owner-operator** — not a designer. The system is therefore tuned for clarity, trust, and speed: bright and clean like a freshly-cleaned home, with confident structure and zero clutter.

## Sources

- **No source codebase or Figma was available.** The attached local folder `serivice tool/` mounted empty, so this system was designed fresh from a written product spec for "Orlando Cleaning Growth System" (full-stack service-business platform: Auth, Dashboard, CRM, Quote Calculator, Jobs, Subcontractors, Financials, Marketing Machine, Avatar Builder, Landing-Page Builder, Local SEO, Settings).
- Color direction was given by the client: **white, light blue, soft green, dark navy.** The palette below interprets that direction.
- **Fonts are Google Fonts selections** (no brand fonts were provided) — see Caveats.

---

## CONTENT FUNDAMENTALS

How the product and its marketing talk.

**Voice:** Confident, friendly, local, and plain-spoken. Sounds like a trusted small-business owner who knows Orlando — never corporate, never jargon-y. Outcome-first ("booked fast", "done right").

**Person:** Product UI addresses the **owner** in second person for actions ("Add lead", "Send quote", "Your revenue this month"). Marketing copy generated *by* the tool addresses the **homeowner** in second person ("Your home, sparkling clean").

**Casing:** Sentence case everywhere — buttons, headings, menu items ("Add lead", not "Add Lead" or "ADD LEAD"). The **only** uppercase is the eyebrow/overline label and table column headers, which are uppercase with wide tracking (`.eyebrow`, `--tracking-caps`).

**Tone by surface:**
- *App UI:* terse, action-led. "Add lead", "Assign subcontractor", "Mark completed".
- *Marketing generator output:* warm, benefit-led, locally specific. Names neighborhoods ("Winter Park", "Lake Nona"). Light urgency for offers ("Book by Friday").
- *Empty states / confirmations:* encouraging and concrete ("Quote sent — Maria will get the estimate by email").

**Numbers & money:** Always tabular figures. Money shown as `$18,240` (no cents in dashboards; cents in financial ledgers). Deltas show sign and direction ("+12%", "−$1,420").

**Emoji:** Not used in the product UI or financial/CRM surfaces. Marketing-generator *output* may include them sparingly when the platform is Instagram/Facebook and the tone is "friendly" or "family-focused" — they are content, not chrome.

**Specific examples:**
- Button: `Add lead` · `Send quote` · `Book job` · `Assign subcontractor`
- Stat label: `Revenue this month` · `New leads this week` · `Pending quotes`
- Status: `new lead` · `quoted` · `booked` · `active` · `completed` · `lost`
- Marketing H1 (generated): "House cleaning in Winter Park, booked in 60 seconds."
- Confirmation: "Job scheduled — Maria Lopez, Sat 9:00 AM, assigned to James C."

---

## VISUAL FOUNDATIONS

**Overall vibe:** Crisp, airy, water-fresh SaaS. White and very light cool-gray surfaces, confident ocean-blue actions, fresh green for money/positive, deep navy for structure (sidebar, headings). Florida-clean: bright, optimistic, trustworthy.

**Color:**
- **Primary — Tide Blue `--brand-600 #0E7DC9`.** Buttons, links, focus, active nav. Light tints (`--brand-50/100`) for chips, selected rows, hover.
- **Fresh Green `--green-600 #1FA968`.** Revenue, profit, "active"/"completed", positive deltas. Used as data color, not a primary CTA (success buttons exist for "Book/Confirm").
- **Navy `--navy-900 #0C2138`.** Sidebar background, headings, primary text.
- **Cool neutrals** (slight blue cast) for body text, borders, sunken surfaces.
- **Status:** brand=info/new, green=success/active, amber `--amber-500`=warning/pending, red `--red-600`=danger/lost/canceled.
- Distribution: dominantly white/neutral, navy structure, blue as the single confident accent, green reserved for money. Avoid rainbow dashboards.

**Type:** Display **Plus Jakarta Sans** (600–800, tight tracking) for headings, KPI numbers, buttons. Body **Public Sans** (400–600) for UI text and paragraphs. **JetBrains Mono** for financial figures, IDs, and generated SEO/code snippets. Base body 15px; KPI numbers 32px/800.

**Spacing & layout:** 4px grid. App shell = fixed 248px navy sidebar + 64px topbar + fluid content (max 1240px). Generous white space; cards breathe (24px padding). Tables and forms align to the grid.

**Backgrounds:** Solid and clean — app on `--gray-50`, cards white. **No photographic or gradient backgrounds in the app.** Marketing/landing surfaces may use one soft brand wash (`--brand-50`) or a hero photo. No noise, no mesh gradients, no decorative texture in the product.

**Corners:** Soft, not bubbly. Controls 10px (`--radius-md`), cards 12px (`--radius-lg`), large panels/hero 16–22px, pills for badges/avatars.

**Cards:** White surface, 1px `--border` (cool gray-200), 12px radius, soft **navy-tinted** shadow `--shadow-sm`. Optional 3px brand top-rule for emphasis (`accent`). Interactive cards lift 2px and deepen to `--shadow-md` on hover.

**Shadows:** Layered, soft, navy-tinted (`rgba(12,33,56,…)`) — never gray/black. Cards at `sm`; popovers/modals at `lg`–`xl`. A brand-tinted glow (`--shadow-brand`) is available for hero CTAs.

**Borders:** 1px hairlines in `--border` (`#DEE5EE`); `--border-strong` for inputs. Focus uses a 3px brand ring (`--focus-ring`), never a hard outline.

**Motion:** Quick and calm. `--dur-fast 120ms` for press, `--dur-base 180ms` for hover/color, `--dur-slow 300ms` for meters/reveals. Easing `--ease-out` (cubic-bezier .22,1,.36,1). No bounces, no infinite loops. Buttons translateY(1px) on press; cards translateY(−2px) on hover.

**Hover states:** Buttons darken one step (brand-600→700) or lift; secondary buttons get a subtle background; table rows tint to `--gray-50`; nav items get a translucent highlight.

**Press states:** 1px downward nudge (`translateY(1px)`), no scale.

**Transparency & blur:** Minimal. Reserved for overlays/modal scrims (navy at low alpha) and the sidebar active-item highlight. No glassmorphism in data views.

**Imagery vibe:** When photos appear (marketing/landing only): bright, warm, natural daylight, clean interiors — never moody or desaturated. Keep them incidental; the product itself is illustration-free and photo-free.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — outline icons, 1.5–1.6px stroke, rounded caps/joins. This matches the crisp, friendly geometry of Plus Jakarta Sans. Loaded from CDN (`https://unpkg.com/lucide@latest`) in the UI kits; small inline SVGs (same stroke spec) are used inside specimen cards. **This is a substitution** — no icon set was supplied with the brand. If you adopt a licensed/native set later, keep the outline style and 1.5px stroke.
- **Stroke & size:** 1.5–1.6px stroke, sized 16/18/20px in UI, 24px in empty states. Icons inherit `currentColor`; in stat tiles they sit in a soft tinted chip (`--brand-50`, `--green-50`, …).
- **Brand mark:** A water-droplet + sparkle in a rounded brand tile — see `components/core/Logo.jsx`. It is the one piece of bespoke vector art; everything else is Lucide.
- **Emoji:** Not used as UI icons. Unicode glyphs are not used as icons either — always a real Lucide SVG.
- **No hand-rolled icon illustrations.** Use Lucide; if a needed glyph is missing, pick the closest Lucide name rather than drawing one.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the token files + fonts + base.
- `readme.md` — this guide.
- `SKILL.md` — portable Agent-Skill manifest.

**Tokens** (`tokens/`)
- `colors.css` · `typography.css` · `spacing.css` · `elevation.css` (radius/shadow/motion) · `fonts.css` (Google Fonts) · `base.css` (element defaults + `.eyebrow`, `.tnum`, `.figure`).

**Components** (`components/`) — React primitives, namespace `window.OrlandoCleaningGrowthSystemDesignSystem_e087c1`
- `core/` — Logo, Button, IconButton, Card (+CardHeader), Badge, Avatar
- `forms/` — Field, Input, Select, Textarea, Checkbox
- `data/` — StatCard, Table, Meter
- `feedback/` — Alert
- `navigation/` — Tabs

**Foundations** (`foundations/`) — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `app/` — the internal product: dashboard, CRM, quote tool, jobs, marketing studio (interactive click-through).
- `public/` — the customer-facing landing page + online quote form.

---

## CAVEATS / FLAGGED SUBSTITUTIONS

1. **No source code or Figma** — the empty `serivice tool/` mount means this is an *original* brand designed from the spec + color direction, not a recreation of an existing product. If you have a real codebase or designs, re-attach them and I'll align to them.
2. **Fonts are Google Fonts substitutions** (Plus Jakarta Sans / Public Sans / JetBrains Mono). Provide licensed brand fonts and I'll swap the `@font-face` setup.
3. **Icons are Lucide (CDN)** — substituted, not supplied. Easy to swap.
4. The brand **logo is bespoke** (designed here). Replace `Logo.jsx` if you have official artwork.
