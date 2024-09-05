import { Page } from '@playwright/test'
import { NewMessagePageLocators } from '../page-locators/newMessagePageLocators'

export class NewMessagePageSteps extends NewMessagePageLocators {

    constructor(page: Page) {
        super(page);
    }

    async clickOnAttachmentButton() {
        await this.attachmentButton.click();
    }

    async uploadFileFromYourComputer(pathToFile: string) {
        await this.attachFromComputerButtonInput.setInputFiles(pathToFile);
    }

    async fillEmailReceiverInput(sendTo: string) {
        await this.emailReceiverInput.fill(sendTo);
    }
    
    async clickOnSendButton() {
        await this.sendButton.click();
    }

    async fillSubjectInput(subject: string) {
        await this.subjectInput.fill(subject);
    }

    returnCheckboxForTheUploadedFile() {
        return this.checkboxForTheUploadedFile;
    }

}