import { DocumentElement } from "../page-components/document-element";
import { test } from "../page-fixtures/test-options";
import { DocumentsPageSidebar } from "../page-components/documentspage-sidebar";
import { TrashFolderView } from "../page-components/documentspage-trashfolderview";

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
