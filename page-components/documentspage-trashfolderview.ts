import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "./button-element";
import { DocumentElement } from "./document-element";
import { DeletePopup } from "./documentspage-deletepopup";

export class TrashFolderView {
  //#region Locators
  private readonly document = (attachmentName) => new DocumentElement(attachmentName);
  private readonly deleteButton = ()=> new ButtonElement(getPage().getByTitle("Delete"));
  private readonly deletePopup = ()=> new DeletePopup();

  //#endregion

  //#region Steps
  async checkIfTheElementIsVisible(attachemntName: string) {
    await test.step(`Check whether the attachment ${attachemntName} was moved to the trash folder`, async () => {
      await this.document(attachemntName).expectTheDocumentToBeVisible();
    });
  }

  async deleteAttachmentFromTrash(attachemntName: string) {
    await test.step(`Delete the attachment ${attachemntName} from the trash folder`, async () => {
      await this.document(attachemntName).click();
      await this.deleteButton().click();
      await this.deletePopup().clickOnYesButton();
    });
  }
  //#endregion
}
