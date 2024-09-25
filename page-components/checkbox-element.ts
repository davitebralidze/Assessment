import { BaseElement } from "./base-element";
import { Locator } from "@playwright/test"
import { test } from "../page-fixtures/test-options"

export class CheckboxElement extends BaseElement {

    constructor(locator: Locator) {
        super(locator);
    }
    
}