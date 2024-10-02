import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class HeaderBar extends BaseElement {
  name: string = this.constructor.name;

  constructor(name?: string) {
    super(getPage().locator("#toolSelector"), "Header Element");
    if (name) this.name = name;
  }

  //#region Locators
  private readonly messagesButton = () => new ButtonElement(getPage().locator("div .icon24-Message"));
  private readonly documentsButton = () => new ButtonElement(getPage().locator("div.icon24-Documents"));
  //#endregion

  //#region Steps
  async clickOnMessagesButton() {
    await test.step("Click on messages button", async () => {
      await this.messagesButton().click();
    });
  }

  async clickOnDocumentsButton() {
    await test.step("Click on documents button", async () => {
      await this.documentsButton().click();
    });
  }
      //#endregion
}

export enum headerBarPages {
  messages,
  documents,
}
