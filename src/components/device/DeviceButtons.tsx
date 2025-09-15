import React from 'react';

export function DeviceButtons() {
  return (
    <>
      {/* Power button with indicator light */}
      <div className="absolute -right-2 top-12 flex flex-col items-end gap-1">
        <div className="w-2 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-r-lg shadow-lg" />
        <div className="w-1 h-1 rounded-full bg-green-500/50 animate-pulse mr-0.5" />
      </div>
      
      {/* Volume buttons with texture */}
      <div className="absolute -right-2 top-32 w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-700 rounded-r-lg shadow-lg" />
      <div className="absolute -right-2 top-48 w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-700 rounded-r-lg shadow-lg" />
    </>
  );
}