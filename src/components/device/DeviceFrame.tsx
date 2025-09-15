import React from 'react';
import { StatusBar } from './StatusBar';

interface DeviceFrameProps {
  children: React.ReactNode;
}

export function DeviceFrame({ children }: DeviceFrameProps) {
  return (
    <div className="h-screen w-screen flex flex-col bg-black text-green-500 overflow-hidden relative">
      {/* Screen overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] to-green-500/[0.01]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
        <div className="absolute inset-0 scanline" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-500/20" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-green-500/20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-green-500/20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-500/20" />

      {/* Status indicators */}
      <div className="absolute top-4 left-20 w-2 h-2 bg-green-500/50 rounded-full animate-pulse" />
      <div className="absolute top-4 left-24 w-2 h-2 bg-green-500/30 rounded-full animate-pulse delay-75" />
      <div className="absolute top-4 left-28 w-2 h-2 bg-green-500/20 rounded-full animate-pulse delay-150" />

      {/* Main content */}
      <StatusBar />
      <main className="flex-1 p-6 overflow-hidden">
        {children}
      </main>

      {/* Bottom system line */}
      <div className="h-6 border-t border-green-500/20 flex items-center px-4 text-xs">
        <div className="flex-1">SYSTEM.READY</div>
        <div className="text-green-500/50">QUANTUM.CORE.ACTIVE</div>
      </div>
    </div>
  );
}