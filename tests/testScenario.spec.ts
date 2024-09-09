import { expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { Utils } from '../utils/utils'
const credentials = require('../credentials.json');

test.beforeEach(async({page})=>{
    await page.goto('/');
})

//#region Test scenarion
test('test assessment', async({page})=>{

    const pm = new PageManager(page);
    const randomTextForSubjectAndFIleName = Utils.returnDefaultString();
    const userEmail = credentials.userEmail;
    const userPassword = credentials.password;
    const testFilePath = `test-files/${randomTextForSubjectAndFIleName}.pdf`;
    const attachment = page.getByTitle(`${randomTextForSubjectAndFIleName}.pdf`);
    await Utils.createTestFileFromExistingOne(randomTextForSubjectAndFIleName);

    await pm.onLandingPage().clickOnLogInButton();
    await pm.onLoginPage().enterEmail(userEmail);
    await pm.onLoginPage().enterPassword(userPassword);
    await pm.onLoginPage().clickEnterButton();
    await pm.onLoggedInPage().clickOnMessagesButton();
    await pm.onMessagesPage().clickOnNewMessageButton();
    await pm.onNewMessagePage().clickOnAttachmentButton();
    await pm.onNewMessagePage().uploadFileFromYourComputer(testFilePath);
    await pm.onNewMessagePage().fillEmailReceiverInput(userEmail);
    await pm.onNewMessagePage().fillSubjectInput(randomTextForSubjectAndFIleName);
    await page.waitForSelector(await pm.onNewMessagePage().returnCheckboxForTheUploadedFile());
    await pm.onNewMessagePage().clickOnSendButton();
    
    var isTheLastMessageVisible = false;
    while(!isTheLastMessageVisible) {
        isTheLastMessageVisible = await page.locator('div #gwt-uid-9 tr td').nth(2).locator('div .listSubject', {hasText: randomTextForSubjectAndFIleName}).isVisible();
        if(!isTheLastMessageVisible) {
            await pm.onInboxPage().clickOnTheRefreshButton();
            await page.waitForTimeout(1000);
        } else {
                isTheLastMessageVisible = true;
        }
    } await expect(pm.onInboxPage().returnTheLastReceivedMessageAsElement()).toContainText(randomTextForSubjectAndFIleName);

    await pm.onInboxPage().openTheLastReceivedMessage();
    await pm.onInboxPage().saveTheAttachmentOfTheMessageInDocuments();
    await pm.onLoggedInPage().clickOnDocumentsButton();
    await pm.onDocumentsPage().dragDesiredAttachmentToTrash(attachment);
    await pm.onDocumentsPage().clickOnTrashButton();
    await attachment.waitFor({state: "visible"});
    await expect(attachment).toBeVisible();
    Utils.deleteFile(testFilePath);
    await pm.onDocumentsPage().deleteAttachmentFromTrash(attachment);
})
//#endregion

    test.afterAll(async({page})=>{
        await page.close();
    })