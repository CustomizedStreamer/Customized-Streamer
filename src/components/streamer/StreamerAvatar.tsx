import React from 'react';
import { getAiFaceUrl } from '../../utils/imageUtils';

interface StreamerAvatarProps {
  imageId: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-24 h-24',
  lg: 'w-32 h-32'
};

export function StreamerAvatar({ imageId, name, size = 'md' }: StreamerAvatarProps) {
  return (
    <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden group bg-gray-500`}>
      <img
        src={getAiFaceUrl(imageId)}
        alt={`${name} avatar`}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border border-red-500/20 rounded-full" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </div>
  );
}