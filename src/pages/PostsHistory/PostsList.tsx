import React from 'react';
import { Post } from '../../types';
import { format } from 'date-fns';
import { PostCard } from './PostCard';

interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="grid gap-4">
      {posts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No posts yet</p>
        </div>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}