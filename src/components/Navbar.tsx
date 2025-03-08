
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings as SettingsIcon } from "lucide-react";
import Settings from "./Settings";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? resolvedTheme === 'dark' 
            ? 'bg-cloud-dark/90 backdrop-blur-md shadow-md' 
            : 'bg-cloud-light/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className={`text-2xl font-semibold font-keedy ${resolvedTheme === 'dark' ? 'text-white' : 'text-cloud-textDark'} transition-transform hover:scale-105`}>
            CloudMorph
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link transition-all font-keedy ${
                resolvedTheme === 'dark'
                  ? location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
                  : location.pathname === '/' ? 'text-cloud-textDark' : 'text-gray-600 hover:text-cloud-textDark'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/devops-assistant" 
              className={`nav-link transition-all font-keedy ${
                resolvedTheme === 'dark'
                  ? location.pathname === '/devops-assistant' ? 'text-white' : 'text-gray-300 hover:text-white'
                  : location.pathname === '/devops-assistant' ? 'text-cloud-textDark' : 'text-gray-600 hover:text-cloud-textDark'
              }`}
            >
              DevOps Assistant
            </Link>
            <Link 
              to="/iac-translator" 
              className={`nav-link transition-all font-keedy ${
                resolvedTheme === 'dark'
                  ? location.pathname === '/iac-translator' ? 'text-white' : 'text-gray-300 hover:text-white'
                  : location.pathname === '/iac-translator' ? 'text-cloud-textDark' : 'text-gray-600 hover:text-cloud-textDark'
              }`}
            >
              IaC Translator
            </Link>
            <Link 
              to="/about-us" 
              className={`nav-link transition-all font-keedy ${
                resolvedTheme === 'dark'
                  ? location.pathname === '/about-us' ? 'text-white' : 'text-gray-300 hover:text-white'
                  : location.pathname === '/about-us' ? 'text-cloud-textDark' : 'text-gray-600 hover:text-cloud-textDark'
              }`}
            >
              About Us
            </Link>
            
            <button
              onClick={() => setSettingsOpen(true)}
              className={`p-2 rounded-full transition-colors ${
                resolvedTheme === 'dark'
                  ? 'hover:bg-white/10'
                  : 'hover:bg-cloud-dark/10'
              }`}
              aria-label="Settings"
            >
              <SettingsIcon size={20} className={resolvedTheme === 'dark' ? 'text-white' : 'text-cloud-textDark'} />
            </button>
          </div>
        </div>
      </nav>
      
      <Settings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};

export default Navbar;
