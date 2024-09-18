import { Page } from "@playwright/test";

export class TrashPageLocators {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
