import React from 'react';
import { Message } from '../../types/streamer';

interface StreamMessageProps {
  message: Message;
  streamerName: string;
}

export function StreamMessage({ message, streamerName }: StreamMessageProps) {
  return (
    <div className="space-y-1">
      <div className="text-green-300">
        {message.role === 'user' ? 'Viewer:' : `${streamerName}:`}
      </div>
      <div className="pl-4 whitespace-pre-wrap">{message.content}</div>
    </div>
  );
}