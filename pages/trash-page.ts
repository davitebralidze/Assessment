import { getPage } from "../page-fixtures/test-options";
import { DocumentElement } from "../page-components/document-element";
import { ButtonElement } from "../page-components/button-element";
import { expect } from "@playwright/test";


export class TrashPage {

    //#region Locators
    private static readonly document = (attachmentName)=> new DocumentElement(attachmentName).locator;
    private static readonly deleteButtonForDeleteAttachmentPopup = ()=> new ButtonElement(getPage().getByTitle("Delete"));
    private static readonly yesButtonForDeleteAttachmentPopup = ()=> new ButtonElement(getPage().locator("div.btnCtn", { hasText: "Yes" }));
    //#endregion

    //#region Steps
    static async checkIfTheElementWasMovedToTrash(attachemntName: string) {
        await expect(this.document(attachemntName)).toBeVisible();
    }

    static async deleteAttachmentFromTrash(attachemntName: string) {
        await this.document(attachemntName).click();
        await this.deleteButtonForDeleteAttachmentPopup().click();
        await this.yesButtonForDeleteAttachmentPopup().click();
    }
    //#endregion
    
}