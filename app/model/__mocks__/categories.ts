import { build, perBuild } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'
import { CategoryWithoutMetadata } from '../categories'

export const categoryBuilder = build<CategoryWithoutMetadata>({
  fields: {
    title: perBuild(() => faker.lorem.text()),
    description: perBuild(() => faker.lorem.sentence()),
    slug: perBuild(() => faker.lorem.slug()),
  },
})
