import React from 'react';
import { TerminalWindow } from '../components/common/TerminalWindow';
import { TerminalPrompt } from '../components/common/TerminalPrompt';

export function Home() {
  return (
    <TerminalWindow title="SYSTEM">
      <div className="space-y-6">
        <div className="border-b border-green-500/20 pb-4">
          <div className="text-green-500/80 font-bold">CUSTOMIZED STREAMER PLATFORM v1.0</div>
          <div className="text-green-500/50 text-sm">Build Stream.2025.1</div>
        </div>

        <div className="space-y-2">
          <TerminalPrompt>System Status: ONLINE</TerminalPrompt>
          <TerminalPrompt>Stream Core: ACTIVE</TerminalPrompt>
          <TerminalPrompt>Broadcast Network: INITIALIZED</TerminalPrompt>
        </div>

        <div className="space-y-2 mt-8">
          <div className="text-green-300 border-b border-green-500/20 pb-2">AVAILABLE COMMANDS:</div>
          <div className="pl-4 space-y-2">
            <div className="text-green-500/80">[1] System Overview</div>
            <div className="text-green-500/80">[2] Streamer Studio</div>
            <div className="text-green-500/80">[3] Stream Interface</div>
            <div className="text-green-500/80">[3] System Diagnostics</div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-green-500/20">
          <div className="text-green-500/50 animate-pulse">
            <TerminalPrompt>Ready to customize streamers...</TerminalPrompt>
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}