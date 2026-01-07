'use client';

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const revenueData = [
  { month: 'Jan', revenue: 4200, orders: 140 },
  { month: 'Feb', revenue: 5200, orders: 168 },
  { month: 'Mar', revenue: 6100, orders: 198 },
  { month: 'Apr', revenue: 4800, orders: 156 },
  { month: 'May', revenue: 7300, orders: 224 },
  { month: 'Jun', revenue: 8200, orders: 248 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-500">
          Sales performance and revenue insights
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard title="Total Revenue" value="$36,800" />
        <KpiCard title="Total Orders" value="1,134" />
        <KpiCard title="Avg Order Value" value="$32.45" />
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.25}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Orders vs Revenue */}
      <Card>
        <CardHeader>
          <CardTitle>Orders vs Revenue</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                dataKey="revenue"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.2}
              />
              <Area
                dataKey="orders"
                stroke="#ec4899"
                fill="#ec4899"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- KPI CARD ---------- */

function KpiCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
