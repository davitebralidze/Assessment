import { Page } from '@playwright/test'

export class LoggedInPageLocators {

    protected readonly page;

    protected readonly messagesButton;
    protected readonly documentsButton;

    constructor(page: Page) {
        this.page = page;
        this.messagesButton = page.locator('div .icon24-Message');
        this.documentsButton = page.locator('div.icon24-Documents');
    }

}