import {Page, test as base } from "@playwright/test";

export type TestOptions = {
  customFixture: string;
  customPage: Page;
};

let customPage: Page;

export const test = base.extend<TestOptions>({
  customFixture: async ({ page }, use) => {
    customPage = page;
    await page.goto("/");
    await use("");
    await page.close();
  }
});

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
export function getPage() {
  return customPage;
}