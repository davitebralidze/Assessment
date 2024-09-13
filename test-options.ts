import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/pageManager';

export type TestOptions = {
    setup: string;
    pm: PageManager;
}

export const test = base.extend<TestOptions>({
    setup: async({page}, use) => {
        await page.goto('/');
        await use('');
        await page.close();
    },
    pm: async({page , setup}, use) => {
        const pm = new PageManager(page);
        await use(pm);
    }
})