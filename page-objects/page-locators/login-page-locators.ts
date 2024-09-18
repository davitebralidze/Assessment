import { Page, Locator } from "@playwright/test";

export class LoginPageLocators {
  private readonly page: Page;

  protected readonly emailField: Locator;
  protected readonly passwordField: Locator;
  protected readonly enterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator("#UserID");
    this.passwordField = this.page.locator("#Password");
    this.enterButton = this.page.getByRole("button", { name: "Enter" });
  }
}
