"use client";

import { useState } from 'react';
import { Search, Globe } from 'lucide-react'; 
import Link from 'next/link';
import RegionLanguageModal from './regionLanguageModal'; 
import { useRegion } from '@/app/context/regionContext';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { regionLabel } = useRegion();
  
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-6 w-full">
        
        <div className="flex-1 flex justify-start">
          <Link href="/" className="text-[#1a332a] font-serif font-medium text-xl md:text-2xl tracking-wide hover:opacity-80 transition-opacity">
            The Editorial Wellness Collective
          </Link>
        </div>
        
        <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-10 text-[15px] font-medium text-gray-600">
          <Link href="/products" className="hover:text-[#1a332a] transition-colors">Health</Link>
          <Link href="/beauty" className="hover:text-[#1a332a] transition-colors">Beauty</Link>
          <Link href="/fitness" className="hover:text-[#1a332a] transition-colors">Fitness</Link>
          <Link href="/supplement" className="hover:text-[#1a332a] transition-colors">Supplements</Link>
          <Link href="/lifestyle" className="hover:text-[#1a332a] transition-colors">Lifestyle</Link>
        </div>
        
        <div className="flex-1 flex items-center justify-end space-x-6 text-gray-600 text-[15px]">
          
          {/* Updated Button: Globe icon followed by "Language" text */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 hover:text-[#1a332a] transition-colors font-medium"
          >
            <Globe size={18} />
            <span>Language</span>
          </button>
          
          <button className="hover:text-[#1a332a] transition-colors">
            <Search size={22} />
          </button>
        </div>
        
      </nav>

      <RegionLanguageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}