import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;
const EXISTING_SERVER = process.env.PLAYWRIGHT_BASE_URL;
const BASE_URL = EXISTING_SERVER ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  // In CI: annotations on the commit, plus an HTML report uploaded when a run fails.
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: { baseURL: BASE_URL, trace: "on-first-retry" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: EXISTING_SERVER
    ? undefined
    : {
        command: process.env.CI ? `pnpm start --port ${PORT}` : `pnpm dev --port ${PORT}`,
        url: BASE_URL,
        reuseExistingServer: !process.env.CI,
      },
});
