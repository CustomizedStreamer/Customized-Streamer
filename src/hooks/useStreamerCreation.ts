import { useState } from 'react';
import { useStreamerStore } from '../store/streamerStore';
import { AI_FACES } from '../config/cloudinary';

export function useStreamerCreation() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [personality, setPersonality] = useState('');
  const [streamingStyle, setStreamingStyle] = useState('');
  const { addStreamer, setCurrentStreamer, setShowSuccess, selectedAvatarId } = useStreamerStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStreamer = {
      id: Date.now().toString(),
      name,
      description,
      personality,
      streamingStyle,
      avatarId: selectedAvatarId,
      conversationHistory: [],
    };
    addStreamer(newStreamer);
    setCurrentStreamer(newStreamer);
    setName('');
    setDescription('');
    setPersonality('');
    setStreamingStyle('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return {
    name,
    setName,
    description,
    setDescription,
    personality,
    setPersonality,
    streamingStyle,
    setStreamingStyle,
    handleSubmit,
  };
}