import { TrashPageLocators } from "../page-locators/trashPageLocators";
import { expect, Page } from '@playwright/test'

export class TrashPageSteps extends TrashPageLocators {
    constructor(page: Page) {
        super(page);
    }

    async checkIfTheElementWasMovedToTrash(attachemntName: string) {
        await expect(this.targetElement(this.page, attachemntName)).toBeVisible();
    }

}