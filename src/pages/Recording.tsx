import React from 'react';
import { TerminalWindow } from '../components/common/TerminalWindow';
import { TerminalPrompt } from '../components/common/TerminalPrompt';

export function Recording() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <TerminalWindow title="LIVE RECORDING - SYSTEM DEMO">
        <div className="space-y-4 h-full overflow-y-auto custom-scrollbar pr-2">
          <div className="border-b border-green-500/20 pb-4">
            <div className="text-green-500/80 font-bold">🔴 LIVE PREVIEW RECORDING</div>
            <div className="text-green-500/50 text-sm">Automated Creation & Integration Demo</div>
          </div>

          <div className="space-y-1">
            <TerminalPrompt>Recording Status: ACTIVE</TerminalPrompt>
            <TerminalPrompt>Demo Mode: AUTOMATION & CREATION</TerminalPrompt>
            <TerminalPrompt>Integration: LIVE PREVIEW</TerminalPrompt>
          </div>

          <div className="space-y-3">
            <div className="text-green-300 border-b border-green-500/20 pb-2">
              SYSTEM DEMONSTRATION
            </div>
            
            <div className="bg-black/30 border border-green-500/20 rounded-lg p-3">
              <video
                src="https://res.cloudinary.com/dubelz7md/video/upload/v1757909445/Recording-CustomizedStreamerr_pwaqi2.mp4"
                controls
                className="w-full max-w-3xl mx-auto rounded-lg border border-green-500/20 max-h-[300px]"
                style={{
                  filter: 'contrast(1.1) brightness(0.95) hue-rotate(-5deg)',
                  background: 'rgba(0, 255, 0, 0.05)'
                }}
              >
                <source src="https://res.cloudinary.com/dubelz7md/video/upload/v1757909445/Recording-CustomizedStreamerr_pwaqi2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
              <div className="space-y-2">
                <div className="text-green-300">FEATURES DEMONSTRATED:</div>
                <div className="pl-3 space-y-1">
                  <div className="text-green-500/80">→ Automated Streamer Creation</div>
                  <div className="text-green-500/80">→ Real-time Avatar Selection</div>
                  <div className="text-green-500/80">→ Live Stream Integration</div>
                  <div className="text-green-500/80">→ AI-Powered Conversations</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-green-300">SYSTEM CAPABILITIES:</div>
                <div className="pl-3 space-y-1">
                  <div className="text-green-500/80">→ Dynamic UI Updates</div>
                  <div className="text-green-500/80">→ Cross-Component Integration</div>
                  <div className="text-green-500/80">→ State Management</div>
                  <div className="text-green-500/80">→ Real-time Interactions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-green-500/20">
            <div className="text-green-500/50 animate-pulse">
              <TerminalPrompt>Live preview recording operational...</TerminalPrompt>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}