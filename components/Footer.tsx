

import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useNavigation, View } from '../NavigationContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo, currentView } = useNavigation();

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    // Map specific links to sections on the Home page
    const sectionMap: Record<string, string> = {
      'process': 'process',
      'about': 'root', // Scroll to top
      'blog': 'blog',
      'contact': 'contact'
    };

    // Map specific links to Views (Service Explanation Pages)
    const viewMap: Record<string, View> = {
      'automation': 'service-automation',
      'conversational': 'service-conversational',
      'content-generation': 'service-content-gen',
      'integration': 'service-integration',
      'autonomous-agents': 'service-autonomous-agents'
    };

    if (sectionMap[target]) {
      // If it's a section on home
      if (currentView !== 'home') {
        navigateTo('home');
      }
      
      // Scroll to the element
      setTimeout(() => {
        const elementId = sectionMap[target];
        const element = document.getElementById(elementId);
        if (element) {
          const yOffset = -80; // Offset for sticky navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (elementId === 'root') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else if (viewMap[target]) {
       // Navigate to specific service view
       navigateTo(viewMap[target]);
       window.scrollTo(0, 0);
    } else {
      // If it's a separate view (Legal pages)
      navigateTo(target as View);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer id="footer" className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Clean 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => handleLinkClick({ preventDefault: () => {} } as any, 'about')}>
              <div className="relative h-8 w-auto">
                <img 
                  src="https://brandstore.net/wp-content/uploads/2024/09/Logo-Avanti-AI-Systems.png" 
                  alt="Avanti AI Systems" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-xl font-bold text-white">Avanti AI Systems</span>
              </div>
            </div>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed max-w-sm font-light">
              {t('footer.tagline')}
            </p>
            
            {/* Social Icons - Clean Ghost Style */}
            <div className="flex space-x-5">
              <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions (Spans 3 columns) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white tracking-wide mb-6">{t('footer.solutions')}</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleLinkClick(e, 'automation')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.automation')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'conversational')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.conversational')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'integration')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.integration')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'autonomous-agents')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.autonomous-agents')}</button></li>
            </ul>
          </div>

          {/* Column 3: Company (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.home')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'process')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.process')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'blog')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.blog')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.contact')}</button></li>
            </ul>
          </div>

          {/* Column 4: Legal (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleLinkClick(e, 'privacy')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.privacy')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'terms')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.terms')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'compliance')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.compliance')}</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-medium">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
