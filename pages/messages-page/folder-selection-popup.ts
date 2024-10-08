import { getPage, test } from "../../page-fixtures/experimental-options";
import { ButtonElement } from "../common-page-components/button-element";

export class FolderSelectionPopup {

    private readonly myDocumentsButtonInPopup = ()=> new ButtonElement(getPage().locator("div.treeItemLabel", {hasText: "My documents"}));
    private readonly saveButtonOnTheFoldersPopup = ()=> new ButtonElement(getPage().locator('div[class="btn GCSDBRWBO defaultBtn"]'));

    async clickOnMyDocuments(){
        await test.step('Click on My documents in popup', async ()=>{
            await this.myDocumentsButtonInPopup().click();
        })
    }

    async waitForSaveButtonToBeAttached(){
        await test.step('Wait for the save button to be available in popup', async ()=>{
            await this.saveButtonOnTheFoldersPopup().waitForTheElementToBeAttached();
        })
    }

    async clickOnSaveButton(){
        await test.step('Click on the save button in popup', async ()=>{
            await this.saveButtonOnTheFoldersPopup().forceClick();
        })
    }
}