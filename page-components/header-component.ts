import { getPage, test } from "../page-fixtures/test-options";
import { BaseElement } from "./base-element";
import { ButtonElement } from "./button-element";

export class HeaderElement extends BaseElement {

    constructor() {
      super(getPage().locator('#toolSelector'), 'Header Element');
    }

    //#region Locators
    private readonly messagesButton = () => new ButtonElement(getPage().locator("div .icon24-Message"));
    private readonly documentsButton = () => new ButtonElement(getPage().locator("div.icon24-Documents"));
    //#endregion

    //#region Steps
    async navigateToMessagesPage() {
        await test.step('Navigate to the Messages page', async ()=>{
          await this.messagesButton().click();
        })
      }
      
      async navigateToDocumentsPage() {
        await test.step('Navigate to the Documents page', async ()=>{
          await this.documentsButton().click();
        })
      }
    //#endregion
}