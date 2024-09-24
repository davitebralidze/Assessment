import { Locator } from '@playwright/test'
import { test } from '../page-fixtures/test-options.ts'
import { BaseElement } from './base-element.ts';

export class InputElement extends BaseElement {

    constructor(locator: Locator) {
        super(locator)
    }

    public async fill(text: string) {
        await test.step(`Fill the input field with the next text: ${text}`, async ()=>{
            await this.locator.fill(text);
        })
    }

    public async setInputFiles(fileName: string) {
        await test.step('Upload a file', async()=>{
            await this.locator.setInputFiles(fileName);
        })
    }
}