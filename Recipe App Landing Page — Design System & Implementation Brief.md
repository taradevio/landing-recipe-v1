# Recipe App Landing Page — Design System & Implementation Brief

Use the **ui-ux-pro-max skill**.

First, **plan before implementing anything**.

Do not immediately write the page. First analyze the product, positioning, information hierarchy, landing-page pattern, visual direction, typography, color system, component language, interaction principles, responsive behavior, and accessibility requirements.

Use UI/UX Pro Max to derive recommendations appropriate for this specific product.

## Product

Build a landing page for an Android recipe app distributed through the Google Play Store.

The product is a recipe organizer that works naturally for both individual users and households.

Its key positioning is:

> **Keep recipes for yourself or share them with your household — without putting sharing behind a family plan.**

Household functionality is a core product experience, not a premium upgrade.

However, do not position the product as merely a "free recipe app" or compete primarily on price.

The broader product idea is:

> A personal recipe space that can naturally become a shared household recipe space.

The application should feel equally appropriate for:

- someone managing recipes alone;
- couples;
- roommates;
- parents and children;
- families sharing recipes at home.

Do not make the visual identity exclusively "family-oriented" in a way that makes solo users feel that the product is not intended for them.

---

# Landing Page Narrative

The landing page should follow a clear storytelling sequence rather than presenting a generic feature grid.

Every section must have a distinct communication purpose.

## 1. Hero

Purpose:

Communicate what the product is, its main value proposition, and the personal-to-household positioning immediately.

The hero should:

- emphasize recipes as something personal that can become shared;
- mention household sharing without making the product feel family-only;
- include the primary Google Play CTA;
- show the actual application UI or realistic application mockups;
- avoid generic cooking stock photography as the primary visual;
- establish the visual language for the rest of the page.

Example conceptual direction:

> Keep recipes for yourself or share them with your household — without putting sharing behind a family plan.

Do not blindly reuse this wording if a better UX-oriented copy hierarchy can communicate the same positioning more naturally.

---

## 2. Recipes Are Everywhere

Purpose:

Create recognition of the underlying problem.

Recipes commonly end up scattered across places such as:

- personal notes;
- websites;
- copied text;
- social-media captions;
- family recipes;
- personal recipe collections.

Communicate the idea that recipes belonging to one person or a household deserve one organized home.

Keep this section concise.

Do not turn it into exaggerated SaaS pain-point marketing.

The emotional direction should be:

> Recipes come from everywhere. The ones that matter should have one place to live.

Family and household recipes should subtly appear in this story.

---

## 3. Personal → Household

Purpose:

Explain the product mental model.

The product must work naturally for a single user without requiring them to create or join a household.

Visually communicate a progression such as:

Personal recipe space  
→ invite household members when needed  
→ shared household collection

Make this transition understandable without requiring large amounts of text.

The key idea is:

> Personal when you need it. Shared when you want it.

Avoid implying that household functionality is mandatory.

---

## 4. Product Demo

Purpose:

Show rather than tell.

Create a prominent section for a short product demo video.

The presentation should make the video feel like an actual walkthrough rather than a marketing trailer.

Potential demonstrated flow:

1. Open recipe collection.
2. Add or import a recipe.
3. View the resulting recipe.
4. Open household collection.
5. Show shared recipes or household members.

The video component should:

- work without requiring audio;
- support captions;
- have accessible controls;
- respect reduced-motion preferences;
- use an elegant poster/preview state before playback.

---

## 5. Add Recipes Your Way

Purpose:

Explain how recipes enter the application.

Do not treat all capabilities as unrelated features.

Use this information hierarchy:

### Create

- Write a recipe from scratch.

### Import

- Import from pasted text.
- Import from a recipe URL.
- Import from an Instagram caption.

The overall mental model should be:

> Create your own recipe or bring in one you already found.

Use actual UI examples whenever possible.

### Instagram reliability boundary

The Instagram feature must be represented accurately.

It imports recipe information available in the **Instagram post caption**.

Do not imply that:

