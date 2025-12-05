
import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useNavigation, View } from '../NavigationContext';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Legal: React.FC = () => {
  const { t } = useLanguage();
  const { currentView, navigateTo } = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleBackToSection = (targetSection: string) => {
    navigateTo('home');
    // Increased timeout slightly to ensure the Home view is fully mounted before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        // Different offset for footer to ensure it's visible at the bottom
        const yOffset = targetSection === 'footer' ? 0 : -100; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  const handleContactClick = () => {
    navigateTo('home');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const getTitle = (view: View) => {
    switch(view) {
      case 'privacy': return t('footer.links.privacy');
      case 'terms': return t('footer.links.terms');
      case 'cookies': return t('footer.links.cookies');
      case 'licenses': return 'Licenses';
      case 'compliance': return t('footer.links.compliance');
      case 'blog': return t('blog.label');
      
      // Services
      case 'service-automation': return t('extraPages.services.automation.title');
      case 'service-conversational': return t('extraPages.services.conversational.title');
      case 'service-content-gen': return t('extraPages.services.content-generation.title');
      case 'service-integration': return t('extraPages.services.integration.title');
      case 'service-autonomous-agents': return t('extraPages.services.autonomous-agents.title');

      // Pain Points
      case 'pain-lost-leads': return t('extraPages.painPoints.lostLeads.title');
      case 'pain-data-chaos': return t('extraPages.painPoints.dataChaos.title');
      case 'pain-manual-work': return t('extraPages.painPoints.manualWork.title');

      // Blog
      case 'blog-ai-trends': return t('extraPages.blog.ai-trends.title');
      case 'blog-automation': return t('extraPages.blog.automation.title');
      case 'blog-future-work': return t('extraPages.blog.future-work.title');

      default: return view.charAt(0).toUpperCase() + view.slice(1);
    }
  };

  const getContent = (view: View) => {
     // Footer Legal Pages
     if (view === 'privacy' || view === 'terms' || view === 'cookies' || view === 'licenses' || view === 'compliance') {
        let contentKey = '';
        if (view === 'privacy') contentKey = 'extraPages.privacy';
        if (view === 'terms') contentKey = 'extraPages.terms';
        if (view === 'cookies') contentKey = 'extraPages.cookies';
        if (view === 'licenses') contentKey = 'extraPages.licenses';
        if (view === 'compliance') contentKey = 'extraPages.compliance';

        return (
           <div className="relative z-10">
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-12">
                 <p className="text-lg leading-relaxed whitespace-pre-line">
                   {t(contentKey)}
                 </p>
              </div>
              <div className="flex justify-start border-t border-white/10 pt-8">
                <button 
                  onClick={() => handleBackToSection('footer')}
                  className="px-6 py-3 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-bold transition-all hover:bg-white/5 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> {t('painPoints.btnBack')}
                </button>
              </div>
           </div>
        );
     }

     // Service Explanation Pages (Solution)
     if (view.startsWith('service-')) {
        let contentKey = '';
        if (view === 'service-automation') contentKey = 'extraPages.services.automation.content';
        if (view === 'service-conversational') contentKey = 'extraPages.services.conversational.content';
        if (view === 'service-content-gen') contentKey = 'extraPages.services.content-generation.content';
        if (view === 'service-integration') contentKey = 'extraPages.services.integration.content';
        if (view === 'service-autonomous-agents') contentKey = 'extraPages.services.autonomous-agents.content';

        return (
          <>
            <p className="text-xl text-white mb-6 font-medium relative z-10 leading-relaxed whitespace-pre-line">{t(contentKey)}</p>
            <div className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-10 mt-8 relative z-10">
               <button 
                 onClick={handleContactClick}
                 className="px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600 bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95 animate-pulsate-fwd flex items-center justify-center gap-2"
               >
                 {t('cta.buttonPrimary')} <ArrowRight className="w-5 h-5" />
               </button>
 
               <button 
                 onClick={() => handleBackToSection('features')}
                 className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-bold text-lg transition-all hover:bg-white/5 active:scale-95 flex items-center justify-center"
               >
                 {t('painPoints.btnBack')}
               </button>
             </div>
          </>
        );
     }

     // Pain Points Pages
     if (view === 'pain-lost-leads' || view === 'pain-data-chaos' || view === 'pain-manual-work') {
       let contentKey = '';
       let solutionView: View = 'home';

       if (view === 'pain-lost-leads') {
          contentKey = 'extraPages.painPoints.lostLeads.content';
          solutionView = 'service-conversational';
       }
       if (view === 'pain-data-chaos') {
          contentKey = 'extraPages.painPoints.dataChaos.content';
          solutionView = 'service-content-gen'; // Mapped to Content Gen/Analytics
       }
       if (view === 'pain-manual-work') {
          contentKey = 'extraPages.painPoints.manualWork.content';
          solutionView = 'service-automation';
       }

       return (
         <div className="flex flex-col relative z-10">
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-12">
               <p className="text-xl leading-relaxed font-light whitespace-pre-line">
                 {t(contentKey)}
               </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-10 mt-4">
              <button 
                onClick={() => navigateTo(solutionView)}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600 bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95 animate-shimmer-slide animate-pulsate-fwd flex items-center justify-center gap-2"
              >
                {t('painPoints.ctaSolution')} <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={() => handleBackToSection('pain-points')}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-bold text-lg transition-all hover:bg-white/5 active:scale-95 flex items-center justify-center"
              >
                {t('painPoints.btnBack')}
              </button>
            </div>
         </div>
       );
     }

     // Blog Post Pages
     if (view.startsWith('blog-')) {
       const postId = view.replace('blog-', '');
       const postData = BLOG_POSTS.find(p => p.id === postId);
       const contentKey = `extraPages.blog.${postId}.content`;
       
       return (
          <div className="relative z-10">
             {postData && (
                <div className="mb-8">
                   <img src={postData.image} alt={getTitle(view)} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 border border-white/10 shadow-2xl" />
                   <div className="flex items-center text-slate-400 text-sm mb-6">
                      <Calendar className="w-4 h-4 mr-2" /> {postData.date}
                      <span className="mx-2">•</span>
                      <span>{postData.readTime}</span>
                   </div>
                </div>
             )}
             <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-12">
                <p className="text-xl leading-relaxed whitespace-pre-line">
                   {t(contentKey)}
                </p>
             </div>
             
             <div className="flex justify-start border-t border-white/10 pt-8">
                <button 
                   onClick={() => handleBackToSection('blog')}
                   className="px-6 py-3 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-bold transition-all hover:bg-white/5 flex items-center justify-center gap-2"
                 >
                   <ArrowLeft className="w-4 h-4" /> {t('painPoints.btnBack')}
                 </button>
             </div>
          </div>
       );
     }
     
     // Fallback for other generic pages
     return (
       <div className="relative z-10">
        <p className="mb-4 text-xl whitespace-pre-line">
          {t('extraPages.content')}
        </p>
        <div className="flex justify-start mt-8">
           <button 
              onClick={() => navigateTo('home')}
              className="px-6 py-3 bg-transparent border border-white/20 hover:border-white text-white rounded-full font-bold transition-all hover:bg-white/5 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> {t('painPoints.btnBack')}
            </button>
        </div>
       </div>
     )
  }

  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in-up relative overflow-hidden bg-slate-950">
      
      {/* ---------------------------------- */}
      {/* PARTICLE BACKGROUND */}
      {/* ---------------------------------- */}
      <div className="hero__particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-10 leading-tight drop-shadow-lg">
          {getTitle(currentView)}
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-slate-400">
          {getContent(currentView)}
        </div>
      </div>
    </div>
  );
};

export default Legal;
