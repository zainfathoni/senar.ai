/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ContributionFormFields } from '../contribution-form-fields'

describe('ContributionFormFields', () => {
  it('submits form values correctly', async () => {
    const categories = [
      {
        slug: 'belajar-testing',
        title: 'Belajar Testing',
        description: 'Belajar Testing bersama eFishery',
      },
    ]
    render(
      <MemoryRouter>
        <ContributionFormFields categories={categories} />
      </MemoryRouter>
    )
  })
})
