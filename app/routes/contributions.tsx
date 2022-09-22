import type { Activity } from '@prisma/client'
import { Outlet } from '@remix-run/react'
import { PageLayout } from '../components/page-layout'

export const handle = 'Kontribusi'

export type ContributionsContextType = {
  contributions: Omit<Activity, 'createdAt' | 'updatedAt'>[]
}

export default function Contributions() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}
