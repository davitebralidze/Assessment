import {Page, test as base } from "@playwright/test";
import { Utils } from "../utils/utils";

export type TestOptions = {
  customFixture: string;
  customPage: Page;
};

let customPage: Page;

export const test = base.extend<TestOptions>({
  customFixture: [async ({ page }, use) => {
    Utils.deleteFolder('allure-results');
    customPage = page;
    await page.goto("/");
    await use("");
    await page.close();
    await Utils.deleteFolder('test-results');
  }, {auto: true}]
});

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
export function getPage() {
  return customPage;
}