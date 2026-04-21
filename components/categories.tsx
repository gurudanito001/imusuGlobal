import { ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-28 py-16">
      <div className="flex justify-between items-end mb-10">
        <div className="max-w-xl">
          {/* Text color updated to match your global dark green theme */}
          <h2 className="text-4xl font-serif text-[#1a332a] mb-4">Curated Intentions</h2>
          <p className="text-gray-600">
            Explore tailored collections designed to support specific facets of your holistic well-being.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-[#1a332a] font-medium hover:gap-3 transition-all">
          View All Categories <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
        
        {/* Large Left Card*/}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden group bg-[#E37A6A] flex flex-col justify-end p-8">
          
          {/* THE CLEAN IMAGE CONTAINER */}
          <div className="absolute inset-x-8 top-8 bottom-32 flex items-center justify-center">
            <img 
              src="/images/essentials.png" 
              alt="Skincare Essentials Products" 
              className="w-[700px] h-[600px] object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

         
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-2 text-white">Skincare Essentials</h3>
            <p className="text-sm text-white/90">Radiance through advanced botanical science.</p>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="flex flex-col gap-6 h-full">
          
          {/* Top Right*/}
          <div className="flex-1 relative rounded-xl overflow-hidden group bg-gradient-to-b from-[#EAECEE] to-[#B4BAC0]">
            <img 
              src="/images/immunity.png" 
              alt="Immunity" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Soft charcoal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A5558]/90 via-[#4A5558]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-serif mb-1">Immunity Boosters</h3>
              <p className="text-xs text-gray-100">Fortify your daily defenses.</p>
            </div>
          </div>
          
          {/* Bottom Right - Deep Obsidian/Black Background */}
          <div className="flex-1 relative rounded-xl overflow-hidden group bg-[#080808]">
            <img 
              src="/images/innerBeauty.jpg" 
              alt="Inner Beauty" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Pure black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-serif mb-1">Inner Beauty</h3>
              <p className="text-xs text-gray-300">Nourishment from within.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}