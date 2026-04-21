import React from 'react';
import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';

export default function TopSellers() {
  const products = [
    {
      brand: "NUTRIFII™",
      name: "Moa® Superfood Blend",
      desc: "A proprietary, nutrient-rich blend of 36 superfoods and superfruits.",
      bg: "bg-[#fcdab9]", 
      image: "/images/moa.png"
    },
    {
      brand: "LUCIM™",
      name: "Totale Face Serum",
      desc: "Advanced hydration and rejuvenation for a radiant complexion.",
      bg: "bg-white", 
      image: "/images/serum.png" 
    },
    {
      brand: "SLENDERIIZ™",
      name: "Day & Night Drops",
      desc: "Homeopathic support designed to aid in healthy weight management.",
      bg: "bg-[#0b161c]", 
      image: "/images/drops.png" 
    },
    {
      brand: "PURITII™",
      name: "Water Filtration System",
      desc: "Advanced portable filtration for clean, safe hydration anywhere.",
      bg: "bg-white", 
      image: "/images/water.png" 
    }
  ];

  return (
    <section className="w-full bg-[#F4F6F5] px-6 md:px-10 lg:px-28 pb-12 pt-32 -mt-60 relative z-0">
      <div className="w-full">
        
        <div className="text-center mb-16 mt-36">
          <h2 className="text-4xl font-serif text-[#1a332a] mb-4">The Apothecary's Choice</h2>
          <p className="text-gray-600">Our most sought-after formulations, revered globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group p-3 relative z-10">
              
              <div className={`${product.bg} rounded-xl h-[260px] relative p-6 flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-4 left-4 bg-[#1a332a] text-white text-[9px] font-bold tracking-wider px-2.5 py-1.5 rounded-full uppercase z-10 flex items-center space-x-1 shadow-sm">
                  <BadgeCheck size={12} className="text-white" />
                  <span>{product.brand}</span>
                </div>
                
                <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={idx < 2} 
                  />
                </div>
              </div>
              
              <div className="px-3 py-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">{product.desc}</p>
                
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <button className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 group/btn transition-colors hover:text-[#1a332a]">
                    View Details 
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}