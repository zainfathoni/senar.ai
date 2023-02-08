import { build, perBuild, oneOf } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'
import { Activity } from '@prisma/client'
import { ACTIVITY_STATUS } from '../enum'

export const activityBuilder = build<
  Omit<Activity, 'id' | 'createdAt' | 'updatedAt' | 'categoryId'>
>({
  fields: {
    name: perBuild(() => faker.commerce.productName()),
    description: perBuild(() => faker.lorem.sentence()),
    url: perBuild(() => faker.internet.url()),
    status: oneOf(...Object.values(ACTIVITY_STATUS)),
  },
})
