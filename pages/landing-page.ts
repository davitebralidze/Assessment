import { ButtonElement } from "../page-components/button-element";
import { getPage, test } from "../page-fixtures/test-options";

export class LandingPage {

    //#region Locators
    private static readonly logInButton = ()=> new ButtonElement(getPage().locator("#signin"));
    //#endregion

    //#region Steps
    static async clickOnLogInButton() {
      await test.step('Click on the Log in button on the landing page', async ()=>{
        await this.logInButton().click();
      })
    }
    //#endregion

}