import { Locator } from "@playwright/test";
import { getPage } from "../page-fixtures/test-options";

export class DocumentElement {

    locator: Locator;

    constructor(fileName: string) {
        this.locator =  getPage().getByTitle(`${fileName}.txt`);
    }

}