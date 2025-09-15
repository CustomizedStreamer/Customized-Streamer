import React from 'react';
import { TerminalWindow } from '../components/common/TerminalWindow';
import { StreamMessage } from '../components/stream/StreamMessage';
import { StreamInput } from '../components/stream/StreamInput';
import { useStreaming } from '../hooks/useStreaming';

export function StreamInterface() {
  const { currentStreamer, messages, isLoading, sendMessage } = useStreaming();

  if (!currentStreamer) {
    return (
      <div className="h-[calc(100vh-8rem)]">
        <TerminalWindow title="STREAM INTERFACE">
          <div className="text-center py-12">
            <div className="text-green-500/50 mb-4">$ No streamer selected</div>
            <div className="text-green-500/30 text-sm">Please create or select a streamer from the Active Streamers tab</div>
          </div>
        </TerminalWindow>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-8rem)]">
      <TerminalWindow title={`LIVE STREAM: ${currentStreamer.name.toUpperCase()}`}>
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 custom-scrollbar pr-2">
            <div className="border-b border-green-500/20 pb-4 mb-2">
              <div className="text-green-300 mb-2">
                🔴 {currentStreamer.name} is now streaming!
              </div>
              <div className="text-green-500/70 text-sm mb-1">
                Style: {currentStreamer.streamingStyle}
              </div>
              <div className="text-green-500/50 text-xs">
                {Math.floor(Math.random() * 500) + 50} viewers watching
              </div>
            </div>
            
            {messages.map((msg, i) => (
              <StreamMessage key={i} message={msg} streamerName={currentStreamer.name} />
            ))}
            
            {isLoading && (
              <div className="animate-pulse text-green-500/70">
                $ {currentStreamer.name} is typing...
              </div>
            )}
          </div>

          <div className="flex-shrink-0 -mt-2">
            <StreamInput onSubmit={sendMessage} isLoading={isLoading} />
          </div>
          
          {/* Bottom spacing to prevent touching border */}
          <div className="h-4"></div>
        </div>
      </TerminalWindow>
    </div>
  );
}