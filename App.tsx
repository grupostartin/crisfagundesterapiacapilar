import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Space from './components/Space';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-text-light overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Space />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;