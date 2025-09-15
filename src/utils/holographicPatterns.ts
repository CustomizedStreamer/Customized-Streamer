const FACE_PATTERNS = [
  [
    "╭──────────╮",
    "│ ◢██  ██◣ │",
    "│  ◢████◣  │",
    "│   ◢◣◢◣   │",
    "╰──────────╯"
  ],
  [
    "╭──────────╮",
    "│ ◈██  ██◈ │",
    "│  ◇████◇  │",
    "│   ◆◇◆◇   │",
    "╰──────────╯"
  ],
  [
    "╭──────────╮",
    "│ ▣██  ██▣ │",
    "│  ▢████▢  │",
    "│   ▣▢▣▢   │",
    "╰──────────╯"
  ],
  [
    "╭──────────╮",
    "│ ◉██  ██◉ │",
    "│  ◎████◎  │",
    "│   ◉◎◉◎   │",
    "╰──────────╯"
  ]
];

const GLITCH_EFFECTS = [
  "░", "▒", "▓", "█", "▀", "▄", "▌", "▐"
];

const SCANLINE_PATTERNS = [
  "▁▁▁▁▁▁▁▁▁▁",
  "▂▂▂▂▂▂▂▂▂▂",
  "▃▃▃▃▃▃▃▃▃▃",
  "▄▄▄▄▄▄▄▄▄▄",
  "▅▅▅▅▅▅▅▅▅▅",
  "▆▆▆▆▆▆▆▆▆▆",
  "▇▇▇▇▇▇▇▇▇▇",
  "████████████"
];

export function generateHolographicPattern(seed: string, frame: number): { 
  mainPattern: string, 
  scanlinePattern: string,
  glitchEffect: string,
  interference: string[]
} {
  // Generate base pattern
  const patternIndex = Math.abs(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % FACE_PATTERNS.length;
  const basePattern = FACE_PATTERNS[patternIndex];
  
  // Add glitch effect
  const glitchOffset = Math.sin(frame * 0.2) * 2;
  const glitchChar = GLITCH_EFFECTS[Math.floor(frame / 3) % GLITCH_EFFECTS.length];
  
  // Generate main pattern with glitch
  const mainPattern = basePattern
    .map((line, i) => {
      const offset = Math.max(0, Math.floor(glitchOffset));
      const glitchLine = Math.random() < 0.1 ? line.replace(/[│█◣◢◤◥]/, glitchChar) : line;
      return ' '.repeat(offset) + glitchLine;
    })
    .join('\n');

  // Generate scanline effect
  const scanlineIndex = Math.floor(frame / 4) % SCANLINE_PATTERNS.length;
  const scanlinePattern = SCANLINE_PATTERNS[scanlineIndex];

  // Generate interference lines
  const interference = Array.from({ length: 3 }, () => {
    const pos = Math.floor(Math.random() * basePattern.length);
    const width = Math.floor(Math.random() * 5) + 3;
    return '█'.repeat(width);
  });

  return { 
    mainPattern, 
    scanlinePattern,
    glitchEffect: glitchChar,
    interference
  };
}