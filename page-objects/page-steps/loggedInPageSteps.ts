import { Page } from '@playwright/test'
import { LoggedInPageLocators } from '../page-locators/loggedInPageLocators';

export class LoggedInPageSteps extends LoggedInPageLocators {

    constructor(page: Page) {
        super(page);
    }

    async clickOnMessagesButton() {
        await this.messagesButton.click();
    }

    async clickOnDocumentsButton() {
        await this.documentsButton.click();
    }

}