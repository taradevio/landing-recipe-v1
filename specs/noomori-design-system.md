# Noomori Design System

**Status:** Implementation-ready design guidance  
**Version:** 1.0  
**Depends on:** `noomori-brand-system.md`  
**Applies to:** Landing page first, then mobile UI  
**Implementation note:** This system replaces the old landing page’s sage/coral/seafoam visual identity. Existing accessibility, responsive, and engineering foundations may be retained.

---

## 1. Design Principles

### 1.1 Modular surfaces, not card-everything

Use cards only when content benefits from containment.

Prefer:

- whitespace;
- background tone;
- image hierarchy;
- typography;
- layout rhythm.

Avoid nesting every section inside white rounded rectangles.

### 1.2 Product truth over marketing polish

Landing visuals must use real Noomori UI wherever possible.

Do not fabricate product screens that are more polished than the actual app.

### 1.3 Warmth without visual noise

Warmth should come from:

- off-white / cream surfaces;
- food imagery;
- Kitchen Light;
- subtle border tones;
- spacing;
- typography.

Not from stacking decorative effects.

### 1.4 Recompose responsively

Do not scale desktop compositions down.

At smaller breakpoints:

- reduce decorative objects first;
- keep copy readable;
- preserve media legibility;
- simplify simultaneous motion;
- stack story beats intentionally.

---

## 2. Foundation Tokens

These are recommended semantic tokens based on the current Noomori palette.

```css
:root {
  /* Brand */
  --nm-navy-950: #001219;
  --nm-teal-800: #005F73;
  --nm-teal-600: #0A9396;
  --nm-mint-300: #94D2BD;
  --nm-cream-300: #E9D8A6;
  --nm-amber-500: #EE9B00;
  --nm-orange-600: #CA6702;
  --nm-terracotta-700: #BB3E03;
  --nm-red-800: #AE2012;
  --nm-wine-800: #9B2226;

  /* Semantic */
  --color-text-primary: var(--nm-navy-950);
  --color-text-secondary: rgb(0 18 25 / 0.70);
  --color-text-muted: rgb(0 18 25 / 0.56);

  --color-brand: var(--nm-teal-600);
  --color-brand-strong: var(--nm-teal-800);
  --color-brand-soft: color-mix(in srgb, var(--nm-mint-300) 28%, white);

  --color-canvas: #FFFDF8;
  --color-surface: #FFFFFF;
  --color-surface-warm: color-mix(in srgb, var(--nm-cream-300) 24%, white);
  --color-surface-mint: color-mix(in srgb, var(--nm-mint-300) 24%, white);

  --color-border-soft: rgb(0 18 25 / 0.10);
  --color-border-strong: rgb(0 18 25 / 0.18);

  --color-accent-warm: var(--nm-amber-500);
  --color-accent-emotional: var(--nm-terracotta-700);

  --color-focus: var(--nm-teal-800);
}
```

### Notes

- `#FFFDF8` is an implementation-neutral warm canvas, not a new brand color.
- If the implementation environment does not support `color-mix()`, replace with static derived values after visual review.
- Do not resurrect legacy moss, coral, sage, or seafoam tokens.

---

## 3. Typography

Typography families are not fully locked.

### 3.1 Display role

Use for:

- hero headlines;
- major section headings;
- emotional pre-footer;
- selected recipe titles.

Requirements:

- expressive;
- readable;
- not overly decorative;
- works well with large type;
- complements Noomori’s warm editorial direction.

### 3.2 Utility role

Use for:

- navigation;
- buttons;
- forms;
- metadata;
- labels;
- ingredients;
- instructions;
- settings;
- system states.

Requirements:

- highly readable;
- neutral enough for dense product UI;
- strong at small sizes.

### 3.3 Current implementation note

The existing landing uses **Nunito Sans Variable**.

Treat it as:

> **provisional utility typography**

Do not assume it is the final display face.

