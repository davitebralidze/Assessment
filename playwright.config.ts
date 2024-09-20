import { defineConfig, devices } from "@playwright/test";

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
      use: { browserName: 'chromium', baseURL: "https://mailfence.com/" },
    },

    {
      name: "firefox",
      use: { browserName: 'firefox', baseURL: "https://mailfence.com/" },
    },

    {
      name: "webkit",
      use: { browserName: 'webkit', baseURL: "https://mailfence.com/" },
    },
  ],
});
