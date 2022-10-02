import { test } from './base-test'

const { expect } = test

test('About us contains Tentang Kami title', async ({ page }) => {
  await page.goto('/tentang-kami')

  // Expect the title to be Tentang Kami.
  await expect(page).toHaveTitle(/Tentang Kami/)
})
