/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { MemoryRouter } from 'react-router-dom'
import {
  ButtonLink,
  PrimaryButtonLink,
  TertiaryButtonLink,
} from '../button-link'

describe('ButtonLink', () => {
  it('renders ButtonLink component with passed className correctly', () => {
    const text = faker.lorem.word()
    const className = faker.lorem.slug()

    render(
      <MemoryRouter>
        <ButtonLink to={faker.lorem.slug()} className={className}>
          {text}
        </ButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveClass(className)
  })

  it('renders disabled ButtonLink component correctly', () => {
    const text = faker.lorem.word()

    render(
      <MemoryRouter>
        <ButtonLink disabled to={faker.lorem.slug()}>
          {text}
        </ButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('button', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('disabled')
  })

  it('renders external link in ButtonLink component correctly', () => {
    const url = faker.internet.url()
    const text = faker.lorem.word()

    render(
      <MemoryRouter>
        <ButtonLink external to={url}>
          {text}
        </ButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', url)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders PrimaryButtonLink component correctly', () => {
    const text = faker.lorem.word()

    render(
      <MemoryRouter>
        <PrimaryButtonLink to={faker.lorem.slug()}>{text}</PrimaryButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveClass('border-transparent')
  })

  it('renders TertiaryButtonLink component correctly', () => {
    const text = faker.lorem.word()

    render(
      <MemoryRouter>
        <TertiaryButtonLink to={faker.lorem.slug()}>{text}</TertiaryButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveClass('border-transparent')
  })

  it('renders disabled TertiaryButtonLink component correctly', () => {
    const text = faker.lorem.word()

    render(
      <MemoryRouter>
        <TertiaryButtonLink disabled to={faker.lorem.slug()}>
          {text}
        </TertiaryButtonLink>
      </MemoryRouter>
    )

    const link = screen.getByRole('button', { name: text })
    expect(link).toBeVisible()
    expect(link).toHaveClass('mr-auto')
  })
})
