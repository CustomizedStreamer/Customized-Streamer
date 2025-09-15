export interface Streamer {
  id: string;
  name: string;
  description: string;
  personality: string;
  avatarId: string; // Cloudinary image ID
  streamingStyle: string;
  conversationHistory: Message[];
}

export interface Message {
  role: 'user' | 'streamer';
  content: string;
  timestamp: number;
}