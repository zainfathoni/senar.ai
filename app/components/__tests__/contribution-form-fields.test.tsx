/**
 * @vitest-environment jsdom
 */

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { Category } from '@prisma/client'
import { ContributionFormFields } from '../contribution-form-fields'
import { categoryBuilder } from '~/model/__mocks__/categories'
import { activityBuilder } from '~/model/__mocks__/activities'
import { CategoryWithoutMetadata } from '~/model/categories'

describe('ContributionFormFields', () => {
  it('submits form values correctly', async () => {
    // Fixtures
    const categories = [categoryBuilder(), categoryBuilder()]
    const activity = activityBuilder()

    const [firstCategory, secondCategory] = categories
    const onSubmit = vi.fn((e) => {
      e.preventDefault()
    })

    render(
      <MemoryRouter>
        <form onSubmit={onSubmit}>
          <ContributionFormFields categories={categories} />
        </form>
      </MemoryRouter>
    )

    const categoryCombobox = screen.getByRole('combobox', {
      name: /kategori usia/i,
    })
    await userEvent.selectOptions(categoryCombobox, [firstCategory.title])
    const selectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: firstCategory.title,
    })
    expect(selectedOption.selected).toBe(true)
    const nonSelectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: secondCategory.title,
    })
    expect(nonSelectedOption.selected).toBe(false)

    const nameInput = screen.getByRole('textbox', { name: /nama kegiatan/i })
    await userEvent.type(nameInput, activity.name)
    expect(nameInput).toHaveValue(activity.name)

    const submitButton = await screen.getByRole('button', { name: /simpan/i })
    await userEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalledOnce()
  })

  it('renders deferred form correctly', async () => {
    // Fixtures
    const firstCategory = categoryBuilder()
    const secondCategory = categoryBuilder()
    const categoriesPromise = new Promise<CategoryWithoutMetadata[]>(
      (resolve) => resolve([firstCategory, secondCategory])
    )

    const onSubmit = vi.fn((e) => {
      e.preventDefault()
    })

    render(
      <MemoryRouter>
        <form onSubmit={onSubmit}>
          <ContributionFormFields categoriesPromise={categoriesPromise} />
        </form>
      </MemoryRouter>
    )

    const initialOption: HTMLOptionElement = screen.getByRole('option', {
      name: /memuat kategori/i,
    })
    expect(initialOption.selected).toBe(true)

    const firstOption: HTMLOptionElement = await screen.findByRole('option', {
      name: firstCategory.title,
    })
    const categoryCombobox = screen.getByRole('combobox', {
      name: /kategori usia/i,
    })
    await userEvent.selectOptions(categoryCombobox, [firstCategory.title])
    expect(firstOption.selected).toBe(true)
  })

  it('renders empty promisedCategories correctly', async () => {
    // Fixtures
    const categoriesPromise = new Promise<
      Omit<Category, 'id' | 'createdAt' | 'updatedAt'>[]
    >((resolve) => resolve([]))

    const onSubmit = vi.fn((e) => {
      e.preventDefault()
    })

    render(
      <MemoryRouter>
        <form onSubmit={onSubmit}>
          <ContributionFormFields categoriesPromise={categoriesPromise} />
        </form>
      </MemoryRouter>
    )

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('option', {
        name: /memuat kategori/i,
      })
    )

    const categoryCombobox = screen.getByRole('combobox', {
      name: /kategori usia/i,
    })
    expect(categoryCombobox).toHaveTextContent('')
  })
})
