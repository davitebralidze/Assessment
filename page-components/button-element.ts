import { Locator } from '@playwright/test';
import { test } from '../page-fixtures/test-options.ts'
import { BaseElement } from './base-element.ts';

export class ButtonElement extends BaseElement{

    constructor (locator: Locator) {
        super(locator);
    }
    
}