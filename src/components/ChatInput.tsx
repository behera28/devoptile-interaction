
import { useState, useRef } from "react";
import { Send, Image } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string, image?: File) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSend, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim() || image) {
      onSend(message, image || undefined);
      setMessage("");
      setImage(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      {image && (
        <div className="absolute -top-16 left-0 right-0 bg-white/20 backdrop-blur-md p-2 rounded-md flex items-center justify-between">
          <span className="text-sm truncate">{image.name}</span>
          <button 
            onClick={() => setImage(null)} 
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      )}
      
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
        <button 
          onClick={triggerFileInput}
          className="text-white/70 hover:text-white transition-colors"
          title="Upload image"
        >
          <Image size={20} />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your DevOps query here..."
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
        />
        
        <button
          onClick={handleSend}
          disabled={isLoading || (!message.trim() && !image)}
          className={`rounded-full p-2 transition-colors ${
            !message.trim() && !image ? 'bg-cloud-button/50 text-white/50' : 'bg-cloud-button text-white hover:bg-blue-700'
          }`}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
