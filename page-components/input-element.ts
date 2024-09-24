import { Locator } from '@playwright/test'
import { test } from '../page-fixtures/test-options.ts'

export class InputElement{
    locator: Locator;

    constructor(locator: Locator) {
        this.locator=locator;
    }

    public async fill(text: string) {
        await test.step(`Fill the input field with the next text: ${text}`, async ()=>{
            await this.locator.fill(text);
        })
    }
}