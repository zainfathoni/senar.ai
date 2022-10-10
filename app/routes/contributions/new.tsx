import { Category } from '@prisma/client'
import { ActionFunction, LoaderFunction, redirect, json } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { PrimaryButton } from '~/components/button'
import { SecondaryButtonLink } from '~/components/button-link'
import { Input, Instruction, Label } from '~/components/form-elements'
import { createActivity } from '~/model/activities'
import { getAllCategories } from '~/model/categories'
import { Handle } from '~/model/types'

type Categories = Array<Category>

export const handle: Handle = { name: 'Tambahkan Aktivitas Baru' }

export const loader: LoaderFunction = async () => {
  const categories = await getAllCategories()

  return json({ categories })
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
  const { categories } = useLoaderData<{ categories: Categories }>()

  return (
    <div className="p-8 rounded-lg bg-white overflow-hidden shadow">
      <Form method="post" className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Aktivitas
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Usulkan aktivitas baru yang menurut Anda layak atau menarik.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <Label htmlFor="category">Kategori Usia</Label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <Input
                    type="select"
                    id="category"
                    name="category"
                    className="sm:max-w-xs"
                  >
                    {categories.map(({ id, title, slug }) => (
                      <option key={id} value={slug}>
                        {title}
                      </option>
                    ))}
                  </Input>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <Label htmlFor="name">Nama Kegiatan</Label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <Input name="name" id="name" className="sm:max-w-xs" />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <Label htmlFor="description">Ringkasan</Label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <Input
                    type="textarea"
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={''}
                    aria-describedby="description-hint"
                  />
                  <Instruction id="description-hint">
                    Tuliskan deskripsi ringkas mengenai aktivitas yang Anda
                    usulkan.
                  </Instruction>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <Label htmlFor="url">Link</Label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      autoComplete="url"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <Instruction>Cantumkan jika ada.</Instruction>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <SecondaryButtonLink to="/">Batal</SecondaryButtonLink>
            <PrimaryButton type="submit">Simpan</PrimaryButton>
          </div>
        </div>
      </Form>
    </div>
  )
}
