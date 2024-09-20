import { getPage } from "../page-fixtures/test-options";

export class LogInPage {

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