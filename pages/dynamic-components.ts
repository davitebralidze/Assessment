import { getPage } from "../page-fixtures/test-options";

export class DynamicComponents {
    static readonly targetElement = (fileName) =>
        getPage().getByTitle(`${fileName}.txt`);
}