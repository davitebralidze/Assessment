import { Locator } from '@playwright/test'
import { test } from '../page-fixtures/test-options'
import { BaseElement } from './base-element';

export class InputElement extends BaseElement {

    constructor(locator: Locator) {
        super(locator)
    }

    public async fill(text: string) {
        await test.step(`Fill the input field with : ${text}`, async ()=>{
            await this.locator.fill(text);
        })
    }

    public async setInputFiles(fileName: string) {
        await test.step(`Upload a file ${fileName}`, async()=>{
            await this.locator.setInputFiles(fileName);
        })
    }
}