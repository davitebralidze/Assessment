import { getPage } from '../test-options'

export class OnLogInPage {

    //#region Locators
    protected static readonly emailField = ()=> getPage().locator("#UserID");
    protected static readonly passwordField = ()=> getPage().locator("#Password");
    protected static readonly enterButton = ()=> getPage().getByRole("button", { name: "Enter" });
    //#endregion

    //#region Steps
    static async enterEmail(email: string) {
        await this.emailField().fill(email);
    }
    
    static async enterPassword(password: string) {
        await this.passwordField().fill(password);
    }
    
    static async clickEnterButton() {
        await this.enterButton().click();
    }
    //#endregion

} 