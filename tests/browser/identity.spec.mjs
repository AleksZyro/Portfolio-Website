import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#projects-grid")).not.toBeEmpty();
  await page.evaluate(() => document.fonts.ready);
});

test("all original sections remain directly on the redesigned page", async ({
  page,
}) => {
  for (const id of [
    "career",
    "portfolio",
    "certificates",
    "github-activity",
    "tech-stack",
    "contact",
  ]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
    await expect(page.locator(`#nav-list a[href="#${id}"]`)).toHaveCount(1);
  }
  await expect(page.locator("#open-source-list")).not.toBeEmpty();
  await expect(page.locator("#certificates-grid")).not.toBeEmpty();
  await expect(page.locator("#tech-grid")).not.toBeEmpty();
});

test("all five language selections work without leaving the home page", async ({
  page,
}) => {
  for (const [code, htmlLang] of [
    ["en", "en"],
    ["fr", "fr"],
    ["sr", "sr-Latn"],
    ["sr-cyrl", "sr-Cyrl"],
    ["de", "de"],
  ]) {
    await page.locator("#language-menu-button").click();
    await page.locator(`.lang-option[data-lang="${code}"]`).press("Enter");
    await expect(page.locator("html")).toHaveAttribute("lang", htmlLang);
    await expect(page.locator("#language-menu")).toBeHidden();
    await expect(page.locator("#language-menu-button")).toBeFocused();
    await expect(page.locator("#career h2")).not.toBeEmpty();
    await expect(page.locator("#open-source-list")).not.toBeEmpty();
    expect(new URL(page.url()).pathname).toBe("/");
  }
});

test("portrait stays removed and UMR and AargoClean remain simple current-work mentions", async ({
  page,
}) => {
  await expect(page.locator('.identity-portrait')).toHaveCount(0);
  await expect(page.locator(".hero img")).toHaveCount(0);
  await expect(
    page.locator('img[src*="silverfish"], img[src*="aargoclean"]'),
  ).toHaveCount(0);
  await expect(page.locator('[data-current-work="aargoclean"]')).toContainText(
    "Kundenprojekt",
  );
  await expect(
    page.locator(
      '[data-current-work="aargoclean"] img, [data-current-work="aargoclean"] a, [data-current-work="aargoclean"] button',
    ),
  ).toHaveCount(0);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize().width);
});

test("navigation reaches the retained career section on desktop and touch", async ({
  page,
}) => {
  const toggle = page.locator(".nav-toggle");
  if (await toggle.isVisible()) await toggle.click();
  await page.locator('#nav-list a[href="#career"]').click();
  await expect(page).toHaveURL(/#career$/);
  await expect(page.locator("#career h2")).toBeVisible();
});

test("retained project details open and close without leaving the home page", async ({
  page,
}) => {
  const button = page
    .locator("#portfolio button")
    .filter({ hasText: /Details|Projektinformationen/ })
    .first();
  await button.click();
  await expect(page.locator("#detail-modal")).toBeVisible();
  await expect(page.locator("#modal-description")).not.toBeEmpty();
  await page.locator("#modal-close").click();
  await expect(page.locator("#detail-modal")).toBeHidden();
  expect(new URL(page.url()).pathname).toBe("/");
});
