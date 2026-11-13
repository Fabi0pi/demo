import { expect, test } from "@playwright/test";

test("moves between pages and lands on each page's heading", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("link", { name: "Activity" }).click();

  await expect(page).toHaveURL("/activity");
  await expect(page).toHaveTitle("Activity · Release Desk");
  await expect(page.getByRole("heading", { level: 1, name: "Activity" })).toBeFocused();

  // On phones the menu closes after navigating; reopen it to read the current page.
  if (isMobile) await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("link", { name: "Activity" })).toHaveAttribute("aria-current", "page");
});

test("restores the sample tasks after a change", async ({ page, isMobile }) => {
  await page.goto("/tasks");
  await page.getByRole("button", { name: "More actions: Checkout forms" }).click();
  await page.getByRole("menuitem", { name: "Delete task" }).click();

  if (isMobile) await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("button", { name: "Reset workspace" }).first().click();
  await expect(page.getByRole("list", { name: "Tasks in this release" }).getByRole("listitem").filter({ hasText: "Checkout forms" })).toBeVisible();
});
