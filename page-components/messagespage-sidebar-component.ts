import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class MessagesSidebarComponent extends BaseElement {
  name: string = this.constructor.name;

  constructor(name?: string) {
    super(getPage().locator("div .GCSDBRWBJCC"));
    if (name) this.name = name;
  }

  private readonly inboxButton = () => new ButtonElement(getPage().locator("#treeInbox"));

  async clickOnInboxButton() {
    await test.step("Click on the Inbox folder button on the Messages page", async () => {
      await this.inboxButton().click();
    });
  }

  async navigateTo(page: sidebarPages) {
    switch (page) {
      case sidebarPages.inbox:
        await test.step("Navigate to inbox", async () => {
          await this.clickOnInboxButton();
        });
        break;
    }
  }
}

export enum sidebarPages {
  inbox,
}
