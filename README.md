# BoundPro marketing site

Next.js (App Router) marketing site for **BoundPro**, A and D Software for Federal Firearms Licensees — plus an MDX blog.

## Stack

- Next.js App Router + TypeScript
- Hand-written CSS (ported from the original static site)
- Blog posts as MDX in `content/blog/`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Blog posts

Add a file under `content/blog/`:

```mdx
---
title: "Your title"
description: "Short summary for the index and SEO."
date: "2026-07-18"
author: "BoundPro"
# draft: true   # hidden in production builds
---

Markdown / MDX body here.
```

The slug is the filename without `.mdx` (e.g. `hello-boundpro.mdx` → `/blog/hello-boundpro`).

## Deploy

```bash
npm run build
npx vercel deploy --prod
```

`next.config.ts` permanently redirects legacy `*.html` URLs to clean paths.

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/features` | Feature deep-dive |
| `/pricing` | Plans + FAQ |
| `/comparison` | Competitor comparison |
| `/about` | Mission + commitments |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
