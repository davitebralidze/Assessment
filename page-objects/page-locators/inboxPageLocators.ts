import { Page , Locator } from '@playwright/test'

export class InboxPageLocators {

    protected readonly page: Page;

    protected readonly refreshButton: Locator;
    protected readonly uploadedFileButton: Locator;
    protected readonly attachmentOfTheReceivedMessage: Locator;
    protected readonly optionsDropdownOfTheAttachentOfTheReceivedMessage: Locator;
    protected readonly saveInDocumentsButtonOfTheDropdown: Locator;
    protected readonly saveButtonOnTheFoldersPopup: Locator;
    protected readonly myDocumentsInPopup: Locator;

    constructor (page: Page) {
        this.page=page;
        this.refreshButton = page.getByTitle('Refresh');
        this.uploadedFileButton = page.locator('a.GCSDBRWBJRB');
        this.attachmentOfTheReceivedMessage = page.locator('a.GCSDBRWBJRB');
        this.optionsDropdownOfTheAttachentOfTheReceivedMessage = page.locator('b.icon-Arrow-down');
        this.saveInDocumentsButtonOfTheDropdown = page.locator('span.GCSDBRWBGR', {hasText: "Save in Documents"});
        this.saveButtonOnTheFoldersPopup = page.locator('div[class="btn GCSDBRWBO defaultBtn"]');
        this.myDocumentsInPopup = page.locator('div.treeItemLabel', {hasText: "My documents"});
    }

    getTheRecievedMessageLocator(messageSubject: string) {
        return this.page.locator('div.listSubject').getByText(messageSubject);
    }

}