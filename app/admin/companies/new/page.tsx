"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Image as ImageIcon, Camera, CheckCircle2, Search, Bell } from 'lucide-react';

export default function RegisterPartnerPage() {
  return (
    <div className="flex flex-col h-full w-full">
      
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-10 mb-8 shrink-0 bg-[#F9FAFB] shadow-xs">
        <div className="relative w-72">
                  <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search entries..." 
                    className="w-full bg-[#F3F4F6] text-sm rounded-md py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#133424]/20 transition-all placeholder:text-gray-400 font-medium"
                  />
                </div>

        <div className="flex items-center gap-8 h-full">
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500 h-full">
            <span className="text-gray-800 cursor-pointer h-full flex items-center pt-0.5">Dashboard</span>
            <span className="cursor-pointer hover:text-gray-800 transition-colors h-full flex items-center pt-0.5">Activity Log</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
              <Bell size={20} className="text-[#0F3B21]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-gray-200 cursor-pointer">
              <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-10 pb-12 w-full max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            href="/admin/companies" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-3"
          >
            <ArrowLeft size={16} /> Back to Companies
          </Link>
          <h1 className="text-4xl font-serif text-[#0F3B21]">Register Partner</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-md shadow-sm p-8 md:p-10 mb-12">
          
          {/* Entity Details Section */}
          <section className="mb-12">
            <h2 className="text-xl font-serif text-[#0F3B21] mb-6">Entity Details</h2>
            
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Official Brand Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Aesop Skincare" 
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] transition-all placeholder:text-gray-400s"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Primary Domain
                </label>
                <div className="relative">
                  <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="https://www.example.com" 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Brand Assets Section */}
          <section>
            <h2 className="text-xl font-serif text-[#0F3B21] mb-6">Brand Assets</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  High-Resolution Logo (URL)
                </label>
                <p className="text-[11px] text-gray-500 mb-3">
                  Provide a direct link to a transparent PNG or SVG for optimal display on light surfaces.
                </p>
                <div className="relative">
                  <ImageIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="https://cdn.example.com/logo.png" 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Logo Preview Box */}
              <div className="w-full md:w-48 h-32 bg-[#E6E6E6] rounded-md border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                <Camera size={24} className="mb-2 opacity-60" />
                <span className="text-[11px] font-medium">Logo Preview</span>
              </div>
            </div>
          </section>

          {/* Actions Footer */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
            <Link href="/admin/companies">
              <button className="px-6 py-2.5 text-sm font-medium text-[#0F3B21] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </Link>
            <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0F3B21] rounded-lg hover:bg-[#0a2917] transition-colors">
              <CheckCircle2 size={16} /> Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}