import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import prismadb from '@/lib/prismadb'

export default async function RootPage() {
  const { userId } = auth()

  // Not logged in → go to sign-in
  if (!userId) {
    redirect('/sign-in')
  }

  // Check if user already has a store
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  })

  // Store exists → go to dashboard
  if (store) {
    redirect(`/${store.id}`)
  }

  // No store → stay on `/`
  // Client modal page will handle UI
  return null
}
