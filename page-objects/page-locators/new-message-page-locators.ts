import { Page, Locator } from "@playwright/test";

export class NewMessagePageLocators {
  private readonly page: Page;

  protected readonly attachmentButton: Locator;
  protected readonly attachFromComputerButtonInput: Locator;
  protected readonly emailReceiverInput: Locator;
  protected readonly sendButton: Locator;
  protected readonly subjectInput: Locator;
  protected readonly checkboxForTheUploadedFile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.attachmentButton = page.locator(".GCSDBRWBISB", {
      hasText: "Attachment",
    });
    this.attachFromComputerButtonInput = page.locator(
      'input[name="docgwt-uid-33"]'
    );
    this.emailReceiverInput = page.locator("#mailTo .GCSDBRWBPL");
    this.sendButton = page.locator(".btnCtn", { hasText: "Send" });
    this.subjectInput = page.locator("#mailSubject");
    this.checkboxForTheUploadedFile = page.locator("div .checkIcon");
  }
}
