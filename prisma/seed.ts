import { PrismaClient } from '@prisma/client'
import { categories as categoriesSeed } from '../app/model/categories'
import { activities as activitiesSeed } from '../app/model/activities'
import { ACTIVITY_STATUS } from '~/model/enum'

const prisma = new PrismaClient()

async function main() {
  // create categories from models seed
  const categories = await Promise.all(
    categoriesSeed.map(async ({ title, slug, description }) =>
      prisma.category.create({
        data: { title, slug, description },
      })
    )
  )

  const categoryIdBySlug = categories.reduce((acc, category) => {
    acc[category.slug] = category.id
    return acc
  }, {})

  // create activities from models seed
  await Promise.all(
    activitiesSeed
      .filter((activity) => categoryIdBySlug[activity.categorySlug]) // filter out activities with invalid categorySlug
      .map(async (activity) =>
        prisma.activity.create({
          data: {
            name: activity.nama,
            description: activity.ringkasan,
            url: activity.link,
            status: ACTIVITY_STATUS.PUBLISHED,
            categoryId: categoryIdBySlug[activity.categorySlug],
          },
        })
      )
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
