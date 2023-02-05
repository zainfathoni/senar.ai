/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react'
import { BuildingColumns, ChildReaching, School, SchoolFlag } from '../light'

describe('Light icons', () => {
  it.each([
    { Icon: ChildReaching },
    { Icon: School },
    { Icon: SchoolFlag },
    { Icon: BuildingColumns },
  ])('renders icon correctly', ({ Icon }) => {
    const { container } = render(<Icon />)

    expect(container).toMatchSnapshot()
  })
})
