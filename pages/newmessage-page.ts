import { getPage } from "../page-fixtures/test-options";
import { Utils } from "../utils/utils.ts";
import { ButtonElement } from "../page-components/button-element"
import { InputElement } from "../page-components/input-element"
import { CheckboxElement } from "../page-components/checkbox-element";

export class NewMessagesPage {
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
        await this.attachmentButton().click();
    }
    
    static async uploadFileFromYourComputer(fileName: string) {
        await Utils.createFile(fileName);
        await this.attachFromComputerButtonInput().setInputFiles(`${fileName}.txt`);
        await this.checkboxForTheUploadedFile().waitForVisibility();
        await Utils.deleteFile(fileName);
    }
    
    static async fillEmailReceiverInput(sendTo: string) {
        await this.emailReceiverInput().fill(sendTo);
    }
    
    static async clickOnSendButton() {
        await this.sendButton().click();
    }
    
    static async fillSubjectInput(subject: string) {
        await this.subjectInput().fill(subject);
    }
    //#endregion
}