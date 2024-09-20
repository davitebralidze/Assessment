import { getPage } from "../page-fixtures/test-options";
import { DocumentElement } from "../page-components/document-element";
import { expect } from "@playwright/test";


export class TrashPage {

    //#region Locators
    private static readonly document = (attachmentName) => new DocumentElement(attachmentName).locator;

    //#endregion

    //#region Steps
    static async checkIfTheElementWasMovedToTrash(attachemntName: string) {
        await expect(this.document(attachemntName)).toBeVisible();
    }

    static async deleteAttachmentFromTrash(attachemntName: string) {
        await this.document(attachemntName).click();
        await getPage().getByTitle("Delete").click();
        await getPage().locator("div.btnCtn", { hasText: "Yes" }).click();
    }
    //#endregion

}``