import { Page } from "@playwright/test";

export class SharedLocators {

    private readonly page: Page;
    constructor(page: Page) {
      this.page = page;
    }

    readonly targetElement = (fileName) =>
        this.page.getByTitle(`${fileName}.txt`);
}
