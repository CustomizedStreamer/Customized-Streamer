import React from 'react';

interface AsciiArtProps {
  art: string;
  caption?: string;
}

export function AsciiArt({ art, caption }: AsciiArtProps) {
  return (
    <pre className="text-xs mb-8">
      {art}
      {caption && <div className="text-green-300 mt-2">{caption}</div>}
    </pre>
  );
}