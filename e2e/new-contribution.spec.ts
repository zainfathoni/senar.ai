import { test } from './base-test'
import { activityBuilder } from '~/model/__mocks__/activities'

const { expect } = test

test('Contributing a new activity', async ({
  page,
  queries: { getByRole, getByText },
}) => {
  const { name, description, url } = activityBuilder()

  await page.goto('/contributions/new')

  // Locate Category combobox (case insensitive).
  const category = await getByRole('combobox', {
    name: /kategori usia/i,
  })
  await expect(category).not.toHaveValue('sma')
  await category.selectOption('sma')
  // Expect the value to be 'sma'
  await expect(category).toHaveValue('sma')

  // Locate Nama Kegiatan textbox (case insensitive).
  const nameInput = await getByRole('textbox', {
    name: /nama kegiatan/i,
  })
  await nameInput.type(name)
  // Expect the value to be 'sma'
  await expect(nameInput).toHaveValue(name)

  // Locate Ringkasan Kegiatan textbox (case insensitive).
  const descriptionInput = await getByRole('textbox', {
    name: /ringkasan/i,
  })
  await descriptionInput.type(description)
  // Expect the value to be 'sma'
  await expect(descriptionInput).toHaveValue(description)

  // Locate Link textbox (case insensitive).
  const linkInput = await getByRole('textbox', {
    name: /link/i,
  })
  await linkInput.type(url)
  // Expect the value to be 'sma'
  await expect(linkInput).toHaveValue(url)

  // Locate Link textbox (case insensitive).
  const submit = await getByRole('button', {
    name: /simpan/i,
  })
  await submit.click()

  // Expects the new URL to be correct.
  await expect(page).not.toHaveURL('/contributions/new')

  await getByText(name)
  await getByText(description)
  await getByText(url)
})
