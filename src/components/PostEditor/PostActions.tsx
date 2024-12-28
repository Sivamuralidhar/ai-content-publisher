import React from 'react';
import { Eye, Send } from 'lucide-react';

interface PostActionsProps {
  onPreview: () => void;
  onPublish: () => void;
  disabled: boolean;
}

export function PostActions({ onPreview, onPublish, disabled }: PostActionsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onPreview}
        disabled={disabled}
        className="flex-1 bg-gray-100 text-gray-700 p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <Eye size={20} />
        Preview
      </button>
      <button
        onClick={onPublish}
        disabled={disabled}
        className="flex-1 bg-purple-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-purple-700 disabled:opacity-50 dark:bg-purple-500 dark:hover:bg-purple-600"
      >
        <Send size={20} />
        Publish
      </button>
    </div>
  );
}