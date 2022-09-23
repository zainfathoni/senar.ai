/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Card } from '../card'
import { categories } from '../../model/categories'
import { Grid2Plus } from '../../icons/duotone'

describe('Breadcrumbs', () => {
  it('renders Card component correctly', () => {
    const category = categories[0]
    // TODO: randomize data using faker & test-data-bot
    render(
      <Card
        name="Tambah Aktivitas Baru"
        description={`Usulkan aktivitas baru untuk kategori ${category.title}`}
        cta="Usulkan"
        category={category.title}
        link="/new"
        icon={Grid2Plus}
        foregroundColor={category.foregroundColor}
        backgroundColor={category.backgroundColor}
      />
    )

    const link = screen.getByRole('link', { name: /usulkan/i })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', '/new')
  })
})
