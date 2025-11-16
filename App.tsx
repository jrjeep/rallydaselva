<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Results from './components/Results';
=======

import React from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
>>>>>>> 8d26f15 (maquina local)
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

const App: React.FC = () => {
  return (
    <div 
<<<<<<< HEAD
      className="bg-gray-900 min-h-screen bg-no-repeat bg-cover bg-fixed text-white font-sans"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aistudio-hosting/projects/rally-da-selva/background01.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Info />
          <Results />
=======
      className="bg-black text-gray-200 font-sans" 
      style={{ 
        backgroundImage: "url('/assets/images/background01.jpg')", 
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="bg-black bg-opacity-40 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Results />
          <Info />
          <Sponsors />
>>>>>>> 8d26f15 (maquina local)
        </main>
        <Footer />
        <ChatButton />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 8d26f15 (maquina local)
