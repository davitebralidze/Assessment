import { getPage } from "../test-options";

export class OnLoggedInPage {
    
    //#region Locators
    private static readonly messagesButton = ()=> getPage().locator("div .icon24-Message");
    private static readonly documentsButton = ()=> getPage().locator("div.icon24-Documents");
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