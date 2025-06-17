// src/components/layout/Navbar.jsx
import React from 'react';
import { Moon, Sun, List, Users } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../ui/Button';

const Navbar = ({ currentView, setCurrentView }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              TaskManager Pro
            </h1>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => setCurrentView('tasks')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'tasks'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <List size={16} />
                Tasks
              </button>
              <button
                onClick={() => setCurrentView('users')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'users'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <Users size={16} />
                Users
              </button>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;