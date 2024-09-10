import { Page } from "@playwright/test";
import { LandingPageLocators } from "../page-locators/landingPageLocators";

export class LandingPageSteps extends LandingPageLocators {
  constructor(page: Page) {
    super(page);
  }

  async clickOnLogInButton() {
    await this.logInButton.click();
  }
}
