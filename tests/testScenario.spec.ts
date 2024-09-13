import { faker } from '@faker-js/faker'
import { test } from '../test-options'
const credentials = require('../credentials.json')

test('test assessment', async({pm})=>{
    const randomTextForSubjectAndFileName = faker.string.alphanumeric({length: 10});

    await pm.onLandingPage().clickOnLogInButton();
    await pm.onLoginPage().enterEmail(credentials.userEmail);
    await pm.onLoginPage().enterPassword(credentials.password);
    await pm.onLoginPage().clickEnterButton();
    await pm.onLoggedInPage().clickOnMessagesButton();
    await pm.onMessagesPage().clickOnNewMessageButton();
    await pm.onNewMessagePage().fillEmailReceiverInput(credentials.userEmail);
    await pm.onNewMessagePage().fillSubjectInput(randomTextForSubjectAndFileName);
    await pm.onNewMessagePage().clickOnAttachmentButton();
    await pm.onNewMessagePage().uploadFileFromYourComputer(randomTextForSubjectAndFileName);
    await pm.onNewMessagePage().clickOnSendButton();
    await pm.onInboxPage().openTheMessage(randomTextForSubjectAndFileName);
    await pm.onInboxPage().saveTheAttachmentOfTheMessageInDocuments();
    await pm.onLoggedInPage().clickOnDocumentsButton();
    await pm.onDocumentsPage().dragDesiredAttachmentToTrash(randomTextForSubjectAndFileName);
    await pm.onDocumentsPage().clickOnTrashButton();
    await pm.onTrashPage().checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFileName);
    await pm.onDocumentsPage().deleteAttachmentFromTrash(randomTextForSubjectAndFileName);
})