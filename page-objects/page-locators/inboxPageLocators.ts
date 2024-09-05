import { Page } from '@playwright/test'

export class InboxPageLocators {

    protected readonly page;

    protected readonly lastReceivedMessage;
    protected readonly refreshButton;
    protected readonly uploadedFileButton;
    protected readonly attachmentOfTheReceivedMessage;
    protected readonly optionsDropdownOfTheAttachentOfTheReceivedMessage;
    protected readonly saveInDocumentsButtonOfTheDropdown;
    protected readonly saveButtonOnTheFoldersPopup;
    protected readonly myDocumentsInPopup;

    constructor (page: Page) {
        this.page=page;
        this.lastReceivedMessage = page.locator('div #gwt-uid-9 tr td').nth(2).locator('div .listSubject');
        this.refreshButton = page.getByTitle('Refresh');
        this.uploadedFileButton = page.locator('a.GCSDBRWBJRB');
        this.attachmentOfTheReceivedMessage = page.locator('a.GCSDBRWBJRB');
        this.optionsDropdownOfTheAttachentOfTheReceivedMessage = page.locator('b.icon-Arrow-down');
        this.saveInDocumentsButtonOfTheDropdown = page.locator('span.GCSDBRWBGR', {hasText: "Save in Documents"});
        this.saveButtonOnTheFoldersPopup = page.locator('div[class="btn GCSDBRWBO defaultBtn"]');
        this.myDocumentsInPopup = page.locator('div.treeItemLabel', {hasText: "My documents"});
    }

}