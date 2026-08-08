# Quest Keeper 1.1 Landing Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a localized, accessible landing-page showcase for Quest Keeper 1.1.0 hero customization, sword-battle completion feedback, and the nine-monster catalog.

**Architecture:** A dedicated client component owns only the interactive demo's hero and monster selection, fixed battle phase sequence, and timer cleanup. The server-rendered landing page supplies localized copy from the existing dictionary and places the showcase between growth and the daily-dungeon loop. Approved source PNGs are copied into a landing-owned static directory and rendered as pixelated CSS backgrounds.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, CSS media queries, pnpm.

## Global Constraints

- Preserve the existing hero, growth, daily-dungeon loop, core features, privacy, FAQ, and footer sequence.
- Insert exactly one new showcase section after monster growth and before the daily-dungeon loop.
- Use only approved Quest Keeper artwork copied into the landing repository.
- Use the user's Korean wording: `직접 성별과 머리색을 고른`, `성별`, `남성`, and `여성`.
- Do not add dependencies, user-data persistence, app-data synchronization, game economy features, or a generic animation system.
- Keep both locales functionally equivalent and retain the current App Store, privacy, offline, notification, and widget claims.
- Honor `prefers-reduced-motion` by keeping semantic battle phases while disabling positional and transform motion.
- Leave all changes uncommitted unless the operator explicitly requests a commit.

---

## File Structure

- Create: `components/BattleShowcase.tsx` — Client-only appearance controls, battle phase state, timer lifecycle, sprite rendering, and accessible labels.
- Modify: `app/[locale]/page.tsx` — Render the showcase directly after the growth section and before the daily-dungeon loop.
- Modify: `lib/dictionaries.ts` — Add localized showcase copy and one localized appearance FAQ item per locale.
- Modify: `app/globals.css` — Add the narrowly scoped battle-stage phase and reduced-motion styles.
- Create: `public/sprites/v1-1/hero/*.png` — Sixteen approved idle and strike hero frames.
- Create: `public/sprites/v1-1/monsters/*.png` — Nine approved monster sprites.
- Create: `public/sprites/v1-1/impact.png` — Approved battle-impact artwork.

## Task 1: Copy and Validate the Approved Static Artwork

**Files:**

- Create: `public/sprites/v1-1/hero/male-{black,brown,blue,red}-{idle,strike}.png`
- Create: `public/sprites/v1-1/hero/female-{black,brown,blue,red}-{idle,strike}.png`
- Create: `public/sprites/v1-1/monsters/{slime,bat,mushroom,skeleton,orc,mimic,dragon,golem,lich}.png`
- Create: `public/sprites/v1-1/impact.png`

**Consumes:** Approved app-source artwork from `/Volumes/dongminyu/Development/01_personal/quest-keeper/QuestKeeper/Assets.xcassets`.

**Produces:** Twenty-six landing-owned public PNG paths used by `BattleShowcase`.

- [x] **Step 1: Create the exact landing asset directories.**

```zsh
mkdir -p public/sprites/v1-1/hero public/sprites/v1-1/monsters
```

- [x] **Step 2: Copy the sixteen hero frames without image processing.**

```zsh
for gender in male female; do
  for hair in black brown blue red; do
    for frame in idle strike; do
      source_asset="/Volumes/dongminyu/Development/01_personal/quest-keeper/QuestKeeper/Assets.xcassets/sprite-hero-${gender}-${hair}-${frame}.imageset/sprite-hero-${gender}-${hair}-${frame}.png"
      cp "$source_asset" "public/sprites/v1-1/hero/${gender}-${hair}-${frame}.png"
    done
  done
done
```

- [x] **Step 3: Copy the nine monster sprites and the impact artwork without image processing.**

