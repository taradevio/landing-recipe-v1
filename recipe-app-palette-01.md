# Recipe App Color Palette — Palette 01

## Source Palette

Coolors palette:

- `#0081A7` — Deep Teal Blue
- `#00AFB9` — Turquoise Teal
- `#FDFCDC` — Warm Cream
- `#FED9B7` — Soft Peach
- `#F07167` — Warm Coral

---

## Recommended Design Philosophy

### Warm Shared Home

The palette should communicate the balance between:

- personal recipes;
- household sharing;
- warmth;
- trust;
- organization;
- freshness;
- modern digital usability.

The product should feel like a **warm modern household app**, rather than a traditional cookbook, restaurant brand, children's app, or generic SaaS product.

A useful conceptual mapping is:

- **Coral = personal, creation, warmth**
- **Teal = household, sharing, organization**
- **Cream = the shared home / common canvas**
- **Peach = softness, comfort, supporting warmth**
- **Deep teal = structure, trust, stronger interaction**

The broader visual story is:

> Something personal can naturally become something shared.

This can subtly reinforce the product positioning without relying on literal family imagery.

---

## Semantic Color Roles

### Background

`#FDFCDC`

Use as the dominant page background.

Purpose:

- keeps the interface warm without feeling beige or old-fashioned;
- avoids the sterile feeling of pure white;
- creates a neutral canvas for screenshots and product UI;
- supports the "recipes have a home" visual philosophy.

Recommended usage:

- main page background;
- large neutral sections;
- FAQ;
- footer-adjacent sections;
- screenshot framing.

---

### Primary Emotional Brand Color

`#F07167`

Warm coral.

Purpose:

- represents warmth;
- food;
- creation;
- human interaction;
- personal recipes.

Recommended usage:

- brand accents;
- selected illustration details;
- badges;
- feature highlights;
- active decorative states;
- personal recipe-related visuals.

Do not automatically use the raw value for every primary CTA.

Because it is relatively light, white text on the raw coral may not provide sufficient contrast for normal-sized text.

When necessary, derive a darker coral tone for interactive controls.

---

### Household / Collaboration Color

`#00AFB9`

Turquoise teal.

Purpose:

- household;
- sharing;
- collaboration;
- freshness;
- synchronization;
- organized collections.

Recommended usage:

- household-related UI examples;
- shared recipe visuals;
- collaboration diagrams;
- secondary highlights;
- subtle gradients;
- household feature section accents.

Avoid using color alone to indicate whether a recipe is personal or shared.

Always pair state colors with labels, icons, or other visible indicators.

---

### Strong Interactive / Structural Color

`#0081A7`

Deep teal blue.

Purpose:

- trust;
- structure;
- digital-product clarity;
- stronger visual hierarchy.

Recommended usage:

- links;
- navigation emphasis;
- stronger UI accents;
- icons;
- selected states;
- darker gradient endpoints.

This is the strongest existing color in the source palette, but the design system should still introduce an even darker ink/charcoal token if required for body text, CTA contrast, and WCAG compliance.

---

### Supporting Warm Surface

`#FED9B7`

Soft peach.

Purpose:

- comfort;
- domestic warmth;
- soft separation between sections;
- supporting surfaces.

Recommended usage:

- low-emphasis cards;
- subtle section backgrounds;
- feature illustration backgrounds;
- decorative shapes;
- screenshot framing.

Avoid using it for important text or controls because it provides weak visual hierarchy on its own.

---

## Recommended Additional Neutral

The source palette does not contain a sufficiently dark text color.

Add a deep neutral or blue-charcoal token for:

- body text;
- headings;
- buttons;
- navigation;
- focus states;
- borders where stronger definition is required.

Preferred character:

- deep blue-charcoal;
- slightly warm or neutral;
- avoid pure black unless necessary.

Example role names:

```css
--color-text-primary
--color-text-secondary
--color-ink
--color-border-strong
```

Do not choose the final hex arbitrarily. Generate and validate it against the selected backgrounds for WCAG AA contrast.

---

## Suggested Visual Hierarchy

The palette should not be used as five equal brand colors.

Recommended approximate visual distribution:

- **60–70%** warm cream / neutral surfaces
- **10–15%** coral family
- **10–15%** teal family
- **5–10%** peach and supporting accents

The majority of the page should remain visually calm.

The product screenshots and content should remain more important than decorative color.

