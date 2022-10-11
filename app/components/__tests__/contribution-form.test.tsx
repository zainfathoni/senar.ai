/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { ContributionForm } from '../contribution-form'
import { categoryBuilder } from '~/model/__mocks__/categories'

describe('ContributionForm', () => {
  it('submits form values correctly', async () => {
    const category = categoryBuilder()

    // FIXME: unable to test the component because it depends on Form
    // https://github.com/remix-run/remix/discussions/993?sort=top#discussioncomment-1792350
    render(
      <MemoryRouter>
        <ContributionForm categories={[category]} />
      </MemoryRouter>
    )

    const categoryCombobox = screen.getByRole('combobox', {
      name: /kategori usia/i,
    })
    await userEvent.selectOptions(categoryCombobox, [
      category.slug,
      category.slug,
    ])

    const selectedOption: HTMLOptionElement = screen.getByRole('option', {
      name: category.title,
    })
    expect(selectedOption.selected).toBe(true)
  })
})
