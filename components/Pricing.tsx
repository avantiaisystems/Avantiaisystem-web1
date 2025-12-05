
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';
import ScrollAnimation from './ScrollAnimation';
import { useNavigation } from '../NavigationContext';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { navigateTo, currentView } = useNavigation();

  const handleContactClick = () => {
    if (currentView !== 'home') {
      navigateTo('home');
    }
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-500 mb-10">
              Choose the perfect plan for your needs. Always flexible.
            </p>

            {/* Toggle with sliding animation */}
            <div className="relative inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
               {/* Sliding Pill */}
              <div 
                className={`absolute top-1.5 bottom-1.5 rounded-full bg-slate-900 shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                style={{
                  left: isAnnual ? '50%' : '0.375rem',
                  width: 'calc(50% - 0.375rem)',
                }}
              ></div>

              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Yearly
              </button>
            </div>
            
            <div className={`mt-4 transition-all duration-500 overflow-hidden ${isAnnual ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm font-bold text-primary-600 bg-primary-50 inline-block px-3 py-1 rounded-full border border-primary-100">
                ✨ Save 20% with annual billing
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PLANS.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div 
                className={`relative rounded-[2rem] p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.isPopular 
                    ? 'bg-white shadow-2xl shadow-primary-900/10 ring-1 ring-primary-100 scale-105 z-10' 
                    : 'bg-white shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                    <span className="ml-2 text-slate-500 font-medium">/mo</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary-600" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={handleContactClick}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all transform active:scale-95 duration-200 hover:animate-pulsate-fwd ${
                  plan.isPopular 
                    ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
