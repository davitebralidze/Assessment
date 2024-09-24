import { Locator } from '@playwright/test';
import { test } from '../page-fixtures/test-options.ts'
export class ButtonElement {

    locator: Locator

    constructor (locator: Locator) {
        this.locator = locator;
    }

    public async click() {
        await test.step('Click on button', async ()=>{
            await this.locator.click();
        })
    }


}