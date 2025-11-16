<<<<<<< HEAD
import React, { useState } from 'react';
=======

import React, { useState } from 'react';
import { ChatIcon, CloseIcon, WhatsappIcon, EmailIcon } from './icons';
>>>>>>> 8d26f15 (maquina local)

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/5566999973389";
  const emailLink = "mailto:mateus.meski@gmail.com";

  return (
    <div className="fixed bottom-5 right-5 z-50">
<<<<<<< HEAD
      {isOpen && (
        <div className="mb-2 flex flex-col items-end space-y-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            aria-label="Contact via WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.24 1.905 5.86l-1.026 3.743 3.845-1.025z"/></svg>
          </a>
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            aria-label="Contact via Email"
          >
            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-110"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
=======
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
>>>>>>> 8d26f15 (maquina local)
      </button>
    </div>
  );
};

export default ChatButton;
