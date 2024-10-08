import { Page, test as base, APIRequestContext } from "@playwright/test";
import { Utils } from "../utils/utils";

export type TestOptions = {
  customFixture: string;
  customPage?: Page; // Make customPage optional
  customRequest?: APIRequestContext; // Make customRequest optional
};

let customPage: Page | undefined;
let customRequest: APIRequestContext | undefined;

export const test = base.extend<TestOptions>({
  customFixture: [
    async ({ page, request }, use) => {
      await Utils.deleteFolder('allure-results');

      // Determine which context to use based on parameters or usage
      if (page) {
        customPage = page;
        await page.goto("/");
      } else {
        customRequest = request;
      }

      await use("");

      if (customPage) {
        await customPage.close();
        await Utils.deleteFolder('test-results');
      }
    },
    { auto: true }
  ]
});

/**
 * Returns the current Page.
 * @returns {Page | undefined} The current Page.
 */
export function getPage() {
  return customPage;
}

/**
 * Returns the current API request context.
 * @returns {APIRequestContext | undefined} The current API request context.
 */
export function getRequest() {
  return customRequest;
}
