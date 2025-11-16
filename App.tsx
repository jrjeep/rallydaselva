
import React from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

const App: React.FC = () => {
  return (
    <div 
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
        </main>
        <Footer />
        <ChatButton />
      </div>
    </div>
  );
};

export default App;
