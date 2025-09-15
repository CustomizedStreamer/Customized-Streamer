import { useState, useEffect, useCallback } from 'react';
import { generateHolographicPattern } from '../utils/holographicPatterns';

export function useHolographicEffect(seed: string) {
  const [pattern, setPattern] = useState('');
  const [scanline, setScanline] = useState('');
  const [glitchEffect, setGlitchEffect] = useState('');
  const [interference, setInterference] = useState<string[]>([]);
  const [frame, setFrame] = useState(0);

  const updatePattern = useCallback(() => {
    const { mainPattern, scanlinePattern, glitchEffect, interference } = generateHolographicPattern(seed, frame);
    setPattern(mainPattern);
    setScanline(scanlinePattern);
    setGlitchEffect(glitchEffect);
    setInterference(interference);
  }, [seed, frame]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 60);
      updatePattern();
    }, 50);

    return () => clearInterval(interval);
  }, [updatePattern]);

  return { pattern, scanline, glitchEffect, interference };
}