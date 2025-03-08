
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor, X, LogIn, LogOut, User, GitBranch, Volume2, Volume1, VolumeX } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const { theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [soundLevel, setSoundLevel] = useState<'high' | 'low' | 'muted'>('high');
  const [motionReduced, setMotionReduced] = useState(false);
  
  const handleLogin = () => {
    // Logic for login would go here
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    // Logic for logout would go here
    setIsLoggedIn(false);
  };
  
  const toggleSoundLevel = () => {
    if (soundLevel === 'high') setSoundLevel('low');
    else if (soundLevel === 'low') setSoundLevel('muted');
    else setSoundLevel('high');
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="glass-morph w-full max-w-md p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold font-keedy">Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3 font-keedy">Theme</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  theme === 'light' ? 'bg-cloud-button text-white shadow-lg' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Sun size={24} className="mb-2" />
                <span className="font-keedy">Light</span>
              </button>
              
              <button
                onClick={() => setTheme('dark')}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  theme === 'dark' ? 'bg-cloud-button text-white shadow-lg' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Moon size={24} className="mb-2" />
                <span className="font-keedy">Dark</span>
              </button>
              
              <button
                onClick={() => setTheme('system')}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  theme === 'system' ? 'bg-cloud-button text-white shadow-lg' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <Monitor size={24} className="mb-2" />
                <span className="font-keedy">System</span>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 font-keedy">Account</h3>
            {isLoggedIn ? (
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cloud-button flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-keedy">User Account</p>
                    <p className="text-sm opacity-70">user@example.com</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <LogOut size={16} />
                  <span className="font-keedy">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-2 p-3 bg-cloud-button text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <LogIn size={18} />
                <span className="font-keedy">Login</span>
              </button>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 font-keedy">Preferences</h3>
            <div className="space-y-3">
              <button 
                onClick={toggleSoundLevel}
                className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  {soundLevel === 'high' && <Volume2 size={18} />}
                  {soundLevel === 'low' && <Volume1 size={18} />}
                  {soundLevel === 'muted' && <VolumeX size={18} />}
                  <span className="font-keedy">Sound</span>
                </div>
                <span className="font-keedy capitalize">{soundLevel}</span>
              </button>
              
              <button
                onClick={() => setMotionReduced(!motionReduced)}
                className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GitBranch size={18} />
                  <span className="font-keedy">Reduced Motion</span>
                </div>
                <div className={`w-10 h-6 rounded-full transition-colors duration-200 flex items-center ${motionReduced ? 'bg-cloud-button' : 'bg-white/20'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${motionReduced ? 'translate-x-5' : 'translate-x-1'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
