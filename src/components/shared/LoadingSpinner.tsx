import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="w-10 h-10 rounded-full border-4 border-blue-200"></div>
          <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}