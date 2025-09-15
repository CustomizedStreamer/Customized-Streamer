import React from 'react';

interface TerminalPromptProps {
  children: React.ReactNode;
  animate?: boolean;
}

export function TerminalPrompt({ children, animate = false }: TerminalPromptProps) {
  return (
    <div className={`${animate ? 'animate-pulse' : ''}`}>
      $ {children}
    </div>
  );
}