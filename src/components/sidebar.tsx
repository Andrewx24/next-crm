'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, Trello, PieChart, Building2, Users, Quote, Settings, Zap } from 'lucide-react';

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Calendar", icon: Calendar, href: "/calendar" },
  { name: "Scrumboard", icon: Trello, href: "/scrumboard" },
  { name: "Sales Pipeline", icon: PieChart, href: "/sales-pipeline" },
  { name: "Companies", icon: Building2, href: "/companies" },
  { name: "Contacts", icon: Users, href: "/contacts" },
  { name: "Quotes", icon: Quote, href: "/quotes" },
  { name: "Administration", icon: Settings, href: "/administration" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col overflow-y-auto">
      <div className="flex items-center gap-2 px-2 mb-8">
        <Zap className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-semibold">Advanced CRM</span>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : ""}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}