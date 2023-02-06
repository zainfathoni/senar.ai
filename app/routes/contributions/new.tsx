import { Category } from '@prisma/client'
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  json,
  defer,
} from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { ContributionFormFields } from '~/components/contribution-form-fields'
import { createActivity } from '~/model/activities'
import { getAllCategories } from '~/model/categories'
import { Handle } from '~/model/types'

export const handle: Handle = { name: 'Tambahkan Aktivitas Baru' }

export const loader: LoaderFunction = async () => {
  // const categories = await getAllCategories()
  const categoriesPromise = getAllCategories()

  return defer({
    // categories,
    categoriesPromise,
  })
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const categorySlug = form.get('category')
  const name = form.get('name')
  const description = form.get('description')
  const url = form.get('url')

  if (
    typeof categorySlug !== 'string' ||
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof url !== 'string'
  ) {
    return { formError: 'Form not submitted correctly.' }
  }

  const newActivity = {
    categorySlug,
    name,
    description,
    url,
  }
  const activity = await createActivity(newActivity)

  console.log(activity)
  if (!activity) {
    throw json({ newActivity })
  }

  return redirect(`/contributions/${activity.id}`)
}

export default function NewContribution() {
  const { categories, categoriesPromise } = useLoaderData<{
    categories?: Category[]
    categoriesPromise?: Promise<Category[]>
  }>()

  return (
    <div className="p-8 rounded-lg bg-white overflow-hidden shadow">
      <Form method="post" className="space-y-8 divide-y divide-gray-200">
        <ContributionFormFields
          categories={categories}
          categoriesPromise={categoriesPromise}
        />
      </Form>
    </div>
  )
}
