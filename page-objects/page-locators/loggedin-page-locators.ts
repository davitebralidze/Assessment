import { Page, Locator } from "@playwright/test";

export class LoggedInPageLocators {
  private readonly page: Page;

  protected readonly messagesButton: Locator;
  protected readonly documentsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messagesButton = page.locator("div .icon24-Message");
    this.documentsButton = page.locator("div.icon24-Documents");
  }
}
