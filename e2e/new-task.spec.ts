import { expect, test } from "@playwright/test";

test("creates a task, with errors linked to their fields first", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "New task" }).click();

  const dialog = page.getByRole("dialog", { name: "Create a task" });
  await dialog.getByRole("button", { name: "Create task" }).click();

  const name = dialog.getByLabel("Task name");
  await expect(name).toBeFocused();
  await expect(name).toHaveAccessibleDescription("Enter a task name.");

  await name.fill("Review form");
  await dialog.getByLabel("Category").fill("Checkout");
  await dialog.getByLabel("Description").fill("Check errors");
  await dialog.getByRole("button", { name: "Create task" }).click();

  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL("/tasks");
  await expect(page.getByRole("status").filter({ hasText: "Task created" })).toBeVisible();
  await expect(page.getByRole("list", { name: "Tasks in this release" }).getByRole("listitem").filter({ hasText: "Review form" })).toBeVisible();
});

test("closes the dialog with Escape and returns focus to its trigger", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "New task" });
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(trigger).toBeFocused();
});