### 3.4 Type scale guidance

```text
Hero / Display XL:
clamp(3rem, 8vw, 6rem)

Section H2:
clamp(2.1rem, 5vw, 4.25rem)

Section H3:
clamp(1.45rem, 3vw, 2rem)

Lead body:
clamp(1.05rem, 1.6vw, 1.2rem)

Body:
1rem / 1.6

Small body:
0.875rem–0.95rem

Eyebrow:
0.6875rem–0.75rem
uppercase / tracking 0.10–0.12em
```

### Typography guardrails

- Keep paragraph widths around 55–65 characters where possible.
- Avoid very low-contrast body copy.
- Do not use display typography for form controls or metadata.
- Do not introduce more than two type families without explicit approval.

---

## 4. Spacing

Exact tokens remain open, but the system should follow an 8px-ish rhythm.

Recommended implementation scale:

```css
--space-1: 0.25rem;  /* 4 */
--space-2: 0.5rem;   /* 8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-5: 1.5rem;   /* 24 */
--space-6: 2rem;     /* 32 */
--space-7: 3rem;     /* 48 */
--space-8: 4rem;     /* 64 */
--space-9: 6rem;     /* 96 */
--space-10: 8rem;    /* 128 */
```

### Section spacing

Landing page major sections should generally use:

```text
desktop:
96–128px vertical

tablet:
80–96px

mobile:
64–80px
```

Internal content clusters should remain tighter than section gaps.

---

## 5. Radius System

Use three levels.

### Small

For:

- buttons;
- chips;
- inputs;
- compact controls.

Recommended starting range:

```text
10–14px
```

### Medium

For:

- recipe cards;
- utility cards;
- feature modules;
- product snippets.

Recommended starting range:

```text
18–24px
```

### Large

For:

- hero showcases;
- large product media;
- pre-footer panels;
- onboarding visuals.

Recommended starting range:

```text
28–40px
```

### Rule

Large radius must feel special.

Avoid using the same radius everywhere.

---

## 6. Borders and Elevation

Noomori should feel soft, not floaty.

### Preferred hierarchy

```text
warm canvas
→ soft surface
→ bordered content surface
→ image / active control
```

### Recommended shadows

Use sparingly.

```css
--shadow-sm: 0 4px 16px rgb(0 18 25 / 0.05);
--shadow-md: 0 8px 28px rgb(0 18 25 / 0.08);
--shadow-lg: 0 18px 50px rgb(0 18 25 / 0.10);
```

### Avoid

- large dark shadows on every card;
- “floating dashboard” look;
- glassmorphism without a functional reason;
- nested shadows.

Prefer subtle border separation before adding elevation.

---

## 7. Layout System

### 7.1 Content shell

Recommended:

```css
.shell {
  width: min(calc(100% - 2rem), 75rem);
  margin-inline: auto;
}
```

At tablet and above:

```css
width: min(calc(100% - 4rem), 75rem);
```

Wide product media may selectively exceed the normal text width.

### 7.2 Copy width

Keep explanatory copy narrower than product media.

Typical target:

```text
50–65ch
```

### 7.3 Page rhythm

Preferred sequence:

```text
warm neutral
→ Kitchen Light moment
→ quiet section
→ product-focused surface
→ warm editorial section
→ dark trust / pre-footer moment
→ expressive footer
```

Avoid repetitive section backgrounds.

---

## 8. Navbar

### Desktop

Recommended structure:

```text
Noomori

Product
How it works
Household

Primary CTA
```

Optional links only if real pages exist.

### Mobile

```text
Noomori        Menu
```

Menu contains:

- Product
- How it works
- Household
- Primary CTA

### Behavior

- sticky;
- integrated with hero at top;
- subtle warm translucent surface after scroll;
- low-opacity border;
- no strong drop shadow.

### Avoid

- oversized pill surrounding the whole navbar;
- too many navigation links;
- fake “Sign in” if no web product exists.

