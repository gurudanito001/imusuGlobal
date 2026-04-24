"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

export default function AddProductPage() {
  return (
    <div className="px-10 pb-12 w-full max-w-[1200px] pt-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-md font-medium text-gray-500 mb-2">
            <Link href="/admin/products" className="hover:text-gray-900 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900">Curate Entry</span>
          </div>
          <h1 className="text-4xl font-serif text-[#0F3B21]">Add Product</h1>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-transparent hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
              Discard Draft
            </button>
          </Link>
          <button className="px-6 py-2.5 text-sm font-medium text-white bg-[#0F3B21] rounded-lg hover:bg-[#0a2917] transition-colors shadow-sm">
            Publish to Journal
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Form */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Essential Curations Card */}
          <div className="bg-[#E6E6E6] rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-serif text-[#0F3B21] mb-8">Essential Curations</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Botanical / Product Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Adaptogenic Ashwagandha Blend" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Partner Brand
                  </label>
                  <select defaultValue="" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] transition-all text-gray-600 appearance-none cursor-pointer">
                    <option value="" disabled>Select an approved partner...</option>
                    <option value="aura">Aura Botanicals</option>
                    <option value="vital">Vital Elements</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Wellness Category
                  </label>
                  <select defaultValue="" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] transition-all text-gray-600 appearance-none cursor-pointer">
                    <option value="" disabled>Assign taxonomy...</option>
                    <option value="supplements">Supplements</option>
                    <option value="skincare">Skincare</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Editorial Description
                </label>
                <textarea 
                  rows={4}
                  placeholder="Detail the somatic benefits, sourcing, and sensory experience..." 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0F3B21] focus:ring-1 focus:ring-[#0F3B21] transition-all placeholder:text-gray-400 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Global Affiliate Matrix Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-serif text-[#0F3B21]">Global Affiliate Matrix</h2>
              <LinkIcon className="text-[#0F3B21]" size={20} />
            </div>
            <p className="text-sm text-gray-500 mb-8">Manage destination URLs for localized editorial tracking.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F0FDF4] text-[#0F3B21] font-bold text-sm flex items-center justify-center rounded-lg border border-green-100 shrink-0">
                  US
                </div>
                <input 
                  type="text" 
                  defaultValue="https://partner.com/us/product?ref=editorial"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none transition-all"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F0FDF4] text-[#0F3B21] font-bold text-sm flex items-center justify-center rounded-lg border border-green-100 shrink-0">
                  UK
                </div>
                <input 
                  type="text" 
                  defaultValue="https://partner.com/uk/product?ref=editorial"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none transition-all"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 text-gray-500 font-bold text-sm flex items-center justify-center rounded-lg border border-gray-200 shrink-0">
                  CA
                </div>
                <input 
                  type="text" 
                  placeholder="Paste Canadian tracking link here..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#0F3B21] transition-all"
                />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar Widgets */}
        <div className="space-y-8">
          
          <div className="bg-[#E6E6E6] rounded-xl border border-gray-100 p-6">
            <h3 className="text-xl font-serif text-[#0F3B21] mb-6">Hero Imagery</h3>
            
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-colors hover:border-[#0F3B21] cursor-pointer">
              <div className="w-12 h-12 bg-[#F4F6F5] rounded-lg flex items-center justify-center mb-4">
                <ImageIcon className="text-[#0F3B21]" size={24} />
              </div>
              <h4 className="font-semibold text-[#0F3B21] mb-1">Drag & Drop visual asset</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed mb-6">
                High-resolution WebP or JPEG.<br/>Optimal ratio 4:5 for editorial grids.
              </p>
              <button className="text-sm font-semibold text-[#0F3B21] border border-gray-200 px-4 py-2 rounded-lg">
                Browse Files
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-serif text-[#0F3B21] mb-6">Publication Status</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Active on Hub</h4>
                  <p className="text-[11px] text-gray-500">Visible in public directories</p>
                </div>
                <div className="w-11 h-6 bg-[#0F3B21] rounded-full p-1 cursor-pointer flex justify-end transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Editor's Choice Badge</h4>
                  <p className="text-[11px] text-gray-500">Prioritize in organic sort</p>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full p-1 cursor-pointer transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}