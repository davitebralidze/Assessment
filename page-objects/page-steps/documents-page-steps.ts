import { Page } from "@playwright/test";
import { DocumentsPageLocators } from "../page-locators/documents-page-locators";
import { SharedLocators } from "../page-locators/shared-locators";

export class DocumentsPageSteps extends DocumentsPageLocators {
  private sharedLocators: SharedLocators;
  constructor(page: Page) {
    super(page);
    this.sharedLocators = new SharedLocators(page);
  }

  async clickOnTrashButton() {
    await this.trashButton.click();
  }

  async deleteAttachmentFromTrash(attachemntName: string) {
    await this.sharedLocators.targetElement(attachemntName).click();
    await this.page.getByTitle("Delete").click();
    await this.page.locator("div.btnCtn", { hasText: "Yes" }).click();
  }

  async dragDesiredAttachmentToTrash(attachmentName: string) {
    await this.sharedLocators.targetElement(attachmentName).scrollIntoViewIfNeeded();
    const box = await this.sharedLocators.targetElement(attachmentName).boundingBox();
    const x = box?.x;
    const y = box?.y ?? +200;
    await this.page.mouse.move(x ?? 0, y ?? 0);
    await this.sharedLocators.targetElement(attachmentName).hover();
    await this.page.mouse.down();
    await this.page.mouse.move(x ?? 0, y ?? 0, { steps: 10 });
    await this.trashButton.hover();
    await this.trashButton.hover();
    await this.page.mouse.up();
  }
}
