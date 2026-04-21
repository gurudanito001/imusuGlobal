import React from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Shapes, 
  BadgeCheck, 
  Globe, 
  Banknote, 
  Award 
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const products = [
  {
    brand: "PARTNER.CO",
    name: "Rejuvenating Botanical Serum",
    description: "A potent blend of organic antioxidants designed to restore...",
    image: "/images/botanical.png", 
    isOfficial: true,
    buttonStyle: "primary",
    bgColor: "bg-[#080C0A]" // Dark forest black
  },
  {
    brand: "WELLNESS FLOW",
    name: "Core Alignment Program",
    description: "Master the foundational movements of mobility and strength with this... guided 6-week digital sanctuary.",
    image: "/images/alignment.jpg", 
    isOfficial: false,
    buttonStyle: "primary",
    bgColor: "bg-gray-100" 
  },
  {
    brand: "NUTRIPURE",
    name: "Advanced Daily Synthetics",
    description: "Bio-available foundational nutrients engineered for cellular optimization...",
    image: "/images/synthetics.png", 
    isOfficial: true,
    buttonStyle: "primary",
    bgColor: "bg-[#253D40]" 
  },
  {
    brand: "AURA REST",
    name: "Silk Weighted Sleep Mask",
    description: "Experience deep, uninterrupted REM cycles with gentle acupressure and...",
    image: "/images/sleepMask.png", 
    isOfficial: false,
    buttonStyle: "outlined",
    bgColor: "bg-[#23253B]" 
  },
  {
    brand: "PARTNER.CO",
    name: "Deep Marine Hydration",
    description: "A cooling, mineral-rich overnight mask that replenishes the skin barri... while you rest.",
    image: "/images/marine.png", 
    isOfficial: true,
    buttonStyle: "primary",
    bgColor: "bg-[#2A5766]" 
  },
  {
    brand: "ZENITH MATCHA",
    name: "Ceremonial Grade Reserve",
    description: "Shade-grown, hand-ground leaves offering sustained focus without th...",
    image: "/images/ceremonial.jpg", 
    isOfficial: false,
    buttonStyle: "outlined",
    bgColor: "bg-gray-100"
  }
];

export default function ProductCatalog() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F4F6F5]">
      <Navbar />
      
      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col md:flex-row w-full border-t border-gray-100">
        
        {/* Left Sidebar - stretches to the edge */}
        <aside className="w-full md:w-[280px] lg:w-[320px] bg-[#E6E6E6] flex-shrink-0 pt-12 pb-24 pl-6 md:pl-10 lg:pl-16 pr-6 border-r border-gray-100/60">
          <div className="sticky top-8">
            <h2 className="text-[#333333] text-lg font-serif mb-1">Refine Selection</h2>
            <p className="text-gray-500 text-xs mb-8">Curated Wellness Filters</p>

            {/* Filter Categories */}
            <ul className="space-y-2 text-sm text-[#555555] mb-12">
              <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-[#1B4332] font-semibold cursor-pointer">
                <Shapes size={18} className="text-[#1B4332]" /> Categories
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm rounded-lg hover:text-[#1B4332] cursor-pointer transition-all">
                <BadgeCheck size={18} /> Brands
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm rounded-lg hover:text-[#1B4332] cursor-pointer transition-all">
                <Globe size={18} /> Availability
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm rounded-lg hover:text-[#1B4332] cursor-pointer transition-all">
                <Banknote size={18} /> Price Range
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm rounded-lg hover:text-[#1B4332] cursor-pointer transition-all">
                <Award size={18} /> Certifications
              </li>
            </ul>

            {/* Region Selector Dropdown */}
            <div>
              <label className="block text-xs font-bold text-[#333333] mb-3 uppercase tracking-wide">Show available in</label>
              <button className="w-full flex items-center justify-between bg-white border border-gray-200 text-[#333333] px-4 py-3 rounded-lg shadow-sm hover:border-[#1B4332]/30 transition-colors font-medium text-sm">
                United States
                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className="flex-1 pt-12 pb-24 px-6 md:px-10 lg:px-16 bg-[#F4F6F5] max-w-7xl">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-5xl font-serif text-[#1B4332] mb-4">Discovery</h1>
            <p className="text-gray-600 text-[15px]">
              Curated health and wellness selections currently available in <span className="font-bold text-gray-900">United States</span>.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                
                {/* Image Container with Dynamic Background Color */}
                <div className={`relative h-56 w-full rounded-xl overflow-hidden ${product.bgColor}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Official Partner Badge overlay */}
                  {product.isOfficial && (
                    <div className="absolute top-3 right-3 bg-[#0E4735] text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-md flex items-center gap-1 shadow-sm">
                      <CheckCircle2 size={12} className="text-white fill-[#0E4735]" />
                      Official Partner
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="pt-5 pb-3 px-2 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {product.brand}
                  </span>
                  
                  <h3 className="text-[19px] font-serif text-[#1B4332] mb-3 leading-snug">
                    {product.name}
                  </h3>
                  
                  <p className="text-[13px] text-gray-600 mb-6 flex-1 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Dynamic Action Button */}
                  <button 
                    className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors mt-auto
                      ${product.buttonStyle === 'primary' 
                        ? 'bg-[#0E4735] text-white hover:bg-[#1B4332]' 
                        : 'bg-transparent text-[#0E4735] border border-gray-200 hover:border-[#0E4735] hover:bg-gray-50'
                      }
                    `}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 flex justify-center mb-10">
            <button className="border border-gray-200 text-[#0E4735] font-semibold text-sm px-8 py-3 rounded-md hover:border-[#0E4735] hover:bg-gray-50 transition-colors shadow-sm bg-white">
              Load More Curations
            </button>
          </div>
        </section>

      </div>
      
      <Footer />
    </main>
  );
}