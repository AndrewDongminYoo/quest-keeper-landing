# Quest Keeper 1.1 Landing Update

## Status

Approved for implementation on 2026-08-08.

## Goal

Reflect Quest Keeper 1.1.0 in the existing landing page without replacing its established flow or diluting the product promise of a daily pixel dungeon for small wins.

The update must show three user-facing additions: directly choosing the hero's gender and hair color, the completion-time sword battle, and the expanded nine-monster catalog.

## Product Constraints

- Preserve the existing sequence of hero, monster growth, daily dungeon loop, core features, privacy statement, FAQ, and footer.
- Place one new showcase section after monster growth and before the daily dungeon loop.
- Keep the product tone playful, forgiving, and shame-free.
- Keep the page dark, restrained, and pixel-art based.
- Reuse approved Quest Keeper application artwork only.
- Do not invent inventory, rewards, progression, currencies, shops, unlocks, persistent battle logs, or app-data synchronization.
- Keep the landing demo independent from app settings and user data.
- Do not add dependencies or a general-purpose animation system.

## Showcase Section

### Structure

The section introduces a custom hero and a completion battle as one compact, interactive demonstration.

On large screens, the hero appearance controls and preview occupy the left side, while a fixed-size battle stage and a compact monster catalog occupy the right side.

On small screens, the same content stacks vertically with the controls preceding the battle stage and catalog.

The section uses the existing pixel panel, color tokens, display fonts, and square corners.

### Korean Copy

```plaintext
나만의 용사로,
오늘의 퀘스트에 맞서세요

직접 성별과 머리색을 고른 용사가,
완료 순간 검을 휘둘러 몬스터를 처치합니다.

성별
남성 / 여성

머리색
검정 / 갈색 / 파랑 / 빨강

9종의 몬스터가 기다립니다
퀘스트의 난이도에 따라 슬라임부터 리치까지,
서로 다른 몬스터가 던전에 나타납니다.
```

The English dictionary entry must express the same product meaning without introducing different functionality.

### Appearance Demo

The demo exposes a gender choice with `남성` and `여성` labels, plus four hair-color choices: `검정`, `갈색`, `파랑`, and `빨강`.

The selected appearance updates the hero preview immediately.

The landing page does not persist a selection and does not claim to change the installed app.

### Battle Demo

An explicit attack button begins a short, local-only sequence: wind-up, sword strike and impact, then victory.

The selected hero uses the matching idle and strike frames.

The user can select any of the nine approved monsters, and the selected monster appears opposite the hero immediately.

A compact grid presents all nine monster sprites beneath the battle stage, marks the active selection, and keeps that selection after the battle resolves.

The battle stage keeps a fixed visual footprint throughout every phase.

The attack control is unavailable while its sequence is resolving and becomes available after the victory state finishes.

The demo defaults to the app's existing male, blue-hair hero on each page load.

## Assets

Copy the following approved application PNG artwork into a landing-only public path:

- idle and strike frames for all eight hero gender and hair-color combinations;
- slime, bat, mushroom, skeleton, orc, mimic, dragon, golem, and lich;
- the battle-impact artwork.

The landing does not reference the app checkout at runtime.

Artwork remains pixelated and is presented without resampling, generated variants, or decorative background scenery.

## Localization And Discoverability

Add a localized showcase dictionary object for Korean and English.

Add one FAQ item in both languages that confirms the app supports choosing the hero's gender and hair color.

The existing FAQ JSON-LD construction automatically includes this item, so no separate schema path is required.

Do not change the existing App Store CTA, privacy, offline, notification, or widget claims.

## Accessibility And Motion

Use semantic buttons for appearance and attack controls.

Expose the current selected appearance and current battle state with localized labels.

Hide purely decorative sprite layers from assistive technology.

When reduced motion is requested, advance through the same semantic battle states without translation, scaling, rotation, or repeating animation.

Keyboard focus remains visible on every interactive control.

## Implementation Boundaries

- Add a focused client component for appearance selection and battle-demo state.
- Add the new showcase section to `app/[locale]/page.tsx`.
- Add localized content and the FAQ entry in `lib/dictionaries.ts`.
- Add only the animation styles required by this component to `app/globals.css`.
- Store copied artwork beneath `public/sprites/` in a dedicated 1.1 directory.
- Do not modify legal routes, site URL configuration, or the App Store link.

## Failure Handling

If an expected approved artwork file is unavailable, stop the implementation and report the missing source rather than silently substituting an unrelated sprite.

Reset pending timers when the battle demo unmounts so stale updates cannot alter a later render.

Prevent repeated attacks while a battle sequence is active.

## Verification

Run the following gates after implementation:

```plaintext
pnpm lint
pnpm build
git diff --check
```

Manually verify both Korean and English pages on mobile and desktop widths.

For each locale, select every appearance option, trigger the battle demo, confirm that repeated attacks are blocked during resolution, and repeat with reduced motion enabled.
