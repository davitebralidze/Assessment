import { Page } from "@playwright/test";
import { InboxPageLocators } from "../page-locators/inbox-page-locators";

export class InboxPageSteps extends InboxPageLocators {
  constructor(page: Page) {
    super(page);
  }

  async openTheMessage(messageSubject: string) {
    var isTheLastMessageVisible = false;
    var retry = 0;
    while (!isTheLastMessageVisible && retry < 6) {
      isTheLastMessageVisible = await (await this.getTheReceivedMessageLocator(messageSubject)).isVisible();
      if (!isTheLastMessageVisible) {
        await this.clickOnTheRefreshButton();
        await this.page.waitForTimeout(1000);
        retry ++;
      }
    }
    //I did not move this timeout in config because I only need 1 second timeout for this specific case
    await this.getTheReceivedMessageLocator(messageSubject).click({ timeout: 1000});
  }

  async clickOnTheRefreshButton() {
    await this.refreshButton.click();
  }

  async saveTheAttachmentOfTheMessageInDocuments() {
    await this.attachmentOfTheReceivedMessage.hover();
    await this.optionsDropdownOfTheAttachentOfTheReceivedMessage.click();
    await this.saveInDocumentsButtonOfTheDropdown.click({ force: true });
    await this.myDocumentsInPopup.click();
    await this.saveButtonOnTheFoldersPopup.waitFor({ state: "attached" });
    await this.saveButtonOnTheFoldersPopup.click({ force: true });
  }
}
