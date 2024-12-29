import React from 'react';
import { SocialMediaButton } from './SocialMediaButton';
import { Platform } from '../../types/platform';

const PLATFORMS: Platform[] = [
  'twitter',
  'facebook',
  'instagram',
  'linkedin',
  'reddit',
  'threads'
];

interface SocialPlatformsProps {
  selectedPlatforms: Platform[];
  onPlatformsChange: (platforms: Platform[]) => void;
}

export function SocialPlatforms({ selectedPlatforms, onPlatformsChange }: SocialPlatformsProps) {
  const togglePlatform = (platform: Platform) => {
    onPlatformsChange(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter((p) => p !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  return (
    <div>
      <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Select Platforms</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PLATFORMS.map((platform) => (
          <SocialMediaButton
            key={platform}
            platform={platform}
            selected={selectedPlatforms.includes(platform)}
            onClick={() => togglePlatform(platform)}
          />
        ))}
      </div>
    </div>
  );
}