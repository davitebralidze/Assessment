import { Locator } from '@playwright/test';
import { BaseElement } from './base-element.ts';

export class ButtonElement extends BaseElement{

    constructor (locator: Locator) {
        super(locator);
    }
    
}