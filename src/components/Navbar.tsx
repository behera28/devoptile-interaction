
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cloud-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white transition-transform hover:scale-105">
          CloudMorph
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-all hover:text-white ${location.pathname === '/' ? 'text-white' : 'text-gray-300'}`}
          >
            Home
          </Link>
          <Link 
            to="/devops-assistant" 
            className={`transition-all hover:text-white ${location.pathname === '/devops-assistant' ? 'text-white' : 'text-gray-300'}`}
          >
            DevOps Assistant
          </Link>
          <Link 
            to="/iac-translator" 
            className={`transition-all hover:text-white ${location.pathname === '/iac-translator' ? 'text-white' : 'text-gray-300'}`}
          >
            IaC Translator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