---

## Product Semantics

A subtle semantic relationship can be used throughout the product and landing page:

### Personal

Use coral-family accents.

Concept:

> My recipes.

### Household

Use teal-family accents.

Concept:

> Our recipes.

### Transition

When communicating the move from personal to household:

**Coral → Teal**

This can be used in:

- diagrams;
- subtle gradients;
- onboarding illustrations;
- section transitions;
- household invitation visuals.

Do not make this color distinction the only way users understand ownership or sharing state.

---

## Gradient Direction

Use gradients selectively.

### Recommended

#### Personal / Warm

`#F07167` → `#FED9B7`

Use for:

- subtle hero glow;
- personal recipe illustrations;
- creation-focused visual accents.

#### Household / Calm

`#00AFB9` → lighter derived teal / cream

Use for:

- household section atmosphere;
- shared recipe visuals;
- collaboration backgrounds.

#### Personal → Shared

Coral → Teal

Use very sparingly.

This gradient can reinforce the product story:

> personal recipe → shared household recipe

Keep saturation and opacity restrained.

---

## Gradient Rules

Prefer:

- blurred ambient gradients;
- subtle section backgrounds;
- decorative edge glows;
- screenshot framing;
- illustration fills.

Avoid:

- full-screen rainbow gradients;
- heavy saturated gradient backgrounds;
- gradients behind long text blocks;
- neon effects;
- purple/pink AI-style SaaS glows.

The gradient should support the product, not become the product.

---

## Accessibility Notes

The palette contains several light and medium-value colors.

Important rules:

1. Do not assume white text is readable on coral or turquoise.
2. Validate all text/background combinations against WCAG AA.
3. Normal text should generally reach at least a `4.5:1` contrast ratio.
4. Create darker tonal variants when raw palette values fail contrast requirements.
5. Use a dark neutral for body copy.
6. Do not communicate personal/shared state using color alone.
7. Provide visible focus states for interactive components.
8. Pastel or light backgrounds should usually use dark text.

---

## Recommended Token Structure

Instead of using raw colors directly throughout the codebase, derive semantic tokens.

Example:

```css
--color-background
--color-surface
--color-surface-warm

--color-brand-personal
--color-brand-household

--color-primary
--color-primary-hover
--color-primary-active

--color-text-primary
--color-text-secondary

--color-border
--color-focus

--color-accent-coral
--color-accent-teal
--color-accent-peach
```

Also derive tonal scales for important colors.

Example:

```text
Coral:
50
100
200
300
400
500
600
700
800
900

Teal:
50
100
200
300
400
500
600
700
800
900
```

The source hex values can act as reference points within those scales rather than being the only available values.

---

## Landing Page Usage

### Hero

- dominant warm cream background;
- coral/peach ambient accent;
- deep text color;
- teal used sparingly to hint at sharing;
- product UI remains the main visual.

### Problem Section

Mostly neutral.

Use small coral, teal, or peach accents to represent recipes coming from multiple sources.

Do not create a multicolored card grid.

### Personal → Household

This is the strongest place to use the coral-to-teal relationship.

Personal side:

- coral accent.

Household side:

- teal accent.

Use text and icons in addition to color.

### Product Demo

Keep the surrounding surface quiet.

Avoid strong gradients that compete with the video.

### Add Recipes Your Way

Use restrained accent colors.

Feature cards should not each receive a completely different brand color.

### Household Sharing

Teal can become more visually prominent here.

This section should still retain warm elements so it does not feel disconnected from the rest of the brand.

### Final CTA

Use a high-contrast CTA treatment.

Do not automatically use raw coral with white text.

A darker derived teal, coral, or deep ink may work better depending on the final contrast system.

---

## Anti-Patterns

Avoid:

- equal use of all five colors;
- excessive section-by-section color switching;
- white text on insufficiently dark backgrounds;
- childish rainbow treatment;
- overly tropical styling;
- restaurant-brand styling;
- dominant turquoise everywhere;
- dominant coral everywhere;
- heavy gradients;
- pastel-on-pastel text;
- color-only sharing indicators.

---

## Overall Direction

The palette should feel:

**Warm + Modern + Human + Organized + Shared**

Not:

**Cute + Rainbow + Childish + Tropical + Generic SaaS**

The design should communicate a modern recipe product where:

> Recipes can begin as something personal and naturally become part of a shared household.
