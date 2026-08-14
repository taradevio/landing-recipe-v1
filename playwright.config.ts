import { defineConfig } from '@playwright/test';

const testPort = Number.parseInt(process.env.PLAYWRIGHT_TEST_PORT ?? '4173', 10);
const testBaseUrl = `http://127.0.0.1:${testPort}`;

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.e2e.ts',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: testBaseUrl,
    trace: 'retain-on-failure',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : undefined,
  },
  webServer: {
    command: 'bun run scripts/serve-dist.ts',
    url: testBaseUrl,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
