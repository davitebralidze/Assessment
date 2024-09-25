import { Locator } from '@playwright/test'
import { test } from '../page-fixtures/test-options'

export class BaseElement {

    locator: Locator;
    name: string;

    constructor (locator: Locator, name?: string) {
        this.locator=locator;
        this.name = name ?? 'Baseelement'
    }

    public async click(timeout?: number) {
        await test.step ('Click on the element', async ()=>{
            await this.locator.click({timeout});
        })
    }

    public async forceClick(timeout?: number) {
        await test.step ('force-click on the element', async ()=>{
            await this.locator.click({force: true, timeout});
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

    public async waitForVisibility() {
        await test.step('Wait for the cjeckbox to be visible', async ()=>{
            await this.locator.waitFor({ state: "visible" })
        })
    }

}