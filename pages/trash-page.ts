import { getPage } from "../test-options";
import { expect } from "@playwright/test";
import { DynamicComponents } from "./dynamic-components";


export class OnTrashPage {

    //#region Locators
    //#endregion

    //#region Steps
    static async checkIfTheElementWasMovedToTrash(attachemntName: string) {
        await expect(DynamicComponents.targetElement(attachemntName)).toBeVisible();
    }

    static async deleteAttachmentFromTrash(attachemntName: string) {
        await DynamicComponents.targetElement(attachemntName).click();
        await getPage().getByTitle("Delete").click();
        await getPage().locator("div.btnCtn", { hasText: "Yes" }).click();
    }
    //#endregion

}