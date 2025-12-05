
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { useNavigation } from '../NavigationContext';

/* 
  PARA EDITAR EL TEXTO DE LA SECCIÓN CTA (Llamada a la acción), VE A: translations.ts
  TO EDIT CTA TEXT, GO TO: translations.ts
*/

const CTA: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo, currentView } = useNavigation();

  const handleContactClick = () => {
    if (currentView !== 'home') {
      navigateTo('home');
    }
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSupportClick = () => {
    if (currentView !== 'home') {
      navigateTo('home');
    }
    setTimeout(() => {
        document.getElementById('chatbot-demo')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          {/* Reduced padding on mobile */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 overflow-hidden px-6 py-10 md:py-24 text-center shadow-2xl shadow-primary-900/20 group hover:border-primary-500/30 transition-all duration-500">
            
            {/* Background decoration - Electric */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-cyan/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tight drop-shadow-xl">
                {t('cta.title')}
              </h2>
              <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-12 font-light px-2">
                {t('cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                <button 
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-6 py-2.5 md:px-10 md:py-5 bg-white hover:bg-slate-200 text-slate-950 rounded-full font-bold text-sm md:text-lg transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 animate-pulsate-fwd hover:bg-gradient-to-r hover:from-white hover:via-slate-200 hover:to-white hover:bg-[length:200%_auto] hover:animate-shimmer-slide"
                >
                  {t('cta.buttonPrimary')}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleSupportClick}
                  className="w-full sm:w-auto px-6 py-2.5 md:px-10 md:py-5 bg-transparent border border-slate-700 hover:bg-white/5 hover:border-slate-500 text-white rounded-full font-bold text-sm md:text-lg transition-all animate-pulsate-fwd flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cta.buttonSecondary')}
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTA;