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

    public async forceClick() {
        await test.step ('force-click on the element', async ()=>{
            await this.locator.click({force: true});
        })
    }

    public async forceClickWithATimeout(timeout: number) {
        await test.step ('force-click on the element', async ()=>{
            await this.locator.click({force: true, timeout: timeout});
        })
    }

    public async hover() {
        await test.step('Hover over the element', async ()=>{
            await this.locator.hover();
        })
    }

    public async isVisible() {
        return await test.step('Check whether the locator is visible', async ()=>{
            return await this.locator.isVisible();
        })
    }

    public async waitForTheElementToBeAttached() {
        await test.step('Wait for the element to be in the state of Attached', async ()=>{
            await this.locator.waitFor({state:"attached"})
        })
    }

}