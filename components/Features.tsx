

import React, { useState, useEffect } from 'react';
import { FEATURES_DATA } from '../constants';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { Bot, ArrowUpRight, Network, PenTool, BrainCircuit, FileText, FileSpreadsheet, FileCode, FileJson, Table, Instagram, Facebook, Twitter, Linkedin, Youtube, Twitch } from 'lucide-react';
import { useNavigation, View } from '../NavigationContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  // State for randomizing analytics values (now used for other dynamic data simulations)
  const [dataValues, setDataValues] = useState(['42%', '65%', '89%', '54%', '31%']);

  useEffect(() => {
    const interval = setInterval(() => {
        const newValues = Array(5).fill(0).map(() => `${Math.floor(Math.random() * 90) + 10}%`);
        setDataValues(newValues);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (id: string) => {
    let view: View | null = null;
    if (id === 'automation') view = 'service-automation';
    if (id === 'conversational') view = 'service-conversational';
    if (id === 'content-generation') view = 'service-content-gen';
    if (id === 'integration') view = 'service-integration';
    if (id === 'autonomous-agents') view = 'service-autonomous-agents';

    if (view) navigateTo(view);
  };

  const renderGraphic = (id: string) => {
    switch (id) {
      case 'automation':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
             {/* Central Brain/Bot Node - Rapid Pulse synchronized with file flow */}
             <div className="relative z-10 w-24 h-24 bg-slate-900 rounded-3xl border-2 border-primary-500 shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center animate-rapid-pulse">
                <Bot className="w-12 h-12 text-primary-400" />
             </div>
             <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -z-10"></div>
             
             {/* Document Icons flowing in with higher frequency and specific types */}
             {[
                { type: 'PDF', icon: FileText },
                { type: 'XLS', icon: FileSpreadsheet },
                { type: 'CSV', icon: Table },
                { type: 'JSON', icon: FileCode },
                { type: 'XML', icon: FileJson },
                { type: 'PDF', icon: FileText },
                { type: 'XLS', icon: FileSpreadsheet }
              ].map((file, i) => (
                <div 
                   key={i}
                   className="absolute top-1/2 left-0 -translate-y-1/2 animate-flow-right"
                   style={{ animationDelay: `${i * 1.2}s` }} 
                >
                   <div className="w-10 h-14 bg-white rounded flex flex-col items-center justify-center shadow-lg border border-slate-300 relative z-20">
                      <file.icon className="w-5 h-5 text-slate-500 mb-1" />
                      <span className="text-[8px] font-bold text-slate-700">{file.type}</span>
                   </div>
                </div>
             ))}
             
             {/* Processed output */}
             <div className="absolute top-1/2 right-[15%] -translate-y-1/2 opacity-0 animate-[fadeInUp_1.5s_infinite] delay-1000">
               <div className="w-12 h-16 bg-emerald-900/80 rounded border border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <span className="text-[10px] font-bold text-emerald-400">DONE</span>
               </div>
             </div>
          </div>
        );

      case 'conversational':
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-900/50">
             {/* Neural Voice Wave Animation */}
             <div className="flex items-center gap-2 h-32">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 rounded-full bg-gradient-to-t from-accent-cyan to-primary-600 animate-sound-wave shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    style={{
                      animationDuration: `${0.8 + Math.random()}s`,
                      animationDelay: `${i * 0.1}s`,
                      height: '20%'
                    }}
                  ></div>
                ))}
             </div>
          </div>
        );

      case 'content-generation':
        const socialIcons = [
           { Icon: Instagram, color: '#E1306C' },
           { Icon: Facebook, color: '#1877F2' },
           { Icon: Twitter, color: '#FFFFFF' }, // X/Twitter
           { Icon: Linkedin, color: '#0077b5' },
           { Icon: Youtube, color: '#FF0000' },
           { Icon: Twitch, color: '#9146FF' }
        ];

        return (
           <div className="relative w-full h-full flex flex-col justify-center gap-6 overflow-hidden">
              {/* Row 1 - Scroll Left */}
              <div className="flex gap-4 animate-scroll-left min-w-[200%]">
                 {[...socialIcons, ...socialIcons, ...socialIcons].map((item, i) => (
                    <div key={`l-${i}`} className="w-16 h-16 flex-shrink-0 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
                       <item.Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                 ))}
              </div>
              
              {/* Row 2 - Scroll Right */}
              <div className="flex gap-4 animate-scroll-right min-w-[200%]">
                 {[...socialIcons, ...socialIcons, ...socialIcons].reverse().map((item, i) => (
                    <div key={`r-${i}`} className="w-16 h-16 flex-shrink-0 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center shadow-lg">
                       <item.Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                 ))}
              </div>
           </div>
        );

      case 'integration':
        return (
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Hub */}
              <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(124,58,237,0.6)] relative">
                 <Network className="w-8 h-8 text-white" />
                 <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-50"></div>
              </div>
              
              {/* Particles Flowing In */}
              {[0, 90, 180, 270].map((deg, i) => (
                 <div key={i} className="absolute inset-0 flex items-center justify-center">
                    <div 
                       className="w-3 h-3 bg-accent-cyan rounded-full animate-particle-flow"
                       style={{
                          transform: `rotate(${deg}deg) translate(100px)`,
                          '--tx': `0px`, // Moving to center
                          '--ty': `0px`,
                          animationDelay: `${i * 0.5}s`
                       } as any}
                    ></div>
                    {/* Connecting Lines */}
                    <div 
                       className="absolute h-[1px] w-[100px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
                       style={{ transform: `rotate(${deg}deg) translate(50px)` }}
                    ></div>
                 </div>
              ))}
           </div>
        );
      
      case 'autonomous-agents':
         return (
            <div className="relative w-full h-full flex items-center justify-center">
               {/* Central Cognitive Core */}
               <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center z-10 shadow-2xl relative">
                   <BrainCircuit className="w-10 h-10 text-white animate-pulse" />
               </div>

               {/* Orbiting Action Nodes */}
               <div className="absolute w-48 h-48 rounded-full border border-white/5 animate-spin-slow"></div>
               
               {[0, 120, 240].map((deg, i) => (
                  <div 
                     key={i}
                     className="absolute w-12 h-12 bg-slate-800 border border-primary-500/50 rounded-xl flex items-center justify-center shadow-lg animate-orbit-active"
                     style={{
                        animationDelay: `${i * -2}s`
                     }}
                  >
                     <div className="w-6 h-1 bg-white/20 rounded"></div>
                  </div>
               ))}
            </div>
         );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-950 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <ScrollAnimation>
            <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">{t('features.label')}</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
              {t('features.title')}
            </p>
            <p className="text-lg md:text-xl text-slate-400">
              {t('features.subtitle')}
            </p>
          </ScrollAnimation>
        </div>

        {/* Grid Layout: 2 rows. Top row 2 items, Bottom row 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 100} className={`h-full ${feature.gridArea}`}>
              <div 
                className="group relative h-full bg-slate-900/50 hover:bg-slate-900 backdrop-blur-sm rounded-[2rem] border border-white/5 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden flex flex-col cursor-pointer"
                onClick={() => handleCardClick(feature.id)}
              >
                {/* Graphic Area */}
                <div className="h-64 w-full bg-slate-900/50 border-b border-white/5 group-hover:bg-slate-800/30 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                  {renderGraphic(feature.id)}
                </div>

                {/* Content Area */}
                <div className="p-8 relative z-10 flex-grow flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center shadow-inner mb-5 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:text-primary-400 transition-all duration-300 text-slate-400">
                     {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-6 h-6 stroke-[1.5]' })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {t(`features.items.${feature.id}.title`)}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base font-medium mb-4 flex-grow">
                    {t(`features.items.${feature.id}.desc`)}
                  </p>
                  
                  <div className="flex items-center text-primary-400 text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                    {t('blog.readMore')} <ArrowUpRight className="w-4 h-4 ml-1" />
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

export default Features;
