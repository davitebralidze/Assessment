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
const fileName = faker.string.alphanumeric({length: 10});
//#endregion

test.beforeEach(async({})=>{
    await Utils.createFile(fileName);
})

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.navigateTo(headerBarPages.messages);
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.sendEmail(credentials.userEmail, subject, fileName);
    await MessagesPage.inboxFolder().waitForTheMessageInInbox(subject);
    await MessagesPage.inboxFolder().openTheMessage(subject);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheMessageInDocuments(fileName);
    await MessagesPage.navigateTo(headerBarPages.documents);
    await DocumentsPage.dragSavedDocumentToTrash(fileName);
    await DocumentsPage.sideBar().navigateTo(sidebarPages.trash);
    await DocumentsPage.trashFolder().checkIfTheDocumentIsVisibleWithName(fileName);
})

test.afterEach(async ({}, TestInfo) => {
    await Utils.deleteFile(fileName);
    if(TestInfo.status==='passed') {
        await DocumentsPage.trashFolder().deleteAttachmentFromTrash(fileName);
    } else {
        return;
    }
});