import React from 'react';
import { Twitter, Facebook, Instagram, MessageCircle, Hash } from 'lucide-react';
import { Platform } from '../../types';

interface SocialButtonsProps {
  selectedPlatforms: Platform[];
  onPlatformsChange: (platforms: Platform[]) => void;
}

const platformIcons = {
  twitter: { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500' },
  facebook: { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
  instagram: { icon: Instagram, color: 'bg-pink-500 hover:bg-pink-600' },
  reddit: { icon: MessageCircle, color: 'bg-orange-500 hover:bg-orange-600' },
  threads: { icon: Hash, color: 'bg-black hover:bg-gray-800' },
};

export function SocialButtons({ selectedPlatforms, onPlatformsChange }: SocialButtonsProps) {
  const togglePlatform = (platform: Platform) => {
    onPlatformsChange(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter((p) => p !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {(Object.keys(platformIcons) as Platform[]).map((platform) => {
        const { icon: Icon, color } = platformIcons[platform];
        const isSelected = selectedPlatforms.includes(platform);
        
        return (
          <button
            key={platform}
            onClick={() => togglePlatform(platform)}
            className={`
              p-3 rounded-full transition-all duration-200 transform
              ${isSelected ? `${color} text-white scale-110` : 'bg-gray-100 text-gray-600 hover:scale-105'}
              shadow-lg hover:shadow-xl
            `}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </div>
  );
}