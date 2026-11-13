import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = ["/", "/tasks", "/activity"];
const WCAG_AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    for (const path of PAGES) {
      test(`${path} has no WCAG 2.2 AA violations`, async ({ page }) => {
        await page.goto(path);
        const { violations } = await new AxeBuilder({ page }).withTags(WCAG_AA).analyze();
        expect(violations).toEqual([]);
      });
    }

    test("the new-task dialog with errors has no violations", async ({ page }) => {
      await page.goto("/");
      await page.getByRole("button", { name: "New task" }).click();
      await page.getByRole("button", { name: "Create task" }).click();
      const { violations } = await new AxeBuilder({ page }).include("dialog").withTags(WCAG_AA).analyze();
      expect(violations).toEqual([]);
    });
  });
}
