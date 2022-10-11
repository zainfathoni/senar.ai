/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ContributionFormFields } from '../contribution-form-fields'
import { categoryBuilder } from '~/model/__mocks__/categories'
import { activityBuilder } from '~/model/__mocks__/activities'

describe('ContributionForm', () => {
  it('submits form values correctly', async () => {
    const category = categoryBuilder()
    const activity = activityBuilder()
    const onSubmit = vi.fn((e) => {
      e.preventDefault()
    })

    render(
      <MemoryRouter>
        <form method="post" onSubmit={onSubmit}>
          <ContributionFormFields categories={[category]} />
        </form>
      </MemoryRouter>
    )

    const categoryCombobox = screen.getByRole('combobox', {
      name: /kategori usia/i,
    })
    await userEvent.selectOptions(categoryCombobox, [category.slug])
    const selectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: category.title,
    })
    expect(selectedOption.selected).toBe(true)

    const nameInput = await screen.getByRole('textbox', {
      name: /nama kegiatan/i,
    })
    await userEvent.type(nameInput, activity.name)
    expect(nameInput).toHaveValue(activity.name)

    const submitButton = await screen.getByRole('button', {
      name: /simpan/i,
    })
    await userEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})
