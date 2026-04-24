"use client";

import React from 'react';
import { Plus, Bell, User } from 'lucide-react';
import Link from 'next/link';

// Mock data based on your screenshots
const CATEGORIES = [
  {
    id: 1,
    name: 'Beauty',
    productsCount: 124,
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Immunity',
    productsCount: 86,
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Fitness',
    productsCount: 215,
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Nutrition',
    productsCount: 0,
    status: 'DRAFT',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop',
  },
];

export default function CategoriesPage() {
  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Editorial Navbar */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-10 mb-10 bg-[#F9FAFB] shrink-0 shadow-sm">
        <div className="flex items-center gap-8">
          <h2 className="font-bold text-[#0F3B21] text-[15px]">The Editorial Wellness Collective</h2>
          <div className="flex items-center gap-6 h-full text-sm font-medium pt-1">
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Dashboard</span>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Activity Log</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <Bell size={20} className="text-gray-600 hover:text-gray-900 transition-colors" />
          </div>
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm overflow-hidden">
            <User size={16} />
          </div>
        </div>
      </header>

      {/* Main Content - Removed mx-auto, matching px-10 padding with header */}
      <div className="px-10 w-full max-w-7xl pb-12">
        
        {/* Page Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-[40px] leading-tight text-[#0F3B21] font-serif mb-3">
              Categories
            </h1>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Curate and manage the taxonomies that define our wellness ecosystem. Ensure
              each pillar aligns with the overarching narrative.
            </p>
          </div>
          
          <Link href="/admin/categories/new" className="bg-[#0F3B21] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-[#0a2917] transition-colors whitespace-nowrap shadow-sm mt-2 md:mt-0">
            <Plus size={18} /> New Category
          </Link>
        </div>

        {/* Main Content Container (The light gray rounded area) */}
        <div className="bg-[#E6E6E6] rounded-[32px] p-8 min-h-[500px]">
          
          {/* Responsive Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow cursor-pointer group"
              >
                {/* Image Container with Badge */}
                <div className="relative w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden bg-gray-100">
                  {/* Status Badge */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-bold px-3 py-1.5 rounded-md text-gray-700 tracking-wide z-10 shadow-sm">
                    {category.status}
                  </span>
                  
                  {/* Category Image */}
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Card Text content */}
                <div className="px-1">
                  <h3 className="font-serif text-[22px] text-[#0F3B21] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium">
                    {category.productsCount} Products curated
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}