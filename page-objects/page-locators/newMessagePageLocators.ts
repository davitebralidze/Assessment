import { Page } from '@playwright/test'

export class NewMessagePageLocators {

    protected readonly page;
    protected readonly attachmentButton;
    protected readonly attachFromComputerButtonInput;
    protected readonly emailReceiverInput;
    protected readonly sendButton;
    protected readonly subjectInput;
    protected readonly checkboxForTheUploadedFile;
    

    constructor(page: Page) {
        this.page = page;
        this.attachmentButton = page.locator('.GCSDBRWBISB', {hasText: "Attachment"});
        this.attachFromComputerButtonInput = page.locator('input[name="docgwt-uid-33"]');
        this.emailReceiverInput = page.locator('#mailTo .GCSDBRWBPL');
        this.sendButton = page.locator('.btnCtn', {hasText: "Send"});
        this.subjectInput = page.locator('#mailSubject');
        this.checkboxForTheUploadedFile = 'div .checkIcon';
    }

}