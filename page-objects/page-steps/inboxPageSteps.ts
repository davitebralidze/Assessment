import { Page } from "@playwright/test";
import { InboxPageLocators } from "../page-locators/inboxPageLocators";

export class InboxPageSteps extends InboxPageLocators{

    constructor(page: Page) {
        super(page);
    }

    async returnSubjectOfTheLastReceivedMessage(){
        return await this.lastReceivedMessage.getAttribute('title');
    }

    async openTheLastReceivedMessage() {
        await this.lastReceivedMessage.click({force: true});
    }

    async clickOnTheRefreshButton() {
        await this.refreshButton.click();
        }

    returnTheLastReceivedMessageAsElement() {
        return this.lastReceivedMessage;
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