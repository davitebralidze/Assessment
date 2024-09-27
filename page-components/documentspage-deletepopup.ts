import { getPage, test } from "../page-fixtures/test-options";
import { ButtonElement } from "./button-element";

export class DeletePopup {

    private readonly yesButtonForDeleteAttachmentPopup = () => new ButtonElement(getPage().locator("div.btnCtn", { hasText: "Yes" }));

    async clickOnYesButton() {
        await test.step('Click on yes button for the Delete acceptance popup', async ()=>{
            await this.yesButtonForDeleteAttachmentPopup().click();
        })
    }

}