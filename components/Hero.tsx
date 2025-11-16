import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative my-8 md:my-16 h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
      {/* The dedicated image has been removed. This section now reveals the main background image. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end items-center p-8">
        <img src="https://i.imgur.com/4z26IIA.png" alt="Data do Evento: 08 de Maio 2021" className="w-48 md:w-64 mb-4" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          13ª Edição Rally da Selva
        </h1>
      </div>
    </section>
  );
};

export default Hero;