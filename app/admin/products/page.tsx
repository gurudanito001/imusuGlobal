"use client";

import React from 'react';
import { Download, Plus, ArrowUpRight, Filter, List, CheckCircle2, Globe, Box, Search, Bell } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminProductsDashboard() {
  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Editorial Navbar with Search */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 mb-8 bg-[#F9FAFB] shadow-sm">
        <div className="flex items-center gap-8 h-full">
          <h2 className="font-semibold text-[#0F3B21] text-[15px]">The Editorial Wellness Collective</h2>
          <div className="flex items-center gap-6 h-full text-sm font-medium pt-1">
            <div className="flex flex-col justify-center h-full relative cursor-pointer text-[#0F3B21]">
              <span>Dashboard</span>
              <div className="h-0.5 w-full bg-[#0F3B21] absolute bottom-0 rounded-t-md"></div>
            </div>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors h-full flex items-center">Activity Log</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products, brands..." 
              className="pl-9 pr-4 py-2 bg-gray-50 border border-transparent rounded-full focus:bg-white focus:border-gray-200 focus:outline-none text-sm w-64 placeholder:text-gray-500 transition-all"
            />
          </div>
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <Bell size={20} className="text-[#0F3B21]" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-gray-200 cursor-pointer shadow-sm">
            <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#0F3B21] mb-2">Product Inventory</h1>
            <p className="text-sm text-gray-500 max-w-lg">
              Manage global affiliate links, track regional availability, and monitor product performance across the collective network.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <Download size={16} /> Bulk Upload CSV
            </button>
            <Link href="/admin/products/new" className="flex items-center gap-2 px-4 py-2 bg-[#0F3B21] text-white rounded-lg text-sm font-medium hover:bg-[#0a2917] shadow-sm transition-colors">
              <Plus size={16} /> Add New Product
            </Link>
          </div>
        </div>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 font-bold">
          <MetricCard title="Total Products" value="2,451" icon={<Box size={20}/>} trend="+12%" />
          <MetricCard title="Active Countries" value="42" icon={<Globe size={20}/>} trend="Stable" />
          <MetricCard title="Avg. CTR" value="14.8%" icon={<ArrowUpRight size={20}/>} trend="+3.2%" />
          
          {/* Custom Top Brand Card */}
          <div className="bg-[#E6E6E6] p-6 rounded-xl border border-gray-400 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-1">Top Performing Brand</p>
              <h3 className="text-xl font-serif text-[#0F3B21]">Aura Botanicals</h3>
              <p className="text-[11px] text-gray-500 mt-1">Skincare & Wellness</p>
            </div>
            <div className="flex justify-between items-end mt-4">
              <div>
                <span className="font-bold text-gray-900 text-lg">845</span>
                <span className="text-xs text-gray-500 ml-1">Conversions</span>
              </div>
              <button className="text-xs font-medium text-gray-600 flex items-center hover:text-[#0F3B21]">
                View Details <ArrowUpRight size={14} className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid*/}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          
          {/* Left: Inventory Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 text-lg">Inventory Directory</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 border border-gray-200 rounded-md hover:bg-gray-50"><Filter size={16} /></button>
                <button className="p-2 text-gray-400 border border-gray-200 rounded-md hover:bg-gray-50"><List size={16} /></button>
              </div>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="text-[10px] uppercase font-bold text-gray-400 tracking-wider bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Product</th>
                  <th className="px-6 py-4 font-semibold">Brand</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold text-right">Regional Links</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow image="/images/diffuser.png" name="Lumina Stone Diffuser" id="#88492" brand="Aura Botanicals" category="Home Fragrance" progress={85} progressText="42/50" />
                <TableRow image="/images/diffuser.png" name="Daily Magnesium Complex" id="#88493" brand="Vital Elements" category="Supplements" progress={20} progressText="10/50" />
                <TableRow image="/images/diffuser.png" name="Bamboo Travel Set" id="#88480" brand="Earth Rituals" category="Personal Care" progress={0} progressText="0/50" />
                <TableRow image="/images/diffuser.png" name="Cork Alignment Mat" id="#88501" brand="Zenith Studio" category="Fitness Gear" progress={95} progressText="48/50" />
              </tbody>
            </table>
          </div>

          {/* Right: Link Matrix Sidebar */}
          <div className="bg-[#E6E6E6] rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800 text-lg">Link Matrix</h3>
              <span className="bg-[#0F3B21] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Official Partner</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Lumina Stone Diffuser</p>

            <div className="bg-white p-4 rounded-lg border border-gray-100 mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F0EB] flex items-center justify-center text-[#0F3B21]">
                  <Globe size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Global Coverage</p>
                  <p className="text-[11px] text-gray-500">42 of 50 Regions configured</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#0F3B21] w-[85%] h-full rounded-full"></div>
              </div>
            </div>

            <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4">Priority Regions</h4>
            <div className="space-y-3">
              <RegionLinkCard code="US" country="United States" lang="English (en-US)" status="active" />
              <RegionLinkCard code="UK" country="United Kingdom" lang="English (en-GB)" status="active" />
              <RegionLinkCard code="FR" country="France" lang="French (fr-FR)" status="missing" />
              <RegionLinkCard code="DE" country="Germany" lang="German (de-DE)" status="active" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



function MetricCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  const isPositive = trend.includes('+');
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-md bg-[#F4F6F5] text-[#0F3B21] flex items-center justify-center">
          {icon}
        </div>
        <div className={`px-2 py-1 rounded text-[11px] font-semibold ${isPositive ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'}`}>
          {trend}
        </div>
      </div>
      <p className="text-xs font-semibold text-gray-400 mb-1">{title}</p>
      <h3 className="text-2xl font-serif text-gray-900">{value}</h3>
    </div>
  );
}

function TableRow({ image, name, id, brand, category, progress, progressText }: any) {
  const router = useRouter();

  const handleRowClick = () => {
    const cleanId = id.replace('#', '');
    router.push(`/admin/products/${cleanId}`);
  };

  return (
    <tr 
      onClick={handleRowClick}
      className="hover:bg-gray-50/50 transition-colors group cursor-pointer"
    >
      <td className="px-6 py-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
          <img src={image} alt={name} className="w-8 h-8 object-contain mix-blend-multiply" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm group-hover:text-[#0F3B21] transition-colors">{name}</p>
          <p className="text-[11px] text-gray-400 font-medium">ID: {id}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-500 text-sm">{brand}</td>
      <td className="px-6 py-4 text-gray-500 text-sm">{category}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-3">
          <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div className={`h-full rounded-full ${progress === 0 ? 'bg-transparent' : 'bg-[#0F3B21]'}`} style={{ width: `${progress}%` }}></div>
          </div>
          <span className="text-[11px] font-medium text-gray-400 w-8 text-right">{progressText}</span>
        </div>
      </td>
    </tr>
  );
}

function RegionLinkCard({ code, country, lang, status }: { code: string, country: string, lang: string, status: 'active' | 'missing' }) {
  const isMissing = status === 'missing';
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${isMissing ? 'bg-red-50/30 border-red-100' : 'bg-white border-gray-100 shadow-sm'}`}>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
          {code}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{country}</p>
          <p className="text-[10px] text-gray-400">{lang}</p>
        </div>
      </div>
      {isMissing ? (
        <button className="text-xs font-semibold text-red-500 hover:text-red-700">Add Link</button>
      ) : (
        <CheckCircle2 size={18} className="text-[#0F3B21] fill-[#E8F0EB]" />
      )}
    </div>
  );
}