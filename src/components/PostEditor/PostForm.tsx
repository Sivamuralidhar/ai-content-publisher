import React from 'react';
import { Platform } from '../../types';
import { Image, Link } from 'lucide-react';
import { SocialMediaButton } from './SocialMediaButton';

interface PostFormProps {
  content: string;
  image: string;
  link: string;
  selectedPlatforms: Platform[];
  platforms: Platform[];
  onContentChange: (content: string) => void;
  onImageChange: (image: string) => void;
  onLinkChange: (link: string) => void;
  onPlatformsChange: (platforms: Platform[]) => void;
}

export function PostForm({
  content,
  image,
  link,
  selectedPlatforms,
  platforms,
  onContentChange,
  onImageChange,
  onLinkChange,
  onPlatformsChange,
}: PostFormProps) {
  const togglePlatform = (platform: Platform) => {
    onPlatformsChange(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter((p) => p !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Write your post content..."
          className="w-full p-4 border rounded-xl bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
            <Image size={20} />
            <span>Image URL</span>
          </div>
          <input
            type="text"
            value={image}
            onChange={(e) => onImageChange(e.target.value)}
            placeholder="Add image URL..."
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
            <Link size={20} />
            <span>Link</span>
          </div>
          <input
            type="text"
            value={link}
            onChange={(e) => onLinkChange(e.target.value)}
            placeholder="Add a link..."
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Select Platforms</h3>
        <div className="flex flex-wrap gap-4">
          {platforms.map((platform) => (
            <SocialMediaButton
              key={platform}
              platform={platform}
              selected={selectedPlatforms.includes(platform)}
              onClick={() => togglePlatform(platform)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}