import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1024, height: 900 },
  { name: 'desktop', width: 1440, height: 1000 },
];

for (const viewport of viewports) {
  test(`${viewport.name} layout has one H1 and no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    const dimensions = await page.evaluate(() => ({
      body: document.body.scrollWidth,
      root: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.root).toBeLessThanOrEqual(dimensions.viewport);
  });
}

test('320px safety layout stays within the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
});

test('uses the final Noomori architecture without legacy homepage sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Keep the recipes your home comes back to.' })).toBeVisible();
  await expect(page.getByText('Recipe App', { exact: true })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: /questions, meet answers/i })).toHaveCount(0);
  await expect(page.locator('.phone')).toHaveCount(0);
  expect(await page.locator('[data-asset-missing]').count()).toBeGreaterThan(0);
});

test('all primary navigation anchors resolve to page sections', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  for (const href of ['#product', '#how-it-works', '#household']) {
    await expect(page.locator(`.desktop-nav a[href="${href}"]`)).toHaveCount(1);
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test('mobile menu supports Escape and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /menu/i });
  await toggle.focus();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});

test('prelaunch availability is status text, not a dead link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('status').first()).toContainText('Android app coming soon');
  await expect(page.getByRole('link', { name: 'Android app coming soon' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /see how it works/i })).toBeVisible();
});

test('mobile interactive targets are touch friendly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const tooSmall = await page.locator('a:visible, button:visible').evaluateAll((elements) =>
    elements
      .map((element) => ({ label: element.textContent?.trim(), rect: element.getBoundingClientRect() }))
      .filter(({ rect }) => rect.width < 44 || rect.height < 44)
      .map(({ label, rect }) => ({ label, width: rect.width, height: rect.height })),
  );
  expect(tooSmall).toEqual([]);
});

test('generated photography reserves intrinsic space', async ({ page }) => {
  await page.goto('/');
  const photos = page.locator('.household-photo img, .closing-photo img');
  await expect(photos).toHaveCount(2);
  const invalid = await photos.evaluateAll((images) =>
    images.filter((image) => !(image instanceof HTMLImageElement) || image.width === 0 || image.height === 0).length,
  );
  expect(invalid).toBe(0);
});

test('reduced motion keeps all content visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const hiddenReveal = await page.locator('[data-reveal]').evaluateAll((elements) =>
    elements.filter((element) => {
      const style = getComputedStyle(element);
      return style.opacity === '0' || style.visibility === 'hidden';
    }).length,
  );
  expect(hiddenReveal).toBe(0);
});

for (const viewport of [viewports[0], viewports[3]]) {
  test(`${viewport.name} page has no serious axe violations`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([]);
  });
}
