import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { defer } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {
  Contribution,
  ContributionsList,
} from '~/components/contributions-list'
import { getAllContributions } from '~/model/activities'

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

export default function ContributionsIndex() {
  const { contributions, contributionsPromise } = useLoaderData<{
    contributions?: Contribution[]
    contributionsPromise?: Promise<Contribution[]>
  }>()

  return (
    <ContributionsList
      contributions={contributions}
      contributionsPromise={contributionsPromise as Promise<Contribution[]>}
    />
  )
}
