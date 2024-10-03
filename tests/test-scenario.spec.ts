//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { MessagesPage } from '../pages/messages-page'
import { DocumentsPage } from '../pages/documents-page'
import { sidebarPages } from '../page-components/documentspage-sidebar'
import { headerBarPages } from '../page-components/headerbar-component'
import { Utils } from '../utils/utils'
const credentials = require('../credentials.json')
const subject = faker.string.alphanumeric({length: 10});
let file;
//#endregion

test.beforeEach(async({})=>{
    file = await Utils.createTestFile(faker.string.alphanumeric({length: 10}), 'pdf');
})

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.navigateTo(headerBarPages.messages);
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.sendEmail(credentials.userEmail, subject, file.filePath);
    await MessagesPage.inboxFolder().waitForTheMessageInInbox(subject);
    await MessagesPage.inboxFolder().openTheMessage(subject);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheMessageInDocuments(file.fileName);
    await MessagesPage.navigateTo(headerBarPages.documents);
    await DocumentsPage.dragSavedDocumentToTrash(file.fileName);
    await DocumentsPage.sideBar().navigateTo(sidebarPages.trash);
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