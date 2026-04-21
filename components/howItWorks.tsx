import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Select Your Region",
      desc: "Use our smart selector to ensure you view localized availability, correct pricing, and compliant shipping options for your specific country.",
      active: false,
      offset: "md:translate-y-0" 
    },
    {
      num: "2",
      title: "Curate Your Selection",
      desc: "Browse our vetted portfolio. Read editorial insights and scientific breakdowns to choose the products that align with your health goals.",
      active: false,
      
      offset: "md:translate-y-8" 
    },
    {
      num: "3",
      title: "Secure Purchase",
      desc: "You will be seamlessly directed to the official partner's secure portal to complete your transaction, ensuring authenticity and direct support.",
      active: true, 
      offset: "md:translate-y-16" 
    }
  ];

  return (
    <section className="relative w-full pt-24 pb-40 bg-white">
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#E6E6E6] z-0"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-[#1a332a] mb-4">Seamless Global Access</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Navigating international wellness sourcing simplified into three precise steps.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-10 rounded-xl shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start ${step.offset}`}
            >
              {/* Number Badge */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-8 shadow-sm transition-colors
                ${step.active ? 'bg-[#1a332a] text-white' : 'bg-[#f4f5f4] text-[#1a332a]'}`}>
                {step.num}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-serif text-[#1a332a] mb-4">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}