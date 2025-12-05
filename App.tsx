
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Process from './components/Process';
import LiveDemo from './components/LiveDemo';
import ChatbotDemo from './components/ChatbotDemo';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Legal from './components/Legal';
import { LanguageProvider } from './LanguageContext';
import { NavigationProvider, useNavigation } from './NavigationContext';

const MainContent: React.FC = () => {
  const { currentView } = useNavigation();

  if (currentView === 'home') {
    return (
      <main>
        <Hero />
        <LogoTicker />
        <PainPoints />
        <Features />
        <LiveDemo />
        <ChatbotDemo />
        <Process />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
    );
  }

  return (
    <main>
      <Legal />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-primary-500/30 selection:text-white">
          <Navbar />
          <MainContent />
          <Footer />
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
};

export default App;
