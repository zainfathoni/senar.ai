import { Activity, Category } from '@prisma/client'
import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Card, CardContainer } from '~/components/card'
import { getAllContributions } from '~/model/activities'
import { getCategoryByCategorySlug } from '~/model/categories'

type Contributions = Array<Activity & { category: Category }>

export const meta: MetaFunction = () => ({
  title: 'Senarai | Semua Kontribusi',
})

export const loader: LoaderFunction = async () => {
  // TODO: requireAuth to see all contribution submissions
  // TODO: redirect to `/new` if the user is not authenticated

  const contributions = await getAllContributions()

  return json(
    { contributions },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    }
  )
}

export default function ContributionsIndex() {
  const { contributions } = useLoaderData<{
    contributions: Contributions
  }>()

  return (
    <CardContainer>
      {contributions?.map(
        ({ id, name, description, url, category: { title, slug } }) => {
          const { icon, foregroundColor, backgroundColor } =
            getCategoryByCategorySlug(slug)
          return (
            <Card
              key={id}
              name={name}
              cta="Kunjungi"
              link={url}
              secondaryCta="Koreksi"
              secondaryLink="#"
              description={description}
              category={title}
              categorySlug={slug}
              icon={icon}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
            />
          )
        }
      )}
    </CardContainer>
  )
}
