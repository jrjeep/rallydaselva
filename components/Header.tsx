
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-black/50 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://storage.googleapis.com/aistudio-hosting/projects/rally-da-selva/RALLY.jpg" alt="Rally da Selva Logo" className="h-10 md:h-12" />
          <img src="assets/images/onca_panara.jpg" alt="Onça Logo" className="h-10 md:h-12 hidden sm:block" />
          <img src="assets/images/teste.jpg"  />
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <SocialIcon href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><polygon points="9.5 14.5 15.5 11 9.5 7.5 9.5 14.5"></polygon></svg>
          </SocialIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;