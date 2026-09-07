export type ReleaseStage = 'prelaunch' | 'live';

export type IconName =
  | 'activity'
  | 'clock'
  | 'edit'
  | 'favorite'
  | 'link'
  | 'message'
  | 'notebook'
  | 'search'
  | 'share'
  | 'source'
  | 'spark';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface AvailabilityAction {
  label: string;
  kind: 'status' | 'link';
  href?: string;
}

export interface MediaAsset {
  kind: 'image' | 'video';
  src?: string;
  srcSmall?: string;
  poster?: string;
  alt: string;
  width: number;
  height: number;
  slotLabel: string;
  loading?: 'eager' | 'lazy';
}

export interface SourceFragment {
  source: string;
  title: string;
  detail: string;
  icon: Extract<IconName, 'link' | 'message' | 'notebook' | 'source'>;
}

export interface ProductStory {
  id: 'capture' | 'make-it-yours' | 'cook-together';
  marker: string;
  title: string;
  description: string;
  media: MediaAsset[];
  supporting?: Array<{ title: string; description: string; icon: IconName }>;
}

export interface SupportingFeature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  size: 'large' | 'medium';
  media: MediaAsset;
}

export interface SiteContent {
  releaseStage: ReleaseStage;
  metadata: {
    title: string;
    description: string;
    socialImage: string;
  };
  brand: {
    name: string;
    eyebrow: string;
    promise: string;
    description: string;
  };
  navigation: NavigationLink[];
  availability: AvailabilityAction;
  hero: {
    headline: string;
    description: string;
    secondaryAction: ActionLink;
    media: MediaAsset[];
  };
  problem: {
    title: string;
    description: string;
    resolution: string;
    fragments: SourceFragment[];
  };
  productBridge: { title: string };
  productProof: { title: string; description: string; media: MediaAsset };
  stories: ProductStory[];
  household: {
    title: string;
    description: string;
    points: string[];
    productMedia: MediaAsset;
    photo: MediaAsset;
  };
  supportingFeatures: SupportingFeature[];
  reliability: {
    title: string;
    description: string;
    states: Array<{ title: string; description: string; icon: IconName }>;
  };
  closingScene: { title: string; description: string; photo: MediaAsset };
  footer: { signature: string; links: NavigationLink[] };
}

const productSlot = (slotLabel: string, alt: string, width = 1080, height = 2160): MediaAsset => ({
  kind: 'image',
  alt,
  width,
  height,
  slotLabel,
  loading: 'lazy',
});

