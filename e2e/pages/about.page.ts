import { Page, Locator } from '@playwright/test';

export class AboutPage {
    readonly page: Page;
    readonly aboutUs: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutUs = page.getByRole('heading');
    }

    async open() {
        await this.page.goto('/tentang-kami');
    }
}
