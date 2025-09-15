import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="font-mono text-green-500 bg-black h-full flex flex-col">
      <div className="border-b border-green-500/20 pb-2 mb-4 flex-shrink-0">
        ┌─[ {title} ]───────────────────────
      </div>
      <div className="px-4 flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}