import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { PostsList } from './PostsList';
import { PostStats } from './PostStats';
import { SearchBar } from '../../components/PostHistory/SearchBar';
import { Download } from 'lucide-react';
import { DownloadOptions } from '../../components/PostHistory/DownloadOptionsProps';

export function PostsHistory() {
  const { posts } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.platforms.some(platform => 
      platform.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold dark:text-white">Posts History</h1>
          <div className="relative">
            <button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={18} />
              Download All
            </button>
            {showDownloadOptions && (
              <DownloadOptions
                posts={filteredPosts}
                onClose={() => setShowDownloadOptions(false)}
              />
            )}
          </div>
        </div>
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />
      </div>

      <PostStats posts={filteredPosts} />
      <PostsList posts={filteredPosts} />
    </div>
  );
}