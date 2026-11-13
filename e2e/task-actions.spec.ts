import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const taskRows = (page: Page) => page.getByRole("list", { name: "Tasks in this release" }).getByRole("listitem");

test("changes a status from the keyboard through the actions menu", async ({ page }) => {
  await page.goto("/tasks");
  const row = taskRows(page).filter({ hasText: "Checkout forms" });
  await expect(row.getByText("In review")).toBeVisible();

  await page.getByRole("button", { name: "More actions: Checkout forms" }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("menuitem", { name: "Mark ready" })).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(row.getByText("Ready")).toBeVisible();
  await expect(page.getByRole("button", { name: "More actions: Checkout forms" })).toBeFocused();
});

test("deletes a task and keeps focus on the next one", async ({ page }) => {
  await page.goto("/tasks");
  await page.getByRole("button", { name: "More actions: Checkout forms" }).click();
  await page.getByRole("menuitem", { name: "Delete task" }).click();

  await expect(taskRows(page).filter({ hasText: "Checkout forms" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "More actions: Site navigation" })).toBeFocused();
});

test("filters and searches, announcing the result count", async ({ page }) => {
  await page.goto("/tasks");
  await page.getByRole("button", { name: "Ready", exact: true }).click();
  await expect(taskRows(page)).toHaveCount(1);

  await page.getByRole("button", { name: "All", exact: true }).click();
  await page.getByLabel("Search tasks").fill("zzz");
  await expect(page.getByText("No matching tasks")).toBeVisible();
  await expect(page.getByText("0 results")).toBeAttached();
});
