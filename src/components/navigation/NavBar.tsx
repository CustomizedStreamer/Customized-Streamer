import React from 'react';
import { Github, Twitter } from 'lucide-react';

interface NavBarProps {
  currentView: string;
  onViewChange: (view: 'home' | 'studio' | 'active' | 'stream' | 'recording') => void;
}

export function NavBar({ currentView, onViewChange }: NavBarProps) {
  return (
    <div className="font-mono mb-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
      <button
        onClick={() => onViewChange('home')}
        className={`px-4 py-1 border border-green-500/20 ${
          currentView === 'home' ? 'bg-green-500/10 text-green-300' : 'text-green-500/70 hover:border-green-500/40'
        }`}
      >
        [1:SYS]
      </button>
      <button
        onClick={() => onViewChange('studio')}
        className={`px-4 py-1 border border-green-500/20 ${
          currentView === 'studio' ? 'bg-green-500/10 text-green-300' : 'text-green-500/70 hover:border-green-500/40'
        }`}
      >
        [2:STD]
      </button>
      <button
        onClick={() => onViewChange('active')}
        className={`px-4 py-1 border border-green-500/20 ${
          currentView === 'active' ? 'bg-green-500/10 text-green-300' : 'text-green-500/70 hover:border-green-500/40'
        }`}
      >
        [3:ACT]
      </button>
      <button
        onClick={() => onViewChange('stream')}
        className={`px-4 py-1 border border-green-500/20 ${
          currentView === 'stream' ? 'bg-green-500/10 text-green-300' : 'text-green-500/70 hover:border-green-500/40'
        }`}
      >
        [4:STM]
      </button>
      <button
        onClick={() => onViewChange('recording')}
        className={`px-4 py-1 border border-green-500/20 ${
          currentView === 'recording' ? 'bg-green-500/10 text-green-300' : 'text-green-500/70 hover:border-green-500/40'
        }`}
      >
        [5:REC]
      </button>
      </div>
      
      <div className="flex gap-4">
        <a
          href="https://x.com/customizestream"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-300 transition-colors flex items-center gap-2"
          title="Follow @customizestream on X"
        >
          <Twitter size={14} />
          [X]
        </a>
        <a
          href="https://github.com/CustomizedStreamer/Customized-Streamer"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-300 transition-colors flex items-center gap-2"
          title="View CustomizedStreamer on Github"
        >
          <Github size={14} />
          [GIT]
        </a>
      </div>
    </div>
  );
}