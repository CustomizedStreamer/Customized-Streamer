import { useState } from 'react';
import { useStreamerStore } from '../store/streamerStore';
import { generateResponse } from '../services/cohere';
import { Message } from '../types/streamer';

export function useStreaming() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentStreamer, addMessage } = useStreamerStore();

  const sendMessage = async (content: string) => {
    if (!currentStreamer || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    try {
      setIsLoading(true);
      addMessage(currentStreamer.id, userMessage);

      const response = await generateResponse(
        content,
        `${currentStreamer.personality} Streaming style: ${currentStreamer.streamingStyle}`,
        currentStreamer.name
      );

      const streamerMessage: Message = {
        role: 'streamer',
        content: response,
        timestamp: Date.now(),
      };

      addMessage(currentStreamer.id, streamerMessage);
    } catch (error) {
      console.error('Stream error:', error);
      addMessage(currentStreamer.id, {
        role: 'streamer',
        content: '$ ERROR: Stream connection failed. Please try again.',
        timestamp: Date.now(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentStreamer,
    messages: currentStreamer?.conversationHistory || [],
    isLoading,
    sendMessage,
  };
}