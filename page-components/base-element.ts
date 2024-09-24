import { Locator } from '@playwright/test'
import { test } from '../page-fixtures/test-options'

export class BaseElement {

    locator: Locator;

    constructor (locator: Locator) {
        this.locator=locator;
    }

    public async click() {
        await test.step ('Click on the element', async ()=>{
            await this.locator.click();
        })
    }

    public async hover() {
        await test.step('Hover over the element', async ()=>{
            await this.locator.hover();
        })
    }

}