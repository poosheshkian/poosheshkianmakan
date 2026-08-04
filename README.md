# FERRUM Industrial — Project Foundation

Modern industrial company website. Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui.

> No reference video was available when this foundation was built, so the direction below was
> defined explicitly. Swap tokens in `app/globals.css` and copy in `lib/site-config.ts` to
> retarget the brand without touching component code.

## Getting started

```bash
npm install
npm run dev
```

Requires Node 18.18+ (Node 20 LTS recommended).

## Design system

| Token | Value | Purpose |
|---|---|---|
| `--color-background` | `#0B0D10` | Page background, graphite |
| `--color-surface` | `#14171B` | Panel / card background |
| `--color-foreground` | `#E9EBEE` | Primary text |
| `--color-muted` | `#7A828C` | Secondary text |
| `--color-border` | `#22262B` | Hairline dividers |
| `--color-accent` | `#FF5A1F` | Signal orange — CTAs, active states, eyebrows |
| `--color-status` | `#3DDC84` | Live/operational indicators only |

**Type:** Oswald (display, uppercase, tracked) / Inter (body) / JetBrains Mono (data, specs, coordinates).

**Signature element:** `SpecPlate` / `SpecReadout` — a technical nameplate/spec-sheet motif
(`components/ui/spec-plate.tsx`) used for capability cards, stat blocks, and project entries
instead of generic cards.

## Architecture

```
app/
  layout.tsx        Root layout — fonts, SEO metadata, JSON-LD, Header/Footer shell
  globals.css        Tailwind v4 CSS-first theme tokens + base styles
  page.tsx            Homepage (placeholder — full build is the next step)
  robots.ts / sitemap.ts   SEO
components/
  layout/            Header, Footer, Container, Section (structural, reusable across all pages)
  ui/                 shadcn-style primitives (Button, SpecPlate, ...) — add more via `npx shadcn add`
lib/
  site-config.ts      Single source of truth: nav items, contact info, metadata defaults
  utils.ts            cn() class merge helper
```

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Config is already wired in `components.json` (New York style, CSS variables, `lucide` icons).

## Next steps

Pages are built one at a time on top of this foundation:
1. Homepage (hero, capability overview, industries, featured projects, CTA)
2. Capabilities
3. Industries
4. Projects
5. Company
6. Contact

Each will reuse `Section`, `SectionHeading`, `Container`, `SpecPlate`, and `Button` — no new
structural components should be needed unless a page has a genuinely new content shape.
