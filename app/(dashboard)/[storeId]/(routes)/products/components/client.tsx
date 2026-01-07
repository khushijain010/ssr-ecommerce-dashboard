'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { ApiList } from '@/components/ui/api-list'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { columns, ProductColumn } from './columns'

interface ProductClientProps {
  data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage your product catalog, pricing, and availability."
        />

        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="bg-indigo-600 hover:bg-indigo-700" />
          Add Product
        </Button>
      </div>

      <Separator />
      {data.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No products yet. Start by adding your first product.
        </div>
      )}


      <DataTable columns={columns} data={data} searchKey="name" />

      <Heading
        title="API"
        description="Use this API to get the products for your store."
      />
      <Separator />

      <ApiList entityName="products" entityIdName="productId" />
    </>
  )
}