- videos are watched;
- audio is transcribed;
- ingredients are inferred from visuals;
- missing recipe information is guessed;
- an AI understands the full Reel.

Avoid misleading copy such as:

> Turn any Instagram Reel into a recipe with AI.

Prefer language similar to:

> Save recipes from Instagram captions.

The product philosophy is reliability and source fidelity rather than pretending the product can infer information that is not available.

---

## 6. Household Recipe Sharing

Purpose:

Deepen the primary product differentiator.

This should carry significantly more visual weight than a normal feature card.

Communicate:

- create or join a household;
- invite people you cook with;
- maintain a shared recipe collection;
- continue supporting personal use;
- household sharing is not locked behind a separate family subscription.

Do not make this an aggressive competitor-comparison section.

Do not use manipulative pricing language.

A subtle supporting statement such as:

> No separate family plan required.

is sufficient.

This section should emotionally communicate:

> Recipes can belong to a home, not just an account.

---

## 7. FAQ

Purpose:

Handle predictable objections and clarify behavior.

Include design support for questions such as:

- Can I use the app by myself?
- Do I need to create a household?
- Is household sharing paid?
- How does household sharing work?
- What can I import?
- How does Instagram import work?
- Can the app import information that is not written in a caption?
- Are my personal recipes automatically shared?

Do not invent product behavior that has not been specified.

Use placeholder or clearly marked provisional copy where implementation details are unknown.

---

## 8. Final Google Play CTA

Purpose:

Convert users who have reached the end of the story.

Reinforce the core positioning without introducing a new concept.

Possible emotional direction:

> Give your recipes a place to call home.

Include a prominent Google Play CTA.

Avoid excessive urgency, fake scarcity, or artificial conversion tactics.

---

## 9. Footer

Keep the footer practical and lightweight.

Support:

- product navigation;
- FAQ;
- privacy;
- terms;
- contact;
- Google Play;
- copyright.

Do not invent unnecessary company pages.

---

# Design Direction

## Desired Personality

The landing page should feel:

- warm;
- domestic;
- friendly;
- fresh;
- trustworthy;
- modern;
- calm;
- human;
- approachable.

It should communicate the feeling of recipes living in a home.

However, avoid making the application:

- childish;
- overly feminine;
- luxury-oriented;
- rustic/farmhouse cliché;
- visually busy;
- excessively cute;
- corporate;
- AI-SaaS-like.

The visual identity must work for individual users as well as households.

---

# Source Color Palette

Use this palette as the starting point:

https://coolors.co/palette/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc

Colors:

- `#FFADAD`
- `#FFD6A5`
- `#FDFFB6`
- `#CAFFBF`
- `#9BF6FF`
- `#A0C4FF`
- `#BDB2FF`
- `#FFC6FF`
- `#FFFFFC`

Important:

**This is a source palette, not a requirement to display every color equally.**

Build a restrained semantic color system from it.

Prefer approximately:

- neutral/off-white surfaces as the dominant visual field;
- one primary warm brand family;
- one complementary secondary family;
- limited supporting accents.

Avoid rainbow-like section coloring.

Derive darker neutral or brand shades when necessary for:

- accessible text;
- CTA text;
- borders;
- focus states;
- active states;
- hover states.

Do not sacrifice WCAG contrast in order to use the supplied pastel values literally.

---

# Gradient Direction

Use gradients, but keep them restrained.

Preferred gradient combinations include:

- coral → peach;
- mint → pale yellow;
- soft blue → lavender.

Gradients can appear as:

- subtle ambient backgrounds;
- blurred decorative forms;
- screenshot framing;
- gentle section transitions;
- selected card surfaces.

Avoid:

- neon gradients;
- AI-style purple/pink glowing backgrounds;
- highly saturated rainbow gradients;
- gradients behind large bodies of text if readability is reduced.

Gradients should add warmth and visual continuity rather than become the brand itself.

---

# Visual Hierarchy

Household sharing must carry more visual emphasis than utility features.

Do not create a generic equal-weight feature grid such as:

