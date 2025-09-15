import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const loadingSteps = [
    'Initializing system...',
    'Loading streaming core...',
    'Connecting neural networks...',
    'Preparing holographic interface...',
    'System ready.'
  ];

  useEffect(() => {
    let stepIndex = 0;
    let charIndex = 0;
    const totalChars = loadingSteps.reduce((acc, step) => acc + step.length, 0);
    
    const typeText = () => {
      if (stepIndex < loadingSteps.length) {
        if (charIndex < loadingSteps[stepIndex].length) {
          setCurrentText(loadingSteps[stepIndex].substring(0, charIndex + 1));
          // Calculate total progress across all steps
          const completedChars = loadingSteps.slice(0, stepIndex).reduce((acc, step) => acc + step.length, 0) + charIndex + 1;
          setProgress((completedChars / totalChars) * 20);
          charIndex++;
          setTimeout(typeText, 30);
        } else {
          setTimeout(() => {
            stepIndex++;
            charIndex = 0;
            if (stepIndex === loadingSteps.length) {
              setProgress(20); // Ensure full completion
              setIsComplete(true);
              setTimeout(() => {
                onComplete();
              }, 500);
            } else {
              typeText();
            }
          }, 300);
        }
      }
    };

    const initialDelay = setTimeout(typeText, 200);
    return () => clearTimeout(initialDelay);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
      isComplete ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Preload video during loading */}
      <video
        src="https://res.cloudinary.com/dubelz7md/video/upload/v1757909445/Recording-CustomizedStreamerr_pwaqi2.mp4"
        preload="auto"
        className="absolute opacity-0 pointer-events-none w-1 h-1"
        muted
      />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] to-green-500/[0.01]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
        <div className="absolute inset-0 scanline" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-green-500/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-green-500/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-green-500/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-green-500/20" />

      {/* Main loading content */}
      <div className="relative z-10 text-center font-mono">
        <div className="mb-8">
          <div className="text-2xl font-bold text-green-500 mb-2 tracking-wider">
            CUSTOMIZED STREAMER
          </div>
          <div className="text-green-500/50 text-sm">
            AI STREAMING PLATFORM
          </div>
        </div>
        
        <div className="h-6 mb-4">
          <div className="text-green-400">
            $ {currentText}
            <span className="animate-pulse">_</span>
          </div>
        </div>
        
        {/* Square segments progress bar */}
        <div className="flex gap-1 mx-auto mb-4">
          {Array.from({ length: 20 }, (_, i) => {
            const isActive = i < progress;
            return (
              <div
                key={i}
                className={`w-3 h-3 border border-green-500/30 transition-all duration-300 ${
                  isActive 
                    ? 'bg-green-500 shadow-[0_0_4px_rgba(0,255,0,0.6)]' 
                    : 'bg-green-500/10'
                }`}
              />
            );
          })}
        </div>
        
        {/* Status dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full animate-pulse ${
                i === 0 ? 'bg-green-500' : i === 1 ? 'bg-green-500/70' : 'bg-green-500/40'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}