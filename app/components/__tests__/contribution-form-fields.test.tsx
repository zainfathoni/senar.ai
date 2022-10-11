/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { ContributionFormFields } from '../contribution-form-fields'

describe('ContributionFormFields', () => {
  it('submits form values correctly', async () => {
    const categories = [
      {
        slug: 'belajar-testing',
        title: 'Belajar Testing',
        description: 'Belajar Testing bersama eFishery',
      },
      {
        slug: 'belajar-saja',
        title: 'Belajar Saja',
        description: 'Belajar Saja bersama eFishery',
      },
    ]
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
    await userEvent.selectOptions(categoryCombobox, ['Belajar Testing'])
    const selectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: 'Belajar Testing',
    })
    expect(selectedOption.selected).toBe(true)
    const nonSelectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: 'Belajar Saja',
    })
    expect(nonSelectedOption.selected).toBe(false)

    const nameInput = screen.getByRole('textbox', { name: /nama kegiatan/i })
    await userEvent.type(nameInput, 'Integration Test')
    expect(nameInput).toHaveValue('Integration Test')

    const submitButton = await screen.getByRole('button', { name: /simpan/i })
    await userEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})
