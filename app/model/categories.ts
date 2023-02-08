import { Category } from '@prisma/client'
import {
  ChildReaching,
  School,
  SchoolFlag,
  BuildingColumns,
  GraduationCap,
  Briefcase,
  PeopleGroup,
  Family,
  PersonChalkboard,
} from '../icons/duotone'
import {
  ChildReaching as LChildReaching,
  School as LSchool,
  SchoolFlag as LSchoolFlag,
  BuildingColumns as LBuildingColumns,
} from '../icons/light'
import { db } from '../utils/db.server'

export type CategoriesWithIcon = CategoryWithIcon[]

export type CategoryWithIcon = {
  title: string
  slug: string
  description: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
  foregroundColor: string
  backgroundColor: string
}

export type CategoryWithoutMetadata = Omit<
  Category,
  'id' | 'createdAt' | 'updatedAt'
>

// TODO: migrate categories to the database
export const categories: CategoriesWithIcon = [
  {
    title: 'PAUD',
    slug: 'paud',
    icon: LChildReaching,
    description: 'Pendidikan Anak Usia Dini',
    foregroundColor: 'text-teal-700',
    backgroundColor: 'bg-teal-50',
  },
  {
    title: 'PAUD ke atas',
    slug: 'paud-ke-atas',
    description: 'Usia tiga tahun ke atas',
    icon: ChildReaching,
    foregroundColor: 'text-teal-700',
    backgroundColor: 'bg-teal-50',
  },
  {
    title: 'SD',
    slug: 'sd',
    description: 'Sekolah Dasar',
    icon: LSchool,
    foregroundColor: 'text-purple-700',
    backgroundColor: 'bg-purple-50',
  },
  {
    title: 'SD ke atas',
    slug: 'sd-ke-atas',
    description: 'Usia enam tahun ke atas',
    icon: School,
    foregroundColor: 'text-purple-700',
    backgroundColor: 'bg-purple-50',
  },
  {
    title: 'SMP',
    slug: 'smp',
    description: 'Sekolah Menengah Pertama',
    icon: LSchoolFlag,
    foregroundColor: 'text-sky-700',
    backgroundColor: 'bg-sky-50',
  },
  {
    title: 'SMP ke atas',
    slug: 'smp-ke-atas',
    description: 'Usia 12 tahun ke atas',
    icon: SchoolFlag,
    foregroundColor: 'text-sky-700',
    backgroundColor: 'bg-sky-50',
  },
  {
    title: 'SMA',
    slug: 'sma',
    description: 'Sekolah Menengah Atas',
    icon: LBuildingColumns,
    foregroundColor: 'text-yellow-700',
    backgroundColor: 'bg-yellow-50',
  },
  {
    title: 'SMA ke atas',
    slug: 'sma-ke-atas',
    description: 'Usia 15 tahun ke atas',
    icon: BuildingColumns,
    foregroundColor: 'text-yellow-700',
    backgroundColor: 'bg-yellow-50',
  },
  {
    title: 'Kuliah',
    slug: 'kuliah',
    description: 'Perguruan Tinggi',
    icon: GraduationCap,
    foregroundColor: 'text-indigo-700',
    backgroundColor: 'bg-indigo-50',
  },
  {
    title: 'Profesional',
    slug: 'profesional',
    description: 'Pekerja Profesional',
    icon: Briefcase,
    foregroundColor: 'text-rose-700',
    backgroundColor: 'bg-rose-50',
  },
  {
    title: 'Semua Usia',
    slug: 'semua-usia',
    description: 'Untuk semua kalangan',
    icon: PeopleGroup,
    foregroundColor: 'text-lime-700',
    backgroundColor: 'bg-lime-50',
  },
  {
    title: 'For Parents',
    slug: 'for-parents',
    description: 'Untuk dipelajari oleh orang tua',
    icon: Family,
    foregroundColor: 'text-emerald-700',
    backgroundColor: 'bg-emerald-50',
  },
]

export const categoriesRecord: Record<string, CategoryWithIcon> =
  categories.reduce((acc, category) => {
    acc[category.slug] = category
    return acc
  }, {} as Record<string, CategoryWithIcon>)

export const uncategorized: CategoryWithIcon = {
  title: 'Belum Terkategorikan',
  slug: 'belum-terkategorikan',
  description: 'Belum teridentifikasi untuk kategori usia tertentu',
  icon: PersonChalkboard,
  foregroundColor: 'text-amber-700',
  backgroundColor: 'bg-amber-50',
}

export const getCategoryByCategorySlug = (
  categorySlug = ''
): CategoryWithIcon => {
  return categoriesRecord[categorySlug] ?? uncategorized
}

export async function getAllCategories() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(resolve, 1000)
  //   setTimeout(() => reject(new Error()), 1000)
  // })
  const categories = await db.category.findMany({
    orderBy: {
      id: 'asc',
    },
  })

  return categories
}

export async function getCategoryBySlug(slug = uncategorized.slug) {
  const category = await db.category.findFirst({
    where: {
      slug,
    },
  })

  return category
}
