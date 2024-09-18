import { getPage } from "../test-options";

export class DynamicComponents {
    static readonly targetElement = (fileName) =>
        getPage().getByTitle(`${fileName}.txt`);
}