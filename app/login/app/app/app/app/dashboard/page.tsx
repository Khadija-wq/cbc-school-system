'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { Users, GraduationCap, Target, Wallet, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
    redirect('/login')
  }

  // Data for charts
  const competencyData = [
    { name: 'Exceeding (EE)', value: 45, color: '#10B981' },
    { name: 'Meeting (ME)', value: 35, color: '#3B82F6' },
    { name: 'Approaching (AE)', value: 15, color: '#F59E0B' },
    { name: 'Below (BE)', value: 5, color: '#EF4444' },
  ]

  const weeklyPerformance = [
    { day: 'Mon', meeting: 65, exceeding: 25, approaching: 8, below: 2 },
    { day: 'Tue', meeting: 68, exceeding: 27, approaching: 4, below: 1 },
    { day: 'Wed', meeting: 70, exceeding: 28, approaching: 2, below: 0 },
    { day: 'Thu', meeting: 72, exceeding: 30, approaching: 2, below: 0 },
    { day: 'Fri', meeting: 75, exceeding: 32, approaching: 1, below: 0 },
  ]

  const recentActivities = [
    { id: 1, student: 'James Mwangi', action: 'Completed Assessment', competency: 'Critical Thinking', level: 'ME', time: '2 hours ago' },
    { id: 2, student: 'Amina Hassan', action: 'Portfolio Updated', competency: 'Creativity', level: 'EE', time: '3 hours ago' },
    { id: 3, student: 'Brian Otieno', action: 'Attendance Marked', competency: 'Self-Efficacy', level: 'AE', time: '5 hours ago' },
    { id: 4, student: 'Cynthia Wanjiku', action: 'Fee Payment', competency: '-', level: '-', time: '1 day ago' },
    { id: 5, student: 'David Omondi', action: 'Report Card Generated', competency: 'All Areas', level: 'ME', time: '1 day ago' },
  ]

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="ml-64 flex-1 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Welcome back, {session?.user?.name || 'Administrator'}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600">Term 1, 2026</p>
                  <p className="text-xs text-green-600">Week 8 of 14</p>
                </div>
                <div className="relative">
                  <button className="relative p-2 text-gray-400 hover:text-gray-600">
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-primary hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Learners</p>
                  <p className="text-3xl font-bold text-gray-800">1,247</p>
                  <p className="text-green-600 text-sm mt-2">↑ 12% from last term</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="text-primary" size={28} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-secondary hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Teachers</p>
                  <p className="text-3xl font-bold text-gray-800">86</p>
                  <p className="text-green-600 text-sm mt-2">4 new this term</p>
                </div>
                <div className="bg-secondary/10 p-3 rounded-full">
                  <GraduationCap className="text-secondary" size={28} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Attendance Rate</p>
                  <p className="text-3xl font-bold text-gray-800">94%</p>
                  <p className="text-green-600 text-sm mt-2">↑ 5% from yesterday</p>
                </div>
                <div className="bg-yellow-500/10 p-3 rounded-full">
                  <CheckCircle className="text-yellow-500" size={28} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Fee Collection</p>
                  <p className="text-3xl font-bold text-gray-800">87%</p>
                  <p className="text-yellow-600 text-sm mt-2">KES 2.4M outstanding</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Wallet className="text-purple-500" size={28} />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Competency Distribution Pie Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Competency Distribution</h2>
                <select className="text-sm border rounded-lg px-2 py-1">
                  <option>All Classes</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                  <option>Grade 6</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={competencyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {competencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div><span className="text-sm">Exceeding (EE)</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-sm">Meeting (ME)</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div><span className="text-sm">Approaching (AE)</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><span className="text-sm">Below (BE)</span></div>
              </div>
            </div>

            {/* Weekly Performance Line Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Performance Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="exceeding" stroke="#10B981" name="Exceeding (EE)" strokeWidth={2} />
                  <Line type="monotone" dataKey="meeting" stroke="#3B82F6" name="Meeting (ME)" strokeWidth={2} />
                  <Line type="monotone" dataKey="approaching" stroke="#F59E0B" name="Approaching (AE)" strokeWidth={2} />
                  <Line type="monotone" dataKey="below" stroke="#EF4444" name="Below (BE)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activities Table */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
            </div>
            <div className="divide-y">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.level === 'EE' ? 'bg-green-100' :
                      activity.level === 'ME' ? 'bg-blue-100' :
                      activity.level === 'AE' ? 'bg-yellow-100' :
                      'bg-gray-100'
                    }`}>
                      {activity.level === 'EE' && <TrendingUp size={20} className="text-green-600" />}
                      {activity.level === 'ME' && <CheckCircle size={20} className="text-blue-600" />}
                      {activity.level === 'AE' && <AlertCircle size={20} className="text-yellow-600" />}
                      {activity.level === '-' && <Wallet size={20} className="text-gray-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{activity.student}</p>
                      <p className="text-sm text-gray-500">{activity.action} - {activity.competency}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {activity.level !== '-' && (
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        activity.level === 'EE' ? 'bg-green-100 text-green-700' :
                        activity.level === 'ME' ? 'bg-blue-100 text-blue-700' :
                        activity.level === 'AE' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {activity.level}
                      </span>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
