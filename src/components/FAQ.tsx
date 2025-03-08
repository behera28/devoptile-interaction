
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      
      {items.map((item, index) => (
        <div 
          key={index} 
          className="cloud-card overflow-hidden transition-all duration-300 ease-in-out"
        >
          <button
            className="w-full text-left p-4 flex justify-between items-center"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="text-lg font-medium text-cloud-textDark">{item.question}</h3>
            <svg
              className={`w-5 h-5 transform transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 px-4 ${
              expandedIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-cloud-textDark">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
