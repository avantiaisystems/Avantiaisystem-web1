
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { useNavigation, View } from '../NavigationContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { currentView, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, view: View = 'home') => {
    setIsOpen(false);
    if (currentView !== 'home') {
      navigateTo('home');
      // Timeout to allow DOM to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[60] transition-all duration-500 animate-slide-down ${
        scrolled 
          ? 'glass border-white/5 py-3 md:py-4 shadow-2xl shadow-black/50' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer relative z-[70]" onClick={() => handleNavClick('root')}>
            <div className="relative h-8 md:h-10 w-auto">
              <img 
                src="https://brandstore.net/wp-content/uploads/2024/09/Logo-Avanti-AI-Systems.png" 
                alt="Avanti AI Systems" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-lg md:text-xl font-bold text-white tracking-tight ml-2">Avanti AI Systems</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('root')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => handleNavClick('features')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => handleNavClick('process')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {t('nav.process')}
            </button>
            <button onClick={() => handleNavClick('blog')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {t('nav.blog')}
            </button>
            <button onClick={() => handleNavClick('contact')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {t('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/10"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-slate-900 rounded-xl shadow-xl shadow-black/50 border border-white/10 overflow-hidden py-1 animate-scale-in origin-top-right">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-white/5 transition-colors ${
                        language === lang.code ? 'text-primary-400 font-medium bg-primary-900/20' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex ml-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-white hover:bg-slate-200 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-white/20 active:scale-95 duration-200 animate-pulsate-fwd hover:bg-gradient-to-r hover:from-white hover:via-slate-200 hover:to-white hover:bg-[length:200%_auto] hover:animate-shimmer-slide"
            >
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3 z-[70]">
             {/* Mobile Lang Switcher Toggle */}
             <button 
                onClick={() => {
                  const langs: Language[] = ['es', 'en', 'ja'];
                  const nextIndex = (langs.indexOf(language) + 1) % langs.length;
                  setLanguage(langs[nextIndex]);
                }}
                className="text-slate-300 font-bold text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/5"
              >
                {language.toUpperCase()}
              </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none p-2 bg-white/5 rounded-full backdrop-blur-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-[60] transition-all duration-300 ease-in-out flex flex-col justify-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 space-y-6">
          <button
            className="text-3xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all text-left border-b border-white/5 pb-4"
            onClick={() => handleNavClick('root')}
          >
            {t('nav.home')}
          </button>
          <button
            className="text-3xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all text-left border-b border-white/5 pb-4"
            onClick={() => handleNavClick('features')}
          >
            {t('nav.services')}
          </button>
          <button
            className="text-3xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all text-left border-b border-white/5 pb-4"
            onClick={() => handleNavClick('process')}
          >
            {t('nav.process')}
          </button>
          <button
            className="text-3xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all text-left border-b border-white/5 pb-4"
            onClick={() => handleNavClick('blog')}
          >
            {t('nav.blog')}
          </button>
          <button
            className="text-3xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all text-left border-b border-white/5 pb-4"
            onClick={() => handleNavClick('contact')}
          >
            {t('nav.contact')}
          </button>
          <div className="pt-8">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white px-5 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-primary-900/40 active:scale-95 transition-all"
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;