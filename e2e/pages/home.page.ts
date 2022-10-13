import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly activityCard: Locator;
  readonly paudActivity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityCard = page.locator('h3.text-lg.font-medium');
    this.paudActivity = page.locator('text=PAUDPendidikan Anak Usia Dini >> span');
  }

  async open() {
    await this.page.goto('/');
  }

  async goToPaudActivity() {
    await this.paudActivity.click();
  }
}
