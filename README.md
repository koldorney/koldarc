# Koldarc — Mobile Welding (Knoxville, TN)

A fast, single-page marketing site for Koldarc with a "Get a Quote" form that
captures leads into Supabase. Built with **SvelteKit 2 + Svelte 5**.

---

## Run it locally

This project needs **Node 24+** (the build tooling requires it). An `.nvmrc` is
included:

```bash
nvm use          # picks up Node 24.11.1 from .nvmrc
npm install
npm run dev      # http://localhost:5173
```

Other commands:

```bash
npm run build    # production build
npm run preview  # preview the production build
npm run check    # type-check
```

---

## Edit the business info (do this first)

**Everything visitor-facing lives in one file:** [`src/lib/config.ts`](src/lib/config.ts).

Open it and replace the placeholders with the real details:

- `phone` / `phoneHref` — the displayed number **and** the `tel:`/`sms:` link
  (E.164 format, e.g. `+18655550142`)
- `email`
- `pitch`, `hours`, `serviceArea` (towns), and the `services` cards
- `trust` — the "Why Koldarc" badges (insured, years, etc.)

> ⚠️ The phone/email currently in the file are **placeholders** — `(865) 555-0142`
> and `hello@koldarc.com`. Update them before going live.

---

## Connect the quote form to Supabase

Until Supabase is connected, the form politely tells visitors to call/text
instead of silently dropping the lead. To capture leads:

1. **Create / pick a Supabase project**, then apply the migration that creates
   the `quote_requests` table (insert-only RLS for the public site):
   - File: [`supabase/migrations/0001_quote_requests.sql`](supabase/migrations/0001_quote_requests.sql)
   - Run it in the Supabase SQL editor, or via the CLI / MCP.

2. **Add the keys.** Copy `.env.example` to `.env` and fill in:

   ```bash
   PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

   (Supabase dashboard → Project Settings → API.)

3. Restart `npm run dev`. Submissions now land in the `quote_requests` table —
   read them in the Supabase **Table Editor**.

The form is protected by validation + a honeypot field; the anon key can only
**insert** rows (never read/update/delete), per the RLS policy.

---

## SEO

Built into the site (on-page / technical):

- Keyword-tuned `<title>`, meta description, and headings around **"mobile
  welding repair Knoxville."**
- **LocalBusiness** + **FAQPage** JSON-LD structured data (`src/lib/seo.ts`) —
  drives rich results and the local map pack. Uses your geo, hours, service
  area, and services from `config.ts`.
- Open Graph + Twitter tags and a 1200×630 share image (`static/og.png`,
  source `static/og.svg`).
- `sitemap.xml` (auto-generated, prerendered) and `robots.txt`.
- Fast, mobile-first SvelteKit rendering (good Core Web Vitals).

**Before launch:** set the real domain in `config.ts` → `siteUrl` (used by
canonical URLs, schema, OG tags, and the sitemap), and the real `legalName` /
phone / email.

### Off-site — this is what actually wins local rankings

The website makes you legit; these make you *findable*. Do them in order:

1. **Google Business Profile** — claim & verify as a *service-area business*
   (category: Welder; list Knoxville + the towns; hide the street address). #1 lever.
2. **Reviews** — ask every customer; steady flow of recent reviews mentioning
   "mobile welding" + "Knoxville" is the biggest differentiator.
3. **NAP consistency** — identical Name/Address/Phone on the site, GBP, Yelp,
   BBB, Angi, Nextdoor, Facebook. Add those profile URLs to `business.sameAs`
   in `config.ts`.
4. **Citations & local backlinks** — trade directories, Knoxville chamber,
   suppliers, sponsorships.

### Easy ranking wins to add next (each is a new page Google can rank)

Add routes like `/services/trailer-welding-repair` and
`/mobile-welding/farragut`, then list them in `src/routes/sitemap.xml/+server.ts`.
Dedicated service + city pages outrank a single homepage for long-tail searches.

## Deploy

Uses `@sveltejs/adapter-auto`, so it deploys as-is to Vercel, Netlify, or
Cloudflare. Set the two `PUBLIC_SUPABASE_*` environment variables in your host's
dashboard. (For a specific host you can swap in its dedicated adapter.)

---

## Structure

```
src/
  app.css                  design system (steel + molten-arc palette)
  app.html                 fonts, meta, favicon
  lib/
    config.ts              ← business info, services, trust (EDIT THIS)
    server/supabase.ts     server-side Supabase client (graceful if unset)
  routes/
    +layout.svelte         header (sticky nav) + footer
    +page.svelte           hero, services, why-us, service area, quote form
    +page.server.ts        quote form action -> Supabase insert
supabase/
  migrations/0001_quote_requests.sql
```
