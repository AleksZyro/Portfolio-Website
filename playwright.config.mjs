import { defineConfig } from "@playwright/test";

// No browser dependency in production. An installed Chrome can be used locally;
// CI installs Playwright's matching Chromium with `npx playwright install`.
export default defineConfig({
  testDir: "./tests/browser",
  testMatch: ["identity.spec.mjs", "refinements.spec.mjs"],
  fullyParallel: true,
  workers: process.env.CI ? 2 : 3,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:8771",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: process.env.PLAYWRIGHT_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH }
      : {},
  },
  projects: [
    {
      name: "mobile",
      use: {
        viewport: { width: 375, height: 812 },
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 1,
      },
    },
    {
      name: "tablet",
      use: {
        viewport: { width: 768, height: 1024 },
        hasTouch: true,
        deviceScaleFactor: 1,
      },
    },
    {
      name: "laptop",
      use: { viewport: { width: 1024, height: 900 }, deviceScaleFactor: 1 },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 },
    },
  ],
  webServer: {
    command: "node scripts/serve-preview.mjs 8771",
    url: "http://127.0.0.1:8771/",
    reuseExistingServer: !process.env.CI,
  },
});
