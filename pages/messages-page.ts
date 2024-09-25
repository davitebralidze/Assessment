import { BaseElement } from "../page-components/base-element";
import { getPage, test } from "../page-fixtures/test-options";
import { Utils } from "../utils/utils.ts";
import { ButtonElement } from "../page-components/button-element"
import { InputElement } from "../page-components/input-element"
import { CheckboxElement } from "../page-components/checkbox-element";
import { Header } from "../page-components/header-component.ts";

export class MessagesPage {
    //#region Locators
    private static readonly newMessageButton = ()=> new ButtonElement(getPage().locator(".tbBtnText", { hasText: "New" }));
    private static readonly inboxButton = ()=> new ButtonElement(getPage().locator("#treeInbox"));
    private static readonly refreshButton = ()=> new ButtonElement(getPage().getByTitle("Refresh"));
    //#endregion
    
    //#region Steps
    static async clickOnNewMessageButton() {
        await test.step('Click on the New Message button on the Messages page', async ()=>{
          await this.newMessageButton().click();
        })
    }
    
    static async clickOnInboxButton() {
        await test.step('Click on the Inbox folder button on the Messages page', async ()=>{
          await this.inboxButton().click();
        })
    }

    static async clickOnTheRefreshButton() {
        await test.step('Click on the refresh button on the Messages page', async ()=>{
          await this.refreshButton().click();
        })
    }
    //#endregion

    public static NewMessageForm = class {
      //#region Locators
      private static readonly attachmentButton = ()=> new ButtonElement(getPage().locator(".GCSDBRWBISB", {hasText: "Attachment",}));
      private static readonly attachFromComputerButtonInput = ()=> new InputElement(getPage().locator('input[name="docgwt-uid-33"]'));
      private static readonly emailReceiverInput = ()=> new InputElement(getPage().locator("#mailTo .GCSDBRWBPL"));
      private static readonly sendButton = ()=> new ButtonElement(getPage().locator(".btnCtn", { hasText: "Send" }));
      private static readonly subjectInput = ()=> new InputElement(getPage().locator("#mailSubject"));
      private static readonly checkboxForTheUploadedFile = ()=> new CheckboxElement(getPage().locator("div .checkIcon"));
      //#endregion
  
      //#region Steps
      static async clickOnAttachmentButton() {
          await test.step('Click on the attachment button for the opened message in the inbox', async ()=>{
            await this.attachmentButton().click();
          })
      }
      
      static async uploadFileFromYourComputer(fileName: string) {
        await test.step(`Upload the attachment ${fileName} from the computer`, async ()=>{
          await Utils.createFile(fileName);
          await this.attachFromComputerButtonInput().setInputFiles(`${fileName}.txt`);
          await this.checkboxForTheUploadedFile().waitForVisibility();
          await Utils.deleteFile(fileName);
        })
      }
      
      static async fillEmailReceiverInput(sendTo: string) {
          await test.step(`Fill the Reciever input with the string: ${sendTo}`, async ()=>{
            await this.emailReceiverInput().fill(sendTo);
          })
      }

      static async fillSubjectInput(subject: string) {
          await test.step(`Fill the Subject input field with the string: ${subject}`, async ()=>{
            await this.subjectInput().fill(subject);
          })
      }

      static async clickOnSendButton() {
          await test.step('Click on the send button of the New Message', async ()=>{
            await this.sendButton().click();
          })
      }


      static async sendEmail(reciever: string, subject: string, fileName: string) {
          await test.step(`Send the email to ${reciever} with the subject: ${subject} and the file ${fileName}`, async ()=>{
            await Header.clickOnMessagesButton();
            await MessagesPage.clickOnNewMessageButton();
            await this.fillEmailReceiverInput(reciever);
            await this.fillSubjectInput(subject);
            await this.clickOnAttachmentButton();
            await this.uploadFileFromYourComputer(fileName);
            await this.clickOnSendButton();
          })
      }
      //#endregion
  }

  public static InboxFolder = class {
    //#region Locators
    private static readonly attachmentOfTheReceivedMessage = ()=> new BaseElement(getPage().locator("a.GCSDBRWBJRB"));
    private static readonly optionsDropdownButtonOfTheAttachentOfTheReceivedMessage = ()=> new ButtonElement(getPage().locator("b.icon-Arrow-down"));
    private static readonly saveInDocumentsButtonOfTheDropdown = ()=> new ButtonElement(getPage().locator("span.GCSDBRWBGR", {hasText: "Save in Documents"}));
    private static readonly saveButtonOnTheFoldersPopup = ()=> new ButtonElement(getPage().locator('div[class="btn GCSDBRWBO defaultBtn"]'));
    private static readonly myDocumentsButtonInPopup = ()=> getPage().locator("div.treeItemLabel", {hasText: "My documents"});
    private static readonly receivedMessageLocator = (messageSubject: string)=> new BaseElement(getPage().locator("div.listSubject").getByText(messageSubject));
    //#endregion

    //#region Steps
    static async openTheMessage(messageSubject: string) {
        await test.step(`Open the message from the inbox with the subject ${messageSubject}`, async ()=>{
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
          await this.receivedMessageLocator(messageSubject).forceClick(1000);
        })
      }
    
    static  async saveTheAttachmentOfTheMessageInDocuments(attachemntName: string) {
        await test.step(`Save the attachment of the opened message in the Documents folder`, async ()=>{
          await this.openTheMessage(attachemntName);
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
}