import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { stage: "Lead", value: 200 },
  { stage: "Qualified", value: 150 },
  { stage: "Proposal", value: 100 },
  { stage: "Negotiation", value: 50 },
  { stage: "Closed Won", value: 30 },
]

export function SalesPipeline() {
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

