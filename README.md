# Lex Haven Solicitors — Website

Marketing website for **Lex Haven Solicitors**, a Lagos-based law firm.
_Expertise. Integrity. Results._

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-based theme) + **shadcn/ui** (Radix primitives)
- **next/font** — Cormorant Garamond (display) + Inter (body)
- **ESLint** (flat config) + **Prettier**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack) |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |

## Project structure & conventions

See **[CONVENTIONS.md](./CONVENTIONS.md)** for the folder architecture, design
tokens, and the coding rules every phase follows.

## Build phases

- **Phase 1 — Scaffolding & structure (current).** Tooling, folder
  architecture, design tokens, SEO/metadata baseline, and typed stubs. The home
  page renders a blank placeholder; no visual sections are built yet.
- **Later phases.** Landing sections (`src/components/landing/*`), layout
  (nav/footer), content data, structured data (JSON-LD), and interactivity.
