import { expect } from "@playwright/test";
import { getPage, test } from "../../page-fixtures/test-options";
import { BaseElement } from "./base-element";

export class DocumentElement extends BaseElement {

  fileName: string;

  constructor(fileName: string) {
    super(getPage().locator('div.GCSDBRWBPJB', {hasText: fileName}))
    this.fileName = fileName;
  }

  public async dragAndDrop (destinationLocator: BaseElement) {
    await test.step(`Drag and drop a document to another locator`, async () => {
      await this.locator.scrollIntoViewIfNeeded();
      const box = await this.locator.boundingBox();
      const x = box?.x;
      const y = box?.y ?? +200;
      await getPage().mouse.move(x ?? 0, y ?? 0);
      await this.locator.hover();
      await getPage().mouse.down();
      await getPage().mouse.move(x ?? 0, y ?? 0, { steps: 10 });
      await destinationLocator.hover();
      await destinationLocator.hover();
      await getPage().mouse.up();
    })
  }

  public async expectTheDocumentToBeVisible() {
    await test.step('Check whether the element is visible or not', async ()=>{
      await expect(this.locator).toBeVisible();
    })
  }
}
