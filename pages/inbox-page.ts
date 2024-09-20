import { getPage } from "../page-fixtures/test-options";

export class InboxPage {

    //#region Locators
    private static readonly refreshButton = ()=> getPage().getByTitle("Refresh");
    private static readonly uploadedFileButton = ()=> getPage().locator("a.GCSDBRWBJRB");
    private static readonly attachmentOfTheReceivedMessage = ()=> getPage().locator("a.GCSDBRWBJRB");
    private static readonly optionsDropdownOfTheAttachentOfTheReceivedMessage = ()=> getPage().locator("b.icon-Arrow-down");
    private static readonly saveInDocumentsButtonOfTheDropdown = ()=> getPage().locator("span.GCSDBRWBGR", {hasText: "Save in Documents",});
    private static readonly saveButtonOnTheFoldersPopup = ()=> getPage().locator('div[class="btn GCSDBRWBO defaultBtn"]');
    private static readonly myDocumentsInPopup = ()=> getPage().locator("div.treeItemLabel", {hasText: "My documents",});
    private static readonly receivedMessageLocator = (messageSubject: string)=> getPage().locator("div.listSubject").getByText(messageSubject);
    //#endregion

    //#region Steps
    static async openTheMessage(messageSubject: string) {
        let isTheLastMessageVisible = false;
        let retry = 0;
        while (!isTheLastMessageVisible && retry < 11) {
          isTheLastMessageVisible = await this.receivedMessageLocator(messageSubject).isVisible();
          if (!isTheLastMessageVisible) {
            await this.clickOnTheRefreshButton();
            await getPage().waitForTimeout(1000);
            retry ++;
          }
        }
        await this.receivedMessageLocator(messageSubject).click({force: true , timeout: 1000});
      }
    
    static async clickOnTheRefreshButton() {
      await this.refreshButton().click();
    }
    
    static  async saveTheAttachmentOfTheMessageInDocuments() {
        await this.attachmentOfTheReceivedMessage().hover();
        await this.optionsDropdownOfTheAttachentOfTheReceivedMessage().click();
        await this.saveInDocumentsButtonOfTheDropdown().click({ force: true });
        await this.myDocumentsInPopup().click();
        await this.saveButtonOnTheFoldersPopup().waitFor({ state: "attached" });
        await this.saveButtonOnTheFoldersPopup().click({ force: true });
      }
    //#endregion

}