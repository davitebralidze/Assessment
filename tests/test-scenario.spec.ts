//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { MessagesPage } from '../pages/messages-page'
import { DocumentsPage } from '../pages/documents-page'
import { sidebarPages } from '../page-components/documentspage-sidebar'
import { headerbarPages } from '../page-components/headerbar-component'
const credentials = require('../credentials.json')
const subject = faker.string.alphanumeric({length: 10});
const fileName = faker.string.alphanumeric({length: 10});
//#endregion

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.headerBar().navigateTo(headerbarPages.messages);
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.sendEmail(credentials.userEmail, subject, fileName);
    await MessagesPage.inboxFolder().waitForTheMessageInInbox(subject);
    await MessagesPage.inboxFolder().openTheMessage(subject);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheMessageInDocuments(fileName);
    await MessagesPage.headerBar().navigateTo(headerbarPages.documents);
    await DocumentsPage.dragSavedDocumentToTrash(fileName);
    await DocumentsPage.sideBar().navigateTo(sidebarPages.trash);
    await DocumentsPage.trashFolder().checkIfTheElementIsVisible(fileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await DocumentsPage.trashFolder().deleteAttachmentFromTrash(fileName);
    } else {
        return;
    }
});