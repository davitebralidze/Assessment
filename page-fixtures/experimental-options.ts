import {APIRequestContext, Page, test as base } from "@playwright/test";
import { Utils } from "../utils/utils";

export type TestOptions = {
  UIFixture: Page;
  APIFixture: APIRequestContext;
  MixedFixture: string;
  customPage: Page;
  customRequest: APIRequestContext;
};

let customPage: Page;
let customRequest: APIRequestContext;

export const test = base.extend<TestOptions>({
  MixedFixture: async ({ page, request }, use) => {
    console.log('BasicFixture')
    await Utils.deleteFolder('allure-results');
    customPage = page;
    customRequest = request;
    await page.goto("/");
    await use("");
    await page.close();
    await Utils.deleteFolder('test-results');
  },
  UIFixture: async ({ page, request }, use) => {
    console.log('UIFixture')
    await Utils.deleteFolder('allure-results');
    customPage = page;
    customRequest = request;
    await page.goto("/");
    await use(customPage);
    await page.close();
    await Utils.deleteFolder('test-results');
  },
  APIFixture: async ({ request }, use) => {
    
    console.log('APIFixture')
    customRequest = request;
    await use(customRequest);
  },
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