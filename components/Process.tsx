
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const handleContactClick = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getAnimationClass = (id: string) => {
      switch(id) {
          case 'discovery': return 'animate-search-move';
          case 'strategy': return 'animate-bulb-glow';
          case 'development': return 'animate-spin-slow';
          case 'deployment': return 'animate-rocket-shake';
          default: return '';
      }
  };

  return (
    <section id="process" className="py-20 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
              {t('process.label')}
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t('process.title')}
            </h3>
          </div>
        </ScrollAnimation>

        <div className="relative">
          {/* Visual Path Connector (Desktop Only) with Scrolling Dash Animation */}
          <div className="hidden md:block absolute top-[56px] left-[10%] right-[10%] h-[2px] bg-[linear-gradient(90deg,rgba(51,65,85,0.5)_50%,transparent_50%)] bg-[size:20px_100%] animate-dash-scroll z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {PROCESS_STEPS.map((step, index) => (
              <ScrollAnimation key={step.id} delay={index * 150} className="relative h-full">
                
                <div className="flex flex-col items-center p-4 h-full relative group">
                  
                  {/* Step Number Badge with Glow Sequence */}
                  <div 
                    className="absolute top-0 right-4 text-3xl font-extrabold select-none z-0 animate-number-glow"
                    style={{ animationDelay: `${index * 1}s` }}
                  >
                     0{index + 1}
                  </div>

                  {/* Icon Container - Smaller & Continuous Animation */}
                  <div className="relative z-10 w-full flex justify-center mb-6">
                     <div className="w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 relative">
                       <div className={`text-primary-400 ${getAnimationClass(step.id)}`}>
                         {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                       </div>
                     </div>
                  </div>
                  
                  <div className="relative z-10 text-center bg-slate-900/40 p-5 rounded-2xl border border-white/5 w-full flex-grow hover:border-primary-500/20 hover:shadow-lg transition-all">
                     <h4 className="text-base font-bold text-white mb-2 text-primary-200">
                       {t(`process.items.${step.id}.title`)}
                     </h4>
                     <p className="text-slate-400 text-xs leading-relaxed">
                       {t(`process.items.${step.id}.desc`)}
                     </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <ScrollAnimation delay={600}>
            <div className="flex justify-center">
                <button 
                  onClick={handleContactClick}
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-white rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] active:scale-95 flex items-center justify-center gap-2 animate-pulsate-fwd"
                >
                  {t('process.cta')}
                  <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Process;
