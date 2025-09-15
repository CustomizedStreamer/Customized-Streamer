import React from 'react';
import { useStreamerStore } from '../../../store/streamerStore';
import { StreamerAvatar } from '../StreamerAvatar';
import { AI_FACES } from '../../../config/cloudinary';

export function StreamerAvatarSelector() {
  const { selectedAvatarId, setSelectedAvatarId } = useStreamerStore();

  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(AI_FACES).map(([key, avatarId]) => (
        <button
          key={avatarId}
          type="button"
          onClick={() => setSelectedAvatarId(avatarId)}
          className={`p-1.5 rounded-lg flex flex-col items-center gap-1 ${
            selectedAvatarId === avatarId
              ? 'border-2 border-green-500'
              : 'border border-green-500/20'
          }`}
        >
          <StreamerAvatar imageId={avatarId} name="Streamer Avatar" size="sm" />
          <span className="text-xs text-green-500/70">
            {key.replace('face', 'Avatar ')}
          </span>
        </button>
      ))}
    </div>
  );
}