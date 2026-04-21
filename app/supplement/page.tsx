import React from 'react';

// Adjust these import paths to match where your actual components live
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

// Swapped to lucide-react equivalents
import { 
  Globe, 
  Leaf, 
  ExternalLink, 
  CheckCircle2, 
  Package, 
  ArrowRight, 
  MapPin, 
  BadgeCheck, 
  FlaskConical, 
  Recycle 
} from 'lucide-react';

export default function SupplementsPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F5] text-[#1a332a] font-sans">
      
      {/* Your custom Navbar */}
      <Navbar />

      <main className="w-full px-6 md:px-10 lg:px-28 px-6 md:px-10 mt-8 space-y-20">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-center">
          
          {/* Left: Product Image Area */}
          <div className="relative bg-[#28849b] rounded-2xl h-[600px] w-full overflow-hidden flex items-center justify-center shadow-sm">
            <div className="absolute top-6 left-6 z-10 bg-[#1a332a] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-sm">
              <BadgeCheck className="w-4 h-4" />
              <span>Official Partner</span>
            </div>
            
            {/* MAIN HERO IMAGE TAG */}
            <img 
              src="/images/hero.png" 
              alt="Luminous Defense Main Product" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Product Details Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-serif text-[#1a332a]">Luminous Defense</h1>
              <span className="text-2xl font-bold text-[#1a332a]">$85.00</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">30-Day Supply (60 Capsules)</p>

            <div className="bg-[#F8F9F8] rounded-xl p-4 flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4 text-sm">
                <MapPin className="text-[#1a332a] w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Shipping Destination</p>
                  <p className="font-semibold text-[#1a332a]">United States</p>
                </div>
              </div>
              <button className="text-sm underline text-gray-600 font-medium">Change</button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-[#1a332a] font-medium mb-8">
              <Package className="w-5 h-5" />
              <span>In stock at <strong className="font-semibold">US Warehouse</strong></span>
            </div>

            <Link href="/redirect" className="block w-full mb-4">
              <button className="w-full bg-[#1a332a] text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-[#12251e] transition-colors mb-4">
                <span>Shop on Botanical Labs Website</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-xs text-gray-400 text-center mb-10 px-6">
              You will be securely redirected to our verified partner's website to complete your purchase.
            </p>

            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Partner Guarantees</h3>
              <ul className="space-y-3">
                {['60-Day Money Back Guarantee', 'Carbon Neutral Shipping', 'Third-Party Lab Tested'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm text-gray-600">
                    {/* Added the solid colored CheckCircle icon matching the screenshot */}
                    <CheckCircle2 className="text-white fill-[#1a332a] w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Content stacked on the left side */}
        <div className="w-full lg:max-w-[59%] space-y-16">
          
          {/* Description Section */}
          <section>
            {/* Images expanded to take full width of this column, aligning with the hero image */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
               {/* SMALL IMAGE PREVIEW 1 */}
               <div className="h-48 md:h-64 bg-gray-100 rounded-xl overflow-hidden relative shadow-sm">
                  <img 
                    src="/images/luminuos1.jpg" 
                    alt="Preview 1" 
                    className="w-full h-full object-cover"
                  />
               </div>
               
               {/* SMALL IMAGE PREVIEW 2 */}
               <div className="h-48 md:h-64 bg-gray-100 rounded-xl overflow-hidden relative shadow-sm">
                  <img 
                    src="/images/luminuos2.jpeg" 
                    alt="Preview 2" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
            
            <h2 className="text-4xl font-serif leading-tight mb-4 text-[#1a332a]">
              Luminous Botanical Defense<br />Complex
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg text-[15px]">
              A refined daily supplement engineered to fortify your cellular health. Sourced from pristine environments, this formulation balances modern science with traditional apothecary wisdom.
            </p>
          </section>

          {/* Why We Love This*/}
          <section>
            <h3 className="text-2xl font-serif text-[#1a332a] mb-6">Why we love this</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Leaf className="text-[#1a332a] w-6 h-6 mb-4" />
                <h4 className="font-serif font-medium text-[#1a332a] mb-2 text-lg">Pristine Sourcing</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Ingredients are harvested sustainably from certified organic reserves, ensuring maximum potency without environmental compromise.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <FlaskConical className="text-[#1a332a] w-6 h-6 mb-4" />
                <h4 className="font-serif font-medium text-[#1a332a] mb-2 text-lg">Clinical Efficacy</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Formulated alongside leading naturopaths to ensure optimal bioavailability. The complex is designed to be absorbed, not just ingested.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Leaf className="text-[#1a332a] w-6 h-6 mb-4" />
                <h4 className="font-serif font-medium text-[#1a332a] mb-2 text-lg">Holistic Harmony</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Beyond isolated nutrients, this complex supports the body's natural rhythms, promoting a sustained, grounded energy throughout the day.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Recycle className="text-[#1a332a] w-6 h-6 mb-4" />
                <h4 className="font-serif font-medium text-[#1a332a] mb-2 text-lg">Conscious Packaging</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Housed in fully recyclable glass and post-consumer recycled paper, honoring our commitment to a restorative wellness cycle.</p>
              </div>
            </div>
          </section>

          {/* Regional Availability Table */}
          <section>
            <h3 className="text-2xl font-serif text-[#1a332a] mb-6">Regional Availability</h3>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f0f2f0] text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Region</th>
                    <th className="py-4 px-6 font-semibold hidden sm:table-cell">Shipping Time</th>
                    <th className="py-4 px-6 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="py-4 px-6 flex items-center space-x-2"><Globe className="w-4 h-4" /> <span>North America</span></td>
                    <td className="py-4 px-6 text-gray-500 hidden sm:table-cell">2-4 Business Days</td>
                    <td className="py-4 px-6 font-semibold text-[#1a332a]">In Stock</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 flex items-center space-x-2"><Globe className="w-4 h-4" /> <span>Europe (EU)</span></td>
                    <td className="py-4 px-6 text-gray-500 hidden sm:table-cell">3-5 Business Days</td>
                    <td className="py-4 px-6 font-semibold text-[#1a332a]">In Stock</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 flex items-center space-x-2"><Globe className="w-4 h-4" /> <span>United Kingdom</span></td>
                    <td className="py-4 px-6 text-gray-500 hidden sm:table-cell">2-3 Business Days</td>
                    <td className="py-4 px-6 font-semibold text-[#1a332a]">In Stock</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 flex items-center space-x-2"><Globe className="w-4 h-4" /> <span>Asia Pacific</span></td>
                    <td className="py-4 px-6 text-gray-500 hidden sm:table-cell">5-8 Business Days</td>
                    <td className="py-4 px-6 italic text-gray-400">Limited Stock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Related Curations*/}
        <section className="pt-10 border-t border-gray-200 mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1a332a] mb-1">Related Curations</h2>
              <p className="text-sm text-gray-500">Complementary formulations for a complete wellness protocol.</p>
            </div>
            <a href="#" className="flex items-center space-x-1 text-sm font-semibold text-[#1a332a] hover:underline">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="h-48 rounded-lg mb-6 w-full overflow-hidden bg-gray-100">
                <img 
                  src="/images/adaptogen.jpg" 
                  alt="Deep Rest Adaptogen Drops" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">Tinctures</p>
                <h4 className="font-serif text-lg text-[#1a332a] mb-2">Deep Rest Adaptogen Drops</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">A potent blend of ashwagandha and reishi to promote profound evening relaxation and cellular...</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-semibold text-[#1a332a]">$45.00</span>
                <button className="bg-[#f0f2f0] p-2 rounded-full text-[#1a332a] hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="h-48 rounded-lg mb-6 w-full overflow-hidden bg-gray-100">
                <img 
                  src="/images/barrier.jpg" 
                  alt="Barrier Recovery Balm" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">Topicals</p>
                <h4 className="font-serif text-lg text-[#1a332a] mb-2">Barrier Recovery Balm</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">Nourishing ceramides and wild-harvested sea kelp to restore the skin's natural defense lipid layer.</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-semibold text-[#1a332a]">$62.00</span>
                <button className="bg-[#f0f2f0] p-2 rounded-full text-[#1a332a] hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="h-48 rounded-lg mb-6 w-full overflow-hidden bg-gray-100">
                <img 
                  src="/images/grade.jpg" 
                  alt="Ceremonial Grade Matcha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">Powders</p>
                <h4 className="font-serif text-lg text-[#1a332a] mb-2">Ceremonial Grade Matcha</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">Shade-grown, hand-picked green tea leaves offering sustained focus and a wealth of...</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-semibold text-[#1a332a]">$38.00</span>
                <button className="bg-[#f0f2f0] p-2 rounded-full text-[#1a332a] hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
      <Footer />
      
    </div>
  );
}