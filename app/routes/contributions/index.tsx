import { Activity } from '@prisma/client'
import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getAllContributions } from '~/model/activities'

export const meta: MetaFunction = () => ({
  title: 'Senarai | Semua Kontribusi',
})

export const loader: LoaderFunction = async () => {
  // TODO: requireAuth to see all contribution submissions

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
    contributions: Activity[]
  }>()
  console.log(contributions)

  return (
    <ul>
      {contributions?.map((contribution) => (
        <li key={contribution.id}>{contribution.name}</li>
      ))}
    </ul>
  )
}
