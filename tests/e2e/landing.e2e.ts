import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1024, height: 900 },
  { name: 'desktop', width: 1440, height: 1000 },
];

for (const viewport of viewports) {
  test(`${viewport.name} layout has no horizontal overflow`, async ({ page }) => {
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

test('FAQ works natively and the unfinished demo has no fake play control', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const question = page.getByText('What kinds of recipes can I add?', { exact: true });
  const details = question.locator('..').locator('..');
  await expect(details).toHaveAttribute('open', '');
  await question.click();
  await expect(details).not.toHaveAttribute('open', '');
  await expect(page.getByText('Demo video coming soon')).toBeVisible();
  await expect(page.locator('video')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /play/i })).toHaveCount(0);
});

test('mobile interactive targets are touch friendly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const tooSmall = await page.locator('a:visible, button:visible, summary:visible').evaluateAll((elements) =>
    elements
      .map((element) => ({ label: element.textContent?.trim(), rect: element.getBoundingClientRect() }))
      .filter(({ rect }) => rect.width < 44 || rect.height < 44)
      .map(({ label, rect }) => ({ label, width: rect.width, height: rect.height })),
  );
  expect(tooSmall).toEqual([]);
});

for (const viewport of [viewports[0], viewports[3]]) {
  test(`${viewport.name} page has no serious axe violations`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([]);
  });
}
