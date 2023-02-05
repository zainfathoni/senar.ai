import { build, perBuild } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'
import { Contact } from '../contacts'

export const contactBuilder = build<
  Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>
>({
  fields: {
    name: perBuild(() => faker.name.fullName()),
    role: perBuild(() => faker.name.jobTitle()),
    description: perBuild(() => faker.name.jobDescriptor()),
    platform: perBuild(() => faker.lorem.word()),
    link: perBuild(() => faker.internet.url()),
    image: perBuild(() => faker.system.filePath()),
    foregroundColor: perBuild(() => faker.lorem.word()),
    backgroundColor: perBuild(() => faker.lorem.word()),
  },
})
