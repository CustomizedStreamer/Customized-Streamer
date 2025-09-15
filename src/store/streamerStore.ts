import { create } from 'zustand';
import { Streamer, Message } from '../types/streamer';
import { AI_FACES } from '../config/cloudinary';

interface StreamerStore {
  streamers: Streamer[];
  currentStreamer: Streamer | null;
  showSuccess: boolean;
  selectedAvatarId: string;
  addStreamer: (streamer: Streamer) => void;
  setCurrentStreamer: (streamer: Streamer | null) => void;
  addMessage: (streamerId: string, message: Message) => void;
  updateStreamerState: (streamerId: string, updates: Partial<Streamer>) => void;
  setShowSuccess: (show: boolean) => void;
  setSelectedAvatarId: (avatarId: string) => void;
}

export const useStreamerStore = create<StreamerStore>((set) => ({
  streamers: [],
  currentStreamer: null,
  showSuccess: false,
  selectedAvatarId: AI_FACES.face1,
  addStreamer: (streamer) =>
    set((state) => ({
      streamers: [...state.streamers, streamer],
      currentStreamer: streamer, // Auto-select newly created streamer
      showSuccess: true,
      // Keep the selected avatar for next creation
    })),
  setCurrentStreamer: (streamer) =>
    set({ currentStreamer: streamer }),
  addMessage: (streamerId, message) =>
    set((state) => {
      const updatedStreamers = state.streamers.map((streamer) =>
        streamer.id === streamerId
          ? {
              ...streamer,
              conversationHistory: [...streamer.conversationHistory, message],
            }
          : streamer
      );
      
      return {
        streamers: updatedStreamers,
        currentStreamer: state.currentStreamer?.id === streamerId
          ? updatedStreamers.find(s => s.id === streamerId) || null
          : state.currentStreamer
      };
    }),
  updateStreamerState: (streamerId, updates) =>
    set((state) => {
      const updatedStreamers = state.streamers.map((streamer) =>
        streamer.id === streamerId ? { ...streamer, ...updates } : streamer
      );
      
      return {
        streamers: updatedStreamers,
        currentStreamer: state.currentStreamer?.id === streamerId
          ? updatedStreamers.find(s => s.id === streamerId) || null
          : state.currentStreamer
      };
    }),
  setShowSuccess: (show) =>
    set({ showSuccess: show }),
  setSelectedAvatarId: (avatarId) =>
    set({ selectedAvatarId: avatarId }),
}));