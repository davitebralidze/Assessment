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
    //   'Authorization': `Token ${process.env.ACCESS_TOKEN}`
    // }
  },

  projects: [
    {
      name: "chromium",
      testMatch: ["test-scenario.spec.ts", "api-interception.spec.ts"],
      use: { browserName: 'chromium', baseURL: "https://mailfence.com/", viewport: {width: 1280, height: 720} },
    },

    {
      name: "firefox",
      testMatch: "test-scenario.spec.ts",
      use: { browserName: 'firefox', baseURL: "https://mailfence.com/", viewport: {width: 1280, height: 720} },
    },

    {
      name: "webkit",
      testMatch: "test-scenario.spec.ts",
      use: { browserName: 'webkit', baseURL: "https://mailfence.com/", viewport: {width: 1280, height: 720} },
    },
  ],
});