```zsh
for monster in slime bat mushroom skeleton orc mimic dragon golem lich; do
  source_asset="/Volumes/dongminyu/Development/01_personal/quest-keeper/QuestKeeper/Assets.xcassets/sprite-${monster}.imageset/sprite-${monster}.png"
  cp "$source_asset" "public/sprites/v1-1/monsters/${monster}.png"
done
cp "/Volumes/dongminyu/Development/01_personal/quest-keeper/QuestKeeper/Assets.xcassets/sprite-battle-impact.imageset/sprite-battle-impact.png" public/sprites/v1-1/impact.png
```

- [x] **Step 4: Validate count, names, dimensions, and byte identity.**

```zsh
test "$(find public/sprites/v1-1 -type f -name '*.png' | wc -l | tr -d ' ')" = 26
for landing_asset in public/sprites/v1-1/hero/*.png; do
  sips -g pixelWidth -g pixelHeight "$landing_asset" | rg '512'
done
for monster in slime bat mushroom skeleton orc mimic dragon golem lich; do
  cmp -s "/Volumes/dongminyu/Development/01_personal/quest-keeper/QuestKeeper/Assets.xcassets/sprite-${monster}.imageset/sprite-${monster}.png" "public/sprites/v1-1/monsters/${monster}.png"
done
```

Expected: 26 files exist, every hero frame is 512 by 512 pixels, and every monster copy is byte-identical to its approved source.

## Task 2: Add a Focused Battle Showcase Component

**Files:**

- Create: `components/BattleShowcase.tsx`
- Test: Manual component behavior on `/{ko,en}` after Task 3 mounts it.

**Consumes:** The Task 1 public asset paths and a typed localized content object supplied by the page.

**Produces:** `BattleShowcase`, a client component with the following public interface.

```ts
type BattleShowcaseProps = {
  content: {
    title: readonly [string, string];
    body: string;
    genderLabel: string;
    genders: readonly [string, string];
    hairLabel: string;
    hairColors: readonly [string, string, string, string];
    attack: string;
    battleStates: readonly [string, string, string, string];
    monstersTitle: string;
    monstersBody: string;
    monsterNames: readonly string[];
  };
};
```

- [x] **Step 1: Define the small, closed domain model at the top of the component.**

```ts
type HeroGender = "male" | "female";
type HeroHairColor = "black" | "brown" | "blue" | "red";
type BattlePhase = "idle" | "windUp" | "strike" | "victory";

const MONSTERS = [
  "slime",
  "bat",
  "mushroom",
  "skeleton",
  "orc",
  "mimic",
  "dragon",
  "golem",
  "lich",
] as const;
const BATTLE_DELAYS = { strike: 180, victory: 420, reset: 1050 } as const;
```

- [x] **Step 2: Implement the default appearance and deterministic phase lifecycle.**

```tsx
const [gender, setGender] = useState<HeroGender>("male");
const [hairColor, setHairColor] = useState<HeroHairColor>("blue");
const [phase, setPhase] = useState<BattlePhase>("idle");
const timeoutIds = useRef<number[]>([]);

function attack() {
  if (phase !== "idle") return;
  setPhase("windUp");
  timeoutIds.current = [
    window.setTimeout(() => setPhase("strike"), BATTLE_DELAYS.strike),
    window.setTimeout(() => setPhase("victory"), BATTLE_DELAYS.victory),
    window.setTimeout(() => setPhase("idle"), BATTLE_DELAYS.reset),
  ];
}

useEffect(() => () => timeoutIds.current.forEach(window.clearTimeout), []);
```

Use `phase !== "idle"` for the attack button's `disabled` state and disable it before the first timeout is scheduled.

- [x] **Step 3: Render semantic appearance controls and sprite layers.**

```tsx
<fieldset aria-label={content.genderLabel}>
  {(["male", "female"] as const).map((option, index) => (
    <button
      key={option}
      type="button"
      aria-pressed={gender === option}
      onClick={() => setGender(option)}
    >
      {content.genders[index]}
    </button>
  ))}
</fieldset>
```

Use the same button pattern for the four hair colors.

Build the hero path as `/sprites/v1-1/hero/${gender}-${hairColor}-${phase === "strike" ? "strike" : "idle"}.png`.