---

## 9. Hero

### Goal

Communicate:

1. emotional value;
2. product category;
3. real product proof.

### Copy

**Eyebrow**  
Your shared recipe home.

**Headline**  
Keep the recipes your home comes back to.

**Body**  
Save recipes from anywhere, make them your own, and keep one reliable collection with the people you cook with.

**Secondary action**  
See how it works.

Primary CTA depends on release state.

### Visual

Core composition:

```text
source recipe fragments
        ↓
   Noomori product
        ↓
  saved recipe state
```

### Background

Use Kitchen Light:

- teal / mint dominant;
- warm cream edge;
- low saturation;
- soft radial gradients.

### Motion

- central app visible immediately;
- source objects enter;
- source objects move toward Noomori;
- saved state appears;
- loop pauses.

No headline word animation.

---

## 10. Emotional Problem Section

Recommended headline:

> **Recipes end up everywhere.**

Supporting copy:

> A tab you meant to save. A screenshot in your camera roll. A family recipe in chat. A dish you rewrote three times.

Payoff:

> **Noomori gives them one place to stay.**

### Visual

Scattered recipe fragments should gradually become more ordered.

Desktop can use an editorial scattered composition.

Mobile should simplify to stacked fragments.

---

## 11. Product Proof

Recommended headline:

> **From found recipe to something you can actually cook from.**

Flow:

```text
Find / paste
→ preview
→ edit
→ save
→ share
```

### Media

Prefer:

- real UI;
- short silent MP4/WebM;
- static poster fallback.

Avoid:

- fake player controls;
- simulated app UI that differs from production;
- unreadable tiny phone screenshots.

---

## 12. Core Story 01 — Capture

### Marker

`01`

### Headline

> **Found a recipe? Keep it.**

### Supporting copy

> Bring recipes in from the web, paste the text you already have, or write one from scratch.

### Primary proof

URL import:

```text
paste URL
→ processing
→ editable preview
→ save
```

### Secondary proof

- paste text;
- manual creation.

### Accent

Teal / mint dominant.

---

## 13. Core Story 02 — Make It Yours

### Marker

`02`

### Headline

> **Make every recipe yours.**

### Supporting copy

> Clean up ingredients, adjust instructions, add your own notes, and keep the version that works for your kitchen.

### Product proof

```text
open imported recipe
→ edit quantity / unit
→ reorder instruction
→ adjust note / field
→ save
→ readable recipe detail
```

### Accent

Warm cream / amber edge, while controls stay teal.

---

## 14. Core Story 03 — Cook Together

### Marker

`03`

### Headline

> **Recipes are better when everyone can find them.**

### Supporting copy

> Keep one shared collection for your household, so the recipe you saved is there when someone else needs it.

### Product proof

```text
Member A saves/shares
→ household state updates
→ Member B sees the recipe
```

### Visual

Desktop:
- two states or two devices may work if text remains readable.

Mobile:
- transition from one state to the next;
- do not show two tiny phones side-by-side.

### Accent

Warm cream + teal, with restrained terracotta detail if needed.

---

## 15. Household Spotlight

### Headline

> **Built for the recipes a home shares.**

### Supporting copy

> Your household should not need the same bookmarks, the same screenshots, or the same memory. Keep the recipes everyone relies on in one shared place.

### Visual direction

Use actual “Our kitchen” product UI.

Show:

- member identity;
- shared recipe count;
- recently shared recipes;
- one warm food image.

### Avoid

- role tables;
- workspace language;
- permission diagrams;
- admin-dashboard styling.

---

## 16. Supporting Features

Use 3–5 modules maximum initially.

Suggested candidates:

- Search
- Favorites
- Time / servings
- Source attribution
- Recipe activity / notifications

### Layout

A bento-like composition can work, but:

- vary sizes by importance;
- use actual UI snippets;
- avoid 10+ equal-weight cards;
- write outcome-driven copy.

