import { CreditCard, DollarSign, Package } from "lucide-react";
import Link from "next/link";

import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { Overview } from "@/components/overview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);
  const billboardCount = await prismadb.billboard.count({
    where: { storeId: params.storeId },
  });

  const categoryCount = await prismadb.category.count({
    where: { storeId: params.storeId },
  });

  const productCount = await prismadb.product.count({
    where: { storeId: params.storeId },
  });

  const isNewStore =
    billboardCount === 0 || categoryCount === 0 || productCount === 0;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {isNewStore && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-1">
              Welcome! Let’s set up your store 🚀
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Complete these steps to start selling products.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <Link
                href={`/${params.storeId}/billboards/new`}
                className="rounded-lg border bg-white p-4 hover:shadow transition"
              >
                <p className="font-medium">1. Create Billboard</p>
                <p className="text-sm text-muted-foreground">
                  Used to display categories
                </p>
              </Link>

              <Link
                href={`/${params.storeId}/categories/new`}
                className="rounded-lg border bg-white p-4 hover:shadow transition"
              >
                <p className="font-medium">2. Create Category</p>
                <p className="text-sm text-muted-foreground">
                  Organize your products
                </p>
              </Link>

              <Link
                href={`/${params.storeId}/products/new`}
                className="rounded-lg border bg-white p-4 hover:shadow transition"
              >
                <p className="font-medium">3. Add Product</p>
                <p className="text-sm text-muted-foreground">Start selling</p>
              </Link>
            </div>
          </div>
        )}
        <div className={isNewStore ? "mt-8" : ""} />


        <Heading title="Dashboard" description="Welcome to your dashboard" />
        <Separator />

        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {formatter.format(totalRevenue)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">+{salesCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Products In Stock
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{stockCount}</div>
            </CardContent>
          </Card>
          {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mt-10 mb-4">
            <span className="h-px flex-1 bg-slate-200" />
            <span>STORE SETUP</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div> */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-slate-50 transition">
                <div>
                  <p className="font-medium">Create a Billboard</p>
                  <p className="text-sm text-muted-foreground">
                    Required to show categories on your store
                  </p>
                </div>
                <Link href={`/${params.storeId}/billboards/new`}>
                  <Button size="sm">Create</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-slate-50 transition">
                <div>
                  <p className="font-medium">Create a Category</p>
                  <p className="text-sm text-muted-foreground">
                    Products must belong to a category
                  </p>
                </div>
                <Link href={`/${params.storeId}/categories/new`}>
                  <Button size="sm">Create</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-slate-50 transition">
                <div>
                  <p className="font-medium">Add your first Product</p>
                  <p className="text-sm text-muted-foreground">
                    Start selling once setup is complete
                  </p>
                </div>
                <Link href={`/${params.storeId}/products/new`}>
                  <Button size="sm">Add</Button>
                </Link>
              </div>
            </CardContent>
          </Card> */}
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>

          <CardContent className="pl-2">
            <Overview data={graphRevenue} />
          </CardContent>
        </Card>
        {/* <Card className="mt-8">
          <CardHeader>
            <CardTitle>Store Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>1. Create a Billboard</span>
              <Link href={`/${params.storeId}/billboards/new`}>
                <Button size="sm">Create</Button>
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <span>2. Create a Category</span>
              <Link href={`/${params.storeId}/categories/new`}>
                <Button size="sm">Create</Button>
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <span>3. Add your first Product</span>
              <Link href={`/${params.storeId}/products/new`}>
                <Button size="sm">Add Product</Button>
              </Link> */}
            {/* </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default DashboardPage;
