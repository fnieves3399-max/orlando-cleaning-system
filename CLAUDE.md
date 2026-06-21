# Orlando Cleaning Growth System — Project Brain

## What This Is
A single-file business management app for a local house cleaning company in Orlando, FL.
Built as one HTML file (`index.html`) using React 18 + Babel CDN + Supabase as the backend.
Hosted on GitHub Pages. No build step — edit `index.html`, push to GitHub, it's live.

## Live URLs
- **App**: https://fnieves3399-max.github.io/orlando-cleaning-system/
- **GitHub repo**: https://github.com/fnieves3399-max/orlando-cleaning-system
- **Supabase dashboard**: https://supabase.com/dashboard/project/dhlbrrfofhbccpgfgyas

## Credentials
- **Supabase URL**: `https://dhlbrrfofhbccpgfgyas.supabase.co`
- **Supabase Anon Key**: stored in `index.html` under `SUPABASE_ANON_KEY`
- **Supabase Service Role Key**: in Supabase dashboard → Project Settings → API
- **Supabase Personal Access Token**: in Supabase → Account → Access Tokens
- **GitHub user**: `fnieves3399-max`

## Database Schema (Supabase / PostgreSQL)

### `customers` table — CRM leads
```sql
id uuid primary key
user_id uuid references auth.users  -- owner's auth UID
first_name text
last_name text
phone text
email text
address text
city text (default 'Orlando')
zip text
lead_source text  -- 'Google','Facebook','Instagram','Yelp','Nextdoor','Referral','TikTok','Repeat','Walk-in','Other'
customer_type text  -- 'Residential','Airbnb host','Realtor','Commercial','Property manager'
notes text
status text  -- 'new lead','quoted','booked','active','inactive','lost'
created_at timestamptz
```

### `jobs` table — scheduled cleans
```sql
id uuid primary key
user_id uuid references auth.users
customer_id uuid references customers(id) on delete set null
subcontractor_id uuid references subcontractors(id) on delete set null
address text
service_type text  -- 'Standard cleaning','Deep cleaning','Move-in / move-out','Airbnb turnover','Post-construction'
scheduled_date date
start_time text  -- '09:00'
end_time text    -- '11:00'
price numeric
payout numeric   -- amount paid to subcontractor
status text  -- 'scheduled','in progress','completed','canceled'
notes text
created_at timestamptz
```

### `subcontractors` table — cleaner network
```sql
id uuid primary key
user_id uuid references auth.users
name text
phone text
email text
service_area text
pay_rate_type text  -- 'percentage','hourly','flat'
pay_rate numeric (default 60 = 60%)
jobs_completed int
rating numeric (default 5.0)
status text  -- 'active','inactive'
notes text
created_at timestamptz
```

### `expenses` table — business costs
```sql
id uuid primary key
user_id uuid references auth.users
category text  -- 'Supplies','Gas','Marketing','Software','Other'
amount numeric
notes text
expense_date date
created_at timestamptz
```

### Row Level Security
All tables have RLS enabled. Each user only sees their own rows via `auth.uid() = user_id`.

## How to Add Records When Network is Blocked

Since this Claude Code environment may block outbound network to Supabase, use this pattern
to insert records via the Supabase SQL Editor (supabase.com → project → SQL Editor):

```sql
-- Add a lead (replace values as needed)
insert into customers (user_id, first_name, last_name, phone, email, city, zip, lead_source, customer_type, status, notes)
select id, 'FirstName', 'LastName', '(407) 555-0000', 'email@example.com', 'Orlando', '32801', 'Google', 'Residential', 'new lead', 'Notes here'
from auth.users limit 1;

-- Add a job
insert into jobs (user_id, customer_id, address, service_type, scheduled_date, start_time, end_time, price, payout, status, notes)
select u.id, c.id, '123 Palm St, Orlando FL', 'Deep cleaning', '2026-06-25', '09:00', '11:00', 240, 144, 'scheduled', ''
from auth.users u, customers c where c.last_name = 'Garcia' limit 1;
```

## App Structure (inside index.html)

All code is one `<script type="text/babel">` block. Sections in order:

