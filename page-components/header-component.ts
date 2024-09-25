import { getPage, test } from "../page-fixtures/test-options";
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
        await test.step('Click on the Messages button in the header', async ()=>{
          await this.messagesButton().click();
        })
      }
      
      static async clickOnDocumentsButton() {
        await test.step('Click on the Documents button in the header', async ()=>{
          await this.documentsButton().click();
        })
      }
    //#endregion
}