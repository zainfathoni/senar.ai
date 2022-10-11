import { Activity } from '@prisma/client'
import { json, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Card, CardContainer } from '~/components/card'
import { getActivityById } from '~/model/activities'
import { getCategoryByCategorySlug } from '~/model/categories'

export const loader: LoaderFunction = async ({ params }) => {
  const { activityId } = params

  const activity = await getActivityById(activityId)

  if (!activity) {
    return redirect('/contributions/new')
  }

  return json({ activity })
}

export default function ViewContribution() {
  const { activity } = useLoaderData<{
    activity: Activity & {
      category: {
        title: string
        slug: string
      }
    }
  }>()
  const { icon, foregroundColor, backgroundColor } = getCategoryByCategorySlug(
    activity.category.slug
  )
  return (
    <CardContainer>
      <Card
        name={activity.name}
        cta="Kunjungi"
        link={activity.url}
        secondaryCta="Koreksi"
        secondaryLink="#"
        description={activity.description}
        category={activity.category.title}
        categorySlug={activity.category.slug}
        icon={icon}
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
      />
    </CardContainer>
  )
}
