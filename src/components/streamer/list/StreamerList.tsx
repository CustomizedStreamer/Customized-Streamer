import React from 'react';
import { useStreamerStore } from '../../../store/streamerStore';
import { StreamerCard } from './StreamerCard';

export function StreamerList() {
  const { streamers, currentStreamer, setCurrentStreamer } = useStreamerStore();

  return (
    <div className="grid gap-2 h-full overflow-y-auto custom-scrollbar pr-2">
        {streamers.map((streamer) => (
          <StreamerCard
            key={streamer.id}
            streamer={streamer}
            isSelected={currentStreamer?.id === streamer.id}
            onClick={() => setCurrentStreamer(streamer)}
          />
        ))}
    </div>
  );
}