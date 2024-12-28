import React from 'react';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';
import { Clock, Send } from 'lucide-react';
import { PostDetails } from './PostHistory/PostDetails';

export function PostHistory() {
  const { posts } = useStore();
  const [selectedPost, setSelectedPost] = React.useState(null);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Post History</h2>
      {posts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No posts yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={16} />
                  {format(post.createdAt, 'PPp')}
                </div>
                <div className="flex gap-1">
                  {post.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-2 line-clamp-3 dark:text-gray-300">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-32 object-cover rounded mb-2"
                />
              )}
              <div className="mt-2 flex items-center gap-2 text-sm">
                <Send size={16} className="text-green-600 dark:text-green-400" />
                <span className="text-green-600 dark:text-green-400">
                  {post.status === 'published'
                    ? `Published ${post.publishedAt ? format(post.publishedAt, 'PP') : ''}`
                    : 'Draft'}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedPost && (
        <PostDetails
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}