import { Activity } from '@prisma/client'
import { json, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getActivityById } from '~/model/activities'

export const loader: LoaderFunction = async ({ params }) => {
  const { activityId } = params

  const activity = await getActivityById(activityId)

  if (!activity) {
    return redirect('/contributions/new')
  }

  return json({ activity })
}

export default function ViewContribution() {
  const { activity } = useLoaderData<{ activity: Activity }>()
  return <div>{JSON.stringify(activity)}</div>
}
