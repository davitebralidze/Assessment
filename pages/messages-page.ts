import { getPage } from "../test-options";

export class MessagesPage {
    //#region Locators
    private static readonly newMessageButton = ()=> getPage().locator(".tbBtnText", { hasText: "New" });
    private static readonly inboxButton = ()=> getPage().locator("#treeInbox");

    //#endregion
    static async clickOnNewMessageButton() {
        await this.newMessageButton().click();
    }
    
    static async clickOnInboxButton() {
        await this.inboxButton().click();
    }
    //#region Steps
}