import { getPage } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element"

export class MessagesPage {
    //#region Locators
    private static readonly newMessageButton = ()=> new ButtonElement(getPage().locator(".tbBtnText", { hasText: "New" }));
    private static readonly inboxButton = ()=> new ButtonElement(getPage().locator("#treeInbox"));

    //#endregion
    static async clickOnNewMessageButton() {
        await this.newMessageButton().click();
    }
    
    static async clickOnInboxButton() {
        await this.inboxButton().click();
    }
    //#region Steps
}