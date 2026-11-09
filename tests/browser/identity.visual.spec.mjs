import { test, expect } from "@playwright/test";

test("personal introduction without portrait retains language navigation", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#projects-grid")).not.toBeEmpty();
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await expect(page.locator(".hero-copy")).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-grid")).toHaveScreenshot(
    "identity-introduction.png",
    {
      animations: "disabled",
    },
  );
  await expect(page.locator(".site-header")).toHaveScreenshot(
    "identity-navigation.png",
    { animations: "disabled" },
  );
  // The navigation has its own reference; prevent it obscuring an element capture.
  await page.locator(".site-header").evaluate((el) => {
    el.style.visibility = "hidden";
  });
  await expect(page.locator("#projects-grid")).toHaveScreenshot(
    "project-rows.png",
    { animations: "disabled" },
  );
  await expect(page.locator(".footer-heading")).toHaveScreenshot(
    "contact-heading.png",
    { animations: "disabled" },
  );
});

test("legal pages follow the portfolio theme", async ({ page }) => {
  await page.goto("/rechtliches.html");
  await expect(page.locator(".legal-block")).not.toHaveCount(0);
  await page.evaluate(() => document.fonts.ready);
  await expect(page).toHaveScreenshot("legal-page.png", {
    animations: "disabled",
  });
});
