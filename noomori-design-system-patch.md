# Noomori Design System Patch

**Document type:** Design-system patch / delta  
**Applies to:** Noomori landing page  
**Purpose:** Refine visual hierarchy, surface separation, imagery, iconography, gradients, and depth without redesigning the existing visual identity.

> This patch should be applied on top of the existing Noomori design system.  
> It is intentionally a refinement layer, not a replacement.

---

## 1. Design Direction

Noomori should continue to feel:

- Warm
- Personal
- Calm
- Domestic
- Editorial
- Softly playful
- Minimal without feeling clinical

The design language should remain **neutral, warm, calm, and contemporary**.

### Cultural neutrality

Noomori is not themed around Japan or any other specific culture. The name may have its own sound and personality, but the interface should remain visually neutral and internationally approachable.


Noomori should not depend on any specific cultural or regional aesthetic to feel distinctive. Its identity should come from warmth, clarity, restraint, and a recognizable domestic color language.

### Core visual principle

> **Warm editorial minimalism + playful domestic colors.**

Avoid turning Noomori into:

- A generic SaaS landing page
- A high-saturation gradient-heavy product
- A culturally themed visual system
- An overly decorative pastel interface

---

# 2. Surface Hierarchy

The current landing page relies on subtle pastel surfaces. Keep that direction, but make each major surface role more intentional.

## 2.1 Navbar

The navbar must visually separate from the hero.

### Recommended treatment

```css
--nav-bg: rgba(255, 253, 248, 0.94);
--nav-border: rgba(24, 59, 59, 0.06);
```

Recommended implementation:

```css
.navbar {
  background: rgba(255, 253, 248, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(24, 59, 59, 0.06);
}
```

### Rules

- Navbar should use a flat warm-white surface.
- Do not continue the hero gradient behind the navbar.
- Do not use a dark navbar.
- Do not introduce a strong drop shadow.
- A 1px low-opacity border is preferred over elevation.

---

## 2.2 Hero Surface

Keep the hero warm, soft, and atmospheric.

The hero should not look like a conventional multi-color SaaS gradient.

### Base color

```css
--surface-warm: #FDFCDC;
```

### Recommended gradient direction

Prefer layered radial gradients over a strong linear gradient.

```css
.hero {
  background:
    radial-gradient(
      circle at 12% 82%,
      rgba(204, 213, 174, 0.30),
      transparent 38%
    ),
    radial-gradient(
      circle at 88% 38%,
      rgba(254, 217, 183, 0.40),
      transparent 34%
    ),
    #FDFCDC;
}
```

### Gradient principle

The gradient should feel like **soft ambient light**, not a digital color effect.

Use:

- Soft sage
- Warm cream
- Muted peach

Avoid:

- Purple-blue aurora gradients
- High-saturation blobs
- Large obvious color transitions
- More than 2 decorative color glows in one surface

---

# 3. Core Color Roles

The existing palette remains valid, but colors should have stronger semantic roles.

| Role | Recommended color | Usage |
|---|---|---|
| Canvas | `#FFFDF8` | Navbar, white sections, page base |
| Warm Surface | `#FDFCDC` | Hero, highlighted sections |
| Soft Peach | `#FED9B7` | Warm decorative surfaces |
| Sage | `#CCD5AE` | Natural / organizational accent |
| Seafoam | `#DCEFE7` | Sharing / household surfaces |
| Coral | `#F07167` | Emotional emphasis |
| Deep Green | `#173B3B` | Primary typography |
| Deep Moss | `#56634E` | Primary CTA / grounded accents |

---

## 3.1 Coral Usage

Coral should act as an **emotional emphasis color**.

Use coral for words or phrases related to:

- Love
- Togetherness
- Home
- Family
- Shared experience
- Emotional payoff

Examples:

- `you love`
- `ending up everywhere`
- `Build a household cookbook together`
- `bring a recipe home`

### Rule

Do not highlight a coral phrase in every major heading.

Target approximately **60–70% of major section headings**.

This preserves rhythm and prevents the accent from becoming predictable.

---

## 3.2 Cyan → Seafoam Adjustment

Strong cyan surfaces should be softened into a muted seafoam.

