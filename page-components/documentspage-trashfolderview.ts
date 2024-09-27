import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "./button-element";
import { DocumentElement } from "./document-element";

export class TrashFolderView {
  //#region Locators
  private readonly document = (attachmentName) => new DocumentElement(attachmentName);
  private readonly deleteButtonForDeleteAttachmentPopup = () => new ButtonElement(getPage().getByTitle("Delete"));
  private readonly yesButtonForDeleteAttachmentPopup = () => new ButtonElement(getPage().locator("div.btnCtn", { hasText: "Yes" }));
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
      await this.deleteButtonForDeleteAttachmentPopup().click();
      await this.yesButtonForDeleteAttachmentPopup().click();
    });
  }
  //#endregion
}
