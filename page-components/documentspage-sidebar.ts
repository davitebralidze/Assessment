import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class DocumentsPageSidebar extends BaseElement {
  name: string = this.constructor.name;

  constructor(name?: string) {
    super(getPage().locator("div .GCSDBRWBJCC"));
    if (name) this.name = name;
  }

  public readonly trashButton = () => new ButtonElement(getPage().locator("#doc_tree_trash"));

  async clickOnTrashButton() {
    await test.step("Click on trash button", async () => {
      await this.trashButton().click();
    });
  }

  async navigateTo(page: sidebarPages) {
    switch (page) {
      case sidebarPages.trash:
        await test.step("Navigate to trash", async () => {
          await this.clickOnTrashButton();
        });
        break;
    }
  }
}

export enum sidebarPages {
  trash,
}
