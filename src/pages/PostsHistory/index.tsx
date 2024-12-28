import React from 'react';
import { useStore } from '../../store/useStore';
import { PostsList } from './PostsList';
import { PostStats } from './PostStats';

export function PostsHistory() {
  const { posts } = useStore();

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-2 dark:text-white">Posts History</h1>
        <p className="text-gray-600 dark:text-gray-400">Track and manage your published content</p>
      </div>

      <PostStats posts={posts} />
      <PostsList posts={posts} />
    </div>
  );
}