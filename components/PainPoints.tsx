import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { useNavigation } from '../NavigationContext';
import { PhoneMissed, Database, FileX, ArrowRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const points = [
    {
      id: 'lostLeads',
      view: 'pain-lost-leads',
      icon: <PhoneMissed className="w-8 h-8 text-red-400" />,
      // Keep shake slightly reactive to differentiate, but still noticeable
      animationClass: 'group-hover:animate-shake', 
      bgGradient: 'from-red-900/20 to-slate-900',
      hoverBorder: 'hover:border-red-500/30',
      hoverShadow: 'hover:shadow-red-900/20'
    },
    {
      id: 'dataChaos',
      view: 'pain-data-chaos',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      // CONTINUOUS animation, no hover required
      animationClass: 'animate-glitch', 
      bgGradient: 'from-orange-900/20 to-slate-900',
      hoverBorder: 'hover:border-orange-500/30',
      hoverShadow: 'hover:shadow-orange-900/20'
    },
    {
      id: 'manualWork',
      view: 'pain-manual-work',
      icon: <FileX className="w-8 h-8 text-yellow-400" />,
      // CONTINUOUS animation, no hover required
      animationClass: 'animate-stack-up', 
      bgGradient: 'from-yellow-900/20 to-slate-900',
      hoverBorder: 'hover:border-yellow-500/30',
      hoverShadow: 'hover:shadow-yellow-900/20'
    }
  ];

  return (
    <section id="pain-points" className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollAnimation>
            <h2 className="text-xs md:text-sm font-bold text-red-400 uppercase tracking-widest mb-3">
              {t('painPoints.label')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {t('painPoints.title')}
            </h3>
            <p className="text-lg text-slate-400">
              {t('painPoints.subtitle')}
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <ScrollAnimation key={point.id} delay={index * 150} className="h-full">
              <div 
                className={`group relative h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 ${point.hoverBorder} transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-2xl ${point.hoverShadow}`}
                onClick={() => navigateTo(point.view as any)}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${point.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                     <div className={point.animationClass}>
                        {point.icon}
                     </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {t(`painPoints.items.${point.id}.title`)}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {t(`painPoints.items.${point.id}.desc`)}
                  </p>

                  <div className="mt-auto">
                    <button className="relative overflow-hidden group/btn px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all duration-300 w-full flex items-center justify-center text-white font-bold text-sm shadow-[0_0_0_transparent] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                       <span className="relative z-10 flex items-center gap-2">
                         {t('blog.readMore')} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </span>
                       <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-cyan/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;