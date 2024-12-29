import React from 'react';
import { Post } from '../../types';
import { BarChart2, Share2, Clock, Infinity } from 'lucide-react';

interface PostStatsProps {
  posts: Post[];
}

export function PostStats({ posts }: PostStatsProps) {
  const stats = {
    total: posts.length,
    platforms: new Set(posts.flatMap(post => post.platforms)).size,
    thisMonth: posts.filter(post => {
      const now = new Date();
      const postDate = new Date(post.publishedAt || post.createdAt);
      return postDate.getMonth() === now.getMonth() &&
        postDate.getFullYear() === now.getFullYear();
    }).length
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        icon={BarChart2}
        label="Total Posts"
        value={stats.total}
      />
      <StatCard
        icon={Share2}
        label="Platforms Used"
        value={stats.platforms}
      />
      <StatCard
        icon={Infinity}
        label="Daily limit"
        value={stats.platforms}
      />
      <StatCard
        icon={Clock}
        label="Posts This Month"
        value={stats.thisMonth}
      />
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}