"use client";

import React, { createContext, useContext, useState } from 'react';

// Define what our global state looks like
interface RegionContextType {
  regionLabel: string; // E.g., "EN | US" (For the Navbar)
  setRegionLabel: (label: string) => void;
  regionName: string; // E.g., "United States" (For the Catalog)
  setRegionName: (name: string) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: React.ReactNode }) {
  // Set default values here
  const [regionLabel, setRegionLabel] = useState("EN | US");
  const [regionName, setRegionName] = useState("United States");

  return (
    <RegionContext.Provider value={{ regionLabel, setRegionLabel, regionName, setRegionName }}>
      {children}
    </RegionContext.Provider>
  );
}

// Custom hook to easily use this context anywhere
export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}