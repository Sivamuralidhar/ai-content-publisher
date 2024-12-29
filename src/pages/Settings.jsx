import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useThemeStore } from '../store/useThemeStore';
import { Moon, Sun, User, Mail, Save } from 'lucide-react';

export function Settings() {
  const { user, updateUser } = useStore();
  const { theme, setTheme } = useThemeStore();
  const [formData, setFormData] = useState({ ...user });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-lg font-bold mb-2 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold mb-4 dark:text-white">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <User size={16} />
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save size={18} />
              Update Profile
            </button>
            {showSuccess && (
              <div className="text-green-600 dark:text-green-400 text-sm text-center">
                Profile updated successfully!
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold mb-4 dark:text-white">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Theme
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
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
                  type="button"
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
      </form>
    </div>
  );
}