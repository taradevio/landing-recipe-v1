import { siteContent, type MediaAsset, type SiteContent } from '../src/content/siteContent';

interface ValidationOptions {
  requireAssets?: boolean;
}

const productMedia = (content: SiteContent): MediaAsset[] => [
  ...content.hero.media,
  content.productProof.media,
  ...content.stories.flatMap((story) => story.media),
  content.household.productMedia,
  ...content.supportingFeatures.map((feature) => feature.media),
];

export function validateReleaseContent(
  content: SiteContent,
  { requireAssets = true }: ValidationOptions = {},
): string[] {
  const failures: string[] = [];

  if (content.brand.name !== 'Noomori') failures.push('Use the final Noomori product name.');
  if (content.navigation.length !== 3) failures.push('Keep the primary navigation focused on three destinations.');
  if (content.stories.map((story) => story.id).join(',') !== 'capture,make-it-yours,cook-together') {
    failures.push('Keep the approved Capture, Make It Yours, Cook Together story order.');
  }

  if (content.releaseStage === 'prelaunch') {
    if (content.availability.kind !== 'status' || content.availability.href) {
      failures.push('Prelaunch availability must be honest status text without a destination.');
    }
  } else if (content.availability.kind !== 'link' || !content.availability.href) {
    failures.push('Live availability must link to the production store destination.');
  }

  if (requireAssets) {
    for (const media of productMedia(content)) {
      if (!media.src) failures.push(`Provide approved media for: ${media.slotLabel}.`);
      if (media.kind === 'video' && (!media.poster || !media.src)) {
        failures.push(`Provide a video and poster for: ${media.slotLabel}.`);
      }
    }
  }

  for (const media of [...productMedia(content), content.household.photo, content.closingScene.photo]) {
    if (!media.alt.trim() || media.width <= 0 || media.height <= 0) {
      failures.push(`Complete accessible media metadata for: ${media.slotLabel}.`);
    }
  }

  return [...new Set(failures)];
}

if (import.meta.main) {
  const failures = validateReleaseContent(siteContent);
  if (failures.length > 0) {
    console.error('Release validation failed:');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }
  console.log('Release content is configured.');
}
