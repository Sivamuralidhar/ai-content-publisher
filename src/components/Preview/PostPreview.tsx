import React from 'react';
import { Post } from '../../types';
import { format } from 'date-fns';
import { X } from 'lucide-react';

interface PostPreviewProps {
  post: Partial<Post>;
  onClose: () => void;
}

export function PostPreview({ post, onClose }: PostPreviewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Post Preview</h2>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.platforms?.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
            </div>
            
            {post.image && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post preview"
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
            
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-50 rounded-lg text-blue-600 hover:text-blue-800 break-all"
              >
                {post.link}
              </a>
            )}
            
            {post.publishedAt && (
              <div className="text-sm text-gray-500">
                Published: {format(post.publishedAt, 'PPp')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}