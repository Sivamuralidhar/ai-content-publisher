import React from 'react';
import { Twitter, Facebook, Instagram, MessageCircle, Hash } from 'lucide-react';
import { Platform } from '../../types';

interface SocialMediaButtonProps {
  platform: Platform;
  selected: boolean;
  onClick: () => void;
}

const platformConfig = {
  twitter: {
    icon: Twitter,
    color: 'bg-blue-400 hover:bg-blue-500',
    selectedColor: 'bg-blue-600',
  },
  facebook: {
    icon: Facebook,
    color: 'bg-blue-600 hover:bg-blue-700',
    selectedColor: 'bg-blue-800',
  },
  instagram: {
    icon: Instagram,
    color: 'bg-pink-500 hover:bg-pink-600',
    selectedColor: 'bg-pink-700',
  },
  reddit: {
    icon: MessageCircle,
    color: 'bg-orange-500 hover:bg-orange-600',
    selectedColor: 'bg-orange-700',
  },
  threads: {
    icon: Hash,
    color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800',
    selectedColor: 'bg-black dark:bg-gray-900',
  },
};

export function SocialMediaButton({ platform, selected, onClick }: SocialMediaButtonProps) {
  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      className={`
        p-3 rounded-full transition-all duration-200 transform
        ${selected 
          ? `${config.selectedColor} text-white scale-110 shadow-lg` 
          : `${config.color} text-white hover:scale-105 shadow-md`
        }
        hover:shadow-xl active:scale-95
      `}
      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
    >
      <Icon size={24} />
    </button>
  );
}