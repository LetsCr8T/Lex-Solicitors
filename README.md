# Lex Haven Solicitors — Website

Marketing website for **Lex Haven Solicitors**, a Lagos-based law firm.
_Expertise. Integrity. Results._

A single-page marketing site: hero, trust strip, about, why-choose-us, practice
areas, approach, values, FAQ, consultation CTA, and contact — with SEO metadata,
Open Graph image, structured data (LegalService / FAQPage / WebSite), a sitemap,
robots, and a PWA manifest.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-based theme) + **shadcn/ui** (Radix primitives)
- **next/font** — Cormorant Garamond (display) + Poppins (body)
- **ESLint** (flat config) + **Prettier**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Environment variables

See **[.env.example](./.env.example)**. All are optional locally (sensible
fallbacks apply); set them in production.

| Variable               | Purpose                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production site URL. Drives `metadataBase`, canonical, OG, sitemap, JSON-LD. Falls back to `https://lexhavensolicitors.com`. |

> The `/contact` page lists the firm's phone, email, office and hours (and a
> map) — visitors book a consultation by calling or emailing directly. There is
> no on-site form, so no mail/SMTP configuration is required.

## Scripts

| Script                 | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack)                     |
| `npm run build`        | Production build                                     |
| `npm run start`        | Serve the production build (`http://localhost:3000`) |
| `npm run lint`         | Run ESLint                                           |
| `npm run format`       | Format with Prettier                                 |
| `npm run format:check` | Check formatting without writing                     |
| `npm run gen:logo`     | Trim + recolour the client logo into web variants    |
| `npm run gen:favicons` | Rebuild the favicon / app-icon set from the logo     |
| `npm run gen:assets`   | Regenerate the Open Graph image                      |

## Brand assets

The client logo lives at `public/images/lex-logo.png`. Dev-only scripts derive
the web assets from it (via `sharp` / `@resvg/resvg-js`); re-run them if the
logo changes:

- **`npm run gen:logo`** → trimmed `lex-logo-light.png` (for dark backgrounds)
  and a navy `lex-logo-dark.png` (for light backgrounds), used by the header,
  footer and 404.
- **`npm run gen:favicons`** → `favicon.ico`, `icon.png`, `apple-icon.png`, and
  the PWA icons, built from the logo's monogram on a navy chip.
- **`npm run gen:assets`** → the 1200×630 Open Graph card (`og-image.png`).

## Deploying to Vercel

1. Push this repo to GitHub/GitLab and **import it** at
   [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js — no
   build config needed (`build` → `next build`, output handled automatically).
2. **Environment variables** → add `NEXT_PUBLIC_SITE_URL=https://lexhavensolicitors.com`
   (Production). This makes `metadataBase`, canonical URLs, Open Graph, the
   sitemap, and JSON-LD resolve to the real domain.
3. **Domains** → add `lexhavensolicitors.com` (and `www`), then point the
   registrar's DNS at Vercel. Done.

> `metadataBase` depends on the production URL: without `NEXT_PUBLIC_SITE_URL`
> it falls back to `https://lexhavensolicitors.com`, so make sure that env var
> matches the live domain.

## Project structure & conventions

See **[CONVENTIONS.md](./CONVENTIONS.md)** for the folder architecture, design
tokens, and the coding rules the project follows.
