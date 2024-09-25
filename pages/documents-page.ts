import { DocumentElement } from "../page-components/document-element";
import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";

export class DocumentsPage {
  
  //#region Locators
  private static readonly trashButton = ()=> new ButtonElement(getPage().locator("#doc_tree_trash"));
  private static readonly document = (attachmentName) => new DocumentElement(attachmentName);
  //#endregion


  //#region Steps
  static async navigateToTrashFolder() {
    await test.step('Navigate to the Trash folder', async ()=>{
      await this.trashButton().click();
    })
  }

  static async dragSavedDocumentToTrash(attachmentName: string) {
    await test.step(`Drag the document ${attachmentName} to the trash folder`, async ()=>{
      await this.document(attachmentName).dragAndDrop(this.trashButton());
    })
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
        await test.step(`Check whether the attachment ${attachemntName} was moved to the trash folder`, async ()=>{
          await this.document(attachemntName).expectTheDocumentToBeVisible();
        })
      }
  
      static async deleteAttachmentFromTrash(attachemntName: string) {
        await test.step(`Delete the attachment ${attachemntName} from the trash folder`, async ()=>{
          await this.document(attachemntName).click();
          await this.deleteButtonForDeleteAttachmentPopup().click();
          await this.yesButtonForDeleteAttachmentPopup().click();
        })
      }
      //#endregion

  }

}
