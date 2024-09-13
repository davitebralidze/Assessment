import { test as base } from "@playwright/test";
import { PageManager } from "./page-objects/pageManager";

export type TestOptions = {
  config: string;
  pm: PageManager;
};

export const test = base.extend<TestOptions>({
  config: async ({ page }, use) => {
    await page.goto("/");
    await use("");
    await page.close();
  },
  pm: async ({ page, config }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});
