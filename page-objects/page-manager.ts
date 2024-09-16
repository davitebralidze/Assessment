import { Page } from "@playwright/test";
import { LoginPageSteps } from "./page-steps/login-page-steps";
import { LandingPageSteps } from "./page-steps/landing-page-steps";
import { LoggedInPageSteps } from "./page-steps/loggedin-page-steps";
import { MessagesPageSteps } from "./page-steps/messages-page-steps";
import { NewMessagePageSteps } from "./page-steps/newmessage-page-steps";
import { InboxPageSteps } from "./page-steps/inbox-page-steps";
import { DocumentsPageSteps } from "./page-steps/documents-page-steps";
import { TrashPageSteps } from "./page-steps/trash-page-steps";
export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPageSteps;
  private readonly landingPage: LandingPageSteps;
  private readonly loggedInPage: LoggedInPageSteps;
  private readonly messagesPage: MessagesPageSteps;
  private readonly newMessagePage: NewMessagePageSteps;
  private readonly inboxPage: InboxPageSteps;
  private readonly documentsPage: DocumentsPageSteps;
  private readonly trashPage: TrashPageSteps;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPageSteps(page);
    this.landingPage = new LandingPageSteps(page);
    this.loggedInPage = new LoggedInPageSteps(page);
    this.messagesPage = new MessagesPageSteps(page);
    this.newMessagePage = new NewMessagePageSteps(page);
    this.inboxPage = new InboxPageSteps(page);
    this.documentsPage = new DocumentsPageSteps(page);
    this.trashPage = new TrashPageSteps(page);
  }

  onLoginPage() {
    return this.loginPage;
  }

  onLandingPage() {
    return this.landingPage;
  }

  onLoggedInPage() {
    return this.loggedInPage;
  }

  onMessagesPage() {
    return this.messagesPage;
  }

  onNewMessagePage() {
    return this.newMessagePage;
  }

  onInboxPage() {
    return this.inboxPage;
  }

  onDocumentsPage() {
    return this.documentsPage;
  }

  onTrashPage() {
    return this.trashPage;
  }
}
