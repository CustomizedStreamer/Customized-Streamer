import React from 'react';
import { StreamerCreationPanel } from '../components/streamer/creation/StreamerCreationPanel';
import { StreamerListPanel } from '../components/streamer/list/StreamerListPanel';
import { TerminalWindow } from '../components/common/TerminalWindow';

export function StreamerStudio() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <TerminalWindow title="STREAMER STUDIO">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <StreamerCreationPanel />
          <StreamerListPanel />
        </div>
      </TerminalWindow>
    </div>
  );
}