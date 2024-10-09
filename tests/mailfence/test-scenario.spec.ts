//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { getRequest, test } from "../../page-fixtures/experimental-options"
import { LandingPage } from '../../pages/landing-page/landing-page'
import { LogInPage } from '../../pages/login-page/login-page'
import { MessagesPage } from '../../pages/messages-page/messages-page'
import { DocumentsPage } from '../../pages/documents-page/documents-page'
import { documentsSidebarPages } from '../../pages/documents-page/sidebar-component'
import { headerBarPages } from '../../pages/common-page-components/headerbar-component'
import { Utils } from '../../utils/utils'
import { FileFormat } from '../../enums/enums'
import credentials from '../../credentials.json'
const subject = faker.string.alphanumeric({length: 10})
let file;
//#endregion

test.beforeEach(async({})=>{
    file = await Utils.createTestFile(FileFormat.TXT);
})

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.navigateTo(headerBarPages.messages);
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.sendEmail(credentials.userEmail, subject, file.filePath);
    await MessagesPage.inboxFolder().waitForTheMessageInInbox(subject);
    await MessagesPage.inboxFolder().openTheMessage(subject);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheOpenedMessageInDocuments();
    await MessagesPage.navigateTo(headerBarPages.documents);
    await DocumentsPage.dragSavedDocumentToTrash(file.fileName);
    await DocumentsPage.sideBar().navigateTo(documentsSidebarPages.trash);
    await DocumentsPage.trashFolder().checkIfTheDocumentIsVisibleWithName(file.fileName);
})

test.afterEach(async ({}, TestInfo) => {
    await Utils.deleteFile(file.filePath);
    if(TestInfo.status==='passed') {
        await DocumentsPage.trashFolder().deleteAttachmentFromTrash(file.fileName);
    } else {
        return;
    }
});