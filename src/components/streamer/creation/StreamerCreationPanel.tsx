import React from 'react';
import { StreamerDetailsForm } from './StreamerDetailsForm';

export function StreamerCreationPanel() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-green-300 border-b border-green-500/20 pb-2 mb-3">
        CREATE NEW STREAMER
      </div>
      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <StreamerDetailsForm />
      </div>
    </div>
  );
}