1. **Config** — SUPABASE_URL, SUPABASE_ANON_KEY, createClient
2. **Icons** — `I.dashboard`, `I.users`, `I.calendar`, etc. (SVG icon map)
3. **Utilities** — `fmt$()`, `fmtDate()`, `STATUS_STYLE`, `AVATAR_COLORS`
4. **Core UI components** — `Btn`, `Card`, `CardHeader`, `Badge`, `Avatar`, `Input`, `Sel`, `Field`, `Check`, `StatCard`, `Table`, `Meter`, `Tabs`, `Alert`, `Spin`, `Loading`, `Drawer`, `useToast`
5. **Logo + App Shell** — `Logo`, `Sidebar`, `Topbar`
6. **CRM Screen** — `CrmDrawer`, `Crm`
7. **Natural Language Parsers** — `parseLeadText()`, `parseJobText()`
8. **Quick Add Components** — `QuickAddLead`, `QuickAddJob`
9. **Add Lead Form** — `AddLeadForm`
10. **Quote Calculator** — `Quote` (with `TYPES`, `FREQS`, `ADDONS`)
11. **Jobs Screen + Calendar** — `CalendarView`, `Jobs`
12. **Subcontractors Screen** — `Subs`
13. **Financials Screen** — `Finance`
14. **Marketing Studio** — `Marketing` (with `MKT_TEMPLATES`, `WEEKLY_SCHEDULE`)
15. **Local SEO Screen** — `Seo`
16. **Login Screen** — `Login`
17. **Main App** — `App`, `SCREENS`, `ReactDOM.createRoot`

## Screens / Features

| Screen | Nav label | Key features |
|--------|-----------|-------------|
| Dashboard | Dashboard | 7 stat cards, upcoming jobs table |
| CRM | Leads & CRM | Lead list with tabs by status, Quick Add (NLP), Add lead form, lead detail drawer with edit + status update |
| Quote | Quote calculator | Live pricing, beds/baths/sqft/type/addons/frequency, saves to Supabase |
| Jobs | Jobs | Calendar view + list view, Quick Add job (NLP), new job form, job detail drawer with status actions |
| Subs | Subcontractors | Sub list, add subcontractor form |
| Finance | Financials | Revenue/payouts/expenses/profit, breakdown by service + city + expense category |
| Marketing | Marketing studio | Content generator (Instagram/Facebook/GBP/Story/Email/SMS/Reel), weekly schedule, hashtag bank |
| SEO | Local SEO | Keywords, page ideas, blog ideas, review templates, meta titles |

## Service Areas
Orlando, Winter Park, Lake Nona, Kissimmee, Windermere, Clermont, Oviedo, Sanford, Apopka, Altamonte Springs, Maitland, Casselberry, Longwood, Doctor Phillips

## Quote Pricing Formula
```
base = 120 + (sqft × 0.05) + (beds × 15) + (baths × 20)
base = base × type_multiplier  (Deep=1.5x, Move=1.6x, Post-construction=2x)
base += 20 if pets
total = base + addons
final = total × (1 - frequency_discount)  (Weekly=15%, Biweekly=10%, Monthly=5%)
payout = price × 0.60 (default sub payout)
```

## Deployment
- Push `index.html` to `main` branch on GitHub
- GitHub Pages auto-deploys in ~30 seconds
- No build step, no CI needed

## How Claude Controls This App

**To add a lead:** Generate SQL insert → user pastes in Supabase SQL Editor
OR (when MCP/network is available): use Supabase MCP tools directly

**To edit the app UI/features:** Edit `index.html`, commit, push — live in 30 sec

**To add a new screen:** Add component to `index.html`, add entry to `NAV` array and `SCREENS` object

**MCP Setup:**
- Server: `https://mcp.supabase.com/mcp?project_ref=dhlbrrfofhbccpgfgyas`
- Auth: Bearer token from Supabase → Account → Access Tokens
- MCP config stored in `.mcp.json` (user-level, not committed)
- Network must allow: `*.supabase.co`, `mcp.supabase.com`

## Social Media Integration Status

### What's built (in Marketing Studio):
- Content generator with templates for Instagram, Facebook, Google Business, Stories, Email, SMS, Reels/TikTok
- Weekly posting schedule
- Hashtag bank
- Copy-to-clipboard for all content

### What would enable auto-posting:
- **Make.com or Zapier** — connect a webhook in the app → they post to Instagram/Facebook automatically
- **Buffer API** — schedule posts programmatically
- **Meta Graph API** — direct Instagram/Facebook posting (requires Meta Business account + app review)

### To implement auto-posting, user needs to provide:
- Make.com or Zapier webhook URL, OR
- Buffer API key, OR
- Meta App credentials (App ID + App Secret + long-lived access token)

## Owner Info
- Business: Orlando Cleaning (house cleaning, Orlando FL metro)
- Target customers: Residential, Airbnb hosts, Realtors, Property managers
- Service owner email: felix.nieves@me.com
