/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ContributionsList } from '../contributions-list'
import { contributionBuilder } from '~/model/__mocks__/contributions'
import { Contribution } from '~/model/contributions'

describe('ContributionsList', () => {
  it('renders contributions list correctly', async () => {
    // Fixtures
    const firstContribution = contributionBuilder()
    const secondContribution = contributionBuilder()
    const contributions = [firstContribution, secondContribution]

    render(
      <MemoryRouter>
        <ContributionsList contributions={contributions} />
      </MemoryRouter>
    )

    expect(screen.getByText(firstContribution.name)).toBeVisible()
    expect(screen.getByText(firstContribution.description)).toBeVisible()

    const [firstLink] = screen.getAllByRole('link', { name: 'Kunjungi' })
    expect(firstLink).toBeVisible()
    expect(firstLink).toHaveAttribute('href', firstContribution.url)
  })

  it('renders deferred contributions list correctly', async () => {
    // Fixtures
    const firstContribution = contributionBuilder()
    const secondContribution = contributionBuilder()
    const contributionsPromise = new Promise<Contribution[]>((resolve) =>
      resolve([firstContribution, secondContribution])
    )

    render(
      <MemoryRouter>
        <ContributionsList contributionsPromise={contributionsPromise} />
      </MemoryRouter>
    )

    const allNames = screen.getAllByText(/^memuat$/i)
    expect(allNames).toHaveLength(4)
    expect(allNames[0]).toBeVisible()

    const allDescriptions = screen.getAllByText(/sedang memuat aktivitas/i)
    expect(allDescriptions).toHaveLength(4)
    expect(allDescriptions[0]).toBeVisible()

    expect(await screen.findByText(firstContribution.name)).toBeVisible()
    expect(screen.getByText(firstContribution.description)).toBeVisible()

    const [firstLink] = screen.getAllByRole('link', { name: 'Kunjungi' })
    expect(firstLink).toBeVisible()
    expect(firstLink).toHaveAttribute('href', firstContribution.url)

    expect(screen.queryByText(/^memuat$/i)).not.toBeInTheDocument()
  })
})
