import { test } from './base-test'
import { activities } from '~/model/activities'

const { expect } = test

test('Viewing contributions list', async ({ page, queries: { getByText } }) => {
  const [{ nama, ringkasan }] = activities

  await page.goto('/contributions')

  // if (!noscript) {
  await expect(await getByText(nama)).toBeVisible()
  await expect(await getByText(ringkasan)).toBeVisible()
  // }
})