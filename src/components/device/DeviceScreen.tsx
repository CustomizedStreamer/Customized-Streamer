import React from 'react';

interface DeviceScreenProps {
  children: React.ReactNode;
}

export function DeviceScreen({ children }: DeviceScreenProps) {
  return (
    <div className="bg-black rounded-[24px] p-6 min-h-[700px] relative overflow-hidden">
      {/* Enhanced screen effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] to-green-500/[0.01] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      
      {/* Screen content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}