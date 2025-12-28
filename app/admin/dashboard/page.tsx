'use client';

import { FaUsers, FaEnvelope, FaDollarSign, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FaUsers className="text-white text-xl" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">127</div>
            <div className="text-gray-600">Total Leads</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-gray-600">New Messages</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaDollarSign className="text-white text-xl" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$12.5k</div>
            <div className="text-gray-600">Monthly Revenue</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-white text-xl" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">45</div>
            <div className="text-gray-600">Active Clients</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Leads</h2>
            <div className="text-gray-600">
              <p className="mb-4">Lead management coming soon...</p>
              <p className="text-sm">
                This dashboard is a placeholder. Implement full CRUD operations for leads, services, pricing, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                View All Leads
              </button>
              <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                Manage Services
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                Update Pricing
              </button>
              <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
