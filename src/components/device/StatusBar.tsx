import React, { useState, useEffect } from 'react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());
  const [battery] = useState(Math.floor(Math.random() * 30) + 70);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 border-b border-green-500/20 flex items-center px-4 text-xs font-mono">
      <div className="flex items-center gap-4">
        <span className="text-green-500/70">SYS.0xFF</span>
        <span className="text-green-500/40">|</span>
        <span className="text-green-500/70">CORE.STABLE</span>
        <span className="animate-pulse text-green-500/70">●</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <span className="text-green-500/70">{time.toLocaleTimeString()}</span>
        <span className="text-green-500/40">|</span>
        <span className="text-green-500/70">MEM: 32.7TB</span>
        <span className="text-green-500/40">|</span>
        <span className="text-green-500/70">PWR: {battery}%</span>
      </div>
    </div>
  );
}