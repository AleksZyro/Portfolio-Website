import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#projects-grid .project-list-item")).toHaveCount(
    5,
  );
  await page.evaluate(() => document.fonts.ready);
});
test("five single-column text projects and no duplicated PathLab demo", async ({
  page,
}) => {
  await expect(
    page.locator(".path-lab,#lab-grid,.project-spotlight-card"),
  ).toHaveCount(0);
  await expect(
    page.locator("#projects-grid h3").filter({ hasText: /^PathLab$/ }),
  ).toHaveCount(1);
  const boxes = await page
    .locator("#projects-grid .project-list-item")
    .evaluateAll((items) =>
      items.map((e) => {
        const r = e.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
      }),
    );
  for (let i = 1; i < boxes.length; i++) {
    expect(boxes[i].x).toBeCloseTo(boxes[0].x, 0);
    expect(boxes[i].y).toBeGreaterThanOrEqual(
      boxes[i - 1].y + boxes[i - 1].h - 1,
    );
  }
});
test("body text and internship callout are readable", async ({ page }) => {
  for (const selector of [
    '.hero-copy [data-i18n="hero.description"]',
    ".availability-note",
    ".project-list-content>p",
  ]) {
    expect(
      await page
        .locator(selector)
        .first()
        .evaluate((e) => parseFloat(getComputedStyle(e).fontSize)),
    ).toBeGreaterThanOrEqual(selector === ".availability-note" ? 15 : 16);
  }
});
test("current work links and translated continuous maintenance label", async ({
  page,
}) => {
  await expect(
    page.locator('[data-current-work="mmTransport"]'),
  ).toHaveAttribute("href", "https://www.mmta.ch/");
  await expect(page.locator('[data-current-work="umr"]')).toHaveAttribute(
    "href",
    /UMR-Useless/,
  );
  await expect(page.locator('[data-current-work="agentDock"]')).toHaveAttribute(
    "href",
    "https://github.com/AleksZyro/Agent-Dock",
  );
  await expect(page.locator('[data-current-work="agentDock"]')).toContainText(
    "Agent Dock",
  );
  await expect(
    page.locator('[data-current-work="aargoclean"]'),
  ).not.toHaveAttribute("href");
  for (const [lang, text, privateLabel] of [
    ["en", "Continuously maintained", "Private repository"],
    ["fr", "Amélioration continue", "Dépôt privé"],
    ["sr", "Kontinuirano se razvija", "Privatni repozitorijum"],
    ["sr-cyrl", "Континуирано се развија", "Приватни репозиторијум"],
    ["de", "Kontinuierlich in Arbeit", "Privates Repository"],
  ]) {
    await page.locator("#language-menu-button").click();
    await page.locator(`.lang-option[data-lang="${lang}"]`).click();
    await expect(
      page.locator('[data-current-work="mmTransport"]'),
    ).toContainText(text);
    await expect(page.locator('[data-current-work="agentDock"]')).toContainText(
      privateLabel,
    );
  }
});
test("certificate separators exist between rows, not below the final row", async ({
  page,
}) => {
  const cards = await page
    .locator("#certificates-grid>.item-card")
    .evaluateAll((items) =>
      items.map((e) => ({
        top: e.getBoundingClientRect().top,
        border: parseFloat(getComputedStyle(e).borderBottomWidth),
      })),
    );
  const lastTop = Math.max(...cards.map((e) => e.top));
  for (const card of cards) {
    expect(card.border).toBe(Math.abs(card.top - lastTop) < 3 ? 0 : 1);
  }
});
test("contribution SVG has no blue wrapper and OSS ends with a separator", async ({
  page,
}) => {
  const graph = page.locator(".contribution-strip");
  await expect(graph.locator("img")).toHaveAttribute(
    "src",
    /assets\/contribution-graphic.svg/,
  );
  expect(await graph.evaluate((e) => getComputedStyle(e).borderTopWidth)).toBe(
    "0px",
  );
  const list = page.locator(".open-source-more-card .open-source-more-list");
  const last = list.locator("a").last();
  await expect(last).toContainText("2616");
  expect(
    await last.evaluate((e) => getComputedStyle(e).borderBottomWidth),
  ).toBe("1px");
  expect(
    await last.evaluate((e) => parseFloat(getComputedStyle(e).fontSize)),
  ).toBeGreaterThanOrEqual(16);
});
test("contact heading has a plain colour and a readable ampersand", async ({
  page,
}) => {
  await expect(page.locator("#contact-title")).toHaveText(
    "Kontakt & Rechtliches",
  );
  const style = await page
    .locator("#contact-title")
    .evaluate((e) => ({
      bg: getComputedStyle(e).backgroundImage,
      font: getComputedStyle(e).fontFamily,
      fill: getComputedStyle(e).webkitTextFillColor,
    }));
  expect(style.bg).toBe("none");
  expect(style.font).toContain("Segoe UI");
  expect(style.fill).not.toBe("rgba(0, 0, 0, 0)");
});
test("legal pages share the theme, support languages and return to the home page", async ({
  page,
}) => {
  await page.locator("#language-menu-button").click();
  await page.locator('.lang-option[data-lang="en"]').click();
  await expect(page.locator(".footer-legal a")).toHaveAttribute(
    "href",
    "rechtliches.html?lang=en",
  );
  await page.locator(".footer-legal a").click();
  await expect(page).toHaveURL(/rechtliches\.html\?lang=en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".legal-block")).not.toHaveCount(0);
  expect(
    await page
      .locator("body")
      .evaluate((e) => getComputedStyle(e).backgroundColor),
  ).toBe("rgb(16, 18, 23)");
  await expect(page.locator("#legal-back")).toHaveAttribute(
    "href",
    "./#contact",
  );
  for (const [lang, html] of [
    ["en", "en"],
    ["fr", "fr"],
    ["sr", "sr-Latn"],
    ["sr-cyrl", "sr-Cyrl"],
    ["de", "de"],
  ]) {
    await page.locator("#legal-language-button").click();
    await page.locator(`#legal-language-menu [data-lang="${lang}"]`).press("Enter");
    await expect(page.locator("html")).toHaveAttribute("lang", html);
    await expect(page.locator("#legal-language-button")).toBeFocused();
    await expect(page.locator("#legal-title")).not.toBeEmpty();
  }
  await page.locator("#legal-back").click();
  await expect(page).toHaveURL(/\/#contact$/);
});

test("old legal addresses scroll to the corresponding sections", async ({ page }) => {
  for (const id of ["impressum", "datenschutz", "cookies"]) {
    await page.goto(`/${id}.html`);
    await expect(page).toHaveURL(new RegExp(`/rechtliches\\.html#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});
