import { getPage, test } from "../../page-fixtures/experimental-options";
import { BaseElement } from "../common-page-components/base-element"
import { ButtonElement } from "../common-page-components/button-element";

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

  async navigateTo(page: messagesSidebarPages) {
    switch (page) {
      case messagesSidebarPages.inbox:
        await test.step("Navigate to inbox", async () => {
          await this.clickOnInboxButton();
        });
        break;
    }
  }
}

export enum messagesSidebarPages {
  inbox,
}