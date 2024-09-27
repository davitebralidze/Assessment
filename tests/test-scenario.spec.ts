//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { MessagesPage } from '../pages/messages-page'
import { DocumentsPage } from '../pages/documents-page'
import { sidebarPages } from '../page-components/documentspage-sidebar'
const credentials = require('../credentials.json');
const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});
//#endregion

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.headerbar().navigateToMessagesPage();
    await MessagesPage.clickOnNewMessageButton();
    await MessagesPage.newMessageForm().sendEmail(credentials.userEmail, randomTextForSubjectAndFileName, randomTextForSubjectAndFileName);
    await MessagesPage.inboxFolder().saveTheAttachmentOfTheMessageInDocuments(randomTextForSubjectAndFileName);
    await MessagesPage.headerbar().navigateToDocumentsPage()
    await DocumentsPage.dragSavedDocumentToTrash(randomTextForSubjectAndFileName);
    await DocumentsPage.sideBar().navigateTo(sidebarPages.trash);
    await DocumentsPage.trashFolder().checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await DocumentsPage.trashFolder().deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
    } else {
        return;
    }
});