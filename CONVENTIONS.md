# Conventions — Lex Haven Solicitors

These rules apply to **every** phase of this project. Read them before adding
code and keep changes consistent with them.

## Rules

1. **Max 150 lines per file.** If a component grows past it, extract
   sub-components or hooks. No exceptions.
2. **DRY.** Repeated markup/logic becomes a shared component in
   `components/common` or a hook in `hooks`. Never copy-paste blocks.
3. **Reusable & composable.** Prefer small, prop-driven components. Section
   wrappers (`Section`, `Container`, `SectionHeading`) are reused everywhere.
4. **Separation of concerns.**
   - Content/copy lives in `src/data/*` — never hardcode long copy in JSX.
   - Reusable logic lives in `src/hooks`.
   - Presentational components stay dumb; data flows in via props.
   - Types live in `src/types`.
5. **Server Components by default.** Only add `"use client"` when a component
   needs state, effects, browser APIs, or event handlers. Keep client
   boundaries as small and low in the tree as possible.
6. **Accessibility (WCAG AA).** Semantic HTML (`<header> <nav> <main>
   <section> <footer>`), one `<h1>` per page, logical heading order, alt text,
   `aria-*` on interactive/icon-only elements, visible focus states, full
   keyboard nav, respects `prefers-reduced-motion`, contrast ≥ 4.5:1.
7. **Landing sections** each live in `components/landing/<Section>/index.tsx`
   and get composed together in `app/page.tsx` in a later phase. Section-
   specific sub-parts (e.g. a card) live in that section's folder.
8. **Images** via `next/image`. **Metadata** via the App Router Metadata API.
   No manual `<head>` tags.
9. **Styling** via Tailwind + design tokens only. No inline hardcoded hex —
   always use token classes.
10. **TypeScript strict.** No `any`. Export prop interfaces.
11. **Naming:** PascalCase components, camelCase functions/vars, kebab-case
    asset files.

## Project structure

```
src/
  app/          Routes, layout, metadata, global styles
  components/
    ui/         shadcn primitives (added on demand)
    common/     Shared primitives: Container, Section, SectionHeading,
                CTAButton, Logo, JsonLd
    layout/     TopBar, Navbar, MobileNav, Footer
    landing/    One folder per landing section, each with index.tsx
  data/         Content-as-data: siteConfig, nav, services, values, faqs
  hooks/        Reusable client hooks (useMediaQuery, useScrollSpy, useReveal)
  lib/          utils (cn), constants
  types/        Shared TypeScript interfaces
  assets/icons/ Imported inline SVGs
public/images/  Static images
```

## Design tokens

Defined in `src/app/globals.css` and exposed through the Tailwind v4 theme.
Use token classes — never raw hex.

| Token          | Value     | Example utility                     |
| -------------- | --------- | ----------------------------------- |
| ink / primary  | `#0E2038` | `bg-primary` `text-ink`             |
| haven (2ndary) | `#AFC6DE` | `bg-secondary` `bg-haven`           |
| haven tint     | `#DCE6F1` | `bg-muted` `bg-haven-tint`          |
| accent (gold)  | `#B7955C` | `text-accent` `bg-gold`             |
| canvas (bg)    | `#F8FAFC` | `bg-background` `bg-canvas`         |
| body text      | `#475569` | `text-muted-foreground` `text-body` |

Fonts: `font-display` = Cormorant Garamond, `font-sans` = Inter (default).

## Tooling

- `npm run dev` — start the dev server (Turbopack).
- `npm run build` — production build.
- `npm run lint` — ESLint (flat config).
- `npm run format` / `npm run format:check` — Prettier.
