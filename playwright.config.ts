import { defineConfig, devices } from "@playwright/test";
import { timeStamp } from "console";

export default defineConfig({
  reporter: [["html"], ["allure-playwright"]],

  use: {
    baseURL: "https://mailfence.com/",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on"
  },

  projects: [
    {
      name: "chromium",
      testMatch: "test-scenario.spec.ts",
      use: { browserName: 'chromium', baseURL: "https://mailfence.com/" },
    },

    {
      name: "firefox",
      testMatch: "test-scenario.spec.ts",
      use: { browserName: 'firefox', baseURL: "https://mailfence.com/" },
    },

    {
      name: "webkit",
      testMatch: "test-scenario.spec.ts",
      use: { browserName: 'webkit', baseURL: "https://mailfence.com/" },
    },
  ],
});
