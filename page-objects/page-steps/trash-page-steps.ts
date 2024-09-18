import { TrashPageLocators } from "../page-locators/trash-page-locators";
import { expect, Page, TestInfo } from "@playwright/test";
import { PageManager } from "../page-manager";
import { SharedLocators } from "../page-locators/shared-locators";

export class TrashPageSteps extends TrashPageLocators {
  private sharedLocators: SharedLocators;
  constructor(page: Page) {
    super(page);
    this.sharedLocators = new SharedLocators(page);
  }

  async checkIfTheElementWasMovedToTrash(attachemntName: string, pm: PageManager) {
    await expect(this.sharedLocators.targetElement(attachemntName)).toBeVisible();
    await pm.onDocumentsPage().deleteAttachmentFromTrash(attachemntName);
  }
}
