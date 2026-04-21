import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F9F8] px-6 md:px-10 lg:px-28 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-gray-100">
      
      {/* Left Content */}
      <div className="w-full lg:w-[48%] space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200/60 rounded-full text-xs font-medium text-gray-700">
          <CheckCircle2 size={14} className="text-[#1a332a]" />
          Curated Global Partners
        </div>
        
        <h1 className="text-5xl lg:text-[5rem] xl:text-[5.5rem] font-serif text-[#1a332a] leading-[1.05] tracking-tight">
          Premium <br/> Health & <br/> Wellness, <br/>
          <span className="italic text-[#12251e]">Delivered<br/>Globally.</span>
        </h1>
        
        <p className="text-gray-600 max-w-md text-[15px] leading-relaxed">
          Discover a sanctuary of vetted, high-efficacy wellness products sourced from trusted international partners. Elevate your daily rituals with confidence.
        </p>
        
        <div className="flex gap-4 pt-4">
          <button className="bg-[#1a332a] text-white px-6 py-3 rounded-md font-medium hover:bg-[#12251e] transition">
            Browse All Products
          </button>
          <button className="bg-white text-[#1a332a] px-6 py-3 rounded-md font-medium shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            Explore Categories
          </button>
        </div>
      </div>

      {/* Right Image/Card */}
      <div className="w-full lg:w-[48%] relative bg-[#f4cdb3] rounded-xl p-8 h-[550px] lg:h-[650px] flex flex-col justify-end overflow-hidden shadow-sm">
        
        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center pb-20">
          <img 
            src="/images/hero(3).png" 
            alt="Products" 
            className="object-cover w-full h-full mix-blend-multiply" 
          />
        </div>

        {/* Floating Partner Card */}
        <div className="relative bg-[#fcf9f6] p-6 rounded-lg shadow-sm flex justify-between items-center z-10">
          <div>
            <h3 className="text-[#1a332a] font-serif font-bold text-xl">Partner.co Nutrifii™</h3>
            <p className="text-sm text-gray-500 mt-1">Featured Global Partner</p>
          </div>
          <div className="w-10 h-10 bg-[#e8f0eb] rounded-full flex items-center justify-center text-[#1a332a]">
            <CheckCircle2 size={20} />
          </div>
        </div>
      </div>
      
    </section>
  );
}