"use client";

import { useState } from 'react';
import { X, Search, MapPin } from 'lucide-react';
import { useRegion } from '@/app/context/regionContext';

const regions = [
  { code: 'US', name: 'United States', currency: 'USD' },
  { code: 'CA', name: 'Canada', currency: 'CAD' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP' },
  { code: 'AU', name: 'Australia', currency: 'AUD' },
  { code: 'NG', name: 'Nigeria', currency: 'NGN' },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR' },
];

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'FR', name: 'Français' },
];

export default function RegionLanguageModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState('EN');
  
  // Connect to the global state
  const { setRegionLabel, setRegionName } = useRegion();

  if (!isOpen) return null;

  const filteredRegions = regions.filter(region => 
    region.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSavePreferences = (regionCode: string, regionName: string) => {
    // Save both the short label (for Navbar) and full name (for Catalog) globally!
    setRegionLabel(`${selectedLang} | ${regionCode}`);
    setRegionName(regionName);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-[#faf9f6]">
          <div>
            <h2 className="text-xl font-serif text-[#0f3b21] font-semibold">Language & Region</h2>
            <p className="text-sm text-gray-500 mt-1">Customize your global shopping experience.</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-[#0f3b21] hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* 1. Language Selection */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">1. Select Language</label>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                  selectedLang === lang.code 
                    ? 'bg-[#0f3b21] text-white border-[#0f3b21]' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0f3b21]/40'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Region Selection */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="px-6 pt-4 pb-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">2. Select Destination</label>
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search countries..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3b21]/20 focus:border-[#0f3b21] transition-all text-sm"
              />
            </div>
          </div>

          <div className="overflow-y-auto p-4 pt-2 flex-1">
            <div className="grid grid-cols-1 gap-1">
              {filteredRegions.map((region) => (
                <button
                  key={region.code}
                  // Pass the full name as the second argument
                  onClick={() => handleSavePreferences(region.code, region.name)}
                  className="flex items-center justify-between w-full p-3 hover:bg-[#f4cdb3]/20 rounded-lg transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#0f3b21] group-hover:text-white transition-colors">
                      <MapPin size={16} />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-[#0f3b21]">{region.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 border border-gray-200 px-2 py-1 rounded group-hover:border-[#0f3b21]/30 group-hover:text-[#0f3b21]">
                    {region.currency}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}