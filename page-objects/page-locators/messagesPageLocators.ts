import { Page } from '@playwright/test'

export class MessagesPageLocators {

    protected readonly page;

    protected readonly newMessageButton;
    protected readonly inboxButton;

    constructor(page: Page) {
        this.page = page;
        this.newMessageButton = page.locator('.tbBtnText', {hasText: "New"});
        this.inboxButton = page.locator('#treeInbox');
    }
}