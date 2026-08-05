# QuestKeeper Landing Page Design

Approved in-session on 2026-07-25 (quest-keeper Claude Code session).
Marketing landing + legal document hosting for the QuestKeeper iOS app, deployed to Vercel.
The App Store Connect privacy-policy URL requirement (`quest-keeper/docs/store/app-store-listing.md` §기타 리스팅 항목) is satisfied by this site.

## Decisions

- **Stack**: Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, pnpm. No component library, no animation library (CSS only). One content dependency: `marked` for rendering the legal markdown.
- **Deploy**: Vercel. Site URL constant defaults to `https://quest-keeper-landing.vercel.app`, overridable via `NEXT_PUBLIC_SITE_URL` when a custom domain lands.
- **Locales**: `ko` (primary) and `en`. No i18n library; `app/[locale]/` segment + a per-locale dictionary object. `/` issues a permanent redirect to `/ko` via `next.config.ts` (Korean-first product; hreflang alternates cover discovery, `x-default` → `/ko`). Accept-Language sniffing was deliberately dropped to avoid middleware/proxy machinery.
- **Legal pages**: markdown is the source of truth (precedent: mirae-landing `markdown-sourced-legal-pages`). Korean originals are verbatim copies of `quest-keeper/docs/legal/*.md` (upstream repo remains the source of truth; re-copy on change). English versions are draft translations carrying the same "draft, not legal advice" disclaimer plus a "Korean version prevails" note. The `[게시자 법적 명의]` placeholder is intentionally preserved until the publisher-identity decision is made.
- **Design**: pixel RPG, dark-only theme (dungeon brand identity overrides dual-mode default). Galmuri pixel font (OFL, self-hosted woff2) for display/UI, system sans for long body text. Visual assets come from the app's own sprite sheet (`public/sprites/dungeon-sheet.png`, 1774x887, 4x2 grid: hero, fallen hero, slime, skeleton / dragon, grave, coin, hit effect) rendered via CSS background-position, `image-rendering: pixelated`. Single accent color: coin gold. Motion: CSS `steps()` micro-animations only, gated behind `prefers-reduced-motion`.
- **SEO**: Metadata API with per-locale title/description from the ASO copy (`docs/store/app-store-listing.md`), canonical + hreflang alternates, OpenGraph/Twitter cards (static OG image downscaled from the sprite sheet), `sitemap.ts`, `robots.ts`, JSON-LD `MobileApplication` on the landing page.
- **Developer info**: footer block with Dongmin Yu, GitHub profile link (`AndrewDongminYoo`), contact `ydm2790@gmail.com`.
- **CTA**: The primary CTA links to the released App Store listing at `https://apps.apple.com/kr/app/quest-keeper/id6794192291`.

## Routes

| Route              | Content                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `/`                | 308 redirect to `/ko` (next.config)                                                                      |
| `/{ko,en}`         | Landing: split hero, monster-growth panel, daily-dungeon bento, feature split, privacy manifesto, footer |
| `/{ko,en}/privacy` | Privacy policy (markdown-rendered)                                                                       |
| `/{ko,en}/terms`   | Terms of service (markdown-rendered)                                                                     |

## Out of scope

Analytics, newsletter/waitlist capture, App Store screenshots section (no screenshots exist yet), CMS, light theme.
