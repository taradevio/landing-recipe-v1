import { describe, expect, test } from 'bun:test';
import { validateReleaseContent } from '../../scripts/validate-release';
import { siteContent, type SiteContent } from '../../src/content/siteContent';

describe('Noomori site content contract', () => {
  test('uses an honest non-interactive prelaunch state', () => {
    expect(siteContent.releaseStage).toBe('prelaunch');
    expect(siteContent.availability.kind).toBe('status');
    expect(siteContent.availability.href).toBeUndefined();
    expect(siteContent.availability.label).toBe('Android app coming soon');
  });

  test('keeps the approved product story in order', () => {
    expect(siteContent.stories.map((story) => story.id)).toEqual([
      'capture',
      'make-it-yours',
      'cook-together',
    ]);
  });

  test('uses exactly five supporting feature modules', () => {
    expect(siteContent.supportingFeatures).toHaveLength(5);
    expect(siteContent.supportingFeatures.map((feature) => feature.id)).toEqual([
      'search',
      'source',
      'details',
      'favorites',
      'activity',
    ]);
  });

  test('keeps incomplete imports honest and editable', () => {
    const copy = JSON.stringify([siteContent.stories, siteContent.reliability]).toLowerCase();
    expect(copy).toContain('partial import');
    expect(copy).toContain('add what is missing');
    expect(copy).not.toContain('infer missing');
  });

  test('provides dimensions and meaningful text for every media slot', () => {
    const media = [
      ...siteContent.hero.media,
      siteContent.productProof.media,
      ...siteContent.stories.flatMap((story) => story.media),
      siteContent.household.productMedia,
      siteContent.household.photo,
      ...siteContent.supportingFeatures.map((feature) => feature.media),
      siteContent.closingScene.photo,
    ];
    expect(media.every((asset) => asset.width > 0 && asset.height > 0 && asset.alt.length > 20)).toBe(true);
  });

  test('validates both prelaunch and live CTA states', () => {
    expect(validateReleaseContent(siteContent, { requireAssets: false })).toEqual([]);
    const liveContent: SiteContent = {
      ...siteContent,
      releaseStage: 'live',
      availability: {
        kind: 'link',
        label: 'Get Noomori',
        href: 'https://play.google.com/store/apps/details?id=example.noomori',
      },
    };
    expect(validateReleaseContent(liveContent, { requireAssets: false })).toEqual([]);
  });
});
