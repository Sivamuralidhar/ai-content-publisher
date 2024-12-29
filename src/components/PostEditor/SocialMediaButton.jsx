import React from 'react';
import { Twitter, Facebook, Instagram, MessageCircle, Hash, Linkedin } from 'lucide-react';

const PLATFORM_CONFIG = {
  twitter: {
    icon: Twitter,
    label: 'Twitter',
    color: 'from-blue-400 to-blue-500',
    selectedColor: 'from-blue-500 to-blue-600',
  },
  facebook: {
    icon: Facebook,
    label: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    selectedColor: 'from-blue-700 to-blue-800',
  },
  instagram: {
    icon: Instagram,
    label: 'Instagram',
    color: 'from-pink-500 to-purple-500',
    selectedColor: 'from-pink-600 to-purple-600',
  },
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'from-blue-700 to-blue-800',
    selectedColor: 'from-blue-800 to-blue-900',
  },
  reddit: {
    icon: MessageCircle,
    label: 'Reddit',
    color: 'from-orange-500 to-orange-600',
    selectedColor: 'from-orange-600 to-orange-700',
  },
  threads: {
    icon: Hash,
    label: 'Threads',
    color: 'from-gray-800 to-gray-900',
    selectedColor: 'from-black to-gray-900',
  },
};

export function SocialMediaButton({ platform, selected, onClick }) {
  const config = PLATFORM_CONFIG[platform];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-3 rounded-lg
        flex items-center justify-center gap-3
        text-white font-medium
        transition-all duration-200
        bg-gradient-to-r shadow-sm
        hover:shadow-md active:scale-95
        ${selected 
          ? `${config.selectedColor} scale-[1.02]` 
          : `${config.color} hover:scale-[1.01]`
        }
      `}
    >
      <Icon size={20} className="flex-shrink-0" />
      <span>{config.label}</span>
    </button>
  );
}