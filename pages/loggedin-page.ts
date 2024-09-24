import { getPage } from "../page-fixtures/test-options";
import { ButtonElement } from '../page-components/button-element'

export class LoggedInPage {
    
    //#region Locators
    private static readonly messagesButton = ()=> new ButtonElement(getPage().locator("div .icon24-Message"));
    private static readonly documentsButton = ()=> new ButtonElement(getPage().locator("div.icon24-Documents"));
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