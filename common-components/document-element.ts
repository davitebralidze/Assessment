import { Locator } from "@playwright/test";
import { getPage, test } from "../page-fixtures/test-options";

export class DocumentElement {
  locator: Locator;
  fileName: string;
  //I might need to pass page in the constructor also because Im using getPage, but in case Ill use another fixture, this code might break
  constructor(fileName: string) {
    this.locator = getPage().getByTitle(`${fileName}.txt`);
    this.fileName = fileName;
  }

  async dragAndDrop (destinationLocator: Locator) {
    await test.step(`Drag and drop a document with title ${this.fileName} to another locator`, async () => {
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

}
