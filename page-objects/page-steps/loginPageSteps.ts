import { Page } from '@playwright/test'
import { LoginPageLocators } from '../page-locators/loginPageLocators';

export class LoginPageSteps extends LoginPageLocators {

    constructor(page: Page) {
        super(page);
    }

    async enterEmail(email: string) {
        await this.emailField.fill(email)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async clickEnterButton() {
        await this.enterButton.click();
    }

}