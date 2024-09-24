import { Locator } from '@playwright/test';
import { test } from '../page-fixtures/test-options.ts'
import { BaseElement } from './base-element.ts';

export class ButtonElement extends BaseElement{

    constructor (locator: Locator) {
        super(locator);
    }

    public async click() {
        await test.step('Click on button', async ()=>{
            await this.locator.click();
        })
    }

    public async forceClick() {
        await test.step('Force-click on button', async ()=>{
            await this.locator.click({force:true});
        })
    }

}