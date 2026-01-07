import Link from "next/link"

import prismadb from '@/lib/prismadb'

import { ProductForm } from './components/product-form'


const ProductPage = async ({
  params,
}: {
  params: {
    productId: string
    storeId: string
  }
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  })

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  })

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  })

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  })

  if (categories.length === 0) {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="text-center space-y-3">
        <h2 className="text-xl font-semibold">
          Create a category first
        </h2>
        <p className="text-muted-foreground">
          Products must belong to a category.
        </p>
        <Link
          href={`/${params.storeId}/categories/new`}
          className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md"
        >
          Create Category
        </Link>
      </div>
    </div>
  )
}

}

export default ProductPage
