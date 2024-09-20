import { getPage } from "../page-fixtures/test-options";
import { DynamicComponents } from "./dynamic-components";

export class DocumentsPage extends DynamicComponents {
  
  //#region Locators
  private static readonly trashButton = ()=> getPage().locator("#doc_tree_trash");
  //#endregion


  //#region Steps
  static async clickOnTrashButton() {
    await this.trashButton().click();
  }

  static async dragDesiredAttachmentToTrash(attachmentName: string) {
    await DynamicComponents.targetElement(attachmentName).scrollIntoViewIfNeeded();
    const box = await DynamicComponents.targetElement(attachmentName).boundingBox();
    const x = box?.x;
    const y = box?.y ?? +200;
    await getPage().mouse.move(x ?? 0, y ?? 0);
    await DynamicComponents.targetElement(attachmentName).hover();
    await getPage().mouse.down();
    await getPage().mouse.move(x ?? 0, y ?? 0, { steps: 10 });
    await this.trashButton().hover();
    await this.trashButton().hover();
    await getPage().mouse.up();
  }
  //#endregion
}
