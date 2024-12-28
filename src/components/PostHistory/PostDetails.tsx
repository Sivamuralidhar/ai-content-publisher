import React from 'react';
import { Post } from '../../types';
import { format } from 'date-fns';
import { Clock, Link as LinkIcon, X } from 'lucide-react';

interface PostDetailsProps {
  post: Post;
  onClose: () => void;
}

export function PostDetails({ post, onClose }: PostDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Post Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={16} />
              {format(post.createdAt, 'PPp')}
            </div>
            <div className="flex gap-2">
              {post.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
          </div>
          
          {post.image && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt="Post"
                className="w-full h-auto"
              />
            </div>
          )}
          
          {post.link && (
            <div className="flex items-start gap-2 p-4 bg-gray-50 rounded-lg">
              <LinkIcon size={20} className="text-gray-400 mt-1" />
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                {post.link}
              </a>
            </div>
          )}
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Publishing Details</h3>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="text-gray-500">Status:</dt>
              <dd className="font-medium text-green-600">{post.status}</dd>
              <dt className="text-gray-500">Created:</dt>
              <dd>{format(post.createdAt, 'PPp')}</dd>
              {post.publishedAt && (
                <>
                  <dt className="text-gray-500">Published:</dt>
                  <dd>{format(post.publishedAt, 'PPp')}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}