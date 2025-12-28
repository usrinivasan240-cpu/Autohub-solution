'use client';

import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, MessageCircle, 
  TrendingUp, ArrowUp, ArrowDown, MoreVertical,
  Eye, Mail, Phone, MapPin, Calendar
} from 'lucide-react';

const stats = [
  { 
    label: 'Total Leads', 
    value: '156', 
    change: '+12.5%', 
    trend: 'up', 
    icon: Users,
    color: 'bg-blue-500' 
  },
  { 
    label: 'Messages', 
    value: '1,234', 
    change: '+8.2%', 
    trend: 'up', 
    icon: MessageCircle,
    color: 'bg-green-500' 
  },
  { 
    label: 'Conversions', 
    value: '42', 
    change: '+15.3%', 
    trend: 'up', 
    icon: TrendingUp,
    color: 'bg-purple-500' 
  },
  { 
    label: 'Revenue', 
    value: '₹4.2L', 
    change: '-2.1%', 
    trend: 'down', 
    icon: LayoutDashboard,
    color: 'bg-orange-500' 
  },
];

const leads = [
  { id: 1, name: 'John Doe', email: 'john@techcorp.com', phone: '+91-98765-43210', company: 'TechCorp Solutions', status: 'NEW', source: 'Website', date: '2024-01-15', value: '₹29,990' },
  { id: 2, name: 'Priya Sharma', email: 'priya@startup.io', phone: '+91-98765-43211', company: 'Startup.io', status: 'CONTACTED', source: 'Referral', date: '2024-01-14', value: '₹7,999' },
  { id: 3, name: 'Amit Patel', email: 'amit@restaurant.com', phone: '+91-98765-43212', company: 'Foodie连锁', status: 'QUALIFIED', source: 'Google Ads', date: '2024-01-13', value: '₹24,990' },
  { id: 4, name: 'Sanjay Kumar', email: 'sanjay@hotel.com', phone: '+91-98765-43213', company: 'Grand Hotel', status: 'PROPOSAL', source: 'Website', date: '2024-01-12', value: '₹49,990' },
  { id: 5, name: 'Meera Reddy', email: 'meera@college.edu', phone: '+91-98765-43214', company: 'EduTech College', status: 'NEGOTIATION', source: 'LinkedIn', date: '2024-01-11', value: '₹99,990' },
];

const statusColors: Record<string, string> = {
  NEW: 'bg-green-100 text-green-700',
  CONTACTED: 'bg-blue-100 text-blue-700',
  QUALIFIED: 'bg-purple-100 text-purple-700',
  PROPOSAL: 'bg-yellow-100 text-yellow-700',
  NEGOTIATION: 'bg-orange-100 text-orange-700',
  WON: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
};

export default function AdminLeadsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Leads</h1>
          <p className="text-secondary-500">Manage and track your sales pipeline</p>
        </div>
        <button className="btn-primary">
          <Users className="w-5 h-5 mr-2" />
          Add New Lead
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-secondary-900">{stat.value}</h3>
            <p className="text-secondary-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-secondary-100 flex items-center justify-between">
          <h2 className="font-semibold text-secondary-900">All Leads</h2>
          <div className="flex items-center space-x-2">
            <select className="px-3 py-2 border border-secondary-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">All Status</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="QUALIFIED">Qualified</option>
              <option value="PROPOSAL">Proposal</option>
              <option value="NEGOTIATION">Negotiation</option>
            </select>
            <select className="px-3 py-2 border border-secondary-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">All Sources</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="google_ads">Google Ads</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-secondary-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-secondary-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-600 font-semibold">{lead.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900">{lead.name}</p>
                        <p className="text-sm text-secondary-500">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-secondary-900">{lead.company}</p>
                    <p className="text-sm text-secondary-500">{lead.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-secondary-600">{lead.source}</td>
                  <td className="px-6 py-4 font-semibold text-secondary-900">{lead.value}</td>
                  <td className="px-6 py-4 text-secondary-600">{lead.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-secondary-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-secondary-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-secondary-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-secondary-100 flex items-center justify-between">
          <p className="text-sm text-secondary-500">
            Showing 1-5 of 156 leads
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-secondary-200 rounded-lg text-sm text-secondary-600 hover:bg-secondary-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-secondary-200 rounded-lg text-sm text-secondary-600 hover:bg-secondary-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
