import { Page } from '@playwright/test'

export class LandingPageLocators {

    protected readonly page;

    protected readonly logInButton;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.locator('#signin');
    }

    

}