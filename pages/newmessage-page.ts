import { getPage } from "../page-fixtures/test-options";
import { Utils } from "../utils/utils.ts";

export class NewMessagesPage {
    //#region Locators
    private static readonly attachmentButton = ()=> getPage().locator(".GCSDBRWBISB", {hasText: "Attachment",});
    private static readonly attachFromComputerButtonInput = ()=> getPage().locator('input[name="docgwt-uid-33"]');
    private static readonly emailReceiverInput = ()=> getPage().locator("#mailTo .GCSDBRWBPL");
    private static readonly sendButton = ()=> getPage().locator(".btnCtn", { hasText: "Send" });
    private static readonly subjectInput = ()=> getPage().locator("#mailSubject");
    private static readonly checkboxForTheUploadedFile = ()=> getPage().locator("div .checkIcon");
    //#endregion

    //#region Steps
    static async clickOnAttachmentButton() {
        await this.attachmentButton().click();
    }
    
    static async uploadFileFromYourComputer(fileName: string) {
        await Utils.createFile(fileName);
        await this.attachFromComputerButtonInput().setInputFiles(`${fileName}.txt`);
        await this.checkboxForTheUploadedFile().waitFor({ state: "visible" });
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