import { test } from './base-test';
import { AboutPage } from './pages/about.page';

const { expect } = test;

test.describe('Senarai About page E2E Test', () => {
  let aboutPage: AboutPage;

  test.beforeEach(async ({ page }) => {
    aboutPage = new AboutPage(page);
    await aboutPage.open();
    await expect(page).toHaveURL('/tentang-kami');
    await expect(page).toHaveTitle(/Senarai | Tentang Kami/);
  })

  test('user should be able to see About Us content', async () => {
    await expect(aboutPage.aboutUs).toHaveText([
      `Tentang Kami`,
      `Ainun Najib`,
      `Adhi Utama`,
      `Zain Fathoni`,
    ]);
  });
});
