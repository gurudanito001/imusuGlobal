"use client";

import React, { useEffect, useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import Footer from '@/components/footer';
export default function RedirectPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar over 5 seconds (100% / 50 steps = 2% per 100ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Execute the redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      // Replace this URL with the actual external destination
      window.location.href = 'https://example.com/botanical-labs-store'; 
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9F8] flex flex-col items-center justify-between font-sans">
      
      {/* Spacer for top */}
      <div className="flex-1"></div>

      {/* Main Redirect Card */}
      <main className="w-full max-w-md px-6 flex-1 flex items-center justify-center -mt-20">
        <div className="bg-white w-full rounded-2xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center">
          
          <div className="bg-[#F4F5F4] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            {/* Adding a slow spin animation for the functional feel */}
            <RefreshCcw className="text-[#1a332a] w-5 h-5 animate-[spin_3s_linear_infinite]" />
          </div>

          <h1 className="text-2xl font-serif text-[#1a332a] mb-4">Redirecting...</h1>
          
          <p className="text-sm text-gray-500 leading-relaxed mb-8 px-4">
            Taking you to the official partner store...<br />
            Your exclusive reseller benefits are being applied.
          </p>

          {/* Progress Bar Container */}
          <div className="w-full h-1 bg-[#e8eae8] rounded-full overflow-hidden mb-6">
            {/* Progress Fill */}
            <div 
              className="h-full bg-[#1a332a] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-xs text-gray-400">
            If you aren't redirected in 5 seconds,{' '}
            <a 
              href="https://example.com/botanical-labs-store" 
              className="font-semibold text-[#1a332a] underline underline-offset-2 hover:text-black transition-colors"
            >
              Click Here
            </a>
          </p>

        </div>
      </main>

      {/* Footer at the bottom */}
      <div className="w-full pb-10">
         <Footer />
      </div>
      
    </div>
  );
}