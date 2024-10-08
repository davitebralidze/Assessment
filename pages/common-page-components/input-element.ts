import { Locator } from '@playwright/test'
import { test } from "../../page-fixtures/experimental-options";
import { BaseElement } from './base-element';

export class InputElement extends BaseElement {

    name: string = this.constructor.name;

    constructor(locator: Locator, name?: string) {
        super(locator, name)
        if (name) this.name=name;
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