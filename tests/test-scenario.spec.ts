import { faker } from '@faker-js/faker'
import { test } from '../test-options'
import { OnLandingPage } from '../pages/landing-page'
import { OnLogInPage } from '../pages/login-page'
import { OnLoggedInPage } from '../pages/loggedin-page'
import { OnMessagesPage } from '../pages/messages-page'
import { OnNewMessagesPage } from '../pages/newmessage-page'
import { OnInboxPage} from '../pages/inbox-page'
import { OnDocumentsPage } from '../pages/documents-page'
import { OnTrashPage } from '../pages/trash-page'
const credentials = require('../credentials.json');
const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});

test('test assessment', async({customFixture})=>{
    await OnLandingPage.clickOnLogInButton();
    await OnLogInPage.enterEmail(credentials.userEmail);
    await OnLogInPage.enterPassword(credentials.password);
    await OnLogInPage.clickEnterButton();
    await OnLoggedInPage.clickOnMessagesButton();
    await OnMessagesPage.clickOnNewMessageButton();
    await OnNewMessagesPage.fillEmailReceiverInput(credentials.userEmail);
    await OnNewMessagesPage.fillSubjectInput(randomTextForSubjectAndFileName);
    await OnNewMessagesPage.clickOnAttachmentButton();
    await OnNewMessagesPage.uploadFileFromYourComputer(randomTextForSubjectAndFileName);
    await OnNewMessagesPage.clickOnSendButton();
    await OnInboxPage.openTheMessage(randomTextForSubjectAndFileName);
    await OnInboxPage.saveTheAttachmentOfTheMessageInDocuments();
    await OnLoggedInPage.clickOnDocumentsButton();
    await OnDocumentsPage.dragDesiredAttachmentToTrash(randomTextForSubjectAndFileName);
    await OnDocumentsPage.clickOnTrashButton();
    await OnTrashPage.checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFileName);
})

test.afterEach(async ({}, TestInfo) => {
    if(TestInfo.status==='passed') {
        await OnTrashPage.deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
    } else {
        return;
    }
});