Render the hero and combat sprites as `aria-hidden` CSS-background spans, then expose a separate `aria-live="polite"` status span with `content.battleStates` indexed by phase.

Render every monster catalog item as a button with a localized `content.monsterNames[index]` label, `aria-pressed={monsterIndex === index}`, and `onClick={() => setMonsterIndex(index)}`.

Disable catalog buttons while a battle is resolving so the visible opponent cannot change mid-sequence.

- [x] **Step 4: Run the type and lint gate after the component is mounted by Task 3.**

```zsh
pnpm lint
pnpm build
```

Expected: both commands exit successfully, proving the client/server component boundary and inferred dictionary types compile.

## Task 3: Localize and Place the Showcase

**Files:**

- Modify: `lib/dictionaries.ts`
- Modify: `app/[locale]/page.tsx`

**Consumes:** `BattleShowcase` from Task 2.

**Produces:** A Korean- and English-localized section directly after `growth`, plus an appearance FAQ item automatically included in FAQ JSON-LD.

- [x] **Step 1: Add matching `showcase` entries to both locale dictionaries.**

```ts
showcase: {
  title: ["나만의 용사로,", "오늘의 퀘스트에 맞서세요"],
  body: "직접 성별과 머리색을 고른 용사가, 완료 순간 검을 휘둘러 몬스터를 처치합니다.",
  genderLabel: "성별",
  genders: ["남성", "여성"],
  hairLabel: "머리색",
  hairColors: ["검정", "갈색", "파랑", "빨강"],
  attack: "공격",
  battleStates: ["전투 준비", "공격 준비 중", "공격 중", "승리"],
  monstersTitle: "9종의 몬스터가 기다립니다",
  monstersBody: "퀘스트의 난이도에 따라 슬라임부터 리치까지, 서로 다른 몬스터가 던전에 나타납니다.",
  monsterNames: ["슬라임", "박쥐", "버섯", "스켈레톤", "오크", "미믹", "드래곤", "골렘", "리치"],
},
```

Use matching English semantics and the same array order: `Slime`, `Bat`, `Mushroom`, `Skeleton`, `Orc`, `Mimic`, `Dragon`, `Golem`, and `Lich`.

- [x] **Step 2: Add one appearance FAQ item in each locale.**

```ts
{
  q: "용사 외형을 바꿀 수 있나요?",
  a: "네. 성별과 네 가지 머리색을 직접 골라 나만의 용사 외형을 만들 수 있습니다.",
}
```

The English item must confirm gender and four hair-color choices without claiming equipment, stat, or gameplay changes.

- [x] **Step 3: Import and render the showcase at the approved location.**

```tsx
import { BattleShowcase } from "@/components/BattleShowcase";

<section id="growth">...</section>
<BattleShowcase content={t.showcase} />
<section>{/* daily-dungeon loop */}</section>
```

Preserve the existing section markup and use one new semantic `<section>` inside `BattleShowcase` with its own heading.

- [x] **Step 4: Verify both rendered content paths and structured data inputs.**

```zsh
pnpm build
rg -n '직접 성별과 머리색을 고른|Can I customize my hero\?|용사 외형을 바꿀 수 있나요\?' lib/dictionaries.ts
```

Expected: the production build succeeds and the Korean plus English FAQ/showcase copy is present in the dictionary that supplies the FAQ JSON-LD.

## Task 4: Add Pixel Battle Styling and Reduced-Motion Protection

**Files:**

- Modify: `app/globals.css`
- Modify: `components/BattleShowcase.tsx`

**Consumes:** The phase class from Task 2.

**Produces:** A stable battle stage that visually differentiates wind-up, strike, and victory without changing layout or ignoring motion preferences.

- [x] **Step 1: Attach a phase class to the fixed battle stage.**

```tsx
<div className={`battle-stage battle-stage--${phase}`}>
  {/* hero, monster, impact, and victory layers */}
</div>
```

Keep the stage's width and height explicit, and keep its layers absolutely positioned inside it.

