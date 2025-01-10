"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import dynamic from 'next/dynamic'

const data = [
  { stage: "Lead", value: 200 },
  { stage: "Qualified", value: 150 },
  { stage: "Proposal", value: 100 },
  { stage: "Negotiation", value: 50 },
  { stage: "Closed Won", value: 30 },
]

function SalesPipelineComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="stage" />
            <YAxis />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default dynamic(() => Promise.resolve(SalesPipelineComponent), {
  ssr: false
})