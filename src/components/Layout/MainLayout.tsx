import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { PostHistory } from '../PostHistory';
import { useSidebarStore } from '../../store/useSidebarStore';
import { useThemeStore } from '../../store/useThemeStore';

export function MainLayout() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const theme = useThemeStore((state) => state.theme);
  const location = useLocation();

  // Only show post history on create post page
  const showPostHistory = location.pathname === '/';

  React.useEffect(() => {
    // Apply theme to root html element
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen font-inter ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-72' : 'ml-0'}`}>
          <div className={`grid ${showPostHistory ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'} gap-6 p-6`}>
            <div className={showPostHistory ? 'lg:col-span-2' : 'w-full'}>
              <Outlet />
            </div>
            {showPostHistory && (
              <div className="lg:col-span-1">
                <PostHistory />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}