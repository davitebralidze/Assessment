import { Page, Locator } from "@playwright/test";

export class DocumentsPageLocators {
  protected readonly page: Page;

  protected readonly trashButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.trashButton = page.locator("#doc_tree_trash");
  }
}
