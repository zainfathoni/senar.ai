import { Activity, Category } from '@prisma/client'
import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { defer } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'
import { Card, CardContainer } from '~/components/card'
import { getAllContributions } from '~/model/activities'
import { getCategoryByCategorySlug, uncategorized } from '~/model/categories'

type Contributions = Array<Activity & { category: Category }>

export const meta: MetaFunction = () => ({
  title: 'Senarai | Semua Kontribusi',
})

export const loader: LoaderFunction = async () => {
  // TODO: requireAuth to see all contribution submissions
  // TODO: redirect to `/new` if the user is not authenticated

  const contributions = await getAllContributions()
  // const contributionsPromise = getAllContributions()

  return defer(
    {
      contributions,
      // contributionsPromise,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    }
  )
}

const ContributionCards = ({
  contributions,
}: {
  contributions: Contributions
}) => (
  <>
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
  </>
)

const PlaceholderCards = ({
  name,
  description,
}: {
  name: string
  description: string
}) => (
  <>
    {Array.from(Array(4)).map((_, index) => (
      <Card
        key={index}
        name={name}
        description={description}
        icon={uncategorized.icon}
        category={uncategorized.title}
        categorySlug={uncategorized.slug}
        foregroundColor={uncategorized.foregroundColor}
        backgroundColor={uncategorized.backgroundColor}
      />
    ))}
  </>
)

export default function ContributionsIndex() {
  const { contributions, contributionsPromise } = useLoaderData<{
    contributions?: Contributions
    contributionsPromise?: Promise<Contributions>
  }>()

  return (
    <CardContainer>
      {contributions ? (
        <ContributionCards
          contributions={contributions as unknown as Contributions}
        />
      ) : (
        <Suspense
          fallback={
            <PlaceholderCards
              name={'Memuat'}
              description={'Sedang memuat aktivitas...'}
            />
          }
        >
          <Await
            resolve={contributionsPromise}
            errorElement={
              <PlaceholderCards
                name={'Gagal'}
                description={'Gagal memuat aktivitas!'}
              />
            }
          >
            {(promisedContributions) => (
              <ContributionCards
                contributions={
                  promisedContributions as unknown as Contributions
                }
              />
            )}
          </Await>
        </Suspense>
      )}
    </CardContainer>
  )
}
