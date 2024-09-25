import { BaseElement } from "./base-element";
import { Locator } from "@playwright/test"

export class CheckboxElement extends BaseElement {

    name: string;

    constructor(locator: Locator, name?: string) {
        super(locator);
        this.name=name ?? 'Checkbox element'
    }
    
}