
import { useState } from "react";
import { History, X, Clock, PlusCircle } from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  date: string;
}

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  sessions: ChatSession[];
  activeChatId?: string;
}

const HistorySidebar = ({
  isOpen,
  onClose,
  onNewChat,
  onSelectChat,
  sessions,
  activeChatId
}: HistorySidebarProps) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-72 bg-cloud-dark/90 backdrop-blur-md shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <History size={20} />
          <h2 className="font-semibold">History</h2>
        </div>
        <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <button 
          onClick={onNewChat}
          className="w-full flex items-center gap-2 p-3 mb-4 rounded-md bg-cloud-button hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={18} />
          <span>New Conversation</span>
        </button>
      </div>
      
      <div className="overflow-y-auto h-[calc(100vh-140px)] px-2">
        {sessions.map((session) => (
          <div 
            key={session.id}
            onClick={() => onSelectChat(session.id)}
            className={`sidebar-item ${activeChatId === session.id ? 'active' : ''}`}
          >
            <Clock size={16} />
            <div className="flex flex-col flex-1 overflow-hidden">
              <span className="truncate">{session.title}</span>
              <span className="text-xs text-white/60">{session.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySidebar;
