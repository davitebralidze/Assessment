import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class Headerbar extends BaseElement {
  name: string = this.constructor.name;

  constructor(name?: string) {
    super(getPage().locator("#toolSelector"), "Header Element");
    if (name) this.name = name;
  }

  //#region Locators
  private static readonly messagesButton = () => new ButtonElement(getPage().locator("div .icon24-Message"));
  private static readonly documentsButton = () => new ButtonElement(getPage().locator("div.icon24-Documents"));
  //#endregion

  //#region Steps
  static async clickOnMessagesButton() {
    await test.step("Click on messages button", async () => {
      await this.messagesButton().click();
    });
  }

  static async clickOnDocumentsButton() {
    await test.step("Click on documents button", async () => {
      await this.documentsButton().click();
    });
  }

  static async navigateTo(page: headerbarPages) {
    switch (page) {
      case headerbarPages.messages:
        await test.step("Navigate to messages page", async () => {
          await this.clickOnMessagesButton();
        });
        break;
      case headerbarPages.documents:
        await test.step("Navigate to documents page", async () => {
          await this.clickOnDocumentsButton();
        });
        break;
    }
    //#endregion
  }
}

export enum headerbarPages {
  messages,
  documents,
}
