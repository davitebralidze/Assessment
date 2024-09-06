import { Page } from '@playwright/test'
import { LoginPageSteps } from './page-steps/loginPageSteps';
import { LandingPageSteps } from './page-steps/landingPageSteps';
import { LoggedInPageSteps } from './page-steps/loggedInPageSteps';
import { MessagesPageSteps } from './page-steps/messagesPageSteps';
import { NewMessagePageSteps } from './page-steps/newMessagePageSteps';
import { InboxPageSteps } from './page-steps/inboxPageSteps'; 
import { DocumentsPageSteps } from './page-steps/documentsPageSteps';
export class PageManager {

    private readonly page: Page;
    private readonly loginPage: LoginPageSteps;
    private readonly landingPage: LandingPageSteps;
    private readonly loggedInPage: LoggedInPageSteps;
    private readonly messagesPage: MessagesPageSteps;
    private readonly newMessagePage: NewMessagePageSteps;
    private readonly inboxPage: InboxPageSteps;
    private readonly documentsPage: DocumentsPageSteps;

    constructor (page: Page) {
        this.page = page;
        this.loginPage = new LoginPageSteps(page);
        this.landingPage = new LandingPageSteps(page);
        this.loggedInPage = new LoggedInPageSteps(page);
        this.messagesPage = new MessagesPageSteps(page);
        this.newMessagePage = new NewMessagePageSteps(page);
        this.inboxPage = new InboxPageSteps(page);
        this.documentsPage = new DocumentsPageSteps(page);

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

}