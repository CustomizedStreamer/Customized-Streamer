import React from 'react';

export function DeviceHomeButton() {
  return (
    <div className="mt-4 mx-auto w-12 h-12 rounded-full bg-gradient-to-b from-gray-600 to-gray-700 flex items-center justify-center shadow-lg">
      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-green-500/10 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}