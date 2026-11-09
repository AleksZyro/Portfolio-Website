import { defineConfig } from "@playwright/test";
import config from "./playwright.config.mjs";

export default defineConfig({
  ...config,
  testMatch: ["identity.visual.spec.mjs"],
  projects: config.projects.filter((project) =>
    ["mobile", "desktop"].includes(project.name),
  ),
  expect: {
    toHaveScreenshot: { animations: "disabled", maxDiffPixelRatio: 0.001 },
  },
});
