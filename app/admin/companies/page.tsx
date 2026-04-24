"use client";

import React from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import Link from 'next/link';

export default function CompaniesDirectory() {
  const partners = [
    {
      id: 1,
      name: 'Aura Botanica',
      description: 'Est. 2018 • London',
      status: 'OFFICIAL PARTNER',
      products: 142,
      logoBg: 'bg-[#FDF3E7]',
      logoContent: <span className="text-[#2B4C3B] text-2xl">🌿</span>
    },
    {
      id: 2,
      name: 'Verdant Essence',
      description: 'Est. 2021 • Copenhagen',
      status: 'PENDING REVIEW',
      products: 18,
      logoBg: 'bg-[#2A5766]',
      logoContent: <span className="text-white text-xl font-serif">VE</span>
    },
    {
      id: 3,
      name: 'Sacred Clay',
      description: 'Est. 2015 • Sedona',
      status: 'OFFICIAL PARTNER',
      products: 64,
      logoBg: 'bg-[#CBEFDF]',
      logoContent: <span className="text-[#2B4C3B] text-lg font-medium font-serif">SC</span>
    }
  ];

  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Standard Page Navbar - Updated to px-10 and added shrink-0 to prevent flex issues */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-10 mb-8 shrink-0 bg-[#F9FAFB] shadow-xs">
        <div className="flex items-center gap-8">
          <h2 className="font-semibold text-gray-800">The Editorial Wellness Collective</h2>
          <div className="flex items-center gap-6 h-full text-sm font-medium pt-1">
            <div className="flex flex-col justify-center h-full relative cursor-pointer text-[#0F3B21]">
              <span>Dashboard</span>
              <div className="h-0.5 w-full bg-[#0F3B21] absolute bottom-0 rounded-t-md"></div>
            </div>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Activity Log</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <Bell size={20} className="text-[#0F3B21]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-gray-200 cursor-pointer shadow-sm">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area - Removed mx-auto for flush left alignment */}
      <div className="px-10 pb-12 w-full max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-serif text-[#0F3B21] mb-2">Partner Directory</h1>
            <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
              Manage the curated list of botanical and wellness partners. Maintain the integrity of our digital apothecary.
            </p>
          </div>
          <Link href="/admin/companies/new" className="flex items-center gap-2 px-5 py-2.5 bg-[#0F3B21] text-white rounded-lg text-sm font-medium hover:bg-[#0a2917] shadow-sm transition-colors">
            <Plus size={18} /> Add New Company
          </Link>
        </div>

        {/* Main Directory Container */}
        <div className="bg-[#E6E6E6] border border-gray-100 rounded-2xl p-6 shadow-inner">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-[1fr_200px_100px_100px] items-center mb-6 px-4 gap-4">
            
            <div className="relative max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search partners..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>
            
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
              Status
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
              Products
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">
              Actions
            </span>
            
          </div>

          {/* Directory Rows */}
          <div className="space-y-4">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow group"
              >
                <div className="grid grid-cols-[1fr_200px_100px_100px] items-center w-full gap-4">
                  
                  {/* 1. Logo & Name */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${partner.logoBg}`}>
                      {partner.logoContent}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-serif text-[#0F3B21] font-medium leading-snug">
                        {partner.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* 2. Status Badge */}
                  <div className="flex justify-center">
                    {partner.status === 'OFFICIAL PARTNER' ? (
                      <span className="bg-[#0F3B21] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Official Partner
                      </span>
                    ) : (
                      <span className="bg-[#E5E7EB] text-gray-500 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Pending Review
                      </span>
                    )}
                  </div>

                  {/* 3. Product Count */}
                  <div className="text-center text-gray-700 font-medium text-[15px]">
                    {partner.products}
                  </div>

                  {/* 4. Actions */}
                  <div className="flex items-center justify-end gap-3 text-gray-400">
                    <button className="p-1.5 hover:text-[#0F3B21] hover:bg-gray-50 rounded-md transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination Footer */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200/60 px-2">
            <p className="text-sm text-gray-500">
              Showing 1-3 of 42 partners
            </p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-400 hover:text-gray-800 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="p-1.5 text-gray-800 hover:text-gray-400 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}