Write | URL | Text | Instagram | Household

Instead communicate hierarchy:

Create / Import utilities  
↓  
Primary household experience

Actual application screenshots should be more visually important than decorative illustrations.

Use decorative visuals only where they support the story.

---

# Typography

Use UI/UX Pro Max to recommend typography suitable for:

- consumer mobile products;
- food and lifestyle;
- friendly household use;
- strong digital readability.

Prefer modern humanist or rounded sans-serif typography.

Avoid typography that makes the product feel like:

- a luxury restaurant;
- wedding stationery;
- a beauty brand;
- an editorial cooking magazine.

If a display typeface is introduced, keep it restrained and ensure the UI-oriented sans-serif remains dominant.

---

# Components & Shape Language

Prefer:

- moderate rounded corners;
- comfortable card padding;
- soft but clearly defined elevation;
- real application screenshots;
- subtle organic background shapes;
- clean icons;
- restrained borders;
- generous whitespace.

Avoid excessive neumorphism.

Cards must remain clearly distinguishable from backgrounds.

Do not create extremely rounded "bubble UI" everywhere.

The interface should feel warm without becoming toy-like.

---

# Motion

Use subtle motion only when it helps users understand interaction.

Target:

- approximately 150–300ms transitions;
- gentle hover states;
- subtle reveal animations;
- lightweight screenshot motion;
- restrained button feedback.

Avoid:

- parallax-heavy pages;
- scroll-jacking;
- constant floating objects;
- excessive entrance animations;
- animations that compete with the product demo.

Respect `prefers-reduced-motion`.

---

# Accessibility

Require:

- WCAG AA contrast;
- minimum 4.5:1 text contrast where applicable;
- visible keyboard focus states;
- semantic HTML;
- keyboard-accessible controls;
- accessible video controls;
- meaningful alt text;
- appropriate ARIA only when required;
- no color-only communication;
- sufficient touch target sizes;
- reduced-motion support.

Pastel backgrounds must not be paired with low-contrast white text.

---

# Responsive Requirements

Design and validate at:

- 375px
- 768px
- 1024px
- 1440px

The mobile experience is especially important because the product itself is an Android application.

Avoid desktop compositions that collapse poorly into mobile stacks.

Screenshots, diagrams, household visualizations, and video framing must have intentional mobile layouts.

---

# Iconography

Use SVG icons from a consistent library such as Lucide or another system recommended by UI/UX Pro Max.

Do not use emoji as interface icons.

Decorative emoji should also be avoided unless there is a very intentional reason.

---

# Anti-patterns

Avoid:

- generic AI SaaS visuals;
- purple/pink AI glow;
- rainbow backgrounds;
- excessive glassmorphism;
- excessive neumorphism;
- giant feature grids;
- fake testimonials;
- fake user counts;
- fake ratings;
- fake media logos;
- stock photography dominating the product;
- excessive gradients;
- overly cute family imagery;
- aggressive competitor comparisons;
- luxury spa aesthetics;
- dark-mode-first branding;
- autoplay video with sound;
- unclear CTA hierarchy.

---

# Conversion Strategy

Primary CTA:

**Get the app / Get it on Google Play**

Secondary CTA:

**See how it works / Watch demo**

The primary CTA should appear:

1. Above the fold.
2. Again after sufficient product explanation.
3. In the final CTA section.

Do not repeat the CTA after every section.

---

# Deliverable Order

Before implementing:

1. Analyze the product and positioning.
2. Run UI/UX Pro Max design-system research.
3. Recommend the landing-page pattern.
4. Define the visual direction.
5. Define semantic colors.
6. Define typography.
7. Define spacing, radius, elevation, and component rules.
8. Define gradient usage.
9. Define interaction and motion rules.
10. Define responsive behavior.
11. Explain the intended storytelling hierarchy.
12. Identify assumptions or unresolved product details.
13. Present the final design-system recommendation.

Only after the plan and design system are established should implementation begin.

Do not add additional product features or change the supplied positioning without explicit justification.