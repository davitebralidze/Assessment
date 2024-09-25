import { Locator } from '@playwright/test';
import { BaseElement } from './base-element';

export class ButtonElement extends BaseElement{

    name: string;

    constructor (locator: Locator, name?: string) {
        super(locator);
        this.name=name ?? 'ButtonElement'
    }
    
}