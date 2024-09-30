//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { MessagesPage } from '../pages/messages-page'
import { DocumentsPage } from '../pages/documents-page'
import { sidebarPages } from '../page-components/documentspage-sidebar'
import { Headerbar, headerbarPages } from '../page-components/headerbar-component'
import { NewMessageForm } from '../page-components/messagespage-newmessage-form'
const credentials = require('../credentials.json')
const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});
//#endregion

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.headerBar().navigateTo(headerbarPages.messages);
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.sendEmail(credentials.userEmail, randomTextForSubjectAndFileName, randomTextForSubjectAndFileName);
    await MessagesPage.inboxFolder().waitForTheMessageInInbox(randomTextForSubjectAndFileName);
    await MessagesPage.inboxFolder().openTheMessage(randomTextForSubjectAndFileName);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheMessageInDocuments(randomTextForSubjectAndFileName);
    await MessagesPage.headerBar().navigateTo(headerbarPages.documents);
    await DocumentsPage.dragSavedDocumentToTrash(randomTextForSubjectAndFileName);
    await DocumentsPage.sideBar().navigateTo(sidebarPages.trash);
    await DocumentsPage.trashFolder().checkIfTheElementIsVisible(randomTextForSubjectAndFileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await DocumentsPage.trashFolder().deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
    } else {
        return;
    }
});