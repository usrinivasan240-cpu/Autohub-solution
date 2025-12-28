'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, MessageCircle, 
  Settings, LogOut, TrendingUp, 
  Bell, Search, ChevronDown, BarChart3
} from 'lucide-react';

const stats = [
  { label: 'Total Leads', value: '156', change: '+12%', icon: Users },
  { label: 'Messages', value: '1,234', change: '+8%', icon: MessageCircle },
  { label: 'Conversions', value: '42', change: '+15%', icon: TrendingUp },
  { label: 'Active Users', value: '89', change: '+5%', icon: BarChart3 },
];

const recentLeads = [
  { id: 1, name: 'John Doe', email: 'john@company.com', company: 'Tech Corp', status: 'NEW', date: '2 hours ago' },
  { id: 2, name: 'Priya Sharma', email: 'priya@startup.io', company: 'Startup.io', status: 'CONTACTED', date: '4 hours ago' },
  { id: 3, name: 'Amit Patel', email: 'amit@restaurant.com', company: 'Foodie连锁', status: 'QUALIFIED', date: '1 day ago' },
  { id: 4, name: 'Sanjay Kumar', email: 'sanjay@hotel.com', company: 'Grand Hotel', status: 'PROPOSAL', date: '2 days ago' },
];

const messages = [
  { id: 1, from: 'John Doe', message: 'Interested in WhatsApp automation for my business', time: '10:32 AM', unread: true },
  { id: 2, from: 'Priya Sharma', message: 'Can you share pricing details?', time: '9:15 AM', unread: true },
  { id: 3, from: 'Amit Patel', message: 'Thanks for the demo yesterday!', time: 'Yesterday', unread: false },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-secondary-100 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-secondary-900 text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-secondary-700">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <span className="font-heading font-bold text-xl">AutoHub</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'leads', icon: Users, label: 'Leads' },
            { id: 'messages', icon: MessageCircle, label: 'Messages' },
            { id: 'analytics', icon: BarChart3, label: 'Analytics' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-primary-500 text-white' 
                  : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-secondary-700">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-secondary-300 hover:bg-secondary-800 hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg"
            >
              <Settings className="w-5 h-5" />
            </button>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-secondary-900">Admin User</p>
                <p className="text-xs text-secondary-500">admin@autohub.in</p>
              </div>
              <ChevronDown className="w-4 h-4 text-secondary-500" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-secondary-900">Dashboard</h1>
            <p className="text-secondary-500">Welcome back! Here's your overview.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-3xl font-bold text-secondary-900">{stat.value}</h3>
                <p className="text-secondary-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Leads */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-secondary-100 flex items-center justify-between">
                <h2 className="font-semibold text-secondary-900">Recent Leads</h2>
                <Link href="/admin/leads" className="text-primary-500 text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="divide-y divide-secondary-100">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="px-6 py-4 flex items-center justify-between hover:bg-secondary-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary-500" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900">{lead.name}</p>
                        <p className="text-sm text-secondary-500">{lead.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        lead.status === 'NEW' ? 'bg-green-100 text-green-700' :
                        lead.status === 'CONTACTED' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'QUALIFIED' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {lead.status}
                      </span>
                      <p className="text-xs text-secondary-400 mt-1">{lead.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-secondary-100 flex items-center justify-between">
                <h2 className="font-semibold text-secondary-900">Recent Messages</h2>
                <Link href="/admin/messages" className="text-primary-500 text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="divide-y divide-secondary-100">
                {messages.map((msg) => (
                  <div key={msg.id} className="px-6 py-4 hover:bg-secondary-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                          <p className="font-medium text-secondary-900 flex items-center gap-2">
                            {msg.from}
                            {msg.unread && (
                              <span className="w-2 h-2 bg-primary-500 rounded-full" />
                            )}
                          </p>
                          <p className="text-sm text-secondary-500 truncate max-w-xs">{msg.message}</p>
                        </div>
                      </div>
                      <span className="text-xs text-secondary-400">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
