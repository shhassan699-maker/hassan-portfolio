import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 390, 768, 1440]) {
  test(`project shortcuts and detail browsing work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const shortcuts = page.getByRole("navigation", {
      name: "Jump to a featured project",
    });
    await shortcuts.getByRole("link", { name: /OfferLanded/ }).click();
    await expect(page).toHaveURL(/#project-offerlanded$/);
    const project = page.locator("#project-offerlanded");
    await expect(project).toBeFocused();
    await expect.poll(() => project.evaluate((element) =>
      element.getBoundingClientRect().top,
    )).toBeGreaterThanOrEqual(width < 760 ? 72 : 88);

    const trigger = project.getByRole("button", { name: "Explore testing approach" });
    await trigger.click();
    const dialog = page.getByRole("dialog");
    const body = dialog.getByRole("region", { name: "Project detail content" });
    const close = dialog.getByRole("button", { name: "Close project details" });
    const previous = dialog.getByRole("button", { name: "Previous project" });
    const next = dialog.getByRole("button", { name: "Next project" });
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("OfferLanded");
    await body.evaluate((element) => { element.scrollTop = element.scrollHeight; });
    await expect(close).toBeInViewport();
    await expect(next).toBeInViewport();
    await next.click();
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("SoapSuds");
    await expect(dialog.getByRole("status")).toHaveText("SoapSuds. Project 3 of 3.");
    await expect(next).toBeFocused();
    expect(await body.evaluate((element) => element.scrollTop)).toBe(0);
    await next.click();
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("GetChatly");
    await previous.click();
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("SoapSuds");
    await close.focus();
    await page.keyboard.press("Shift+Tab");
    await expect(next).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(close).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(body).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(previous).toBeFocused();
    expect((await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]);
    await page.screenshot({ path: `test-results/detail-viewer-${width}.png` });
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(dialog.getByRole("heading", { level: 2 })).toHaveText("OfferLanded");
    await close.click();
  });
}

test("mobile disclosure dismisses outside and when keyboard focus leaves navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  const menu = page.locator("#mobile-navigation");
  await toggle.click();
  await page.locator(".hero-description").click();
  await expect(menu).not.toBeVisible();
  await toggle.click();
  await page.keyboard.press("Tab");
  await expect(menu.getByRole("link", { name: "Work", exact: true })).toBeFocused();
  for (let index = 0; index < 4; index++) await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "View selected work" })).toBeFocused();
  await expect(menu).not.toBeVisible();
  await toggle.click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(menu).not.toBeVisible();
  await page.setViewportSize({ width: 390, height: 900 });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});
