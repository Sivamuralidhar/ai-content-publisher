import React from 'react';
import { useStore } from '../store/useStore';
import { useThemeStore } from '../store/useThemeStore';
import { Moon, Sun, User, Mail, Lock } from 'lucide-react';

export function Settings() {
  const { user, updateUser } = useStore();
  const { theme, setTheme } = useThemeStore();

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-lg font-bold mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <User size={16} />
                Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => updateUser({ name: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => updateUser({ email: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Theme
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2 ${
                    theme === 'light'
                      ? 'bg-blue-50 dark:bg-blue-900 border-blue-600'
                      : 'dark:bg-gray-700 dark:border-gray-600'
                  }`}
                >
                  <Sun size={18} />
                  Light
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2 ${
                    theme === 'dark'
                      ? 'bg-blue-50 dark:bg-blue-900 border-blue-600'
                      : 'dark:bg-gray-700 dark:border-gray-600'
                  }`}
                >
                  <Moon size={18} />
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}