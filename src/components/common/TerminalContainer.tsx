import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TerminalContainerProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function TerminalContainer({ icon: Icon, title, children }: TerminalContainerProps) {
  return (
    <div className="font-mono text-green-500 bg-black p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4 border-b border-green-500 pb-2">
        <Icon size={20} />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}