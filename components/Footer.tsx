import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rally da Selva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
