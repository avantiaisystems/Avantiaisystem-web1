

import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
       {/* Background gradient blob */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
              {t('testimonials.label')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              {t('testimonials.title')}
            </h3>
            <p className="mt-4 text-xl text-slate-400">
              {t('testimonials.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="flex flex-col p-8 bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-white/5 h-full hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 relative group">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-10 h-10 text-primary-400" />
                </div>
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed flex-grow mb-8 font-light italic">
                  "{t(`testimonials.items.${testimonial.id}.content`)}"
                </p>
                
                <div className="flex items-center mt-auto pt-6 border-t border-white/5">
                  <img src={testimonial.avatar} alt={t(`testimonials.items.${testimonial.id}.author`)} className="w-12 h-12 rounded-full mr-4 border border-white/10" />
                  <div>
                    <h4 className="text-base font-bold text-white">{t(`testimonials.items.${testimonial.id}.author`)}</h4>
                    <p className="text-xs font-semibold text-primary-400 uppercase tracking-wide">
                      {t(`testimonials.items.${testimonial.id}.role`)}, {t(`testimonials.items.${testimonial.id}.company`)}
                    </p>
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

export default Testimonials;