Preferred:

```css
--surface-seafoam: #DCEFE7;
--surface-seafoam-soft: #E4F2EC;
```

Avoid highly saturated aqua backgrounds.

The product UI may still contain brighter cyan accents, but landing-page surfaces should remain softer than the product UI itself.

---

# 4. Typography Hierarchy

The current primary headline hierarchy should be preserved.

The patch focuses on strengthening the secondary hierarchy.

---

## 4.1 Major Headings

Keep:

- Large display size
- Strong line-height
- Deep-green default text
- Selective coral emphasis

Do not reduce major heading contrast.

---

## 4.2 Body Copy

Body text currently risks becoming too visually quiet compared with headings and product visuals.

### Recommended range

```css
--body-size: 1rem;
--body-line-height: 1.6;
--body-color: rgba(23, 59, 59, 0.72);
```

### Rules

- Meaningful body copy should remain at or above approximately 72% primary-text opacity.
- Avoid using very light gray-green for explanatory content.
- Small descriptive text should generally not go below `14px`.
- Default landing-page body text should generally remain around `16px`.

---

## 4.3 Eyebrow / Section Labels

Current section labels should remain as part of the editorial identity.

Recommended direction:

```css
font-size: 11px;
font-weight: 600;
letter-spacing: 0.12em;
text-transform: uppercase;
```

### Rules

- Keep labels visually subordinate to headings.
- Increase readability before increasing decoration.
- Do not use excessive tracking.
- Coral may remain the default eyebrow accent if contrast passes.

---

# 5. Hero Product Imagery

The hero phone mockup should be the dominant visual object after the headline.

## Recommended adjustment

Increase hero phone size by approximately:

**8–12%**

### Hierarchy target

```text
Phone
↓
Floating product snippets
↓
Peach background shape
↓
Pure decoration
```

The background shape should never compete with the device.

### Rules

- Slightly reduce the peach circle/blob if necessary.
- Keep 1–2 meaningful floating product snippets.
- Remove decorative elements that do not improve storytelling.
- Preserve generous whitespace around the phone.

---

# 6. Product Screenshot System

All product screenshots should share one visual language.

## Device consistency

Use the same:

- Device bezel color
- Corner radius
- Perspective
- Shadow treatment
- Screen scaling
- Screenshot crop style

### Rule

Do not mix straight-on devices and dramatic 3D perspective unless the difference serves a specific narrative purpose.

---

## 6.1 Screenshot Priority

Product imagery is not decoration.

Screenshots should function as **proof of product behavior**.

Therefore:

- Hero mockup: high prominence
- Product demo: high prominence
- Supporting feature mockups: medium prominence
- Decorative UI snippets: low prominence

---

# 7. Problem Section Visual

The current scattered-recipes section should communicate the problem faster.

## Current narrative

Recipes exist in multiple disconnected places.

## Desired narrative

```text
Scattered recipe sources
        ↓
Fragmentation / confusion
        ↓
Noomori as the organizing destination
```

### Recommended sources

Possible source cards:

- Instagram
- Notes
- Browser
- Messages
- Saved links

### Center treatment

Replace an overly abstract center indicator with a more meaningful concept.

Possible center labels:

- `Recipe?`
- `Scattered`
- `Where did I save it?`

or introduce the Noomori mark as the destination.

### Rules

- Use connector lines only when they explain direction.
- Reduce oversized dotted geometry.
- Preserve whitespace, but avoid empty space with no narrative purpose.

---

# 8. Personal → Household Progression

This section is central to Noomori's product positioning and should be treated as a key storytelling moment.

## Narrative

```text
Personal collection
        ↓
Invite / share
        ↓
Household cookbook
```

## Recommended visual treatment

Strengthen the connector between both panels.

Possible treatment:

```text
Your recipe collection

        →
   Invite people
        →

One shared kitchen
```

### Rules

- The transition must be understandable without reading long body copy.
- The shared-household state should visually contain evidence of collaboration.
- The right-side product screenshot should show a clearly different state from the left-side screenshot.

Examples:

### Left

- My Recipes
- Personal favorites
- Private collection

### Right

- Household Cookbook
- Family / household members
- Shared recipes
- Collaboration indicators

