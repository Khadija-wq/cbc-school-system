'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, BookOpen, Target, BarChart3, Calendar, Wallet, FileText, MessageSquare, Settings, Home } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Learners', href: '/learners', icon: Users },
  { name: 'CBC Assessments', href: '/assessments', icon: Target },
  { name: 'Competencies', href: '/competencies', icon: BarChart3 },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Fees', href: '/fees', icon: Wallet },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-blue-800 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-blue-700">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white">CBC</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">CBC School Hub</h1>
            <p className="text-xs text-blue-200">Kenya CBC System</p>
          </div>
        </div>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-6 py-3 text-sm transition ${isActive ? 'bg-blue-700 border-l-4 border-green-500' : 'hover:bg-blue-700'}`}>
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
