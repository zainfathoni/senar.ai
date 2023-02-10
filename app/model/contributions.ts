import { CategoryWithoutMetadata } from './categories'

export type NewContribution = {
  categorySlug: string
  name: string
  description: string
  url: string
}

export type Contribution = NewContribution & {
  id: string
  category: CategoryWithoutMetadata
}
