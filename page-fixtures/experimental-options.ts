import {APIRequestContext, Page, TestInfo, test as base } from "@playwright/test";
import { Utils } from "../utils/utils";

export type TestOptions = {
  customFixture: string;
  customPage: Page;
  customRequest: APIRequestContext;
};

let customPage: Page;
let customRequest: APIRequestContext;

export const test = base.extend<TestOptions>({
  customFixture: [async ({ page, request }, use, testInfo: TestInfo) => {
    if(testInfo.project.name === "Mailfence") {
      await Utils.deleteFolder('allure-results');
      customPage = page;
      customRequest = request;
      await page.goto("/");
      await use("");
      await page.close();
      await Utils.deleteFolder('test-results');
    } else if (testInfo.project.name === "API"){
      customRequest = request;
      await use("");
    }
  }, {auto: true}]
});

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
export function getPage(): Page {
  return customPage;
}

/**
 * Returns the current APIRequestContext.
 * @returns {APIRequestContext} The current APIRequestContext.
 */
export function getRequest(): APIRequestContext {
  return customRequest;
}