export const siteContent: SiteContent = {
  releaseStage: 'prelaunch',
  metadata: {
    title: 'Noomori | Keep the recipes your home comes back to',
    description:
      'Save recipes from anywhere, make them your own, and keep one reliable collection with the people you cook with.',
    socialImage: '/images/noomori-social.webp',
  },
  brand: {
    name: 'Noomori',
    eyebrow: 'Your shared recipe home',
    promise: 'Keep the recipes your home comes back to.',
    description:
      'Save recipes from anywhere, make them your own, and keep one reliable collection with the people you cook with.',
  },
  navigation: [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Household', href: '#household' },
  ],
  availability: { label: 'Android app coming soon', kind: 'status' },
  hero: {
    headline: 'Keep the recipes your home comes back to.',
    description:
      'Save recipes from anywhere, make them your own, and keep one reliable collection with the people you cook with.',
    secondaryAction: { label: 'See how it works', href: '#how-it-works' },
    media: [
      { ...productSlot('Import preview', 'Noomori import preview for a recipe found online', 1080, 1350), loading: 'eager' },
      { ...productSlot('Noomori home', 'Noomori home screen with saved recipes and shared cookbooks'), loading: 'eager' },
      { ...productSlot('Saved recipe', 'A saved recipe ready to cook from in Noomori', 1080, 1350), loading: 'eager' },
    ],
  },
  problem: {
    title: 'Recipes end up everywhere.',
    description:
      'A tab you meant to save. A screenshot in your camera roll. A family recipe in chat. A dish you rewrote three times.',
    resolution: 'Noomori gives every recipe one place to stay.',
    fragments: [
      { source: 'Browser', title: 'The crispy potatoes', detail: 'A tab left open since Tuesday', icon: 'link' },
      { source: 'Notebook', title: 'Tomato soup', detail: 'More garlic next time', icon: 'notebook' },
      { source: 'Family chat', title: 'Can you send that curry again?', detail: 'Asked at dinner time', icon: 'message' },
      { source: 'Saved post', title: 'Sesame noodles', detail: 'The recipe is in the caption', icon: 'source' },
    ],
  },
  productBridge: { title: 'Noomori gives them one place to stay.' },
  productProof: {
    title: 'From found recipe to something you can cook from.',
    description:
      'Bring a recipe in, clean it up, save the version that works, and share it with the people at home.',
    media: {
      kind: 'video',
      alt: 'A silent walkthrough showing a recipe imported, edited, saved, and shared in Noomori',
      width: 1600,
      height: 1000,
      slotLabel: 'Product walkthrough video and poster',
      loading: 'lazy',
    },
  },
  stories: [
    {
      id: 'capture',
      marker: '01',
      title: 'Found a recipe? Keep it.',
      description: 'Bring recipes in from the web, paste the text you have, or write one from scratch.',
      media: [productSlot('URL import flow', 'Noomori URL import moving from a recipe link to an editable preview', 1400, 1050)],
      supporting: [
        { title: 'Paste the recipe', description: 'Use the written recipe you already have.', icon: 'source' },
        { title: 'Write it yourself', description: 'Keep the recipes that live in your head or on paper.', icon: 'edit' },
      ],
    },
    {
      id: 'make-it-yours',
      marker: '02',
      title: 'Make every recipe yours.',
      description: 'Clean up ingredients, adjust instructions, add notes, and keep the version that works in your kitchen.',
      media: [productSlot('Recipe editing flow', 'A Noomori recipe being edited and saved as a clear cooking view', 1400, 1050)],
    },
    {
      id: 'cook-together',
      marker: '03',
      title: 'Recipes are better when everyone can find them.',
      description: 'Keep one shared collection, so the recipe you saved is there when someone else needs it.',
      media: [
        productSlot('Recipe shared', 'A household member sharing a recipe to the Noomori household collection'),
        productSlot('Recipe received', 'Another household member finding the shared recipe in Noomori'),
      ],
    },
  ],
  household: {
    title: 'Built for the recipes a home shares.',
    description:
      'Your household should not need the same bookmarks, screenshots, or memory. Keep the recipes everyone relies on together.',
    points: ['One shared kitchen', 'Clear recipe sources', 'The version everyone can find'],
    productMedia: productSlot('Our kitchen', 'The Noomori Our kitchen collection with shared recipes and household members'),
    photo: {
      kind: 'image',
      src: '/images/noomori-household.webp',
      srcSmall: '/images/noomori-household-720.webp',
      alt: 'Two home cooks serving roasted vegetables together beside an open recipe notebook',
      width: 1122,
      height: 1402,
      slotLabel: 'Household food photograph',
      loading: 'lazy',
    },
  },
  supportingFeatures: [
    {
      id: 'search',
      title: 'Find the recipe you meant to make.',
      description: 'Search one dependable collection instead of retracing where you first saw it.',
      icon: 'search', size: 'large',
      media: productSlot('Search results', 'Noomori search results for saved household recipes', 1400, 900),
    },
    {
      id: 'source',
      title: 'Know where it came from.',
      description: 'Keep the original source close without letting it get in the way of cooking.',
      icon: 'source', size: 'medium',
      media: productSlot('Source attribution', 'Source attribution on a saved Noomori recipe', 900, 900),
    },
    {
      id: 'details',
      title: 'Keep cooking details close.',
      description: 'See time and servings when they are available. Missing details stay out of the way.',
      icon: 'clock', size: 'medium',
      media: productSlot('Recipe details', 'Time and serving details on a Noomori recipe', 900, 900),
    },
    {
      id: 'favorites',
      title: 'Return to favorites.',
      description: 'Keep familiar recipes ready for the nights you do not want to search.',
      icon: 'favorite', size: 'medium',
      media: productSlot('Favorites', 'Favorite recipes collected in Noomori', 900, 900),
    },
    {
      id: 'activity',
      title: 'Notice what changed.',
      description: 'See when a recipe joins the household collection without turning dinner into a feed.',
      icon: 'activity', size: 'medium',
      media: productSlot('Recipe activity', 'Recent household recipe activity in Noomori', 900, 900),
    },
  ],
  reliability: {
    title: 'A recipe collection should still make sense next week.',
    description:
      'Noomori is designed around editable recipes, clear sources, predictable sharing, and imperfect imported data.',
    states: [
      { title: 'Missing time', description: 'The recipe stays readable without an empty placeholder.', icon: 'clock' },
      { title: 'Partial import', description: 'You see what arrived and can add what is missing.', icon: 'edit' },
      { title: 'Clear source', description: 'The original recipe remains easy to identify.', icon: 'source' },
      { title: 'Import fallback', description: 'A failed import offers a clear next step.', icon: 'link' },
      { title: 'Loading state', description: 'Progress stays visible without blocking the page.', icon: 'spark' },
      { title: 'Household status', description: 'Sharing is explained in human language.', icon: 'share' },
    ],
  },
  closingScene: {
    title: 'Bring your recipes home.',
    description: 'The weeknight favorite. The one someone keeps asking for. The recipe you changed until it worked.',
    photo: {
      kind: 'image',
      src: '/images/noomori-closing-table.webp',
      srcSmall: '/images/noomori-closing-table-960.webp',
      alt: 'A family-style pasta meal waiting on a modern kitchen table beside a recipe notebook',
      width: 1672,
      height: 941,
      slotLabel: 'Closing kitchen-table photograph',
      loading: 'lazy',
    },
  },
  footer: {
    signature: 'Keep the recipes your home comes back to.',
    links: [
      { label: 'Product', href: '#product' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Household', href: '#household' },
    ],
  },
};
