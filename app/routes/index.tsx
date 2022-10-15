import { Category } from '@prisma/client'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import * as React from 'react'
import { ActionCards } from '../components/action-cards'
import { PageLayout } from '../components/page-layout'
import { categoriesStyleMap, getAllCategories } from '../model/categories'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const keyword = url.searchParams.get('keyword')

  console.log(keyword)

  const categories = await getAllCategories()

  const filteredCategories = categories.filter((category) => {
    if (keyword) {
      return (
        category.title.toLowerCase().includes(keyword.toLowerCase()) ||
        category.description.toLowerCase().includes(keyword.toLowerCase())
      )
    } else {
      return true
    }
  })

  return json({ keyword, categories: filteredCategories })
}

export default function Index() {
  const { keyword: initialKeyword, categories } = useLoaderData<{
    keyword: string
    categories: Category[]
  }>()

  const categoriesWithIcon = categories.map((category) => ({
    ...category,
    ...categoriesStyleMap[category.slug],
  }))

  return (
    <PageLayout keyword={initialKeyword} searchMode="server">
      <ActionCards categories={categoriesWithIcon} />
    </PageLayout>
  )
}
