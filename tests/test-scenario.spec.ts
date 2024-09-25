//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { MessagesPage } from '../pages/messages-page'
import { DocumentsPage } from '../pages/documents-page'
const credentials = require('../credentials.json');
const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});
//#endregion

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.logIn(credentials.userEmail, credentials.password);
    await MessagesPage.NewMessageForm.sendEmail(credentials.userEmail, randomTextForSubjectAndFileName, randomTextForSubjectAndFileName);
    await MessagesPage.InboxFolder.saveTheAttachmentOfTheMessageInDocuments(randomTextForSubjectAndFileName);
    await DocumentsPage.dragSavedDocumentToTrash(randomTextForSubjectAndFileName);
    await DocumentsPage.TrashFolder.checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await DocumentsPage.TrashFolder.deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
    } else {
        return;
    }
});