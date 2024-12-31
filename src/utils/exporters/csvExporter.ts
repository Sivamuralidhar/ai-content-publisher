import { Post } from '../../types';
import { format } from 'date-fns';

export async function generateCSV(data: Post | Post[]): Promise<void> {
  const posts = Array.isArray(data) ? data : [data];
  
  // Convert posts to CSV format
  const headers = ['Date', 'Content', 'Platforms', 'Status', 'Image', 'Link'];
  const rows = posts.map(post => [
    format(post.createdAt, 'PPP'),
    post.content,
    post.platforms.join('; '),
    post.status,
    post.image || '',
    post.link || ''
  ]);

  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create and download the CSV file
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `posts-${format(new Date(), 'yyyy-MM-dd')}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}