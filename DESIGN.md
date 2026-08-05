# Quest Keeper Design System

## Foundations

- Visual language: dark pixel-RPG dungeon for a calm productivity app.
- Typography: Galmuri for display and controls, system sans for body copy.
- Color tokens: `bg` #12101f, `surface` #1b1830, `panel` #201c38, `line` #322c52, `ink` #eceaf6, `muted` #a9a3c8, and `accent` #e8b44a.
- Spacing: 4px base unit.
- Shape and depth: square corners, 2px `line` borders, and hard black shadows on raised panels and primary actions.

## Layout and Responsive Behavior

- Content uses a 5xl container with 16px mobile and 24px small-screen horizontal padding.
- The hero becomes a two-column split from the large breakpoint onward.
- Growth stages stay in a single panel and scale their character media without cropping.
- Copy uses natural wrapping with constrained character widths; headings keep their intentionally authored line break.

## Media and Motion

- The hero, slime, skeleton, and dragon use the supplied GIFs in their matching character slots.
- Animated sprites remain decorative unless a descriptive label is supplied.
- GIF motion is essential game feedback; do not add separate decorative animation to these media.
- Existing CSS `steps()` motion remains gated by `prefers-reduced-motion`.
- Social sharing uses `public/og.png`: a 1200 × 630 pixel-art dungeon scene with no embedded copy or third-party branding.

## Components and States

- `.pixel-panel` is the shared raised content surface.
- `.pixel-btn` is the shared primary action, including its pressed-state translation and shortened shadow.
- The App Store CTA is an external link with a visible hover/focus affordance and a safe `noopener noreferrer` relationship.

## Accessibility Constraints

- Interactive controls are semantic links or buttons, not styled static elements.
- Decorative sprites are hidden from assistive technology; meaningful sprite media gets an accessible label.
- Accent text and links retain sufficient contrast against the dark base.
- Motion-sensitive users can request reduced motion for CSS effects; GIFs communicate the same character identity in their first frame.
