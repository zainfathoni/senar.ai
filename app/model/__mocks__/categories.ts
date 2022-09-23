import { build, perBuild } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'
import { Category } from '@prisma/client'

export const categoryBuilder = build<
  Omit<Category, 'id' | 'createdAt' | 'updatedAt' | 'categoryId'>
>({
  fields: {
    title: perBuild(() => faker.lorem.text()),
    description: perBuild(() => faker.lorem.sentence()),
    slug: perBuild(() => faker.lorem.slug()),
  },
})
