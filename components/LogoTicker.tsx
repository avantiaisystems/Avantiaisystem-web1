
import React from 'react';
import { LOGOS } from '../constants';
import { useLanguage } from '../LanguageContext';
import ScrollAnimation from './ScrollAnimation';

const LogoTicker: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full py-16 bg-slate-950 overflow-hidden border-t border-white/5">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400 animate-text-shimmer bg-[length:200%_auto] drop-shadow-sm">
            {t('ticker.label')}
          </h3>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Refined Gradient Masks - Matching Slate-950 background */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll gap-8 md:gap-16 min-w-full items-center justify-around py-4">
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center transition-all duration-300">
                {/* 
                    Logo Styles: 
                    - Default: brightness-0 invert (makes logo white)
                    - Hover: brightness-100 invert-0 (restores original colors) 
                    - Added scale and drop shadow for impact
                */}
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-8 md:h-12 w-auto object-contain max-w-[120px] md:max-w-[160px] brightness-0 invert filter transition-all duration-300 hover:brightness-100 hover:invert-0 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer"
                  onError={(e) => {
                      // Fallback to text if image fails
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-xl font-bold font-sans tracking-tight text-slate-300 cursor-default whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default LogoTicker;
