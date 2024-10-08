import { getPage, test } from "../../page-fixtures/test-options";
import { MessagesPage } from "./messages-page";
import { BaseElement } from "../common-page-components/base-element";
import { ButtonElement } from "../common-page-components/button-element";
import { FolderSelectionPopup } from "./folder-selection-popup";

export class InboxFolderView {
    //#region Locators
    private readonly attachmentOfTheReceivedMessage = ()=> new BaseElement(getPage().locator("a.GCSDBRWBJRB"));
    private readonly optionsDropdownButtonOfTheAttachentOfTheReceivedMessage = ()=> new ButtonElement(getPage().locator("b.icon-Arrow-down"));
    private readonly saveInDocumentsButtonOfTheDropdown = ()=> new ButtonElement(getPage().locator("span.GCSDBRWBGR", {hasText: "Save in Documents"}));
    private readonly receivedMessageLocator = (messageSubject: string)=> new BaseElement(getPage().locator("div.listSubject").getByText(messageSubject));
    private readonly folderSelectionPopup = ()=> new FolderSelectionPopup();
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
    
    async saveTheAttachmentOfTheOpenedMessageInDocuments() {
        await test.step(`Save the attachment of the opened message in the Documents folder`, async ()=>{
          await this.attachmentOfTheReceivedMessage().hover();
          await this.optionsDropdownButtonOfTheAttachentOfTheReceivedMessage().click();
          await this.saveInDocumentsButtonOfTheDropdown().forceClick();
          await this.folderSelectionPopup().clickOnMyDocuments();
          await this.folderSelectionPopup().waitForSaveButtonToBeAttached();
          await this.folderSelectionPopup().clickOnSaveButton();
        })
      }
    //#endregion
  }