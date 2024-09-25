import { getPage } from "../page-fixtures/test-options";
import { Locator } from "@playwright/test"
import { ButtonElement } from "./button-element";

export class Header {

    messages: Locator;
    documents: Locator;

    //#region Locators
    private static readonly messagesButton = () => new ButtonElement(getPage().locator("div .icon24-Message"));
    private static readonly documentsButton = () => new ButtonElement(getPage().locator("div.icon24-Documents"));
    //#endregion

    //#region Steps
    static async clickOnMessagesButton() {
        await this.messagesButton().click();
      }
      
      static async clickOnDocumentsButton() {
        await this.documentsButton().click();
      }
    //#endregion
}