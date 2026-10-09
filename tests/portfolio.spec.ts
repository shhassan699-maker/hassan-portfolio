import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("extension attributes on html do not trigger a hydration warning", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    const inject = () => {
      if (!document.documentElement) return false;
      document.documentElement.setAttribute("data-ol-extension", "0.1.0");
      return true;
    };
    if (!inject()) {
      const observer = new MutationObserver(() => {
        if (inject()) observer.disconnect();
      });
      observer.observe(document, { childList: true, subtree: true });
    }
  });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute(
    "data-ol-extension",
    "0.1.0",
  );
  await page
    .locator(".workflow-steps")
    .getByRole("button", { name: /^Validate/ })
    .click();
  await expect(page.locator("#workflow-explanation")).toContainText(
    "Clear test coverage",
  );
  expect(
    errors.filter((error) => /hydrat|server rendered HTML/i.test(error)),
  ).toEqual([]);
});

for (const width of [360, 390, 768, 1440]) {
  test(`readable layout and accessible interactions at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Software quality",
    );
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(width);
    expect(
      await page.evaluate(() =>
        Array.from(document.querySelectorAll("main *"))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return (
              rect.width > 0 &&
              (rect.right > window.innerWidth + 1 || rect.left < -1)
            );
          })
          .map((element) => element.tagName + "." + element.className),
      ),
    ).toEqual([]);
    if (width < 760) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await expect(
        page.getByRole("button", { name: "Close navigation" }),
      ).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toBeFocused();
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .locator("#mobile-navigation")
        .getByRole("link", { name: "Work", exact: true })
        .click();
      await expect(page.locator("#mobile-navigation")).not.toBeVisible();
    } else {
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Work", exact: true })
        .click();
      await expect(
        page
          .getByRole("navigation")
          .getByRole("link", { name: "Work", exact: true }),
      ).toHaveAttribute("aria-current", "location");
    }
    await expect(page).toHaveURL(/#work$/);
    await expect
      .poll(() =>
        page
          .locator("#work")
          .evaluate((element) =>
            Math.round(element.getBoundingClientRect().top),
          ),
      )
      .toBeGreaterThanOrEqual(88);
    const trigger = page
      .getByRole("button", { name: "Explore testing approach" })
      .first();
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("button", { name: "Close project details" }),
    ).toBeFocused();
    await expect(dialog).toContainText("Illustrative testing scenario", {
      ignoreCase: true,
    });
    await page.keyboard.press("Tab");
    await expect(
      dialog.getByRole("region", { name: "Project detail content" }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
      "hidden",
    );
    for (const [index, name] of [
      "Valid input",
      "Missing required field",
      "Invalid email",
      "Repeated submission",
    ].entries()) {
      const button = page.getByRole("button", { name, exact: true });
      await button.click();
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(
        page.locator('#scenario-detail [aria-hidden="false"] code'),
      ).toContainText(
        [
          "reviewStep.visible",
          "nameField.error",
          "emailField.valid",
          "createdOrders.count",
        ][index],
      );
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBe(width);
    }
    for (const organization of ["ninesol", "codesOrbit", "iqra"]) {
      const logo = page.locator(
        `[data-organization="${organization}"] img`,
      );
      await logo.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          logo.evaluate((image: HTMLImageElement) =>
            image.complete && image.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `test-results/portfolio-${width}.png`,
      fullPage: true,
    });
  });
}

test("workflow responds to keyboard focus and project details close correctly", async ({
  page,
}) => {
  await page.goto("/");
  for (const [name, output] of [
    ["Explore", "User journeys & risks"],
    ["Validate", "Clear test coverage"],
    ["Report", "Actionable bug reports"],
    ["Retest", "Fix verification & regression checks"],
  ]) {
    const button = page
      .locator(".workflow-steps")
      .getByRole("button", { name: new RegExp(name) });
    await button.focus();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(
      page.locator('#workflow-explanation [aria-hidden="false"]'),
    ).toContainText(output);
  }
  for (const [index, name] of [
    "GetChatly",
    "OfferLanded",
    "SoapSuds",
  ].entries()) {
    const trigger = page
      .getByRole("button", { name: "Explore testing approach" })
      .nth(index);
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText(name);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await dialog.getByRole("button", { name: "Close project details" }).click();
    await expect(trigger).toBeFocused();
  }
});

test("real contact links, copy feedback, and every resume download", async ({
  page,
  context,
  request,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await expect(
    page.locator('a[href="mailto:Shhassan699@gmail.com"]'),
  ).toBeVisible();
  await expect(page.locator('a[href="tel:+923355774061"]')).toBeVisible();
  await expect(
    // The PDF's embedded hyperlink is the authoritative destination.
    page.locator(
      'a[href="https://www.linkedin.com/in/hassan-sheikh-1a2b72185"]',
    ),
  ).toBeVisible();
  const copy = page.getByRole("button", { name: "Copy email address" });
  await copy.click();
  await expect(page.locator(".copy-email").getByRole("status")).toHaveText(
    "Email copied to clipboard.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "Shhassan699@gmail.com",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("denied")),
      configurable: true,
    });
  });
  await copy.click();
  await expect(page.locator(".copy-email").getByRole("status")).toContainText(
    "Couldn’t copy",
  );
  const response = await request.get("/hassan-sheikh-resume.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const links = page.locator('a[download="hassan-sheikh-resume.pdf"]');
  await expect(links).toHaveCount(3);
  for (const link of await links.all()) {
    const downloadPromise = page.waitForEvent("download");
    await link.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("hassan-sheikh-resume.pdf");
    expect(await download.failure()).toBeNull();
  }
});

test("skip link, reduced motion, and content without JavaScript", async ({
  page,
  browser,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await page
    .getByRole("button", { name: "Invalid email", exact: true })
    .click();
  expect(
    await page
      .locator(".panel-transition")
      .last()
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("/");
  await expect(staticPage.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    staticPage.getByRole("heading", {
      name: "Ninesol Technologies",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    staticPage.locator('a[href="mailto:Shhassan699@gmail.com"]'),
  ).toBeVisible();
  await context.close();
});

test("legacy routes preserve links to the redesigned sections and social assets work", async ({
  page,
  request,
}) => {
  for (const [route, hash] of [
    ["projects", "work"],
    ["skills", "expertise"],
    ["experience", "experience"],
    ["about", "about"],
    ["contact", "contact"],
  ]) {
    await page.goto(`/${route}`);
    await expect(page).toHaveURL(new RegExp(`/#${hash}$`));
  }
  for (const asset of ["/icon.svg", "/opengraph-image"]) {
    expect((await request.get(asset)).status()).toBe(200);
  }
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Muhammad Hassan Sheikh — SQA Engineer",
  );
});
