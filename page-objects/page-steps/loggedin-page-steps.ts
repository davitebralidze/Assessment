import { Page } from "@playwright/test";
import { LoggedInPageLocators } from "../page-locators/loggedin-page-locators";

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
