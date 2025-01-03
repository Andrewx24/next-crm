import Link from "next/link"
import { LayoutDashboard, Calendar, Trello, PieChart, Building2, Users, Quote, Settings, Zap } from 'lucide-react'

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Calendar", icon: Calendar, href: "/calendar" },
  { name: "Scrumboard", icon: Trello, href: "/scrumboard" },
  { name: "Sales Pipeline", icon: PieChart, href: "/sales-pipeline" },
  { name: "Companies", icon: Building2, href: "/companies" },
  { name: "Contacts", icon: Users, href: "/contacts" },
  { name: "Quotes", icon: Quote, href: "/quotes" },
  { name: "Administration", icon: Settings, href: "/administration" },
]

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 mb-8">
        <Zap className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-semibold">Advanced CRM</span>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

