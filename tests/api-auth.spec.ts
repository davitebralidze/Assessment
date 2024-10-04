import { test } from '@playwright/test'

test('test run', async ({ page }) => {
    await page.goto('https://angularjs.realworld.io/');
    await page.waitForURL('https://angularjs.realworld.io/');
})