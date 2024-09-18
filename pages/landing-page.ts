import { getPage } from "../test-options";

export class LandingPage {

    //#region Locators
    private static readonly logInButton = ()=> getPage().locator("#signin");
    //#endregion

    //#region Steps
    static async clickOnLogInButton() {
        await this.logInButton().click();
      }
    //#endregion

}