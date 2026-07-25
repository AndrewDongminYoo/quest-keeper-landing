# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing landing page and legal-document host for Quest Keeper, a pixel RPG to-do iOS app.
It exists mainly to serve the privacy-policy and terms URLs required by App Store Connect.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · pnpm · deployed on Vercel.
No component or animation libraries — visuals come from a sprite sheet and the self-hosted Galmuri pixel font.

## Commands

```bash
pnpm dev        # local dev server
pnpm build      # production build — the verification gate (no test suite exists)
pnpm lint       # eslint
trunk fmt && trunk check   # pre-commit gate (trunk is configured in .trunk/)
```

## Architecture

Fully static, two-locale site. Everything hangs off `app/[locale]/`:

- `lib/site.ts` — `LOCALES` (`ko`, `en`), `SITE_URL` (env `NEXT_PUBLIC_SITE_URL`, default `https://quest.donminzzi.kr`), and `localizedAlternates()` for canonical/hreflang metadata. Adding a locale starts here.
- `lib/dictionaries.ts` — all UI copy for both locales in one `dict` object (`satisfies Record<Locale, unknown>`), so ko/en shapes stay in sync at compile time. Pages read `dict[locale]`; there is no i18n library.
- `app/[locale]/layout.tsx` — validates the locale param (`dynamicParams = false` + `generateStaticParams`), loads Galmuri fonts via `next/font/local`, renders header/footer, builds per-locale metadata.
- `lib/legal.ts` — reads `content/legal/<doc>.<locale>.md` at build time and renders to HTML with `marked`; consumed by the `/privacy` and `/terms` pages.
- `components/Sprite.tsx` — the only component: renders a named cell from the 4x2 sprite sheet `public/sprites/dungeon-sheet.png` via background-position. Add new sprites to its `SPRITES` map.
- `/` permanently redirects to `/ko` in `next.config.ts` (Korean-first product).
- `app/robots.ts` and `app/sitemap.ts` generate robots.txt/sitemap.xml from `SITE_URL`.

## Content sources (upstream is elsewhere)

- Korean legal docs (`content/legal/*.ko.md`) are verbatim copies from the `quest-keeper` repo (`docs/legal/`); that repo is the source of truth — re-copy on change, don't originate edits here.
- English legal docs are convenience translations; the Korean originals prevail.
- Landing copy derives from the App Store listing draft in `quest-keeper` (`docs/store/app-store-listing.md`).
- The original design spec lives at `docs/superpowers/specs/2026-07-25-questkeeper-landing-design.md`.

## Conventions

- Korean comments and Korean user-facing strings are intentional — do not translate them.
- Legal footer/publisher identity is "donminzzi lab"; developer contact is in the footer of `app/[locale]/layout.tsx`.
- Accessibility pattern for sprites: pass `label` only for meaningful images; unlabeled sprites are `aria-hidden` decorations.
