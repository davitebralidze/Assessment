import { getPage, test } from "../page-fixtures/test-options";
import { MessagesPage } from "../pages/messages-page";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class InboxFolderView {
    //#region Locators
    private readonly attachmentOfTheReceivedMessage = ()=> new BaseElement(getPage().locator("a.GCSDBRWBJRB"));
    private readonly optionsDropdownButtonOfTheAttachentOfTheReceivedMessage = ()=> new ButtonElement(getPage().locator("b.icon-Arrow-down"));
    private readonly saveInDocumentsButtonOfTheDropdown = ()=> new ButtonElement(getPage().locator("span.GCSDBRWBGR", {hasText: "Save in Documents"}));
    private readonly saveButtonOnTheFoldersPopup = ()=> new ButtonElement(getPage().locator('div[class="btn GCSDBRWBO defaultBtn"]'));
    private readonly myDocumentsButtonInPopup = ()=> getPage().locator("div.treeItemLabel", {hasText: "My documents"});
    private readonly receivedMessageLocator = (messageSubject: string)=> new BaseElement(getPage().locator("div.listSubject").getByText(messageSubject));
    //#endregion

    //#region Steps

    async waitForTheMessageInInbox(messageSubject: string) {
        await test.step(`Wait for the message with the subject ${messageSubject} to be shown in inbox`, async ()=> {
          let isTheLastMessageVisible = false;
          let retry = 0;
          while (!isTheLastMessageVisible && retry < 21) {
            isTheLastMessageVisible = await this.receivedMessageLocator(messageSubject).isVisible();
            if (!isTheLastMessageVisible) {
              await MessagesPage.clickOnTheRefreshButton();
              await getPage().waitForTimeout(1000);
              retry ++;
            }
          }
        })
    }

    async openTheMessage(messageSubject: string) {
        await test.step(`Open the message from the inbox with the subject ${messageSubject}`, async ()=>{
          await this.receivedMessageLocator(messageSubject).forceClick(1000);
        })
      }
    
    async saveTheAttachmentOfTheMessageInDocuments(attachemntName: string) {
        await test.step(`Save the attachment of the opened message in the Documents folder`, async ()=>{
          await this.attachmentOfTheReceivedMessage().hover();
          await this.optionsDropdownButtonOfTheAttachentOfTheReceivedMessage().click();
          await this.saveInDocumentsButtonOfTheDropdown().forceClick();
          await this.myDocumentsButtonInPopup().click();
          await this.saveButtonOnTheFoldersPopup().waitForTheElementToBeAttached();
          await this.saveButtonOnTheFoldersPopup().forceClick();
        })
      }
    //#endregion
  }