- [x] **Step 2: Add narrowly scoped phase styles.**

```css
.battle-stage {
  position: relative;
  width: 15rem;
  height: 9rem;
}

.battle-stage__hero,
.battle-stage__monster {
  transition:
    transform 120ms steps(2, jump-none),
    opacity 120ms linear;
}

.battle-stage--windUp .battle-stage__hero {
  transform: translateX(-0.25rem);
}

.battle-stage--strike .battle-stage__hero {
  transform: translateX(1.25rem);
}
```

Add corresponding impact visibility and victory-state opacity styles.

- [x] **Step 3: Disable transform and transition motion under reduced-motion preference.**

```css
@media (prefers-reduced-motion: reduce) {
  .battle-stage__hero,
  .battle-stage__monster,
  .battle-stage__impact {
    transition: none;
    transform: none;
  }
}
```

Do not hide the impact or victory text in this media query.

- [x] **Step 4: Run the production gate.**

```zsh
pnpm lint
pnpm build
git diff --check
```

Expected: lint, production compilation, and whitespace validation all succeed.

## Task 5: Exercise the User-Facing Behavior

**Files:**

- Verify: `app/[locale]/page.tsx`
- Verify: `components/BattleShowcase.tsx`
- Verify: `lib/dictionaries.ts`
- Verify: `app/globals.css`

**Consumes:** Completed Tasks 1 through 4.

**Produces:** Evidence that the two locales, responsive layout, semantics, motion preference, and static-asset references behave as specified.

- [x] **Step 1: Run the automated repository gates.**

```zsh
pnpm lint
pnpm build
git diff --check
```

Expected: all commands exit with status 0.

- [ ] **Step 2: Serve the production-equivalent page and inspect both locales.**

```zsh
pnpm dev
```

Open `/ko` and `/en` at desktop and mobile widths.

Expected: the showcase occurs after growth, before the daily-dungeon loop, and does not shift or hide adjacent sections.

Execution note: the server-rendered Korean and English pages, all initial showcase markers, and representative hero, monster, and impact asset responses returned successfully. Browser automation could not run because the available Python 3 environment has no Playwright package and the provided Node automation import failed before opening a browser.

- [ ] **Step 3: Verify each localized interactive path.**

```plaintext
For /ko and /en:
1. Choose each gender and hair-color option and confirm the idle preview changes immediately.
2. Trigger Attack and confirm wind-up, strike/impact, victory, then idle.
3. Repeatedly activate Attack during the running sequence and confirm only one sequence occurs.
4. Enable reduced motion and confirm the same phase labels and victory state appear without positional movement.
5. Select every monster and confirm the battle stage changes immediately and retains the selected monster after victory.
6. Tab through every control and confirm visible focus and meaningful labels.
```

- [x] **Step 4: Inspect final change scope without staging or committing.**

```zsh
git status --short
git diff --check
```

Expected: only the planned landing assets, component, styles, page, dictionary, spec, and plan are changed.

## Plan Self-Review

### Spec Coverage

- Existing page order and a single new section are covered by Task 3.
- The direct Korean gender and hair wording is covered by Task 3.
- The eight hero combinations, nine monsters, and impact asset are covered by Task 1 and rendered by Task 2.
- Local-only hero and monster selection, the one-second phase sequence, fixed stage, timer cleanup, and repeat-attack prevention are covered by Task 2.
- Both locales and the appearance FAQ/JSON-LD input are covered by Task 3.
- Pixel styling and reduced-motion behavior are covered by Task 4.
- Build, lint, diff, locale, responsiveness, interaction, focus, and reduced-motion checks are covered by Task 5.

### Scope And Type Consistency

- `BattleShowcase` is the only new component and receives `content` from `t.showcase`.
- `HeroGender`, `HeroHairColor`, and `BattlePhase` remain component-local because no other landing file consumes them.
- The public asset path in Task 2 matches the static directory created in Task 1.
- No dependency, persistence, legal-route, or App Store-link change is planned.
