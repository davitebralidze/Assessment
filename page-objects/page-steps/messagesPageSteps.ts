import { Page } from "@playwright/test";
import { MessagesPageLocators } from "../page-locators/messagesPageLocators";

export class MessagesPageSteps extends MessagesPageLocators {
  constructor(page: Page) {
    super(page);
  }

  async clickOnNewMessageButton() {
    await this.newMessageButton.click();
  }

  async clickOnInboxButton() {
    await this.inboxButton.click();
  }
}
