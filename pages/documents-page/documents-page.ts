import { DocumentElement } from "../common-page-components/document-element";
import { test } from "../../page-fixtures/experimental-options";
import { DocumentsPageSidebar } from "../documents-page/sidebar-component"
import { TrashFolderView } from "../documents-page/trash-folder-view"

export class DocumentsPage {
  
  //#region Locators
  public static readonly document = (fileName) => new DocumentElement(fileName);
  public static readonly sideBar = () => new DocumentsPageSidebar();
  public static readonly trashFolder = () => new TrashFolderView();

  //#endregion


  //#region Steps
  static async dragSavedDocumentToTrash(fileName: string) {
    await test.step(`Drag the document to the trash folder`, async ()=>{
      await this.document(fileName).dragAndDrop(this.sideBar().trashButton());
    })
  }
  //#endregion
}
