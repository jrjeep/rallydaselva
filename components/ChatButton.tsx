
import React, { useState } from 'react';
import { ChatIcon, CloseIcon, WhatsappIcon, EmailIcon } from './icons';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/5566999973389";
  const emailLink = "mailto:mateus.meski@gmail.com";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className={`transition-all duration-300 ease-in-out flex flex-col items-center gap-3 ${isOpen ? 'opacity-100' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center w-12 h-12"
          aria-label="Contact on WhatsApp"
        >
          <WhatsappIcon />
        </a>
        <a 
          href={emailLink} 
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center w-12 h-12"
          aria-label="Contact via Email"
        >
          <EmailIcon />
        </a>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-lg mt-3 transition-transform transform hover:scale-110 focus:outline-none"
        aria-label="Toggle chat options"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
};

export default ChatButton;
