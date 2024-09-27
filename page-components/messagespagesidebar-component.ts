import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class MessagesSidebarComponent extends BaseElement {

    name: string = this.constructor.name;

    constructor (name?: string) {
        super(getPage().locator("div .GCSDBRWBJCC"));
        if (name) this.name=name;
    }

    private readonly inboxButton = ()=> new ButtonElement(getPage().locator("#treeInbox"));
    private readonly sentButton = ()=> new ButtonElement(getPage().locator("#treeSend"));

    async clickOnInboxButton() {
        await test.step('Click on the Inbox folder button on the Messages page', async ()=>{
          await this.inboxButton().click();
        })
    }

    async clickOnSentButton() {
        await test.step('Click on the Sent folder button on the Messages page', async ()=>{
          await this.sentButton().click();
        })
    }

    async navigateTo(page: sidebarPages) {
        switch(page) {
            case sidebarPages.inbox:
                await this.clickOnInboxButton();
                break;
            case sidebarPages.sent:
                await this.clickOnSentButton();
        }
    }

}

export enum sidebarPages {
    inbox,
    sent
}