import React from 'react';

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      <div className="animate-pulse">.</div>
      <div className="animate-pulse animation-delay-200">.</div>
      <div className="animate-pulse animation-delay-400">.</div>
    </div>
  );
}