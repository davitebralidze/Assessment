//#region Imports & Declarations
import { faker } from '@faker-js/faker'
import { test } from '../page-fixtures/test-options'
import { LandingPage } from '../pages/landing-page'
import { LogInPage } from '../pages/login-page'
import { LoggedInPage } from '../pages/loggedin-page'
import { MessagesPage } from '../pages/messages-page'
import { NewMessagesPage } from '../pages/newmessage-page'
import { InboxPage} from '../pages/inbox-page'
import { DocumentsPage } from '../pages/documents-page'
import { TrashPage } from '../pages/trash-page'
const credentials = require('../credentials.json');
const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});
//#endregion

test('test assessment', async({})=>{
    await LandingPage.clickOnLogInButton();
    await LogInPage.enterEmail(credentials.userEmail);
    await LogInPage.enterPassword(credentials.password);
    await LogInPage.clickEnterButton();
    await LoggedInPage.clickOnMessagesButton();
    await MessagesPage.clickOnNewMessageButton();
    await NewMessagesPage.fillEmailReceiverInput(credentials.userEmail);
    await NewMessagesPage.fillSubjectInput(randomTextForSubjectAndFileName);
    await NewMessagesPage.clickOnAttachmentButton();
    await NewMessagesPage.uploadFileFromYourComputer(randomTextForSubjectAndFileName);
    await NewMessagesPage.clickOnSendButton();
    await InboxPage.openTheMessage(randomTextForSubjectAndFileName);
    await InboxPage.saveTheAttachmentOfTheMessageInDocuments();
    await LoggedInPage.clickOnDocumentsButton();
    await DocumentsPage.dragDesiredAttachmentToTrash(randomTextForSubjectAndFileName);
    await DocumentsPage.clickOnTrashButton();
    await TrashPage.checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await TrashPage.deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
    } else {
        return;
    }
});