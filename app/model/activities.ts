/* eslint-disable-next-line import/no-unresolved */
import database from '../data/senarai-db.json'
import { db } from '../utils/db.server'
import { getCategoryBySlug } from './categories'
import { NewContribution } from './contributions'
import { ACTIVITY_STATUS } from './enum'

export type Activities = Activity[]

export type Activity = {
  readonly id: number
  readonly usia: string
  readonly categorySlug: string
  readonly nama: string
  readonly slug: string
  readonly ringkasan: string
  readonly link: string
  readonly desa: string
  readonly kecamatan: string
  readonly kabupaten: string
  readonly provinsi: string
  readonly negara: string
  readonly benua: string
  readonly image?: string
}

// TODO: remove this when we have a real database
export const activities = database[0].data as unknown as Activities

export async function getAllContributions() {
  await new Promise(
    (
      resolve
      // reject
    ) => {
      setTimeout(resolve, 1500)
      //   setTimeout(() => reject(new Error()), 1000)
    }
  )
  const contributions = await db.activity.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      category: {
        select: {
          title: true,
          slug: true,
        },
      },
    },
  })

  return contributions
}

export async function createActivity({
  categorySlug,
  name,
  description,
  url,
}: NewContribution) {
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return null
  }

  const contribution = await db.activity.create({
    data: {
      categoryId: category.id,
      name,
      description,
      url,
      status: ACTIVITY_STATUS.DRAFT,
    },
  })

  return contribution
}

export async function getActivityById(activityId = '') {
  const activity = await db.activity.findFirst({
    where: {
      id: activityId,
    },
    include: {
      category: {
        select: {
          title: true,
          slug: true,
        },
      },
    },
  })

  return activity
}
