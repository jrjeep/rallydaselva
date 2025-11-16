
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-70 py-6 mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-orange-500 transition-colors">
            <FacebookIcon />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <TwitterIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rally da Selva. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido por Tanganelli</p>
      </div>
    </footer>
  );
};

export default Footer;
