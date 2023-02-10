import { build, perBuild } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'
import { Contribution } from '../contributions'
import { categoryBuilder } from './categories'

export const contributionBuilder = build<Contribution>({
  fields: {
    id: perBuild(() => faker.random.alphaNumeric()),
    name: perBuild(() => faker.commerce.productName()),
    description: perBuild(() => faker.lorem.sentence()),
    url: perBuild(() => faker.internet.url()),
    category: perBuild(() => categoryBuilder()),
  },
})
