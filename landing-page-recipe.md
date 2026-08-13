# Revised Recipe App Landing Page Plan

  ## Summary

  Build a static, mobile-first landing page using Astro + TypeScript,
  Tailwind CSS, daisyUI, and Bun as the exclusive package manager and
  script runner.

  Use bun create astro for scaffolding, bun add for dependencies, bun run
  for project scripts, and commit bun.lock. Do not create npm, pnpm, or
  Yarn lockfiles. The repository’s packageManager field will pin Bun
  1.3.14, matching the installed and current stable release. Bun officially
  supports creating and running Astro projects. Astro with Bun
  (https://bun.sh/guides/ecosystem/astro), Bun 1.3.14
  (https://github.com/oven-sh/bun/releases), Astro’s Bun guidance
  (https://docs.astro.build/en/recipes/bun/).

  The researched framework baseline as of August 13, 2026 is Astro 7.2,
  Tailwind CSS 4.3.1, and daisyUI 5.6.18. Install through @latest, then
  rely on bun.lock and bun ci for reproducibility.

  ## Color and Design System

  Create one light-only daisyUI theme named recipe-home. Disable built-in
  themes so operating-system dark mode cannot replace the intentional
  palette. Configure Tailwind through CSS-first @theme tokens and daisyUI’s
  custom-theme variables. Astro + daisyUI setup
  (https://daisyui.com/docs/install/astro/), daisyUI custom themes
  (https://daisyui.com/docs/themes/), Tailwind Vite setup
  (https://tailwindcss.com/docs/installation/using-vite).

  ### Core semantic tokens

   Role                            Value    Usage
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Page background / base-100    #FDFCDC    Dominant warm-cream canvas
  ────────────────────────────  ─────────  ────────────────────────────────
   Surface                       #FFFFFF    Cards, device UI, video frame
  ────────────────────────────  ─────────  ────────────────────────────────
   Warm surface / base-200       #FFF2E5    Quiet section and card
                                            separation
  ────────────────────────────  ─────────  ────────────────────────────────
   Peach accent                  #FED9B7    Decorative warmth and framing
  ────────────────────────────  ─────────  ────────────────────────────────
   Soft border / base-300        #D8D3B5    Nonessential dividers
  ────────────────────────────  ─────────  ────────────────────────────────
   Strong border                 #7B8E91    Controls and defined
                                            boundaries
  ────────────────────────────  ─────────  ────────────────────────────────
   Primary ink / base-content    #17343B    Headings, body, navigation
  ────────────────────────────  ─────────  ────────────────────────────────
   Secondary text                #445A60    Supporting copy
  ────────────────────────────  ─────────  ────────────────────────────────
   Primary CTA                   #00677F    Google Play actions
  ────────────────────────────  ─────────  ────────────────────────────────
   CTA hover                     #005D73    Hover and pressed states
  ────────────────────────────  ─────────  ────────────────────────────────
   Accessible link               #00718F    Inline links and navigation
  ────────────────────────────  ─────────  ────────────────────────────────
   Structural teal               #0081A7    Focus rings, icons, large
                                            accents
  ────────────────────────────  ─────────  ────────────────────────────────
   Household teal                #00AFB9    Shared-recipe meaning
  ────────────────────────────  ─────────  ────────────────────────────────
   Household soft                #D8F3F1    Household section surfaces
  ────────────────────────────  ─────────  ────────────────────────────────
   Personal coral                #F07167    Personal/create meaning
  ────────────────────────────  ─────────  ────────────────────────────────
   Accessible coral              #B9473F    Filled secondary controls when
                                            needed
  ────────────────────────────  ─────────  ────────────────────────────────
   Coral hover                   #A13A34    Coral interaction state
  ────────────────────────────  ─────────  ────────────────────────────────
   Personal soft                 #FCE7E3    Personal-recipe surfaces

  Map daisyUI primary to #00677F, secondary to #B9473F, accent to #00AFB9,
  and neutral to #17343B. Set --depth: 0 and --noise: 0; add project
  elevation deliberately through shadow tokens.

  Validated contrast pairs:

  - Ink on cream: 12.66:1.
  - Secondary text on cream: 7.00:1.
  - White on primary CTA: 6.47:1.
  - Link teal on cream: 5.36:1.
  - Ink on raw coral: 4.57:1.
  - Ink on household teal: 4.92:1.
  - Structural teal focus ring on cream: 4.29:1.

  Never use white text on raw coral—it provides only 2.89:1. Do not use raw
  #0081A7 for normal text because it reaches only 4.29:1 on cream; use
  #00718F.

  ### Page color narrative

  - Hero: cream canvas with a low-opacity coral-to-peach glow and a smaller
    teal hint.

  - Personal → Household: coral personal state, teal household state, and a
    restrained coral-to-teal connector.

  - Demo: quiet white/cream surround so media remains dominant.
  - Create/Import: neutral cards; coral identifies creation, while
    structural teal unifies imports.

  - Household centerpiece: pale household-teal field with peach/coral
    details to retain warmth.

  - Final CTA: #005D73 panel with cream text and restrained coral/peach
    detail.

  - Maintain roughly 65% cream/white, 12% coral, 12% teal, and under 10%
    peach/decorative color.

  Use Nunito Sans Variable, self-hosted through Fontsource, with 400 body,
  600 labels, and 700 headings. Use moderate radii, restrained shadows, and
  a spacious 4/8px rhythm.

  ## Implementation Changes

  ### Foundation and tooling

  - Scaffold through bun create astro using the minimal template and strict
    TypeScript.

  - Install runtime dependencies with bun add ...@latest and development
    dependencies with bun add -d ...@latest.

  - Add Tailwind through @tailwindcss/vite, daisyUI through its CSS plugin,
    @lucide/astro for SVG icons, and @fontsource-variable/nunito-sans.

  - Add @astrojs/check, TypeScript, Playwright, and @axe-core/playwright as
    development dependencies.

  - Add @types/bun and use Bun-aware TypeScript configuration where runtime
    types are required.

  - Set "packageManager": "bun@1.3.14" and commit the text-based bun.lock.
  - Define bun run dev, bun run build, bun run preview, bun run check, bun
    run test, bun run test:e2e, and bun run validate:release workflows.

  - CI uses oven-sh/setup-bun, bun ci, then the check, test, build, and
    release-validation scripts. bun ci must reject any mismatch between
    package.json and bun.lock. Bun CI and lockfile
    (https://bun.sh/docs/pm/cli/install).

  ### Page architecture

  - Build semantic Astro components for the header, hero, scattered-recipes
    problem, personal-to-household progression, demo, recipe-entry methods,
    household centerpiece, FAQ, final CTA, and footer.

  - Use daisyUI selectively for buttons, badges, cards, and native
    <details>/<summary> styling. Override its defaults so the page does not
    resemble a generic daisyUI theme.

  - Keep content and provisional assets in one typed siteContent module:
    product identity, CTA URLs, navigation, recipe sources, FAQ entries,
    media, legal/contact links, and provisional flags.

  - Use the neutral working name “Recipe App.” Build realistic HTML/CSS
    phone mockups with fictional recipe content; do not invent ratings,
    testimonials, user counts, AI behavior, or unsupported functionality.

  - Define the demo interface as src, poster, caption track, title, and
    storyboard steps. Without a video, render the polished poster/
    storyboard with a visible “Demo video coming soon” notice. Never
    display a nonfunctional play control.

  - Render Google Play and legal links only when configured. Preview mode
    receives accessible placeholders; release validation fails while
    required production values remain provisional.

  - Use Astro <Image>/<Picture> for local raster assets, responsive
    sources, declared dimensions, AVIF/WebP output, and below-fold lazy
    loading.

  - Use one small TypeScript enhancement for optional intersection reveals.
    Navigation, FAQ, CTA links, and video remain operable without
    JavaScript.

  - Implement base/mobile layouts for 375px, switch at 768px and 1024px,
    and constrain content to 1200px at 1440px. Keep touch targets at least
    44×44px.

  No backend or public API is introduced. Internal interfaces cover
  SiteContent, CtaLink, MediaAsset, RecipeSource, StoryStep, and FaqItem.

  ## Test Plan

  - Run bun run check, bun test, bun run build, and bun run
    validate:release.

  - Run Playwright and axe tests through Bun at 375, 768, 1024, and 1440px,
    plus a 320px overflow safety check.

  - Verify heading order, skip link, keyboard navigation, visible focus,
    FAQ operation, native video controls, meaningful alternatives, and
    absence of color-only ownership cues.

  - Confirm documented contrast pairs, 200% browser zoom, reduced motion,
    coarse-pointer touch targets, and no horizontal scrolling.

  - Capture visual snapshots at every target width and confirm that product
    mockups remain more prominent than decorative color.

  - Verify that missing assets produce explicit accessible placeholders and
    that production validation rejects an unset Google Play URL, generic
    product name, absent legal/contact destinations, or provisional demo
    media.

  - Run bun ci in CI to prove reproducible dependency installation from
    bun.lock.

  ## Assumptions and Defaults

  - Bun is the only package manager; npm, pnpm, and Yarn commands or
    lockfiles are not permitted.

  - Bun 1.3.14 is pinned for local and CI consistency; dependencies are
    initially resolved from @latest and subsequently frozen by bun.lock.

  - Palette 01 fully supersedes the earlier pastel palette and burgundy/
    green recommendation.

  - Dark teal owns the primary CTA; coral remains the emotional personal/
    create color.

  - The first release is static and light-only, with no theme switcher,
    form submission, analytics, account flow, or backend.

  - Placeholder mockups are authorized, but production release remains
    blocked until the final name, logo, Google Play badge and URL,
    screenshots, demo media, privacy, terms, and contact destinations are
    supplied.

  - Unsupported FAQ behavior remains visibly provisional. Instagram copy
    states that only written caption information is imported and that
    missing information is not inferred.
