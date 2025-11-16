import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Results from './components/Results';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

const App: React.FC = () => {
  return (
    <div 
      className="bg-gray-900 min-h-screen bg-no-repeat bg-cover bg-fixed text-white font-sans"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aistudio-hosting/projects/rally-da-selva/background01.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Info />
          <Results />
        </main>
        <Footer />
        <ChatButton />
      </div>
    </div>
  );
};

export default App;