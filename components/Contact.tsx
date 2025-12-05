
import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <ScrollAnimation>
            {/* Added center alignment for mobile, left for desktop */}
            <div className="text-center lg:text-left">
              <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
                {t('contact.label')}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
                {t('contact.title')}
              </h3>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
                {t('contact.subtitle')}
              </p>
              
              {/* Centered flex container for mobile */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-300 mb-8">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-primary-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:info@avantiaisystems.com" className="text-lg font-medium hover:text-white transition-colors">info@avantiaisystems.com</a>
                </div>
              </div>

            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-400 mb-2 ml-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-400 mb-2 ml-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-400 mb-2 ml-1">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-400 mb-2 ml-1">{t('contact.form.message')}</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    placeholder="..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-primary-900/30 transform transition-all active:scale-95 flex items-center justify-center gap-2 animate-pulsate-fwd hover:animate-shimmer-slide text-base md:text-lg"
                >
                  {t('contact.form.submit')} <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};

export default Contact;
