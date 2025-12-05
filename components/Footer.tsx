
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
    <footer id="footer" className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
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
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:shadow-[0_0_20px_#38bdf8] hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 group hover:animate-neon-pulse">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:shadow-[0_0_20px_#ffffff] hover:bg-white/10 hover:border-white/30 group hover:animate-neon-pulse">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:shadow-[0_0_20px_#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 group hover:animate-neon-pulse">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t('footer.solutions')}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'automation')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.automation')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'conversational')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.conversational')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'content-generation')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.content-generation')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'integration')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.integration')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'autonomous-agents')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.autonomous-agents')}</button></li>
            </ul>
          </div>

          {/* Agency Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t('footer.agency')}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.home')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'process')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.process')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'blog')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.blog')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.contact')}</button></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'privacy')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.privacy')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'terms')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.terms')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'cookies')} className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left">{t('footer.links.cookies')}</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'compliance')} className="text-sm text-primary-400 font-semibold hover:text-white transition-colors text-left">{t('footer.links.compliance')}</button></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-slate-600">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
