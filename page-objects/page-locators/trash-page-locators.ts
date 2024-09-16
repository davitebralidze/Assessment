import { Page } from "@playwright/test";

export class TrashPageLocators {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected readonly targetElement = (fileName) =>
    this.page.getByTitle(`${fileName}.txt`);
}
