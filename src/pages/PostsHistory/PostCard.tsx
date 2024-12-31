import React, { useState } from 'react';
import { Post } from '../../types';
import { format } from 'date-fns';
import { Clock, Send, ExternalLink, Download } from 'lucide-react';
import { DownloadOptions } from '../../components/PostHistory/DownloadOptionsProps';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock size={16} />
          {format(post.createdAt, 'PPp')}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {post.platforms.map((platform) => (
              <span
                key={platform}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Download size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            {showDownloadOptions && (
              <DownloadOptions
                post={post}
                onClose={() => setShowDownloadOptions(false)}
              />
            )}
          </div>
        </div>
      </div>

      <p className="mb-4 text-gray-800 dark:text-gray-200">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Send size={16} className="text-green-600 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400">
            Published {format(post.publishedAt || post.createdAt, 'PP')}
          </span>
        </div>
        
        {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Post <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}