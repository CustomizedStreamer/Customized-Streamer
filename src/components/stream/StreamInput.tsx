import React, { useState } from 'react';

interface StreamInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
}

export function StreamInput({ onSubmit, isLoading }: StreamInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 border-t border-green-500/20 pt-4">
      <span>{'>'}</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none text-green-500"
        placeholder={isLoading ? 'Streaming...' : 'Chat with the streamer...'}
        disabled={isLoading}
        autoFocus
      />
    </form>
  );
}