import React from 'react';
import { Streamer } from '../../../types/streamer';
import { StreamerAvatar } from '../StreamerAvatar';
import { StreamerStats } from '../StreamerStats';

interface StreamerCardProps {
  streamer: Streamer;
  isSelected: boolean;
  onClick: () => void;
}

export function StreamerCard({ streamer, isSelected, onClick }: StreamerCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`p-3 border ${
        isSelected ? 'border-green-500' : 'border-green-500/20'
      } bg-black/30 cursor-pointer transition-all duration-300 hover:border-green-500/50 rounded-lg`}
    >
      <div className="flex gap-3">
        <StreamerAvatar imageId={streamer.avatarId} name={streamer.name} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="text-green-300 font-bold mb-1 truncate">{streamer.name}</div>
          <div className="text-green-500/70 text-sm mb-1 line-clamp-1">{streamer.description}</div>
          <div className="text-green-500/50 text-xs mb-2">{streamer.streamingStyle}</div>
          <StreamerStats streamer={streamer} />
        </div>
      </div>
    </div>
  );
}