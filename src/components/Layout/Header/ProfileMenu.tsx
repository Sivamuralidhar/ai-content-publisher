import React from 'react';
import { Settings, History, LogOut } from 'lucide-react';
import { useStore } from '../../../store/useStore';
import { useNavigate } from 'react-router-dom';

export function ProfileMenu() {
  const { user } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/signup');
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2">
        <img
          src={user.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop'}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
        />
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
          <Settings size={16} />
          Settings
        </button>
        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
          <History size={16} />
          History
        </button>
        <hr className="my-1 border-gray-200 dark:border-gray-700" />
        <button 
          onClick={handleLogout}
          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}