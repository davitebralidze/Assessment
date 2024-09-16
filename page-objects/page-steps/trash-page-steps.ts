import { TrashPageLocators } from "../page-locators/trash-page-locators";
import { expect, Page, TestInfo } from "@playwright/test";
import { PageManager } from "../page-manager";

export class TrashPageSteps extends TrashPageLocators {
  constructor(page: Page) {
    super(page);
  }

  async checkIfTheElementWasMovedToTrash(attachemntName: string, pm: PageManager) {
    await expect(this.targetElement(attachemntName)).toBeVisible();
    await pm.onDocumentsPage().deleteAttachmentFromTrash(attachemntName);
  }
}
