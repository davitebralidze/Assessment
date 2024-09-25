import { getPage } from "../page-fixtures/test-options";
import { InputElement } from "../page-components/input-element"
import { ButtonElement } from "../page-components/button-element";
export class LogInPage {

    //#region Locators
    protected static readonly emailInputField = ()=> new InputElement(getPage().locator("#UserID"));
    protected static readonly passwordInputField = ()=> new InputElement(getPage().locator("#Password"));
    protected static readonly enterButton = ()=> new ButtonElement(getPage().getByRole("button", { name: "Enter" }));
    //#endregion

    //#region Steps
    static async enterEmail(email: string) {
        await this.emailInputField().fill(email);
    }
    
    static async enterPassword(password: string) {
        await this.passwordInputField().fill(password);
    }
    
    static async clickEnterButton() {
        await this.enterButton().click();
    }

    static async logIn(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickEnterButton();
    }
    //#endregion

} 