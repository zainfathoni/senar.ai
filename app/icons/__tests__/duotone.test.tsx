/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react'
import {
  Bars,
  Briefcase,
  BuildingColumns,
  ChildReaching,
  Family,
  GraduationCap,
  House,
  MagnifyingGlass,
  PeopleGroup,
  PersonChalkboard,
  School,
  SchoolFlag,
  X,
} from '../duotone'

describe('Duotone icons', () => {
  it.each([
    { Icon: Bars },
    { Icon: MagnifyingGlass },
    { Icon: X },
    { Icon: House },
    { Icon: ChildReaching },
    { Icon: School },
    { Icon: SchoolFlag },
    { Icon: BuildingColumns },
    { Icon: GraduationCap },
    { Icon: Briefcase },
    { Icon: Family },
    { Icon: PeopleGroup },
    { Icon: PersonChalkboard },
  ])('renders icon correctly', ({ Icon }) => {
    const { container } = render(<Icon />)

    expect(container).toMatchSnapshot()
  })
})
