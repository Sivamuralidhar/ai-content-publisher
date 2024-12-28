import React from 'react';
import { Brain } from 'lucide-react';
import { ProfileMenu } from './ProfileMenu';
import { MenuToggle } from './MenuToggle';

export function Header() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center gap-3 flex-1">
            <MenuToggle />
            <div className="p-2 bg-blue-50 rounded-lg">
              <Brain size={28} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Social Publisher</h1>
              <p className="text-sm text-gray-500">Create and manage your social media content</p>
            </div>
          </div>
          <div className="pr-6">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}