import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { PostsList } from './PostsList';
import { PostStats } from './PostStats';
import { SearchBar } from '../../components/PostHistory/SearchBar';

export function PostsHistory() {
  const { posts } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.platforms.some(platform => 
      platform.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-4 dark:text-white">Posts History</h1>
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <PostStats posts={filteredPosts} />
      <PostsList posts={filteredPosts} />
    </div>
  );
}