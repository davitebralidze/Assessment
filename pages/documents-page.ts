import { DocumentElement } from "../page-components/document-element";
import { getPage } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";

export class DocumentsPage {
  
  //#region Locators
  private static readonly trashButton = ()=> new ButtonElement(getPage().locator("#doc_tree_trash"));
  private static readonly document = (attachmentName) => new DocumentElement(attachmentName);
  //#endregion


  //#region Steps
  static async clickOnTrashButton() {
    await this.trashButton().click();
  }

  static async dragDesiredAttachmentToTrash(attachmentName: string) {
    await this.document(attachmentName).dragAndDrop(this.trashButton())
  }
  //#endregion
}
