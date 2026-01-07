import { ReactNode } from 'react'

import { redirect } from 'next/navigation';

// import { auth } from '@clerk/nextjs'
// import { redirect } from 'next/navigation'
import { prismadb } from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: ReactNode
}) {
  const userId  = null;

  const store = await prismadb.store.findFirst();

  // const billboard = await prismadb.billboard.findFirst({
  //   where: {
  //     userId,
  //   },
  // })

  if (store) {
    redirect(`/${store.id}`)
  }

  return <>{children}</>
}
