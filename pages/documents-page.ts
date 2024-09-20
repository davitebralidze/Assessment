import { DocumentElement } from "../page-components/document-element";
import { getPage } from "../page-fixtures/test-options";

export class DocumentsPage {
  
  //#region Locators
  private static readonly trashButton = ()=> getPage().locator("#doc_tree_trash");
  private static readonly document = (attachmentName) => new DocumentElement(attachmentName).locator;
  //#endregion


  //#region Steps
  static async clickOnTrashButton() {
    await this.trashButton().click();
  }

  static async dragDesiredAttachmentToTrash(attachmentName: string) {
    await this.document(attachmentName).scrollIntoViewIfNeeded();
    const box = await this.document(attachmentName).boundingBox();
    const x = box?.x;
    const y = box?.y ?? +200;
    await getPage().mouse.move(x ?? 0, y ?? 0);
    await this.document(attachmentName).hover();
    await getPage().mouse.down();
    await getPage().mouse.move(x ?? 0, y ?? 0, { steps: 10 });
    await this.trashButton().hover();
    await this.trashButton().hover();
    await getPage().mouse.up();
  }
  //#endregion
}
