import { getPage, test } from "../../page-fixtures/test-options";
import { ButtonElement } from "../common-page-components/button-element";
import { DocumentElement } from "../common-page-components/document-element";
import { DeletePopup } from "./delete-popup";

export class TrashFolderView {
  //#region Locators
  private readonly document = (fileName) => new DocumentElement(fileName);
  private readonly deleteButton = ()=> new ButtonElement(getPage().getByTitle("Delete"));
  private readonly deletePopup = ()=> new DeletePopup();

  //#endregion

  //#region Steps
  async checkIfTheDocumentIsVisibleWithName(fileName: string) {
    await test.step(`Check whether the attachment was moved to the trash folder`, async () => {
      await this.document(fileName).expectTheDocumentToBeVisible();
    });
  }

  async deleteAttachmentFromTrash(fileName: string) {
    await test.step(`Delete the attachment from the trash folder`, async () => {
      await this.document(fileName).click();
      await this.deleteButton().click();
      await this.deletePopup().clickOnYesButton();
    });
  }
  //#endregion
}
