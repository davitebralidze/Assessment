import { Page, Locator } from "@playwright/test";

export class LandingPageLocators {
  protected readonly page: Page;

  protected readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInButton = page.locator("#signin");
  }
}
