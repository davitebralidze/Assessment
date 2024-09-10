import { Page } from "@playwright/test";
import { DocumentsPageLocators } from "../page-locators/documentsPageLocators";

export class DocumentsPageSteps extends DocumentsPageLocators {

    constructor(page: Page) {
        super(page);
    }

    async clickOnTrashButton() {
        await this.trashButton.click();
    }

    async deleteAttachmentFromTrash(attachemntName: string) {
        await this.targetElement(this.page, attachemntName).click();
        await this.page.getByTitle('Delete').click();
        await this.page.locator('div.btnCtn', {hasText: "Yes"}).click();
    }

    async dragDesiredAttachmentToTrash(attachmentName: string) {
        await this.targetElement(this.page, attachmentName).scrollIntoViewIfNeeded();
        const box = await this.targetElement(this.page, attachmentName).boundingBox();
        const x = box?.x;
        const y = box?.y?? + 200;
        await this.page.mouse.move(x ?? 0 , y ?? 0);
        await this.targetElement(this.page, attachmentName).hover();
        await this.page.mouse.down();
        await this.page.mouse.move(x ?? 0, y ?? 0, { steps: 10 });
        await this.trashButton.hover();
        await this.trashButton.hover();
        await this.page.mouse.up();
    }
}