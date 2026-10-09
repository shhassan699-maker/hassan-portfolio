import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("walkthrough runs once, pauses, resumes, and resets without moving focus", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto("/");
  const steps = page.locator(".workflow-steps");
  const play = page.getByRole("button", { name: "Play walkthrough" });
  await play.click();
  await page.clock.fastForward(1800);
  await expect(
    steps.getByRole("button", { name: /^Validate/ }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("button", { name: "Pause walkthrough" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Pause walkthrough" }).click();
  await page.clock.fastForward(6000);
  await expect(
    steps.getByRole("button", { name: /^Validate/ }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Resume walkthrough" }).click();
  for (let i = 0; i < 3; i++) await page.clock.fastForward(1800);
  await expect(steps.getByRole("button", { name: /^Retest/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator(".walkthrough-feedback")).toContainText(
    "Walkthrough complete",
  );
  await page.clock.fastForward(10000);
  await expect(steps.getByRole("button", { name: /^Retest/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(steps.getByRole("button", { name: /^Explore/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator(".walkthrough-feedback")).toHaveText(
    "Walkthrough reset to Explore.",
  );
  await play.click();
  await steps.getByRole("button", { name: /^Report/ }).focus();
  await page.clock.fastForward(5000);
  await expect(steps.getByRole("button", { name: /^Report/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(play).toBeVisible();
});

test("scenario changes keep panel geometry stable and show associated expected messages", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/");
  const panel = page.locator(".scenario-panel");
  await panel.scrollIntoViewIfNeeded();
  const before = await panel.boundingBox();
  for (const name of [
    "Missing required field",
    "Invalid email",
    "Repeated submission",
    "Valid input",
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    await expect(
      page.getByRole("button", { name, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      Math.abs((await panel.boundingBox())!.height - before!.height),
    ).toBeLessThan(1);
    await expect(page.locator(".scenario-indicator")).toHaveAttribute(
      "data-ready",
      "true",
    );
  }
  await page
    .getByRole("button", { name: "Missing required field", exact: true })
    .click();
  await expect(
    page.locator(
      '#scenario-detail [aria-hidden="false"] .field-attention .field-message',
    ),
  ).toHaveText("Expected: Name is required");
  await page
    .getByRole("button", { name: "Invalid email", exact: true })
    .click();
  const active = page.locator('#scenario-detail [aria-hidden="false"]');
  await expect(active.locator(".field-attention .field-value")).toHaveText(
    "alex@",
  );
  await expect(active.locator(".field-attention .field-message")).toHaveText(
    "Expected: Enter a valid email address",
  );
  await page.getByRole("button", { name: "Reset scenario" }).click();
  await expect(
    page.getByRole("button", { name: "Valid input", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('.scenario-footer [role="status"]')).toHaveText(
    "Scenario reset to Valid input.",
  );
});

test("dialog remains modal during its exit and restores focus after closing", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page
    .getByRole("button", { name: "Explore testing approach" })
    .first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await page.keyboard.press("Shift+Tab");
  await expect(
    dialog.getByRole("button", { name: "Next project" }),
  ).toBeFocused();
  expect(
    await page.evaluate(() => {
      const element = document.querySelector(
        "dialog[open]",
      ) as HTMLDialogElement;
      (element.querySelector("button") as HTMLButtonElement).click();
      return (
        element.matches(":modal") && document.body.style.overflow === "hidden"
      );
    }),
  ).toBe(true);
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

for (const width of [360, 390, 768, 1440]) {
  test(`reduced motion remains immediate and accessible at ${width}px`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page
        .locator("h1")
        .evaluate((element) => ({
          animation: getComputedStyle(element).animationName,
          opacity: getComputedStyle(element).opacity,
          transform: getComputedStyle(element).transform,
        })),
    ).toEqual({ animation: "none", opacity: "1", transform: "none" });
    await page
      .getByRole("button", { name: "Invalid email", exact: true })
      .click();
    expect(
      await page
        .locator(".scenario-indicator")
        .evaluate((element) => getComputedStyle(element).transitionDuration),
    ).toBe("0s");
    await expect(
      page.locator('#scenario-detail [aria-hidden="false"] code'),
    ).toContainText("emailField.valid");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBe(width);
    if (width < 760) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      expect(
        await page
          .locator("#mobile-navigation")
          .evaluate((element) => getComputedStyle(element).transitionDuration),
      ).toBe("0s");
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobile-navigation")).not.toBeVisible();
    }
    await page
      .getByRole("button", { name: "Explore testing approach" })
      .first()
      .click();
    const dialog = page.getByRole("dialog");
    await page.evaluate(() =>
      (
        document.querySelector("dialog[open] button") as HTMLButtonElement
      ).click(),
    );
    expect(await page.locator("dialog[open]").count()).toBe(0);
    await expect(dialog).not.toBeVisible();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page.screenshot({
      path: `test-results/reduced-${width}.png`,
      fullPage: true,
    });
  });
}
