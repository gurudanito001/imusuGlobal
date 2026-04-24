"use client";

import React from 'react';
import { 
  Calendar, ChevronDown, DollarSign, MousePointerClick, 
  TrendingUp, ArrowUpRight, ArrowRight, Minus, 
  ChevronRight, CheckCircle2 
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="px-10 pt-8 pb-12 space-y-6 w-full max-w-[1400px]">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-[36px] leading-tight text-[#0F3B21] font-serif mb-2 font-medium">
            Performance Overview
          </h1>
          <p className="text-gray-500 text-[14px]">
            Curated insights for the current quarter.
          </p>
        </div>
        
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors">
          <Calendar size={16} className="text-gray-500" />
          Last 90 Days
          <ChevronDown size={16} className="text-gray-500 ml-1" />
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Revenue Card */}
        <div className="bg-white rounded-md p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[14px] text-gray-500 font-medium">Total Affiliate Revenue</h3>
            <div className="bg-[#E8F3EC] p-1.5 rounded-md">
              <DollarSign size={16} className="text-[#0F3B21]" />
            </div>
          </div>
          <div className="text-[32px] font-serif text-[#111827] mb-3">$124,500</div>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="flex items-center gap-1 bg-[#E8F3EC] text-[#0F3B21] px-2 py-0.5 rounded font-medium">
              <ArrowUpRight size={14} /> 14.2%
            </span>
            <span className="text-gray-400">vs prior period</span>
          </div>
        </div>

        {/* Clicks Card */}
        <div className="bg-white rounded-md p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[14px] text-gray-500 font-medium">Total Redirect Clicks</h3>
            <div className="bg-[#E8F3EC] p-1.5 rounded-md">
              <MousePointerClick size={16} className="text-[#0F3B21]" />
            </div>
          </div>
          <div className="text-[32px] font-serif text-[#111827] mb-3">89,240</div>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="flex items-center gap-1 bg-[#E8F3EC] text-[#0F3B21] px-2 py-0.5 rounded font-medium">
              <ArrowUpRight size={14} /> 8.4%
            </span>
            <span className="text-gray-400">vs prior period</span>
          </div>
        </div>

        {/* Conversion Rate Card */}
        <div className="bg-white rounded-md p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[14px] text-gray-500 font-medium">Avg. Conversion Rate</h3>
            <div className="bg-[#E8F3EC] p-1.5 rounded-md">
              <TrendingUp size={16} className="text-[#0F3B21]" />
            </div>
          </div>
          <div className="text-[32px] font-serif text-[#111827] mb-3">3.8%</div>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
              <Minus size={14} /> 0.0%
            </span>
            <span className="text-gray-400">vs prior period</span>
          </div>
        </div>

      </div>

      {/* Middle Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Affiliate Redirects Chart (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-md p-6 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-[20px] font-serif text-[#0F3B21] mb-1">Affiliate Redirects</h2>
              <p className="text-[13px] text-gray-500">Volume of outbound clicks to partner domains.</p>
            </div>
            <div className="flex bg-[#F3F5F7] p-1 rounded-lg">
              <button className="px-4 py-1.5 text-[13px] font-medium text-gray-600 rounded-md hover:bg-gray-200 transition-colors">Daily</button>
              <button className="px-4 py-1.5 text-[13px] font-medium text-white bg-[#0F3B21] rounded-md shadow-sm">Weekly</button>
            </div>
          </div>

          {/* Chart Area Simulation */}
          <div className="relative h-64 w-full">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-gray-400 w-8">
              <span>15k</span>
              <span>10k</span>
              <span>5k</span>
              <span>0</span>
            </div>
            
            {/* Grid Lines */}
            <div className="absolute left-8 right-0 top-2 bottom-6 flex flex-col justify-between">
              <div className="w-full border-t border-gray-100"></div>
              <div className="w-full border-t border-gray-100"></div>
              <div className="w-full border-t border-gray-100"></div>
              <div className="w-full border-t border-gray-100"></div>
            </div>

            {/* Simulated Area Chart SVG */}
            <div className="absolute left-8 right-0 top-2 bottom-6 overflow-hidden">
              <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0F3B21" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0F3B21" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <path 
                  d="M0,120 L100,150 L200,60 L300,160 L400,100 L500,180 L600,120 L700,50 L800,130 L800,200 L0,200 Z" 
                  fill="url(#gradient)" 
                />
                {/* Line */}
                <path 
                  d="M0,120 L100,150 L200,60 L300,160 L400,100 L500,180 L600,120 L700,50 L800,130" 
                  fill="none" 
                  stroke="#9ACDAB" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[11px] text-gray-400 px-2">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
              <span>Week 6</span>
            </div>
          </div>
        </div>

        {/* Regional Impact (Spans 1 column) */}
        <div className="bg-white rounded-md p-6 shadow-sm flex flex-col">
          <h2 className="text-[20px] font-serif text-[#0F3B21] mb-6">Regional Impact</h2>
          
          <div className="space-y-6 flex-1">
            <RegionalBar region="North America" percentage="45%" width="w-[45%]" />
            <RegionalBar region="Europe" percentage="32%" width="w-[32%]" />
            <RegionalBar region="Asia Pacific" percentage="15%" width="w-[15%]" />
            <RegionalBar region="Other" percentage="8%" width="w-[8%]" />
          </div>

          <div className="mt-6 flex justify-center pt-4">
            <button className="text-[13px] font-medium text-[#0F3B21] hover:underline flex items-center gap-1">
              View Full Map <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Curated Performers */}
        <div className="lg:col-span-2 bg-[#E6E6E6] rounded-md p-10 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-serif text-[#0F3B21]">Curated Performers</h2>
            <button className="px-3 py-1.5 text-[12px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Top 3 Products
            </button>
          </div>

          <div className="space-y-4">
            {/* Product Item 1 */}
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group border border-transparent hover:border-gray-100 bg-white">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=150&auto=format&fit=crop" 
                  alt="Serum" 
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100 border border-gray-200"
                />
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-0.5">Botanical Rest Serum</h4>
                  <p className="text-[13px] text-gray-500">Aura Wellness</p>
                </div>
              </div>
              <div className="flex items-center gap-8 text-right pr-2">
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Clicks</p>
                  <p className="text-[15px] font-bold text-gray-900">12,450</p>
                </div>
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Revenue</p>
                  <p className="text-[15px] font-bold text-[#0F3B21]">$18,200</p>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#0F3B21] transition-colors" />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group border border-transparent hover:border-gray-100 bg-white">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=150&auto=format&fit=crop" 
                  alt="Serum" 
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100 border border-gray-200"
                />
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-0.5">Botanical Rest Serum</h4>
                  <p className="text-[13px] text-gray-500">Aura Wellness</p>
                </div>
              </div>
              <div className="flex items-center gap-8 text-right pr-2">
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Clicks</p>
                  <p className="text-[15px] font-bold text-gray-900">12,450</p>
                </div>
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Revenue</p>
                  <p className="text-[15px] font-bold text-[#0F3B21]">$18,200</p>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#0F3B21] transition-colors" />
              </div>
            </div>

            {/* Product Item 2 */}
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group border border-transparent hover:border-gray-100 bg-white">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1593047248383-e187215c2bd6?q=80&w=150&auto=format&fit=crop" 
                  alt="Mat" 
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100 border border-gray-200"
                />
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-0.5">Organic Hemp Mat</h4>
                  <p className="text-[13px] text-gray-500">EarthBound</p>
                </div>
              </div>
              <div className="flex items-center gap-8 text-right pr-2">
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Clicks</p>
                  <p className="text-[15px] font-bold text-gray-900">9,820</p>
                </div>
                <div>
                  <p className="text-[12px] text-gray-400 mb-0.5">Revenue</p>
                  <p className="text-[15px] font-bold text-[#0F3B21]">$14,500</p>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#0F3B21] transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Top Brand Partners */}
        <div className="bg-white rounded-md p-6 shadow-sm">
          <h2 className="text-[20px] font-serif text-[#0F3B21] mb-6">Top Brand Partners</h2>
          
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F3B21] text-white text-[13px] font-medium rounded-full cursor-pointer hover:bg-[#0a2917] transition-colors">
              <CheckCircle2 size={14} className="text-white" />
              Aura Wellness
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#F3F5F7] text-gray-700 text-[13px] font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              EarthBound
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#F3F5F7] text-gray-700 text-[13px] font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Zenith
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#F3F5F7] text-gray-700 text-[13px] font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Lumina Apothecary
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#F3F5F7] text-gray-700 text-[13px] font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Verdant Core
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

// Small helper component for the regional progress bars
function RegionalBar({ region, percentage, width }: { region: string, percentage: string, width: string }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-[14px] text-gray-800 font-medium">{region}</span>
        <span className="text-[13px] text-gray-500">{percentage}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full bg-[#0F3B21] rounded-full ${width}`}></div>
      </div>
    </div>
  );
}