Example:

**Large**  
Find the recipe you meant to make.

**Medium**  
Know where it came from.

**Medium**  
Keep cooking details close.

**Small**  
Favorites.

**Small**  
Recipe activity.

---

## 17. Reliability / Trust

### Headline

> **A recipe collection should still make sense next week.**

### Supporting copy

> Noomori is designed around editable recipes, clear sources, predictable sharing, and product states that do not depend on perfect imported data.

### Show real edge states

- recipe without time;
- recipe without servings;
- partial imported metadata;
- source attribution;
- loading state;
- import fallback;
- household status.

### Visual

A deeper teal / navy section may work here.

Do not invent:

- uptime claims;
- security certifications;
- user counts;
- “trusted by” logos.

---

## 18. Emotional Pre-Footer

### Headline

> **Make room for the recipes that become yours.**

Alternative:

> **The good recipes deserve somewhere to live.**

### Supporting copy

> The weeknight favorite. The one someone keeps asking for. The recipe you changed until it finally worked.

### Visual

Full-width warm food / recipe composition with Kitchen Light.

This is not a feature demo.

Motion should be very slow.

---

## 19. Final CTA

Recommended headline:

> **Bring your recipes home.**

CTA must reflect actual release state.

Examples:

**Pre-launch**
- Get early access
- Join closed testing

**Post-launch**
- Get Noomori

Avoid:
- “Start for free” unless pricing is decided;
- “Try Noomori today” if access is not immediate.

---

## 20. Footer

The footer is a brand moment.

### Background

- Deep Navy or Deep Teal.

### Composition

- large Noomori wordmark;
- short brand line;
- restrained Kitchen Light glow;
- one Recipe Mark.

Suggested groups:

**Product**
- Features
- Household
- How it works

**Project**
- About
- Contact
- Changelog, if public

**Legal**
- Privacy
- Terms

Only show links that actually exist.

### Signature

> **Keep the recipes your home comes back to.**

---

## 21. Recipe Cards

### Home / collection card hierarchy

1. image;
2. title;
3. one compact metadata line;
4. optional quick action.

Possible metadata:

- total time;
- servings;
- source/person.

### Examples

```text
Creamy Tuscan Chicken
35 min · Serves 4
```

```text
Beef Rendang
From Tara · 1h 40m
```

### Missing data

If time is missing:
- omit time;
- do not show placeholder dashes.

If servings are missing:
- omit servings.

If both are missing:
- use source/person if useful;
- otherwise show title only.

Do not overload cards.

---

## 22. Recipe Detail

Preferred hierarchy:

```text
large food image
↓
recipe title
↓
compact metadata
↓
description
↓
ingredients
↓
instructions
```

Avoid:

```text
title card
metadata card
description card
ingredients card
instructions card
```

Use section spacing and typography instead of card fragmentation.

---

## 23. Mobile Navigation

Bottom navigation should be quiet.

Requirements:

- simple icons;
- labels retained;
- teal active state;
- neutral inactive state;
- no overly bright floating-nav treatment.

Navigation supports the content; it is not the visual hero.

---

## 24. Mobile Density

Target:

> **medium-low information density**

Reference spectrum:

```text
enterprise dashboard
→ health reference
→ Noomori
→ Leafora
→ lifestyle editorial
```

Noomori sits between the health reference and Leafora.

---

## 25. Accessibility

Minimum requirements:

- WCAG-compliant contrast;
- visible focus states;
- 44px minimum interactive target;
- semantic heading order;
- meaningful alt text;
- decorative media hidden from assistive tech;
- videos understandable without audio;
- `prefers-reduced-motion` support;
- information not communicated only through color;
- readable text over gradients;
- complete page experience when motion is off.

### Reduced motion

Replace:

- travel-heavy animations;
- ambient loops;
- parallax.

With:

- final static states;
- simple fades;
- immediate state changes.

