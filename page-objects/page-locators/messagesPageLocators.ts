import { Page , Locator} from '@playwright/test'

export class MessagesPageLocators {

    protected readonly page: Page;

    protected readonly newMessageButton: Locator;
    protected readonly inboxButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newMessageButton = page.locator('.tbBtnText', {hasText: "New"});
        this.inboxButton = page.locator('#treeInbox');
    }
}