import React from 'react';
import { PenSquare, Lightbulb, Sparkles, DollarSign, Settings, Info, History } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { useSidebarStore } from '../../../store/useSidebarStore';
import { useThemeStore } from '../../../store/useThemeStore';

const menuItems = [
  { icon: PenSquare, label: 'Create Post', to: '/' },
  { icon: History, label: 'Posts History', to: '/posts' },
  { icon: Lightbulb, label: 'Content Ideas', to: '/ideas' },
  { icon: Sparkles, label: 'AI Templates', to: '/templates' },
  { icon: DollarSign, label: 'Pricing', to: '/pricing' },
  { icon: Info, label: 'About Us', to: '/about' },
];

const bottomMenuItems = [
  { icon: Settings, label: 'Settings', to: '/settings' },
];

export function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const theme = useThemeStore((state) => state.theme);

  return (
    <aside 
      className={`fixed left-0 top-16 w-72 h-[calc(100vh-4rem)] ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-r p-4 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="space-y-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
        {bottomMenuItems.map((item) => (
          <MenuItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </div>
    </aside>
  );
}