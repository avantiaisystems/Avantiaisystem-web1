
import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { Mic, Phone, QrCode, X } from 'lucide-react';

const LiveDemo: React.FC = () => {
  const { t } = useLanguage();
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollAnimation>
            <div className="text-center lg:text-left">
              <h2 className="text-xs md:text-sm font-bold text-accent-cyan uppercase tracking-widest mb-3">
                {t('liveDemo.label')}
              </h2>
              {/* Increased Title Size and Impact */}
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-2xl">
                {t('liveDemo.title')}
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t('liveDemo.subtitle')}
              </p>
              
              {/* Desktop Toggle QR Button */}
              <div className="hidden lg:block mb-8">
                <button 
                  onClick={() => setShowQR(!showQR)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-white/10 transition-colors hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <QrCode className="w-5 h-5" />
                  {showQR ? t('liveDemo.hideQR') : t('liveDemo.toggleQR')}
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="flex flex-col gap-8">
              <div className="relative bg-slate-950 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
                 
                 {/* Background Glow */}
                 <div className="absolute inset-0 bg-radial-gradient from-primary-900/20 to-transparent opacity-50"></div>

                 {/* Voice Agent Visualizer */}
                 <div className="relative z-10 flex flex-col items-center gap-8 w-full transition-opacity duration-300" style={{ opacity: showQR ? 0.2 : 1 }}>
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-pulse-glow"></div>
                        <div className="absolute inset-4 bg-primary-600/30 rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl z-20">
                           <Mic className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Orbiting Particles */}
                        <div className="absolute inset-0 animate-spin-slow">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                        </div>
                    </div>

                    {/* Sound Wave Animation */}
                    <div className="flex items-center gap-2 h-16">
                       {[...Array(9)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-2 bg-gradient-to-t from-primary-600 to-accent-cyan rounded-full animate-sound-wave"
                            style={{
                               height: '20%',
                               animationDelay: `${i * 0.1}s`,
                               animationDuration: `${0.8 + Math.random() * 0.5}s`
                            }}
                          ></div>
                       ))}
                    </div>

                    <div className="text-center">
                       <h4 className="font-bold text-white text-xl mb-1">{t('liveDemo.botName')}</h4>
                       <p className="text-primary-400 text-sm font-medium animate-pulse">{t('liveDemo.status')}</p>
                    </div>
                 </div>

                 {/* Desktop QR Code Overlay */}
                 {showQR && (
                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-30 flex flex-col items-center justify-center animate-scale-in">
                        <button 
                          onClick={() => setShowQR(false)} 
                          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
                        >
                          <X className="w-6 h-6" />
                        </button>
                        <div className="bg-white p-4 rounded-2xl relative overflow-hidden shadow-2xl">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+1234567890" alt="Scan to Call" className="w-48 h-48 mix-blend-multiply" />
                            <div className="absolute inset-0 border-t-2 border-primary-500 animate-scan-line opacity-50"></div>
                        </div>
                        <p className="mt-6 font-bold text-white text-lg">{t('liveDemo.desktopInstruction')}</p>
                    </div>
                 )}
              </div>

              {/* Mobile Call Button - Placed BELOW the animation box on mobile */}
              <div className="block lg:hidden">
                 <a 
                   href="tel:+1234567890" 
                   className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-900 rounded-full font-bold text-base hover:bg-slate-200 transition-all shadow-lg hover:scale-105 active:scale-95 animate-pulsate-fwd w-full"
                 >
                   <Phone className="w-5 h-5" />
                   {t('liveDemo.startBtn')}
                 </a>
              </div>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
