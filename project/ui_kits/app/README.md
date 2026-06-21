# App UI Kit — Orlando Cleaning Growth System (internal product)

Interactive click-through recreation of the **internal product** the business owner uses. Open `index.html`.

## Flow
Starts on a **login** split-screen (navy brand panel + form). Any submit signs in to the dashboard. The navy sidebar switches between eight screens; the topbar carries search, notifications, and the primary **Add lead** action.

## Screens
- **Dashboard** (`DashboardScreen.jsx`) — KPI `StatCard`s, monthly revenue bars, revenue-by-service `Meter`s, upcoming-jobs table.
- **Leads & CRM** (`CrmScreen.jsx`) — status `Tabs`, leads `Table`; click a row to open the **customer drawer** (contact, quote/job history tabs, follow-up reminder, total revenue).
- **Quote calculator** (`QuoteScreen.jsx`) — live pricing engine (base + sqft + beds/baths + type multiplier + add-ons + frequency discount) with a sticky estimate card.
- **Jobs**, **Subcontractors**, **Financials** (`OpsScreens.jsx`) — schedule table, subcontractor network table, expense/revenue breakdowns.
- **Marketing studio** & **Local SEO** (`MarketingScreens.jsx`) — campaign setup → platform-specific generated copy; SEO keyword/idea generators.

## Architecture
- `Icons.jsx` — Lucide-style icon set → `window.OCGSIcons`.
- `data.js` — mock data → `window.OCGSData`.
- `AppShell.jsx` — `Sidebar` + `Topbar` → `window.OCGSShell`.
- Screen files register onto `window.OCGSScreens`.
- `index.html` loads the DS bundle + these scripts and wires nav state.

All UI is composed from the design-system components (`window.OrlandoCleaningGrowthSystemDesignSystem_e087c1`): `StatCard, Card, Table, Badge, Button, Avatar, Tabs, Meter, Field, Input, Select, Textarea, Checkbox, Alert`. Nothing is re-implemented.

> Renders once the design-system bundle (`_ds_bundle.js`) has been compiled by the project.
