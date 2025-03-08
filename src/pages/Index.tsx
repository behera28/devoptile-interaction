
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    // Add a fade-in animation to the entire content
    const content = document.getElementById("main-content");
    if (content) {
      content.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div id="main-content" className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">
            Welcome to <span className="text-white">CloudMorph</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 animate-slide-in" style={{ animationDelay: "0.1s" }}>
            Simplify your cloud infrastructure management with AI-powered tools
            designed for modern DevOps teams
          </p>
          
          <div className="mt-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/devops-assistant" className="cloud-btn">
              Get Started →
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/devops-assistant" 
            className="animate-slide-in-left"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="tile flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-3 text-cloud-textDark">DevOps Assistant</h2>
              <p className="text-cloud-textDark mb-6 flex-grow">
                An AI-powered assistant to help with DevOps queries and best practices for cloud
                infrastructure management
              </p>
              <div className="flex justify-end">
                <span className="text-cloud-button font-medium flex items-center">
                  Explore
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          
          <Link 
            to="/iac-translator" 
            className="animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="tile flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-3 text-cloud-textDark">IaC Translator</h2>
              <p className="text-cloud-textDark mb-6 flex-grow">
                Translate between different Infrastructure as Code formats seamlessly. Support for
                Terraform, CloudFormation, Pulumi, and more
              </p>
              <div className="flex justify-end">
                <span className="text-cloud-button font-medium flex items-center">
                  Explore
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-24 glass-morph p-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold text-center mb-12">Why CloudMorph?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 bg-cloud-button w-16 h-16 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Assistance</h3>
              <p className="text-white/80">
                Get intelligent recommendations and solutions for complex cloud infrastructure issues
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 bg-cloud-button w-16 h-16 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Saving</h3>
              <p className="text-white/80">
                Reduce development time by automating tedious infrastructure tasks and translations
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 bg-cloud-button w-16 h-16 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Platform</h3>
              <p className="text-white/80">
                Works with all major cloud providers and infrastructure as code frameworks
              </p>
            </div>
          </div>
        </div>
        
        <footer className="mt-24 text-center text-white/60 py-6">
          <p>© {new Date().getFullYear()} CloudMorph. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
