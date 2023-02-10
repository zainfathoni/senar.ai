import { CategoryWithoutMetadata } from './categories'

export type NewContribution = {
  categorySlug: string
  name: string
  description: string
  url: string
}

export type Contribution = Omit<NewContribution, 'categorySlug'> & {
  id: string
  category: CategoryWithoutMetadata
}
