/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Card } from '../card'
import { Grid2Plus } from '../../icons/duotone'
import { activityBuilder } from '../../model/__mocks__/activities'
import { categoryBuilder } from '../../model/__mocks__/categories'
import { uncategorized } from '../../model/categories'
import { contactBuilder } from '~/model/__mocks__/contacts'

describe('Card', () => {
  it('renders activity in Card component correctly', () => {
    const { name, description, url } = activityBuilder()
    const { title, slug } = categoryBuilder()
    const cta = faker.lorem.text()
    render(
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
    )

    const link = screen.getByRole('link', { name: cta })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', url)
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
    )

    const link = screen.getByRole('link', { name: cta })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', url)
  })
})
