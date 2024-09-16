import { test as base } from "@playwright/test";
import { PageManager } from "./page-objects/page-manager";

export type TestOptions = {
  setupAndTeardown: string;
  pm: PageManager;
};

export const test = base.extend<TestOptions>({
  setupAndTeardown: async ({ page }, use) => {
    await page.goto("/");
    await use("");
    await page.close();
  },
  pm: async ({ page, setupAndTeardown }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});
