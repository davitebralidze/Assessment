import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  retries: 1,
  reporter: "html",

  use: {
    baseURL: "https://mailfence.com/",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
    },

    {
      name: "firefox",
      use: { browserName: 'firefox' },
    },

    {
      name: "webkit",
      use: { browserName: 'webkit' },
    },
  ],
});
