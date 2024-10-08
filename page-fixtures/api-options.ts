import {APIRequest, APIRequestContext, Page, test as base } from "@playwright/test";

export type TestOptions = {
    customFixture: string;
    customRequest: APIRequestContext;
};

let customRequest: APIRequestContext;

export const test = base.extend<TestOptions>({
    customFixture: [async ({ request }, use) => {
    customRequest =  request
    await use("");
    }, {auto: true}]
});

/**
 * Returns the current Page.
 * @returns {Request} The current Page.
 */
export function getRequest() {
    return customRequest;
}