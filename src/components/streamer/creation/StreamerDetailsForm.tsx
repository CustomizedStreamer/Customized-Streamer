import React from 'react';
import { useStreamerCreation } from '../../../hooks/useStreamerCreation';
import { TerminalInput } from '../../common/TerminalInput';
import { TerminalPrompt } from '../../common/TerminalPrompt';

export function StreamerDetailsForm() {
  const {
    name,
    setName,
    description,
    setDescription,
    personality,
    setPersonality,
    streamingStyle,
    setStreamingStyle,
    handleSubmit,
    showSuccess
  } = useStreamerCreation();

  return (
    <div className="flex flex-col gap-2 flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 flex-1">
      <div>
        <TerminalPrompt>Name:</TerminalPrompt>
        <TerminalInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={12}
          required
          placeholder="Streamer name..."
        />
      </div>

      <div>
        <TerminalPrompt>Description:</TerminalPrompt>
        <TerminalInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Gaming, Just Chatting, etc..."
        />
      </div>

      <div>
        <TerminalPrompt>Streaming Style:</TerminalPrompt>
        <TerminalInput
          value={streamingStyle}
          onChange={(e) => setStreamingStyle(e.target.value)}
          required
          placeholder="Energetic, Chill, Educational..."
        />
      </div>

      <div className="flex-1 min-h-0">
        <TerminalPrompt>Personality:</TerminalPrompt>
        <textarea
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          className="w-full bg-black border border-green-500/20 p-2 text-green-500 rounded mt-1 focus:outline-none focus:border-green-500 resize-none h-[60px]"
          required
          placeholder="Funny, engaging, helpful..."
        />
        <button
          type="submit"
          className="w-full border border-green-500 p-2 rounded hover:bg-green-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-2"
        >
          <TerminalPrompt>Create Streamer</TerminalPrompt>
        </button>
      </div>

      </form>
    </div>
  );
}