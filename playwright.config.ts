import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: process.env.PORTFOLIO_TEST_URL || "http://localhost:3001",
    browserName: "chromium",
    launchOptions: process.env.PLAYWRIGHT_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH }
      : {},
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run start -- --port 3001",
    url: "http://localhost:3001",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
