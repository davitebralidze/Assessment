import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "./button-element";
import { InputElement } from "./input-element";
import { CheckboxElement } from "./checkbox-element";
import { Utils } from "../utils/utils";


export class NewMessageForm {
    //#region Locators
    private readonly attachmentButton = ()=> new ButtonElement(getPage().locator(".GCSDBRWBISB", {hasText: "Attachment",}));
    private readonly attachFromComputerButtonInput = ()=> new InputElement(getPage().locator('input[name="docgwt-uid-33"]'));
    private readonly emailReceiverInput = ()=> new InputElement(getPage().locator("#mailTo .GCSDBRWBPL"));
    private readonly sendButton = ()=> new ButtonElement(getPage().locator(".btnCtn", { hasText: "Send" }));
    private readonly subjectInput = ()=> new InputElement(getPage().locator("#mailSubject"));
    private readonly checkboxForTheUploadedFile = ()=> new CheckboxElement(getPage().locator("div .checkIcon"));
    //#endregion

    //#region Steps
    async clickOnAttachmentButton() {
        await test.step('Click on the attachment button for the opened message in the inbox', async ()=>{
          await this.attachmentButton().click();
        })
    }
    
    async uploadFileFromYourComputer(fileName: string) {
      await test.step(`Upload the attachment ${fileName} from the computer`, async ()=>{
        await Utils.createFile(fileName);
        await this.attachFromComputerButtonInput().setInputFiles(`${fileName}.txt`);
        await this.checkboxForTheUploadedFile().waitForVisibility();
        await Utils.deleteFile(fileName);
      })
    }
    
    async fillEmailReceiverInput(sendTo: string) {
        await test.step(`Fill the Reciever input with the string: ${sendTo}`, async ()=>{
          await this.emailReceiverInput().fill(sendTo);
        })
    }

    async fillSubjectInput(subject: string) {
        await test.step(`Fill the Subject input field with the string: ${subject}`, async ()=>{
          await this.subjectInput().fill(subject);
        })
    }

    async clickOnSendButton() {
        await test.step('Click on the send button of the New Message', async ()=>{
          await this.sendButton().click();
        })
    }
    //#endregion
}