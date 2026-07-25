# Quest Keeper Landing

Marketing landing page and legal document host for Quest Keeper, a pixel RPG to-do app for iOS.
Serves the privacy-policy and terms URLs required by App Store Connect.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · pnpm · deployed on Vercel.
No component or animation libraries; visuals come from the app's own sprite sheet and the self-hosted [Galmuri](https://galmuri.quiple.dev) pixel font (SIL OFL).

## Routes

| Route              | Content                     |
| ------------------ | --------------------------- |
| `/`                | Permanent redirect to `/ko` |
| `/{ko,en}`         | Landing page                |
| `/{ko,en}/privacy` | Privacy policy              |
| `/{ko,en}/terms`   | Terms of service            |

`sitemap.xml`, `robots.txt`, and the favicon are generated from `app/`.

## Content sources

- Landing copy derives from the App Store listing draft in the `quest-keeper` repo (`docs/store/app-store-listing.md`).
- Korean legal documents in `content/legal/*.ko.md` are verbatim copies of `quest-keeper/docs/legal/`; that repo is the source of truth. Re-copy on change.
- English legal documents are convenience translations; the Korean originals prevail.

## Development

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build (verification gate)
pnpm lint
```

Set `NEXT_PUBLIC_SITE_URL` when the production domain changes (defaults to `https://quest.donminzzi.kr`).
