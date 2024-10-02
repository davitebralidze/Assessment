import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "./button-element";
import { DocumentElement } from "./document-element";
import { DeletePopup } from "./documentspage-deletepopup";

export class TrashFolderView {
  //#region Locators
  private readonly document = (fileName, fileFormat) => new DocumentElement(fileName, fileFormat);
  private readonly deleteButton = ()=> new ButtonElement(getPage().getByTitle("Delete"));
  private readonly deletePopup = ()=> new DeletePopup();

  //#endregion

  //#region Steps
  async checkIfTheDocumentIsVisibleWithName(fileName: string, fileFormat: string) {
    await test.step(`Check whether the attachment was moved to the trash folder`, async () => {
      await this.document(fileName, fileFormat).expectTheDocumentToBeVisible();
    });
  }

  async deleteAttachmentFromTrash(fileName: string, fileFormat: string) {
    await test.step(`Delete the attachment from the trash folder`, async () => {
      await this.document(fileName, fileFormat).click();
      await this.deleteButton().click();
      await this.deletePopup().clickOnYesButton();
    });
  }
  //#endregion
}
