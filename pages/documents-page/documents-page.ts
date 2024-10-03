import { DocumentElement } from "../common-page-components/document-element";
import { test } from "../../page-fixtures/test-options";
import { DocumentsPageSidebar } from "../documents-page/documentspage-sidebar"
import { TrashFolderView } from "../documents-page/documentspage-trashfolderview"

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
