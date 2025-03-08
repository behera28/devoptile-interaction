
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor, X } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const { theme, setTheme } = useTheme();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="glass-morph w-full max-w-md p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Theme</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                  theme === 'light' ? 'bg-cloud-button text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Sun size={24} className="mb-2" />
                <span>Light</span>
              </button>
              
              <button
                onClick={() => setTheme('dark')}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'bg-cloud-button text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Moon size={24} className="mb-2" />
                <span>Dark</span>
              </button>
              
              <button
                onClick={() => setTheme('system')}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                  theme === 'system' ? 'bg-cloud-button text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Monitor size={24} className="mb-2" />
                <span>System</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
