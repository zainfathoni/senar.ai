import { test } from './base-test'

const { expect } = test

test('Homepage contains Senarai title', async ({
  page,
  queries: { getByRole },
}) => {
  await page.goto('/')

  // Expect the title to be Senari.
  await expect(page).toHaveTitle(/Senarai/)

  // Locate PAUD text (case insensitive).
  const paud = await getByRole('link', {
    name: /^paud$/i,
  })

  // Expect the attribute "to be strictly equal" to the value.
  await expect(paud).toHaveAttribute('href', '/activities/paud')

  // Click the PAUD link.
  await paud.click()

  // Expects the new URL to be correct.
  await expect(page).toHaveURL('/activities/paud')
})
