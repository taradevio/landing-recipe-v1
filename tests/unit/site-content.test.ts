import { describe, expect, test } from 'bun:test';
import { siteContent } from '../../src/content/siteContent';

describe('site content contract', () => {
  test('keeps all provisional release destinations explicit', () => {
    expect(siteContent.product.provisional).toBe(true);
    expect(siteContent.primaryCta.href).toBeUndefined();
    expect(siteContent.primaryCta.provisional).toBe(true);
    expect(Object.values(siteContent.links).every((link) => link.provisional)).toBe(true);
  });

  test('supports the three documented recipe entry methods', () => {
    expect(siteContent.recipeSources.map((source) => source.icon)).toEqual(['pencil', 'link', 'instagram']);
  });

  test('does not imply missing Instagram details are inferred', () => {
    const instagram = siteContent.recipeSources.find((source) => source.icon === 'instagram');
    expect(instagram?.note?.toLowerCase()).toContain('not inferred');
  });

  test('uses a non-interactive storyboard until the demo is ready', () => {
    expect(siteContent.demo.src).toBeUndefined();
    expect(siteContent.demo.steps).toHaveLength(3);
  });
});
