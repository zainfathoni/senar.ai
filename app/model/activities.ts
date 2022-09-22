/* eslint-disable-next-line import/no-unresolved */
import database from '../data/senarai-db.json'
import { db } from '../utils/db.server'

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