---

# 9. Product Demo Section

The product demo should feel like evidence, not a decorative component.

## Recommended changes

- Increase overall demo container size by approximately **10–20%**.
- Give the demo more horizontal breathing room.
- Keep internal cards readable at normal desktop viewing size.
- Avoid compressing meaningful UI into miniature mockups.

### Hierarchy

```text
Section heading
↓
Short explanation
↓
Large product demo
```

The product demo should visually dominate the lower half of the section.

---

# 10. Icon System

Noomori should use one consistent icon language.

## 10.1 Icon Anatomy

Recommended default:

```text
Container: 32 × 32px
Radius: 8px
Glyph: 16–18px
Stroke: 1.5–1.75px
Style: Outline
```

### Rules

- Use a consistent bounding box.
- Use one stroke family.
- Avoid mixing filled, bold, and thin-outline icons.
- Align icons optically, not only mathematically.

---

## 10.2 Icon Containers

Default:

```css
.icon-container {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}
```

Feature icons may use light tinted backgrounds derived from their semantic color.

Do not use strong saturated fills.

---

# 11. Semantic Icon Color Mapping

Do not assign icon colors randomly.

Suggested mapping:

| Meaning | Color |
|---|---|
| Create / personal | Coral |
| Sharing / household | Seafoam |
| Saved / organized | Sage |
| Discovery / import | Warm yellow / peach |
| Primary utility | Deep green |

This mapping may be adjusted if the product semantics require it, but the final mapping must remain consistent.

---

# 12. Third-Party Icons

Third-party services should remain immediately recognizable.

Example:

- Instagram → recognizable Instagram glyph
- Browser / web → recognizable browser or link metaphor

### Rule

Recognition takes priority over brand purity.

However, third-party icons may use Noomori's neutral or muted icon container rather than the full third-party brand gradient.

---

# 13. Feature Cards

Feature cards should maintain a clear internal hierarchy.

Recommended order:

```text
Step number
Icon
Title
Supporting copy
Optional detail
```

## Step numbers

Large step numbers may remain as decorative metadata.

Recommended:

- Low opacity
- Visually separated from content
- Never stronger than the title

Example:

```css
.step-number {
  opacity: 0.12;
}
```

---

# 14. Three-Ways Section

The following cards may remain visually equal:

- Create it yourself
- Import from a website
- Import from Instagram

Only introduce emphasis if product strategy explicitly defines one method as preferred.

Do not create artificial hierarchy purely for visual interest.

---

# 15. Household / Dinner Section

The household dinner UI is a payoff moment and should have stronger visual presence.

## Recommended adjustment

Increase the UI cluster by approximately:

**10–15%**

### Rules

- Make collaboration cues immediately visible.
- Avoid overly decorative shapes around the UI.
- Reduce or remove large decorative blobs that do not explain the product.

---

# 16. Decorative Elements

Decorative elements should support:

- Warmth
- Motion
- Domestic playfulness
- Section rhythm

They should not compete with product information.

### Decoration hierarchy

```text
Product content
>
Explanatory UI
>
Structural decoration
>
Pure decoration
```

### Remove or reduce decoration when:

- It competes with a product screenshot.
- It makes a section look busier without adding meaning.
- It creates false visual hierarchy.
- It appears in too many sections.

---

# 17. Elevation and Shadows

Depth should communicate hierarchy.

## Elevation Levels

### Level 0 — Surface

No shadow.

Used for:

- Section backgrounds
- Page surfaces

### Level 1 — Feature Card

```css
box-shadow: 0 4px 16px rgba(23, 59, 59, 0.05);
```

### Level 2 — Floating Product UI

```css
box-shadow: 0 8px 28px rgba(23, 59, 59, 0.09);
```

### Level 3 — Hero Device

```css
box-shadow: 0 18px 50px rgba(23, 59, 59, 0.12);
```

### Rules

- Keep shadows diffuse.
- Avoid dark gray shadows.
- Avoid using the same elevation on every card.
- Use elevation to reinforce importance.

---

# 18. Section Rhythm

Recommended surface sequence:

