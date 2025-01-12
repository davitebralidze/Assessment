import { defineConfig } from "@playwright/test";
require('dotenv').config();

export default defineConfig({
  reporter: [["allure-playwright"]],

  use: {
    baseURL: "https://mailfence.com/",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on",
    //Set access token globally, this avoids writing headers in the requests (it will take automatically)
    // extraHTTPHeaders: {
    //   'Authorization': `Token ${process.env.API_KEY}`
    // }

    //Grant permissions to camera and microphone
    //In case we run the tests virtually or in playwright UI, we need to add virtual devices to gran permissions to them
    //permissions: ["microphone", "camera"], // Grant microphone and camera access
    // launchOptions: {
    //   args: [
    //     '--use-fake-device-for-media-stream', // Use fake media devices
    //     '--use-fake-ui-for-media-stream', // Skip media permission dialogs
    //     '--use-file-for-fake-video-capture=/path/to/video.y4m', // Custom video file
    //     '--use-file-for-fake-audio-capture=/path/to/audio.wav'  // Custom audio file
    //   ]
    // },
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
