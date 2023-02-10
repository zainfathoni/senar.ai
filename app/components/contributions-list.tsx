import { Await } from '@remix-run/react'
import { Suspense } from 'react'
import { Card, CardContainer } from './card'
import { getCategoryByCategorySlug, uncategorized } from '~/model/categories'
import { Contribution } from '~/model/contributions'

export type ContributionListProps = {
  contributions?: Contribution[]
  contributionsPromise?: Promise<Contribution[]>
}

const ContributionCards = ({
  contributions,
}: {
  contributions: Contribution[]
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

export function ContributionsList({
  contributions,
  contributionsPromise,
}: ContributionListProps) {
  return (
    <CardContainer>
      {contributions ? (
        <ContributionCards contributions={contributions} />
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
              <ContributionCards contributions={promisedContributions ?? []} />
            )}
          </Await>
        </Suspense>
      )}
    </CardContainer>
  )
}
