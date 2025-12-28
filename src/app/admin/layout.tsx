'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, MessageCircle, 
  Settings, LogOut, TrendingUp, 
  Bell, Search, ChevronDown, BarChart3,
  CreditCard, FileText, Globe
} from 'lucide-react';

const navigation = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { id: 'leads', icon: Users, label: 'Leads', href: '/admin/leads' },
  { id: 'messages', icon: MessageCircle, label: 'Messages', href: '/admin/messages' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { id: 'services', icon: Globe, label: 'Services', href: '/admin/services' },
  { id: 'pricing', icon: CreditCard, label: 'Pricing', href: '/admin/pricing' },
  { id: 'content', icon: FileText, label: 'Content', href: '/admin/content' },
  { id: 'settings', icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-secondary-100 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-secondary-900 text-white transition-all duration-300 flex flex-col fixed h-full`}>
        {/* Logo */}
        <div className="p-4 border-b border-secondary-700">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <span className="font-heading font-bold text-xl">AutoHub Admin</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href || pathname.startsWith(item.href + '/')
                  ? 'bg-primary-500 text-white' 
                  : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
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

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg"
            >
              <Settings className="w-5 h-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                placeholder="Search leads, messages..."
                className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-80"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-secondary-900">Admin</p>
                <p className="text-xs text-secondary-500">admin@autohub.in</p>
              </div>
              <ChevronDown className="w-4 h-4 text-secondary-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
