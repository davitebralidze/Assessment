import { Locator } from '@playwright/test';
import { BaseElement } from './base-element';

export class ButtonElement extends BaseElement{

    name: string = this.constructor.name;

    constructor (locator: Locator, name?: string) {
        super(locator, name);
        if (name) this.name=name;
    }
    
}