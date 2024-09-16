import { Page } from "@playwright/test";
import { NewMessagePageLocators } from "../page-locators/new-message-page-locators.ts";
import { Utils } from "../../utils/utils.ts";

export class NewMessagePageSteps extends NewMessagePageLocators {
  constructor(page: Page) {
    super(page);
  }

  async clickOnAttachmentButton() {
    await this.attachmentButton.click();
  }

  async uploadFileFromYourComputer(fileName: string) {
    await Utils.createFile(fileName);
    await this.attachFromComputerButtonInput.setInputFiles(`${fileName}.txt`);
    await this.checkboxForTheUploadedFile.waitFor({ state: "visible" });
    await Utils.deleteFile(fileName);
  }

  async fillEmailReceiverInput(sendTo: string) {
    await this.emailReceiverInput.fill(sendTo);
  }

  async clickOnSendButton() {
    await this.sendButton.click();
  }

  async fillSubjectInput(subject: string) {
    await this.subjectInput.fill(subject);
  }
}
