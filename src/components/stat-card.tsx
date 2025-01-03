import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string
  change: {
    value: number
    period: string
  }
  trend: "up" | "down" | "neutral"
  className?: string
}

export function StatCard({ icon, title, value, change, trend, className }: StatCardProps) {
  const trendColor = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-blue-600"
  }[trend]

  return (
    <Card className={cn("bg-white", className)}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {icon}
          <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold">{value}</p>
          <div className={cn("text-sm flex items-center gap-1", trendColor)}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
            {change.value}% /{change.period}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

