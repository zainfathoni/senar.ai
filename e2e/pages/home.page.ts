import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly activityCard: Locator;
  readonly paudActivity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityCard = page.getByRole('heading');
    this.paudActivity = page.getByRole('link', {
      name: /^paud$/i,
    });
  }

  async open() {
    await this.page.goto('/');
  }

  async goToPaudActivity() {
    await this.paudActivity.click();
  }
}
