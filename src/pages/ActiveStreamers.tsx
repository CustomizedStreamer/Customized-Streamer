import React from 'react';
import { TerminalWindow } from '../components/common/TerminalWindow';
import { useStreamerStore } from '../store/streamerStore';
import { StreamerCard } from '../components/streamer/list/StreamerCard';

export function ActiveStreamers() {
  const { streamers, currentStreamer, setCurrentStreamer } = useStreamerStore();

  return (
    <div className="h-[calc(100vh-8rem)]">
      <TerminalWindow title="ACTIVE STREAMERS">
        <div className="space-y-4 h-full flex flex-col">
          <div className="border-b border-green-500/20 pb-4 flex justify-between items-center">
            <div>
              <div className="text-green-500/80">Currently Online: {streamers.length}</div>
              <div className="text-green-500/50 text-sm">Live streaming now</div>
            </div>
            <div className="text-green-500/50 text-sm">
              Click on any streamer to start watching their stream
            </div>
          </div>

          {streamers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-green-500/50 mb-4">
                No active streamers found
              </div>
              <div className="text-green-500/30 text-sm">
                Create streamers in the Studio to see them here
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-0">
              {streamers.map((streamer) => (
                <div key={streamer.id} className="relative">
                  <StreamerCard
                    streamer={streamer}
                    isSelected={currentStreamer?.id === streamer.id}
                    onClick={() => setCurrentStreamer(streamer)}
                  />
                  <div className="absolute top-1 right-1 flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs text-red-400">LIVE</span>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-green-500/50">
                    {Math.floor(Math.random() * 500) + 50} viewers
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </TerminalWindow>
    </div>
  );
}