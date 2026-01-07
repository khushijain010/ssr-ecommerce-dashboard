'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface OverviewProps {
  data: any[]
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {

  if (!data || data.length === 0) {
    return (
      <div className="flex h-[350px] items-center justify-center rounded-md border border-dashed">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            No sales yet
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Revenue will appear here once customers place orders
          </p>
        </div>
      </div>
    )}

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />

        <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
