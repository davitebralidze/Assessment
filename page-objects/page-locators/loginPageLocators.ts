import { Page } from '@playwright/test'

export class LoginPageLocators {

    protected readonly page;

    protected readonly emailField;
    protected readonly passwordField;
    protected readonly enterButton;

    constructor(page: Page) {
        this.page = page;
        this.emailField = this.page.locator('#UserID');
        this.passwordField = this.page.locator('#Password');
        this.enterButton = this.page.getByRole('button', {hasText: "Enter"});
    }
}