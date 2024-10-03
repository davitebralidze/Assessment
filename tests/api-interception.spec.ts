import { test } from "@playwright/test";
import fruits from "../json-files/fruits.json"

test("intercept and modify API", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();

    //Editing an element in JSON
    json[1].name = "Banana edited manually";

    //Adding an element to JSON
    json.push({ name: "Loquat added manually", id: 100 });

    await route.fulfill({
      body: JSON.stringify(json),
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking");
  await page.waitForResponse("*/**/api/v1/fruits");
});

test("mock API", async ({page}) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    await route.fulfill({
      body: JSON.stringify(fruits),
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking");
  await page.waitForResponse("*/**/api/v1/fruits");
})