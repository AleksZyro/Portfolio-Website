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
    await expect(page.locator("#hero-first-name")).toHaveText(
      code === "sr-cyrl" ? "Александар" : "Aleksandar",
    );
    await expect(page.locator("#hero-last-name")).toHaveText(
      code === "sr-cyrl" ? "Николић." : "Nikolić.",
    );
    await expect(page).toHaveTitle(
      code === "sr-cyrl" ? /^Александар Николић/ : /^Aleksandar Nikolić/,
    );
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

test("project and certificate dialogs start at the top and restore page scroll instantly", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const button = page.locator("#projects-grid button").first();
  await button.evaluate((el) => {
    el.addEventListener("click", () => {
      el.dataset.scrollAtClick = String(window.scrollY);
    }, { capture: true, once: true });
  });
  await button.click();
  const backgroundY = Number(await button.getAttribute("data-scroll-at-click"));
  await expect(page.locator("#detail-modal")).toBeVisible();
  await expect(page.locator("#modal-description")).toBeHidden();
  await expect(page.locator("#modal-project-evidence")).not.toBeEmpty();
  const content = page.locator(".modal-body");
  await content.evaluate((el) => { el.scrollTop = el.scrollHeight; });
  expect(await content.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  await page.locator("#modal-close").click();
  await expect(page.locator("#detail-modal")).toBeHidden();
  await expect(page.locator("body")).not.toHaveClass(/modal-open/);
  expect(Math.abs((await page.evaluate(() => window.scrollY)) - backgroundY)).toBeLessThan(3);
  await page.locator("#projects-grid button").nth(1).click();
  expect(await content.evaluate((el) => el.scrollTop)).toBe(0);
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/modal-open/);
  await page.locator("#certificates-grid button").last().click();
  await expect(page.locator("#modal-title")).toHaveText("Was ist generative KI?");
  expect(await content.evaluate((el) => el.scrollTop)).toBe(0);
  await expect(page.locator("#modal-description")).toContainText("LinkedIn-Learning");
  await expect(page.locator("#modal-description")).toHaveCSS("border-bottom-width", "0px");
  await expect(page.locator("#modal-meta")).toHaveCSS("border-top-width", "1px");
  await expect(page.locator(".modal-meta-item").first()).toHaveCSS("border-top-width", "0px");
  await expect(page.locator("#modal-download")).toHaveAttribute(
    "href",
    "https://de.linkedin.com/learning/was-ist-generative-ki-22860708",
  );
  await expect(page.locator("#modal-download")).not.toHaveAttribute("download");
  const dialogFits = await page.locator("#modal-card").evaluate((el) =>
    el.scrollWidth <= el.clientWidth + 1,
  );
  expect(dialogFits).toBe(true);
  expect(new URL(page.url()).pathname).toBe("/");
});

test("both hero buttons reach their destination on the first click with motion enabled", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const id of ["portfolio", "contact"]) {
    await page.goto("/?lang=en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await page.locator(`.hero-actions a[href="#${id}"]`).click();
    await expect(page.locator(`#${id} h2`)).toBeInViewport();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
  }
});

test("language loading falls back to German and also works from disk", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Language resource loading is independent of viewport size.");
  await page.route("**/lang/fr.js?*", (route) => route.abort());
  await page.goto("/?lang=fr");
  await expect(page.locator("#language-current-label")).toHaveText("DE");
  await expect(page.locator("#projects-grid article")).toHaveCount(5);
  await expect(page.locator(".footer-legal a")).toHaveAttribute("href", "rechtliches.html?lang=de");
  await page.unroute("**/lang/fr.js?*");

  const local = new URL("../../index.html?lang=fr", import.meta.url);
  await page.goto(local.href);
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("#projects-grid article")).toHaveCount(5);
  await page.locator(".footer-legal a").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("#legal-blocks section")).toHaveCount(5);
});
