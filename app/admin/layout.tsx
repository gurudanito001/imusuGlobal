"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Briefcase, Layers, Box, BarChart2, Settings, HelpCircle, Plus 
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans text-gray-900">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-[260px] bg-[#E6E6E6] border-r border-gray-200 flex flex-col h-screen sticky top-0">
        <div className="h-20 flex items-center px-6 border-b border-transparent">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0F3B21] rounded-md flex items-center justify-center">
              <LeafIcon className="text-white w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-[#111827] text-[15px] leading-tight">Wellness Hub</h1>
              <p className="text-[11px] text-gray-500 font-medium">Admin Console</p>
            </div>
          </div>
        </div>

        <div className="p-4 pt-6">
          <Link href="/admin/products/new" className="w-full bg-[#0F3B21] text-white flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0a2917] transition-colors shadow-sm mb-2">
            <Plus size={16} /> New Product
          </Link>
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
          <NavItem href="/admin/companies" icon={<Briefcase size={18} />} label="Companies" active={pathname?.includes('/admin/companies')} />
          <NavItem href="/admin/categories" icon={<Layers size={18} />} label="Categories" active={pathname?.includes('/admin/categories')} />
          <NavItem href="/admin/products" icon={<Box size={18} />} label="Products" active={pathname?.includes('/admin/products') && !pathname?.includes('/new')} />
          <NavItem href="/admin/analytics" icon={<BarChart2 size={18} />} label="Analytics" active={pathname?.includes('/admin/analytics')} />
        </nav>

        <div className="p-4 space-y-1">
          <NavItem href="/admin/settings" icon={<Settings size={18} />} label="Settings" active={pathname === '/admin/settings'} />
          <NavItem href="/admin/support" icon={<HelpCircle size={18} />} label="Support" active={pathname === '/admin/support'} />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-bold transition-colors ${
        active 
          ? 'bg-white text-[#0F3B21] shadow-sm border border-gray-100' 
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function LeafIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}