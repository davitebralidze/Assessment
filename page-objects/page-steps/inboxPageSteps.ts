import { Page } from "@playwright/test";
import { InboxPageLocators } from "../page-locators/inboxPageLocators";

export class InboxPageSteps extends InboxPageLocators{

    constructor(page: Page) {
        super(page);
    }

    async openTheMessage(messageSubject: string) {
        var isTheLastMessageVisible = false;
        while(!isTheLastMessageVisible) {
            isTheLastMessageVisible = await this.getTheRecievedMessageLocator(messageSubject).isVisible();
            if(!isTheLastMessageVisible) {
                await this.clickOnTheRefreshButton();
                await this.page.waitForTimeout(1000);
            } else {
                    isTheLastMessageVisible = true;
            }
        }
        await this.getTheRecievedMessageLocator(messageSubject).click({force: true})
    }

    async clickOnTheRefreshButton() {
        await this.refreshButton.click();
        }

    async saveTheAttachmentOfTheMessageInDocuments() {
        await this.attachmentOfTheReceivedMessage.hover();
        await this.optionsDropdownOfTheAttachentOfTheReceivedMessage.click();
        await this.saveInDocumentsButtonOfTheDropdown.click({force: true});
        await this.myDocumentsInPopup.click()
        await this.saveButtonOnTheFoldersPopup.waitFor({state: "attached"});
        await this.saveButtonOnTheFoldersPopup.click({force: true});
    }

}