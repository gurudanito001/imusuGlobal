"use client";

import { useState } from 'react';
import { Globe, Search } from 'lucide-react';
import Link from 'next/link';
import RegionLanguageModal from './regionLanguageModal'; 

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Defaulted to just "Language" to match your screenshot
  const [regionLabel, setRegionLabel] = useState("Language");
  
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-6 w-full">
        
        {/* LEFT: Logo - functional return to homepage */}
        <div className="flex-1 flex justify-start">
          <Link 
            href="/" 
            className="text-[#1a332a] font-serif font-medium text-xl md:text-2xl tracking-wide hover:opacity-80 transition-opacity"
          >
            The Editorial Wellness Collective
          </Link>
        </div>
        
        {/* MIDDLE: Navigation Links */}
        <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-10 text-[15px] font-medium text-gray-600">
          <Link href="/products" className="hover:text-[#1a332a] transition-colors">Health</Link>
          <a href="#" className="hover:text-[#1a332a] transition-colors">Beauty</a>
          <a href="#" className="hover:text-[#1a332a] transition-colors">Fitness</a>
          <Link href="/supplement" className="hover:text-[#1a332a] transition-colors">Supplements</Link>
          <a href="#" className="hover:text-[#1a332a] transition-colors">Lifestyle</a>
        </div>
        
        {/* RIGHT: Actions */}
        <div className="flex-1 flex items-center justify-end space-x-6 text-gray-600 text-[15px]">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 hover:text-[#1a332a] transition-colors"
          >
            <Globe size={18} /> 
            <span className="font-medium">{regionLabel}</span>
          </button>
          
          <button className="hover:text-[#1a332a] transition-colors">
            <Search size={22} />
          </button>
        </div>
        
      </nav>

      <RegionLanguageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        // FIX: We tell TypeScript that newLabel is a string
        onSave={(newLabel: string) => setRegionLabel(newLabel)}
      />
    </>
  );
}