---

## 26. Performance

Landing page polish must not create a heavy page.

### Requirements

- hero copy and CTA render first;
- below-fold media lazy-loads;
- responsive image sources;
- modern image formats;
- compressed video;
- poster frames;
- pause off-screen loops when practical;
- avoid multiple animation libraries;
- prefer CSS/transforms for simple motion;
- prevent layout shift from media.

---

## 27. Responsive Breakpoints

Recommended implementation targets:

```text
320px safety
375px mobile
768px tablet
1024px laptop
1440px desktop
```

### Mobile

- single-column story;
- copy before media;
- fewer decorative objects;
- fewer simultaneous animations.

### Tablet

- preserve legibility;
- simplify layered compositions.

### Desktop

- larger product proof;
- alternating text/media layouts;
- more expressive motion.

---

## 28. Implementation Migration from Current Landing

### Keep

- Astro
- TypeScript
- Tailwind
- Lucide
- current accessibility approach
- Playwright
- Axe tests
- content separation
- reduced-motion support
- responsive composition philosophy

### Refactor

- `Header.astro`
- `Hero.astro`
- `ScatteredRecipes.astro`
- `HouseholdFeature.astro`
- `FinalCta.astro`
- `StoreCta.astro`

### Retire / replace

- old Recipe App identity
- old sage/coral/seafoam/moss palette
- fake app UI inside `PhoneMockup`
- `PersonalJourney` as a standalone narrative section
- current 3-card `RecipeMethods`
- FAQ from homepage
- CSS bowl/leaf hero illustration
- light utilitarian footer

### New components

Suggested:

```text
Header
Hero
ProblemBridge
ProductProof
CaptureFeature
MakeItYoursFeature
CookTogetherFeature
HouseholdSpotlight
SupportingFeatures
Reliability
PreFooter
FinalCta
Footer
```

---

## 29. Content Architecture

Prefer content schema shaped around the new narrative:

```ts
siteContent = {
  brand,
  navigation,
  hero,
  problem,
  productProof,
  stories: {
    capture,
    makeItYours,
    cookTogether,
  },
  household,
  supportingFeatures,
  reliability,
  preFooter,
  finalCta,
  footer,
}
```

Do not force new content into the old `demo / recipeSources / faq` schema.

---

## 30. Testing Requirements

Keep existing regression coverage and add:

- one H1 only;
- primary CTA visible;
- navigation anchors exist;
- no horizontal overflow at 320 / 375 / 768 / 1024 / 1440;
- no serious/critical Axe violations;
- 44px minimum interactive targets;
- product media has fallback/poster;
- reduced-motion page remains complete;
- media does not require audio;
- footer links map to real pages;
- no provisional content before release;
- hero product media remains readable on mobile.

---

## 31. Design Do / Don’t

### Do

- use actual Noomori UI;
- let food imagery breathe;
- use large whitespace;
- use subtle borders;
- keep supporting features selective;
- treat household as human;
- use Kitchen Light as atmosphere;
- make motion meaningful.

### Don’t

- use the entire palette at once;
- use fake screenshots;
- build 10+ equal cards;
- overuse bento layouts;
- overuse gradients;
- overuse shadows;
- turn every screen into a dashboard;
- use tiny phone screenshots that cannot be read;
- make mobile a scaled-down desktop.

---

## 32. Implementation Review Checklist

Before accepting a screen or section, verify:

- Does it still look like Noomori without the logo?
- Is the content hierarchy obvious in 3 seconds?
- Is there one dominant accent?
- Is product UI more prominent than decoration?
- Does the section work with missing data?
- Does it remain usable with motion off?
- Does it feel warm without becoming cute/childish?
- Is household framed as a shared kitchen rather than a workspace?
- Are gradients atmospheric rather than techy?
- Are cards used only when containment helps?
- Is the mobile version recomposed, not scaled?
- Is every marketing claim supported by the actual product?
