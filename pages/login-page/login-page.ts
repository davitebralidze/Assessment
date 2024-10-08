import { getPage, test } from "../../page-fixtures/experimental-options";
import { InputElement } from "../common-page-components/input-element"
import { ButtonElement } from "../common-page-components/button-element";
export class LogInPage {

    //#region Locators
    protected static readonly emailInputField = ()=> new InputElement(getPage().locator("#UserID"));
    protected static readonly passwordInputField = ()=> new InputElement(getPage().locator("#Password"));
    protected static readonly enterButton = ()=> new ButtonElement(getPage().getByRole("button", { name: "Enter" }));
    //#endregion

    //#region Steps
    static async enterEmail(email: string) {
        await test.step(`Fill the Username / Email address field with the string: ${email}`, async ()=>{
            await this.emailInputField().fill(email);
        })
    }
    
    static async enterPassword(password: string) {
        await test.step(`Fill the Passwprd field with the string: ${password}`, async ()=>{
            await this.passwordInputField().fill(password);
        })
    }
    
    static async clickEnterButton() {
        await test.step('Click on the Enter button on the Log in page', async ()=>{
            await this.enterButton().click();
        })
    }

    static async logIn(email: string, password: string) {
        await test.step(`Log in the system with the credentials: Email - ${email} & Password - ${password}`, async ()=>{
            await this.enterEmail(email);
            await this.enterPassword(password);
            await this.clickEnterButton();
        })
    }
    //#endregion

} 