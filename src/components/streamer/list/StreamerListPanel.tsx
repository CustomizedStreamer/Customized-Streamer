import React from 'react';
import { StreamerAvatarSelector } from '../creation/StreamerAvatarSelector';
import { useStreamerStore } from '../../../store/streamerStore';

export function StreamerListPanel() {
  const { showSuccess } = useStreamerStore();

  return (
    <div className="flex flex-col h-full">
      <div className="text-green-300 border-b border-green-500/20 pb-2 mb-3">
        AVATAR SELECTION
      </div>
      <div className="flex-1">
        <StreamerAvatarSelector />
        {showSuccess && (
          <div className="mt-3 text-green-300 p-2 border border-green-500/20 rounded bg-green-500/5">
            <div>✓ Streamer created successfully</div>
            <div className="text-green-500/70 text-sm mt-1">Check it out in the Active Streamers tab</div>
          </div>
        )}
      </div>
    </div>
  );
}