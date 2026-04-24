"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Search, 
  Bell, 
  Settings, 
  Plus, 
  Edit2, 
  Trash2, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export default function ProductsManagement() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto bg-[#FAFAFA] h-full rounded-r-2xl">
      
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-10 py-4 border-b border-gray-100 shadow-xs bg-[#FAFAFA] shrink-0">
        <div className="relative w-96">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search the collective..." 
            className="w-full bg-[#F3F4F6] text-sm rounded-md py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#133424]/20 transition-all placeholder:text-gray-400 font-medium border border-gray-300"
          />
        </div>
        <div className="flex items-center gap-5">
          <button className="text-gray-500 hover:text-gray-800"><Bell className="w-5 h-5" /></button>
          <button className="text-gray-500 hover:text-gray-800"><Settings className="w-5 h-5" /></button>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-gray-200 cursor-pointer shadow-sm">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="px-10 py-8 max-w-6xl w-full">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div className="max-w-xl">
            <h1 className="text-4xl font-serif text-[#133424] mb-3">Curated Products</h1>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Manage the collective catalog. Ensure all items align with our standard of restorative, premium wellness.
            </p>
          </div>
          <button className="bg-[#133424] hover:bg-[#0c2217] text-white py-2.5 px-5 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            Add New Product
          </button>
        </div>

        {/* Tabs & Filters */}
        <div className="flex justify-between items-center border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            <button className="pb-3 text-sm font-bold text-[#133424] border-b-2 border-[#133424]">ALL PRODUCTS</button>
            <button className="pb-3 text-sm font-bold text-gray-400 hover:text-gray-700">ACTIVE ONLY</button>
            <button className="pb-3 text-sm font-bold text-gray-400 hover:text-gray-700">DRAFTS</button>
          </div>
          <div className="pb-3 text-sm font-medium">
            <span className="text-gray-400">Sort by: </span>
            <span className="text-[#133424] font-bold cursor-pointer">Recently Added</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full p-2 group hover:shadow-md transition-shadow">
            {/* The Inset Image Wrapper */}
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#F4F5F7]">
              <div className="absolute top-3 left-3 z-10 bg-[#133424] text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wide shadow-sm">ACTIVE</div>
              <Image src="/images/oil.avif" alt="Serum" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Text Content */}
            <div className="px-3 pt-4 pb-2 flex flex-col flex-grow">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Aura Botanica</p>
              <h3 className="font-serif text-[#133424] text-[17px] leading-tight font-semibold mb-2">Restorative Night Serum</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">Skincare · Oils</p>
              <div className="mt-auto flex justify-end gap-3 text-gray-400 border-t border-gray-50 pt-4">
                <Edit2 className="w-4 h-4 cursor-pointer hover:text-[#133424] transition-colors" />
                <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full p-2 group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#F4F5F7]">
              <div className="absolute top-3 left-3 z-10 bg-[#133424] text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wide shadow-sm">ACTIVE</div>
              <Image src="/images/sheaButter.jpg" alt="Shea Butter" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="px-3 pt-4 pb-2 flex flex-col flex-grow">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Earth & Oak</p>
              <h3 className="font-serif text-[#133424] text-[17px] leading-tight font-semibold mb-2">Whipped Shea Butter</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">Body Care · Lotions</p>
              <div className="mt-auto flex justify-end gap-3 text-gray-400 border-t border-gray-50 pt-4">
                <Edit2 className="w-4 h-4 cursor-pointer hover:text-[#133424] transition-colors" />
                <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full p-2 group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#F4F5F7]">
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-gray-600 text-[10px] font-bold px-2 py-1 rounded-md tracking-wide shadow-sm">DRAFT</div>
              <Image src="/images/matcha.avif" alt="Matcha" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="px-3 pt-4 pb-2 flex flex-col flex-grow">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Ritual Teas</p>
              <h3 className="font-serif text-[#133424] text-[17px] leading-tight font-semibold mb-2">Ceremonial Grade Matcha</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">Nutrition · Beverages</p>
              <div className="mt-auto flex justify-end gap-3 text-gray-400 border-t border-gray-50 pt-4">
                <Edit2 className="w-4 h-4 cursor-pointer hover:text-[#133424] transition-colors" />
                <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full p-2 group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#F4F5F7]">
              <div className="absolute top-3 left-3 z-10 bg-[#133424] text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wide shadow-sm">ACTIVE</div>
              <Image src="/images/basalt.jpg" alt="Therapy Stones" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="px-3 pt-4 pb-2 flex flex-col flex-grow">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Zenith Spa</p>
              <h3 className="font-serif text-[#133424] text-[17px] leading-tight font-semibold mb-2">Basalt Therapy Stones</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">Equipment · Therapy</p>
              <div className="mt-auto flex justify-end gap-3 text-gray-400 border-t border-gray-50 pt-4">
                <Edit2 className="w-4 h-4 cursor-pointer hover:text-[#133424] transition-colors" />
                <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>

        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12 pb-8">
          <button className="p-1 text-gray-400 hover:text-gray-700"><ChevronLeft className="w-4 h-4" /></button>
          <button className="w-8 h-8 rounded-md bg-[#133424] text-white text-sm font-semibold flex items-center justify-center">1</button>
          <button className="w-8 h-8 rounded-md text-gray-500 hover:bg-gray-100 text-sm font-medium flex items-center justify-center">2</button>
          <button className="w-8 h-8 rounded-md text-gray-500 hover:bg-gray-100 text-sm font-medium flex items-center justify-center">3</button>
          <span className="text-gray-400 px-1">...</span>
          <button className="w-8 h-8 rounded-md text-gray-500 hover:bg-gray-100 text-sm font-medium flex items-center justify-center">8</button>
          <button className="p-1 text-gray-400 hover:text-gray-700"><ChevronRight className="w-4 h-4" /></button>
        </div>

      </div>
    </main>
  );
}