import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS_DATA } from '../constants';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {t('faq.title')}
            </h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div 
                className={`bg-slate-900/40 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-primary-500/50 shadow-lg shadow-primary-900/20 bg-slate-900' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary-400' : 'text-slate-200'}`}>
                    {t(`faq.items.${faq.id}.q`)}
                  </span>
                  <span className={`ml-6 flex-shrink-0 transition-all duration-300 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-primary-900/50 text-primary-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed text-base">
                    {t(`faq.items.${faq.id}.a`)}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;