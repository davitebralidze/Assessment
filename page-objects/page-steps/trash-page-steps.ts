import { TrashPageLocators } from "../page-locators/trash-page-locators";
import { expect, Page } from "@playwright/test";

export class TrashPageSteps extends TrashPageLocators {
  constructor(page: Page) {
    super(page);
  }

  async checkIfTheElementWasMovedToTrash(attachemntName: string) {
    await expect(this.targetElement(attachemntName)).toBeVisible();
  }
}
