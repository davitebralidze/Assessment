import { expect, test } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { Utils } from '../utils/utils'
const credentials = require('../credentials.json');

test.beforeEach(async({page})=>{
    await page.goto(credentials.URL);
})

test('test assessment', async({page})=>{

    const randomTextForSubjectAndFIleName = Utils.returnDefaultString();
    const userEmail = credentials.userEmail;
    const userPassword = credentials.password;
    const testFilePath = `test-files/${randomTextForSubjectAndFIleName}.pdf`;
    await Utils.createTestFileFromExistingOne(randomTextForSubjectAndFIleName);

    const pm = new PageManager(page);

    await pm.onLandingPage().clickOnLogInButton();
    await pm.onLoginPage().enterEmail(userEmail);
    await pm.onLoginPage().enterPassword(userPassword);
    await pm.onLoginPage().clickEnterButton();

    //wait for login animation code here

    await pm.onLoggedInPage().clickOnMessagesButton();
    await pm.onMessagesPage().clickOnNewMessageButton();
    await pm.onNewMessagePage().clickOnAttachmentButton();
    await pm.onNewMessagePage().uploadFileFromYourComputer(testFilePath);
    await pm.onNewMessagePage().fillEmailReceiverInput(userEmail);
    await pm.onNewMessagePage().fillSubjectInput(randomTextForSubjectAndFIleName);
    await page.waitForSelector(await pm.onNewMessagePage().returnCheckboxForTheUploadedFile());
    await pm.onNewMessagePage().clickOnSendButton();
    
    //this case is missing an assertion in case the element did not come
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


    console.log(randomTextForSubjectAndFIleName)

    const attachment = page.getByTitle(`${randomTextForSubjectAndFIleName}.pdf`);
    const trash = page.locator('#doc_tree_trash');


    await attachment.scrollIntoViewIfNeeded();

    const box = await attachment.boundingBox();

    const x = box?.x;
    const y = box?.y;

    await page.mouse.move(x , y + 200);


    await attachment.hover();
    await page.mouse.down();

    
    
    await page.mouse.move(x, y + 200, { steps: 10 });


    await trash.hover();
    await trash.hover();



    await page.mouse.up();


    Utils.deleteFile(testFilePath);

})