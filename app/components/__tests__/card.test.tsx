/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { MemoryRouter } from 'react-router-dom'
import { Card, CardContainer } from '../card'
import { Grid2Plus } from '../../icons/duotone'
import { activityBuilder } from '../../model/__mocks__/activities'
import { categoryBuilder } from '../../model/__mocks__/categories'
import { contactBuilder } from '../..//model/__mocks__/contacts'
import { uncategorized } from '../../model/categories'

describe('Card', () => {
  it('renders activity in Card component correctly', () => {
    const { name, description, url } = activityBuilder()
    const { title, slug } = categoryBuilder()
    const cta = faker.lorem.text()
    render(
      <MemoryRouter>
        <Card
          name={name}
          description={description}
          cta={cta}
          category={title}
          categorySlug={slug}
          link={url}
          icon={Grid2Plus}
          foregroundColor={uncategorized.foregroundColor}
          backgroundColor={uncategorized.backgroundColor}
        />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: cta })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', url)
  })

  it('renders activity with secondary link in Card component correctly', () => {
    const { name, description } = activityBuilder()
    const { title, slug } = categoryBuilder()
    const cta = faker.lorem.text()
    const url = faker.system.fileName()
    const secondaryUrl = faker.internet.url()
    const secondaryCta = faker.lorem.text()
    render(
      <MemoryRouter>
        <Card
          name={name}
          description={description}
          cta={cta}
          category={title}
          categorySlug={slug}
          link={url}
          secondaryLink={secondaryUrl}
          secondaryCta={secondaryCta}
          icon={Grid2Plus}
          foregroundColor={uncategorized.foregroundColor}
          backgroundColor={uncategorized.backgroundColor}
        />
      </MemoryRouter>
    )

    const secondaryLink = screen.getByRole('link', { name: secondaryCta })
    expect(secondaryLink).toBeVisible()
    expect(secondaryLink).toHaveAttribute('href', secondaryUrl)
  })

  it('renders activity with no CTA in Card component correctly', () => {
    const { name, description } = activityBuilder()
    const { title, slug } = categoryBuilder()
    render(
      <MemoryRouter>
        <Card
          name={name}
          description={description}
          category={title}
          categorySlug={slug}
          icon={Grid2Plus}
          foregroundColor={uncategorized.foregroundColor}
          backgroundColor={uncategorized.backgroundColor}
        />
      </MemoryRouter>
    )

    const secondaryLink = screen.getByRole('button', {
      name: /belum ada link/i,
    })
    expect(secondaryLink).toBeVisible()
    expect(secondaryLink).toHaveAttribute('disabled')
  })

  it('renders contact in Card component correctly', () => {
    const {
      name,
      description,
      image,
      link: url,
      role,
      foregroundColor,
      backgroundColor,
    } = contactBuilder()
    const cta = faker.lorem.text()
    render(
      <CardContainer>
        <Card
          name={name}
          description={description}
          cta={cta}
          category={role}
          image={image}
          link={url}
          icon={Grid2Plus}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
        />
      </CardContainer>
    )

    const link = screen.getByRole('link', { name: cta })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', url)
  })
})
