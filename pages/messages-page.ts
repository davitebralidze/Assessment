import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "../page-components/button-element";
import { NewMessageForm } from "../page-components/messagespage-newmessage-form.ts";
import { InboxFolderView } from "../page-components/messagespage-inboxfolderview.ts";
import { MessagesSidebarComponent } from "../page-components/messagespage-sidebar-component.ts";
import { Headerbar } from "../page-components/headerbar-component.ts";

export class MessagesPage {
    //#region Locators
    private static readonly newMessageButton = ()=> new ButtonElement(getPage().locator(".tbBtnText", { hasText: "New" }));
    private static readonly refreshButton = ()=> new ButtonElement(getPage().getByTitle("Refresh"));
    public static readonly newMessageForm = ()=> new NewMessageForm();
    public static readonly inboxFolder = ()=> new InboxFolderView();
    public static readonly sideBar = ()=> new MessagesSidebarComponent();
    public static readonly headerBar = ()=> new Headerbar();
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
    
    static async sendEmail(receiver: string, subject: string, fileName: string) {
        await test.step(`Send the email to ${receiver} with the subject: ${subject} and the file ${fileName}`, async ()=>{
          await this.newMessageForm().fillEmailReceiverInput(receiver);
          await this.newMessageForm().fillSubjectInput(subject);
          await this.newMessageForm().clickOnAttachmentButton();
          await this.newMessageForm().uploadFileFromYourComputer(fileName);
          await this.newMessageForm().clickOnSendButton();
        })
    }
    //#endregion
}