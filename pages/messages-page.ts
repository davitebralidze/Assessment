import { getPage } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";
import { BaseElement } from "../page-components/base-element";

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

    public static InboxPage = class {

        //#region Locators
        private static readonly refreshButton = ()=> new ButtonElement(getPage().getByTitle("Refresh"));
        private static readonly attachmentOfTheReceivedMessage = ()=> new BaseElement(getPage().locator("a.GCSDBRWBJRB"));
        private static readonly optionsDropdownButtonOfTheAttachentOfTheReceivedMessage = ()=> new ButtonElement(getPage().locator("b.icon-Arrow-down"));
        private static readonly saveInDocumentsButtonOfTheDropdown = ()=> new ButtonElement(getPage().locator("span.GCSDBRWBGR", {hasText: "Save in Documents"}));
        private static readonly saveButtonOnTheFoldersPopup = ()=> new ButtonElement(getPage().locator('div[class="btn GCSDBRWBO defaultBtn"]'));
        private static readonly myDocumentsButtonInPopup = ()=> getPage().locator("div.treeItemLabel", {hasText: "My documents"});
        private static readonly receivedMessageLocator = (messageSubject: string)=> new BaseElement(getPage().locator("div.listSubject").getByText(messageSubject));
        //#endregion
    
        //#region Steps
        static async openTheMessage(messageSubject: string) {
            let isTheLastMessageVisible = false;
            let retry = 0;
            while (!isTheLastMessageVisible && retry < 21) {
              isTheLastMessageVisible = await this.receivedMessageLocator(messageSubject).isVisible();
              if (!isTheLastMessageVisible) {
                await this.clickOnTheRefreshButton();
                await getPage().waitForTimeout(1000);
                retry ++;
              }
            }
            await this.receivedMessageLocator(messageSubject).forceClickWithATimeout(1000);
          }
        
        static async clickOnTheRefreshButton() {
          await this.refreshButton().click();
        }
        
        static  async saveTheAttachmentOfTheMessageInDocuments() {
            await this.attachmentOfTheReceivedMessage().hover();
            await this.optionsDropdownButtonOfTheAttachentOfTheReceivedMessage().click();
            await this.saveInDocumentsButtonOfTheDropdown().forceClick();
            await this.myDocumentsButtonInPopup().click();
            await this.saveButtonOnTheFoldersPopup().waitForTheElementToBeAttached();
            await this.saveButtonOnTheFoldersPopup().forceClick();
          }
        //#endregion
    
    }

}