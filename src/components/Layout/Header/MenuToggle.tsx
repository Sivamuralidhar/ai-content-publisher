import React from 'react';
import { Menu } from 'lucide-react';
import { useSidebarStore } from '../../../store/useSidebarStore';

export function MenuToggle() {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <button
      onClick={toggle}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <Menu size={24} className="text-gray-600" />
    </button>
  );
}