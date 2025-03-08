
import { useState } from "react";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";

interface TeamMember {
  name: string;
  linkedin?: string;
  instagram?: string;
}

const AboutUs = () => {
  const teamMembers: TeamMember[] = [
    { name: "Rahul Lenka", linkedin: "https://linkedin.com/in/rahul-lenka", instagram: "https://instagram.com/rahul-lenka" },
    { name: "Tanishq Nimje", linkedin: "https://linkedin.com/in/tanishq-nimje", instagram: "https://instagram.com/tanishq-nimje" },
    { name: "Akash Prasad", linkedin: "https://linkedin.com/in/akash-prasad", instagram: "https://instagram.com/akash-prasad" },
    { name: "Aryan Behera", linkedin: "https://linkedin.com/in/aryan-behera", instagram: "https://instagram.com/aryan-behera" },
    { name: "Atulya Singh", linkedin: "https://linkedin.com/in/atulya-singh", instagram: "https://instagram.com/atulya-singh" },
    { name: "Pranav Kumar", linkedin: "https://linkedin.com/in/pranav-kumar", instagram: "https://instagram.com/pranav-kumar" },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-keedy font-semibold text-center mb-16 animate-fade-in">
          Our Team Members
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card glass-morph relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              <div className="p-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-cloud-light mb-6 flex items-center justify-center text-cloud-textDark text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-keedy font-medium mb-4">{member.name}</h3>
                
                <div className="flex space-x-4 mt-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link"
                    >
                      <Instagram size={24} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-cloud-button/80 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: hoveredCard === index ? 0.15 : 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