```text
Navbar
Warm white

↓

Hero
Warm butter + ambient sage/peach

↓

Problem
Warm white

↓

Personal → Household
Peach / cream / seafoam blend

↓

Product Demo
Warm white

↓

Recipe Entry Methods
Pale warm yellow

↓

Household Dinner
Muted seafoam

↓

FAQ
Warm white
```

Sections should be distinguishable without using strong dividers.

---

# 19. Visual Hierarchy Priority

Noomori landing-page hierarchy should generally follow:

```text
1. Main heading
2. Primary product visual
3. Primary CTA
4. Section heading
5. Product demonstration
6. Feature title
7. Supporting copy
8. Decorative content
```

If decoration competes with levels 1–7, reduce it.

---

# 20. CTA Treatment

Primary CTA should act as a grounded visual anchor.

Recommended:

```css
--cta-bg: #56634E;
--cta-text: #FFFDF8;
--cta-hover: #485440;
```

Secondary CTA:

```css
--cta-secondary-text: #56634E;
--cta-secondary-border: #C9CDBE;
```

Avoid pastel primary CTAs that blend into the surrounding surface.

---

# 21. Responsive Hierarchy

On mobile:

- Keep hero product visual large enough to communicate the product.
- Reduce decoration before reducing product imagery.
- Stack personal → household states vertically if required.
- Preserve progression with a visible arrow or transition marker.
- Keep body text at readable mobile sizes.
- Avoid shrinking feature cards into miniature desktop layouts.

### Mobile priority

```text
Content clarity
>
Product proof
>
Decoration
```

---

# 22. Accessibility Guardrails

This patch does not replace full accessibility testing.

At minimum:

- Primary text must maintain sufficient contrast.
- Meaningful body copy should not use excessively low opacity.
- Color must not be the only indicator of meaning.
- Icon-only controls require accessible labels.
- Coral emphasis must remain readable on warm surfaces.
- Decorative graphics should not interfere with text legibility.
- Motion from floating UI or ambient decoration should respect `prefers-reduced-motion`.

---

# 23. Do / Don't

## Do

- Use warm neutral surfaces.
- Keep gradients subtle.
- Let product visuals dominate decoration.
- Use coral intentionally.
- Keep iconography consistent.
- Strengthen secondary typography.
- Use product screenshots as proof.
- Create clear progression from personal to household use.
- Keep surface hierarchy subtle but visible.

## Don't

- Redesign the landing page from scratch.
- Add more colors to increase variety.
- Use strong SaaS-style aurora gradients.
- Make every section use coral headline emphasis.
- Mix unrelated icon styles.
- Add decoration without narrative purpose.
- Shrink product screenshots for the sake of whitespace.
- Use high-contrast shadows.
- Make the navbar visually merge with the hero.

---

# 24. Implementation Priorities

## P0 — Hierarchy

1. Separate navbar from hero.
2. Increase hero phone scale by approximately 8–12%.
3. Strengthen body-copy readability.
4. Enlarge the product-demo container.
5. Strengthen the Personal → Household transition.

## P1 — Icon System

1. Standardize icon containers.
2. Standardize stroke weight.
3. Establish semantic icon-color mapping.
4. Preserve recognizable third-party glyphs.

## P2 — Product Imagery

1. Refine the problem-section diagram.
2. Increase household/dinner UI scale.
3. Reduce unnecessary hero decoration.
4. Ensure screenshot/device consistency.

## P3 — Polish

1. Convert hero gradient to layered ambient radial gradients.
2. Shift strong cyan surfaces toward muted seafoam.
3. Standardize elevation levels.
4. Improve eyebrow readability.
5. Reduce repeated coral-highlight patterns where needed.

---

# 25. Codex Implementation Constraint

When implementing this patch:

> **Do not redesign existing layouts unless explicitly required by this document.**

Preserve:

- Current content
- Current section order
- Current core typography
- Current visual identity
- Existing responsive behavior that already works
- Current component structure where possible

Treat this task as a **visual refinement pass**.

The goal is to make the existing Noomori landing page feel more intentional, readable, warm, and polished without changing its core character.

Noomori's visual identity should stay culturally neutral. Warmth should come from color, spacing, typography, imagery, and interaction—not from references to any specific cultural aesthetic.
