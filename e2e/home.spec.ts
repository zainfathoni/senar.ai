import { test } from './base-test';
import { HomePage } from './pages/home.page';

const { expect } = test;

test.describe('Senarai Home page E2E Test', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
        await expect(page).toHaveURL('/');
        await expect(page).toHaveTitle(/Senarai/);
    });

    test('user should be able to see all activities', async () => {
        await expect(homePage.activityCard).toHaveText([
            `Senarai`,
            `PAUD`,
            `PAUD ke atas`,
            `SD`,
            `SD ke atas`,
            `SMP`,
            `SMP ke atas`,
            `SMA`,
            `SMA ke atas`,
            `Kuliah`,
            `Profesional`,
            `Semua Usia`,
            `For Parents`,
        ]);
    });

    test('user should be able to navigate to an activity', async ({ page }) => {
        await homePage.goToPaudActivity();
        await expect(page).toHaveURL('/activities/paud');
        await expect(page).toHaveTitle(/Senarai | Aktivitas PAUD/);
    });
});
