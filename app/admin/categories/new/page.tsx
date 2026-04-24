"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Image as ImageIcon, Save, Bell, Settings } from 'lucide-react';

export default function NewCategoryPage() {
  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Minimal Action Navbar */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-end px-10 mb-8 bg-[#F9FAFB] gap-6 shrink-0">
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden cursor-pointer shadow-sm">
          <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Main Content*/}
      <div className="px-10 pb-12 w-full max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-md text-gray-500 mb-3">
            <Link href="/admin/categories" className="hover:text-gray-900 transition-colors">
              Categories
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-gray-800">Add New Category</span>
          </div>
          
          <h1 className="text-[36px] leading-tight text-[#111827] font-serif mb-2">
            Edit Category
          </h1>
          <p className="text-gray-500 text-[15px]">
            Define a new curation pillar for the sanctuary.
          </p>
        </div>

        {/* Main Form Layout: Two Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Form Fields */}
          <div className="flex-1 space-y-6">
            
            {/* General Information Card */}
            <div className="bg-white rounded-md p-8 shadow-sm">
              <div className="space-y-6">
                {/* Category Name Input */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">
                    Category Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., Cellular Immunity"
                    className="w-full bg-[#F3F5F7] border-transparent focus:bg-white focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] rounded-lg px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                  />
                </div>

                {/* Editorial Description Input */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">
                    Editorial Description
                  </label>
                  <textarea 
                    rows={5}
                    placeholder="Craft the narrative for this category..."
                    className="w-full bg-[#F3F5F7] border-transparent focus:bg-white focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] rounded-lg px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 transition-all outline-none resize-none"
                  />
                  <p className="text-[12px] text-gray-500 mt-2 font-medium">
                    This description will appear at the top of the category landing page.
                  </p>
                </div>
              </div>
            </div>

            {/* Display Settings Card */}
            <div className="bg-[#E6E6E6] rounded-md p-8 border border-gray-100">
              <h2 className="font-serif text-[20px] text-[#111827] mb-6">
                Display Settings
              </h2>
              
              <div className="space-y-6">
                {/* Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center bg-white group-hover:border-[#0F3B21] transition-colors">
  
                  </div>
                  <span className="text-[14px] text-gray-700 font-medium">
                    Feature on Sanctuary Homepage
                  </span>
                </label>

                {/* Dropdown */}
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-2">
                    Parent Category (Optional)
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] rounded-lg px-4 py-3 text-[14px] text-gray-900 appearance-none outline-none transition-all">
                      <option value="">None (Top Level)</option>
                      <option value="beauty">Beauty</option>
                      <option value="immunity">Immunity</option>
                      <option value="fitness">Fitness</option>
                    </select>
                    {/* Custom Chevron for select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-white rounded-md p-8 shadow-sm h-full flex flex-col">
              <h2 className="font-serif text-[20px] text-[#111827] mb-2">
                Featured Image
              </h2>
              <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                High-resolution imagery reflecting the category's essence.
              </p>
              
              {/* Image Upload Area */}
              <div className="flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#5a5a5a] rounded-xl border border-gray-200 border-dashed relative flex flex-col items-center justify-center overflow-hidden min-h-[400px] group cursor-pointer">
                
                {/* Overlay Content */}
                <div className="text-center px-6 z-10">
                  <ImageIcon className="mx-auto text-gray-400 opacity-50 mb-3" size={32} />
                  <p className="text-[15px] font-medium text-gray-800 bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full mb-1">
                    Drag & drop image here
                  </p>
                  <p className="text-[12px] text-gray-400 bg-[#2a2a2a]/40 backdrop-blur-sm px-2 py-0.5 rounded inline-block">
                    or click to browse (1200x800px recommended)
                  </p>
                </div>

                {/* Change Image Button */}
                <button className="absolute bottom-4 left-4 bg-white text-gray-800 text-[12px] font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm hover:bg-gray-50 transition-colors z-20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                  </svg>
                  Change Image
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions - Aligned Left */}
        <div className="flex justify-end items-center gap-4 mt-10 pt-6">
          <Link 
            href="/admin/categories"
            className="px-6 py-2.5 text-[14px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button className="px-6 py-2.5 text-[14px] font-medium text-white bg-[#0F3B21] rounded-lg hover:bg-[#0a2917] transition-colors flex items-center gap-2">
            <Save size={16} /> Save Category
          </button>
          
        </div>

      </div>
    </div>
  );
}