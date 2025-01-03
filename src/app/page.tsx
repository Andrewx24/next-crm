import { Building2, Users, PieChart, Calendar, Quote, Trello } from 'lucide-react'
import { StatCard } from "@/components/dashboard/stat-card"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { SalesPipeline } from "@/components/dashboard/sales-pipeline"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={<Building2 className="w-6 h-6 text-blue-500" />}
          title="Total Companies"
          value="58"
          change={{ value: 18, period: "month" }}
          trend="neutral"
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-green-500" />}
          title="Total Contacts"
          value="1,286"
          change={{ value: 22, period: "month" }}
          trend="up"
        />
        <StatCard
          icon={<PieChart className="w-6 h-6 text-red-500" />}
          title="Deals in Pipeline"
          value="34"
          change={{ value: 8, period: "month" }}
          trend="down"
        />
        <StatCard
          icon={<Calendar className="w-6 h-6 text-purple-500" />}
          title="Upcoming Events"
          value="12"
          change={{ value: 5, period: "week" }}
          trend="up"
        />
        <StatCard
          icon={<Quote className="w-6 h-6 text-yellow-500" />}
          title="Open Quotes"
          value="8"
          change={{ value: 2, period: "week" }}
          trend="neutral"
        />
        <StatCard
          icon={<Trello className="w-6 h-6 text-indigo-500" />}
          title="Active Projects"
          value="15"
          change={{ value: 3, period: "month" }}
          trend="up"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesPipeline />
        <div className="space-y-6">
          <UpcomingEvents />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

