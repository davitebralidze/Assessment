import { defineConfig } from "@playwright/test";

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
    {name: "setup", testMatch: 'auth.setup.ts'},
    {name: "API-auth-test", testMatch: "api-auth.spec.ts", use: {browserName: 'chromium', storageState: '.auth/user.json'}, dependencies: ["setup"] },

    {
      name: "chromium",
      testMatch: ["test-scenario.spec.ts", "api-interception.spec.ts", "api-token.spec.ts"],
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
