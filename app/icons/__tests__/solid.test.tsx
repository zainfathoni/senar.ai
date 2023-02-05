/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react'
import { ChevronRight } from '../solid'

describe('Solid icons', () => {
  it.each([{ Icon: ChevronRight }])('renders icon correctly', ({ Icon }) => {
    const { container } = render(<Icon />)

    expect(container).toMatchSnapshot()
  })
})
