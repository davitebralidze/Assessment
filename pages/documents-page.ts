import { DocumentElement } from "../page-components/document-element";
import { getPage } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";
import { Header } from "../page-components/header-component";

export class DocumentsPage {
  
  //#region Locators
  private static readonly trashButton = ()=> new ButtonElement(getPage().locator("#doc_tree_trash"));
  private static readonly document = (attachmentName) => new DocumentElement(attachmentName);
  //#endregion


  //#region Steps
  static async clickOnTrashButton() {
    await this.trashButton().click();
  }

  static async dragSavedDocumentToTrash(attachmentName: string) {
    await Header.clickOnDocumentsButton();
    await this.document(attachmentName).dragAndDrop(this.trashButton());

  }
  //#endregion

  public static TrashFolder = class {
      //#region Locators
      private static readonly document = (attachmentName)=> new DocumentElement(attachmentName);
      private static readonly deleteButtonForDeleteAttachmentPopup = ()=> new ButtonElement(getPage().getByTitle("Delete"));
      private static readonly yesButtonForDeleteAttachmentPopup = ()=> new ButtonElement(getPage().locator("div.btnCtn", { hasText: "Yes" }));
      //#endregion
  
      //#region Steps
      static async checkIfTheElementWasMovedToTrash(attachemntName: string) {
        await Header.clickOnDocumentsButton(); //This step is not actually needed, but to make sure that we are navigated on the correct page
        await DocumentsPage.clickOnTrashButton();
        await this.document(attachemntName).expectTheDocumentToBeVisible();
      }
  
      static async deleteAttachmentFromTrash(attachemntName: string) {
          await this.document(attachemntName).click();
          await this.deleteButtonForDeleteAttachmentPopup().click();
          await this.yesButtonForDeleteAttachmentPopup().click();
      }
      //#endregion

  }

}
