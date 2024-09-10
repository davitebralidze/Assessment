import { expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { Utils } from '../utils/utils'
import { faker } from '@faker-js/faker'
const credentials = require('../credentials.json');

test.beforeEach(async({page})=>{
    await page.goto('/');
})

test('test assessment', async({page})=>{

    const pm = new PageManager(page);
    const randomTextForSubjectAndFIleName = faker.string.alphanumeric({length: 10});
    const userEmail = credentials.userEmail;
    const userPassword = credentials.password;

    await pm.onLandingPage().clickOnLogInButton();
    await pm.onLoginPage().enterEmail(userEmail);
    await pm.onLoginPage().enterPassword(userPassword);
    await pm.onLoginPage().clickEnterButton();
    await pm.onLoggedInPage().clickOnMessagesButton();
    await pm.onMessagesPage().clickOnNewMessageButton();
    await pm.onNewMessagePage().fillEmailReceiverInput(userEmail);
    await pm.onNewMessagePage().fillSubjectInput(randomTextForSubjectAndFIleName);
    await pm.onNewMessagePage().clickOnAttachmentButton();
    await pm.onNewMessagePage().uploadFileFromYourComputer(randomTextForSubjectAndFIleName);
    await pm.onNewMessagePage().clickOnSendButton();
    await pm.onInboxPage().openTheMessage(randomTextForSubjectAndFIleName);
    await pm.onInboxPage().saveTheAttachmentOfTheMessageInDocuments();
    await pm.onLoggedInPage().clickOnDocumentsButton();
    await pm.onDocumentsPage().dragDesiredAttachmentToTrash(randomTextForSubjectAndFIleName);
    await pm.onDocumentsPage().clickOnTrashButton();
    await pm.onTrashPage().checkIfTheElementWasMovedToTrash(randomTextForSubjectAndFIleName);
    await pm.onDocumentsPage().deleteAttachmentFromTrash(randomTextForSubjectAndFIleName);
})

test.afterEach(async ({page})=>{
    console.log('hello')
})