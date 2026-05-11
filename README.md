# BoundPro marketing site

Static marketing site for **BoundPro**, A and D Software for Federal Firearms Licensees.

This is a fully self-contained, dependency-free static website. No build step, no Node, no `node_modules`. Drop the folder anywhere and serve it.

## What's in the box

```
marketing-site/
├── index.html          ← Homepage
├── features.html       ← Deep-dive on every feature
├── pricing.html        ← 3 tiers + feature matrix + FAQ
├── comparison.html     ← Cited comparison vs FastBound, Orchid, Easybound, AIM
├── about.html          ← Mission + compliance commitments
├── sitemap.xml
├── robots.txt
├── vercel.json         ← Headers, caching, clean URLs for Vercel deploy
├── css/
│   └── styles.css      ← Hand-written, no Tailwind / no framework (~22 KB)
├── js/
│   └── main.js         ← Mobile nav toggle (~0.5 KB, no dependencies)
└── images/
    ├── logo.svg
    ├── logo-icon.svg   ← Favicon + small placements
    └── screenshots/
        ├── dashboard.svg
        ├── ledger.svg
        ├── 4473.svg
        ├── reports.svg
        └── compliance.svg
```

Five hand-designed SVG screenshots double as the hero image, feature illustrations, and "how it works" steps. They render crisply at any resolution and stay tiny.

## View it locally

Pick whichever you have installed:

```bash
# Node (no install required)
npx serve

# or Python 3
python3 -m http.server 8000

# or PHP
php -S localhost:8000
```

Then open http://localhost:8000 (or whatever port the tool prints).

## Deploy

### Vercel (recommended)

```bash
npx vercel deploy --prod
```

The included `vercel.json` handles security headers, long-cache for static assets, and clean URLs (`/pricing` instead of `/pricing.html`).

### Netlify

```bash
npx netlify deploy --prod --dir .
```

### Cloudflare Pages / GitHub Pages / S3 / any static host

Just upload the folder. There's no build step.

## Before you launch — checklist

The site is launch-ready visually but contains a few placeholders the user should swap in production:

- [ ] **Domain** — replace `https://boundpro.app/` with your actual domain in:
  - All `<link rel="canonical">` tags (5 pages)
  - All Open Graph and Twitter Card `og:url` / `og:image` tags (5 pages)
  - `sitemap.xml` (5 URLs)
  - `robots.txt` sitemap URL
- [ ] **App URLs** — `https://app.boundpro.app/login` and `/signup` are placeholders. Point them to your real app.
- [ ] **Customer testimonials** — the homepage testimonials are clearly labeled as "sample feedback from dealers piloting BoundPro" with names changed. Replace with real testimonials before you remove that disclaimer.
- [ ] **Email addresses** — `hello@boundpro.app`, `sales@boundpro.app` are placeholders.
- [ ] **Stripe checkout** — pricing page CTAs deep-link with `?plan=starter|pro` query strings. Wire those into your Stripe checkout flow.
- [ ] **Spanish 4473 footnote (★)** — the comparison page honestly notes Spanish 4473 isn't shipped yet; remove the footnote when it ships.
- [ ] **Webhooks footnote on FastBound 3310.12** — see footnote 7 on `/comparison.html`. The claim is implied from FastBound's "unlimited multiple sale reports" but we couldn't find an explicit "automatic detection" page; verify directly with FastBound or update the cell.
- [ ] **OG / Twitter card preview image** — the comparison/about/pricing/features pages use `dashboard.svg` as the OG image. Twitter and LinkedIn don't render SVG OG images well — you'll want to export each SVG to a 1200×630 PNG before launch and update `og:image` tags. Suggested filenames: `og-home.png`, `og-features.png`, etc., in `images/og/`.
- [ ] **Schema.org JSON-LD** — the homepage and pricing page include Organization + SoftwareApplication + Product schema. Update `url`, `logo`, `sameAs` (social profiles) once you have them.
- [ ] **Analytics** — no analytics included. Add Plausible, Fathom, or GA4 by dropping a single `<script>` tag before `</head>` in each page.

## Copy / SEO notes

- **Primary keyword**: "A and D Software" — used naturally on every page in `<title>`, `<meta description>`, the H1, body copy, and footer microcopy. Not stuffed.
- **Secondary keywords**: "FFL software", "bound book software", "ATF Form 4473 software", "electronic A and D book", "FFL compliance software", "NFA tracking" — woven into headings and body throughout.
- **Heading hierarchy**: One `<h1>` per page, proper `<h2>` / `<h3>` nesting, semantic `<section>` / `<article>` / `<nav>` / `<aside>` throughout.
- **Alt text**: Every SVG screenshot has descriptive alt text (e.g. "BoundPro dashboard showing inventory totals, recent A&D ledger entries, NICS pending forms, and FFL compliance status"). The logo uses descriptive `aria-label`.
- **Internal linking**: Each homepage feature card deep-links to the relevant section of `/features.html` (e.g. `/features.html#nfa`).
- **Performance**: ~22 KB of CSS (no framework), ~0.5 KB of JS (mobile nav only), inline-able SVG images, lazy-loading on below-fold images. Should comfortably hit Lighthouse 95+ on every page.
- **Accessibility**: AA-compliant color contrast on all text, focus-visible states preserved, proper landmark structure, `prefers-reduced-motion` is respected (no JS animations).

## Brand reference

- **Navy**: `#0a1628` primary, `#0f1d33` accent
- **Amber**: `#d97706` primary, `#b45309` hover
- **Type**: Inter (UI) + JetBrains Mono (numbers, codes)
- All design tokens live as CSS custom properties at the top of `css/styles.css` — change them there, every page updates.

## Honest gaps the user should know about

These are things flagged in the build that should be fixed/verified before public launch:

1. **OG images are SVG**, which Twitter and Slack render poorly. Export PNGs before launching paid acquisition.
2. **Cloud Bound Book** (mentioned in the original brief) doesn't appear to exist as a publicly marketed product — searches return Easybound and Logbooks for Guns. Comparison page omits it.
3. **AIM POS** doesn't publish bound-book pricing publicly — the comparison cell honestly says "Demo only" with a footnote.
4. **FastBound 3310.12 auto-detection** is implied by "unlimited multiple sale reports" in their tier inclusions but not explicitly described as automatic. Footnote 7 flags this — confirm with FastBound before relying on the cell.
5. **Spanish 4473** is not shipped in the actual BoundPro product yet (per `FEATURES.md` / `CHECKLIST.md` in the parent repo). The comparison page honestly marks it as "Q2 2026" with a roadmap footnote (★) rather than claiming it.
6. **Webhooks** are listed in the `Enterprise` plan, but per the parent app's `FEATURES.md` they are scheduled for v1.1. The pricing page claims them as Enterprise; either ship them before launch or move that bullet to a "coming soon" badge.
7. **Hash-chained audit log** is described in the actual app's audit-log triggers but the user-facing UI is also still on the v1 roadmap. The marketing copy assumes it's shipping.
8. **No favicon `.ico`** — modern browsers handle `logo-icon.svg` fine via `<link rel="icon" type="image/svg+xml">`, but if you need IE/Edge legacy support you'll want a `.ico` too.

## License

This is your code. Move it to its own repo, change anything, redistribute as you like.
