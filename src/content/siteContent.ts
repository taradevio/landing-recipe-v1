export interface CtaLink {
  label: string;
  href?: string;
  provisional: boolean;
}

export interface MediaAsset {
  src?: string;
  alt: string;
  width: number;
  height: number;
  provisional: boolean;
}

export interface RecipeSource {
  title: string;
  description: string;
  icon: 'pencil' | 'link' | 'instagram';
  accent: 'coral' | 'seafoam';
  note?: string;
}

export interface StoryStep {
  eyebrow: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  product: {
    name: string;
    tagline: string;
    description: string;
    provisional: boolean;
  };
  navigation: Array<{ label: string; href: string }>;
  primaryCta: CtaLink;
  demo: {
    title: string;
    src?: string;
    poster?: MediaAsset;
    captionTrack?: string;
    provisional: boolean;
    steps: StoryStep[];
  };
  recipeSources: RecipeSource[];
  faq: FaqItem[];
  links: {
    privacy: CtaLink;
    terms: CtaLink;
    contact: CtaLink;
  };
}

export const siteContent: SiteContent = {
  product: {
    name: 'Recipe App',
    tagline: 'One home for every recipe you love.',
    description:
      'Save recipes from the places you already find them, keep your own notes, and share a cookbook with the people you cook with.',
    provisional: true,
  },
  navigation: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Add recipes', href: '#add-recipes' },
    { label: 'Household', href: '#household' },
    { label: 'FAQ', href: '#faq' },
  ],
  primaryCta: {
    label: 'Google Play link coming soon',
    provisional: true,
  },
  demo: {
    title: 'See Recipe App in action',
    provisional: true,
    steps: [
      {
        eyebrow: 'Save',
        title: 'Bring a recipe home',
        description: 'Add a recipe yourself, from a website, or from written Instagram caption details.',
      },
      {
        eyebrow: 'Organize',
        title: 'Make it yours',
        description: 'Keep the recipes you return to in a personal cookbook that stays easy to browse.',
      },
      {
        eyebrow: 'Share',
        title: 'Cook from one collection',
        description: 'Add recipes to a household cookbook so everyone can find the same version.',
      },
    ],
  },
  recipeSources: [
    {
      title: 'Create it yourself',
      description: 'Write down the ingredients and steps for the recipes that live in your head or on paper.',
      icon: 'pencil',
      accent: 'coral',
    },
    {
      title: 'Import from a website',
      description: 'Use a recipe link to bring its written recipe information into your collection.',
      icon: 'link',
      accent: 'seafoam',
    },
    {
      title: 'Import from Instagram',
      description: 'Use the written recipe information provided in a post caption.',
      icon: 'instagram',
      accent: 'seafoam',
      note: 'Only written caption information is imported. Missing details are not inferred.',
    },
  ],
  faq: [
    {
      question: 'What kinds of recipes can I add?',
      answer:
        'You can create a recipe yourself, add written recipe information from a supported website, or use written recipe details from an Instagram caption.',
    },
    {
      question: 'Can I keep recipes private?',
      answer:
        'The page is designed around separate personal and household collections. The final privacy behavior will be confirmed before release.',
    },
    {
      question: 'What happens if an Instagram caption is incomplete?',
      answer:
        'Only the written information in the caption is used. The app does not invent or infer missing ingredients, quantities, or steps.',
    },
    {
      question: 'When will Recipe App be available?',
      answer:
        'The Google Play release date and store destination are still being prepared. This preview will link to the official listing when it is ready.',
    },
  ],
  links: {
    privacy: { label: 'Privacy policy coming soon', provisional: true },
    terms: { label: 'Terms coming soon', provisional: true },
    contact: { label: 'Contact details coming soon', provisional: true },
  },
};
