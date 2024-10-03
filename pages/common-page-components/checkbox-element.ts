import { BaseElement } from "./base-element";
import { Locator } from "@playwright/test"

export class CheckboxElement extends BaseElement {

    name: string = this.constructor.name;

    constructor(locator: Locator, name?: string) {
        super(locator, name);
        if(name) this.name=name;
    }
}