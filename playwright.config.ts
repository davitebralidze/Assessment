import { defineConfig } from "@playwright/test";
require('dotenv').config();

export default defineConfig({
  reporter: [["allure-playwright"]],

  use: {
    baseURL: "https://mailfence.com/",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on",
    //Set access token globally, this avoids writing headers in the requests (it will take autoamtically)
    // extraHTTPHeaders: {
    //   'Authorization': `Token ${process.env.API_KEY}`
    // }
  },

  projects: [
    {
      name: "Mailfence",
      testMatch: ["test-scenario.spec.ts"],
      use: { browserName: 'chromium', baseURL: "https://mailfence.com/", viewport: {width: 1280, height: 720} },
    },
    {
      name: "API",
      testMatch: ["api-tests.spec.ts"],
      use: { browserName: 'chromium', baseURL: "https://mailfence.com/", viewport: {width: 1280, height: 720} },
    }
  ],
});
