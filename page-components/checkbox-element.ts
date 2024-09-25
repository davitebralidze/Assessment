import { BaseElement } from "./base-element";
import { Locator } from "@playwright/test"

export class CheckboxElement extends BaseElement {

    constructor(locator: Locator) {
        super(locator);
    }
    
}