

import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { CHAT_LINKS } from '../constants';

const ChatbotDemo: React.FC = () => {
  const { t, language } = useLanguage();

  // Platform Logic
  const isJapanese = language === 'ja';
  
  // Configuration based on language
  const platformConfig = isJapanese 
    ? {
        name: 'LINE',
        color: 'bg-[#06C755]',
        hoverColor: 'hover:bg-[#05b34c]',
        textColor: 'text-white',
        iconBg: 'bg-white/20',
        link: CHAT_LINKS.line,
        logo: (className: string) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
                <title>LINE</title>
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.432-6.975.4-.46.744-.96.991-1.478.959-1.354 1.561-2.9 1.561-4.59"/>
            </svg>
        )
      }
    : {
        name: 'WhatsApp',
        color: 'bg-[#25D366]',
        hoverColor: 'hover:bg-[#1da851]',
        textColor: 'text-white',
        iconBg: 'bg-white/20',
        link: CHAT_LINKS.whatsapp,
        logo: (className: string) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        )
      };

  const handleStartChat = () => {
    window.open(platformConfig.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="chatbot-demo" className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
       {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <ScrollAnimation>
            <div className="text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
                {t('chatbotDemo.label')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                {t('chatbotDemo.title')}
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t('chatbotDemo.subtitle')}
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-slate-400 text-sm md:justify-start justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>24/7 Availability</span>
                 </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
             {/* Invite Card */}
             <div className="relative group">
                {/* Glow effect matching platform */}
                <div className={`absolute inset-0 ${platformConfig.color} opacity-20 blur-[60px] group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl flex flex-col items-center gap-8">
                    
                    {/* Icon Bubble */}
                    <div className={`w-24 h-24 rounded-full ${platformConfig.color} flex items-center justify-center shadow-lg shadow-black/20 animate-float`}>
                        {platformConfig.logo("w-12 h-12 text-white")}
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-white">
                            {t('chatbotDemo.inviteTitle')}
                        </h4>
                        <p className="text-slate-400">
                           {t('chatbotDemo.inviteDesc')}
                        </p>
                    </div>

                    <button 
                       onClick={handleStartChat}
                       className={`w-full py-4 px-8 rounded-full font-bold text-white text-lg ${platformConfig.color} ${platformConfig.hoverColor} transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3 animate-pulsate-fwd`}
                    >
                       {platformConfig.logo("w-6 h-6")}
                       {t('chatbotDemo.startChat')}
                       <ExternalLink className="w-5 h-5 opacity-80" />
                    </button>
                    
                    <p className="text-xs text-slate-500 mt-2">
                       {t('chatbotDemo.disclaimer')}
                    </p>
                </div>
             </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};

export default ChatbotDemo;
