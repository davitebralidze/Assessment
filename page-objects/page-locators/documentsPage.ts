import { Page } from '@playwright/test'

export class DocumentsPage {

    protected readonly page;

    protected readonly trashButton;

    constructor(page: Page) {
        this.page = page;
        this.trashButton = page.locator('#doc_tree_trash');
    }

}