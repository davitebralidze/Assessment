import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";
import { HeaderbarComponent } from "../page-components/headerbar-component.ts";
import { NewMessageForm } from "../page-components/messagespage-newmessage-form.ts";
import { InboxFolder } from "../page-components/messagespage-inboxfolder.ts";
import { MessagesSidebarComponent } from "../page-components/messagespage-sidebar-component.ts";

export class MessagesPage {
    //#region Locators
    private static readonly newMessageButton = ()=> new ButtonElement(getPage().locator(".tbBtnText", { hasText: "New" }));
    private static readonly refreshButton = ()=> new ButtonElement(getPage().getByTitle("Refresh"));
    public static readonly headerbar = ()=> new HeaderbarComponent();
    public static readonly newMessageForm = ()=> new NewMessageForm();
    public static readonly inboxFolder = ()=> new InboxFolder();
    public static readonly sideBar = ()=> new MessagesSidebarComponent();
    //#endregion
    
    //#region Steps
    static async clickOnNewMessageButton() {
        await test.step('Click on the New Message button on the Messages page', async ()=>{
          await this.newMessageButton().click();
        })
    }

    static async clickOnTheRefreshButton() {
        await test.step('Click on the refresh button on the Messages page', async ()=>{
          await this.refreshButton().click();
        })
    }
    //#endregion
}