import React from 'react';
import { Streamer } from '../../types/streamer';
import { formatDate } from '../../utils/dateUtils';

interface StreamerStatsProps {
  streamer: Streamer;
}

export function StreamerStats({ streamer }: StreamerStatsProps) {
  const messageCount = streamer.conversationHistory.length;
  const lastActive = streamer.conversationHistory.length > 0
    ? formatDate(streamer.conversationHistory[streamer.conversationHistory.length - 1].timestamp)
    : 'Never';

  return (
    <div className="text-xs space-y-1 text-green-500/50">
      <div>Messages: {messageCount}</div>
      <div>Last Stream: {lastActive}</div>
      <div>Followers: {Math.floor(Math.random() * 10000) + 1000}</div>
    </div>
  );
}