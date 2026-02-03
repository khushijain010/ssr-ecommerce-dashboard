import { ReactNode } from 'react'

import { auth } from '@clerk/nextjs'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/components/navbar'
import prismadb from '@/lib/prismadb'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  })

  if (!store) {
  const headersList = headers()
  const pathname = headersList.get('x-pathname')

  // redirect ONLY if user is already inside dashboard route
  if (pathname?.startsWith(`/${params.storeId}`)) {
    redirect('/')
  }

  // otherwise, do nothing (let / handle store creation)
  return null
}


  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
