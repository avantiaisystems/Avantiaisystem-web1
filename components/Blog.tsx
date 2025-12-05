
import React from 'react';
import { BLOG_POSTS } from '../constants';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigation, View } from '../NavigationContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const handlePostClick = (postId: string) => {
    // Map post IDs to Views
    const viewMap: Record<string, View> = {
      'ai-trends': 'blog-ai-trends',
      'automation': 'blog-automation',
      'future-work': 'blog-future-work'
    };
    
    if (viewMap[postId]) {
      navigateTo(viewMap[postId]);
    } else {
      // Fallback
      navigateTo('blog');
    }
  };

  return (
    <section id="blog" className="py-24 bg-slate-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
                {t('blog.label')}
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {t('blog.title')}
              </h3>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <ScrollAnimation key={post.id} delay={index * 100}>
              <article 
                className="group relative flex flex-col h-full bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={t(`blog.items.${post.id}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {t(`blog.items.${post.id}.title`)}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {t(`blog.items.${post.id}.desc`)}
                  </p>
                  
                  <span className="inline-flex items-center text-sm font-bold text-primary-500 mt-auto group-hover:translate-x-2 transition-transform">
                    {t('blog.readMore')} <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
