
import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { useNavigation } from '../NavigationContext';

/* 
  PARA EDITAR EL TEXTO DE LA SECCIÓN HERO, VE A: translations.ts
  TO EDIT HERO TEXT, GO TO: translations.ts
*/

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { navigateTo, currentView } = useNavigation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleContactClick = () => {
    if (currentView !== 'home') {
      navigateTo('home');
    }
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Neural Network Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80; // Fewer particles on mobile
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Velocity X
        this.vy = (Math.random() - 0.5) * 0.5; // Velocity Y
        this.size = Math.random() * 2 + 1;
        // Electric colors: Cyan, Violet, White
        const colors = ['#06b6d4', '#8b5cf6', '#ffffff']; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Draw connections (Neural Network)
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`; // Violet glow lines
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero relative pt-28 pb-12 lg:pt-48 lg:pb-24 overflow-hidden">
      
      {/* Neural Network Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
      />

      {/* Refined Background Mesh - Dark Mode / Electric */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-700/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }}></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <ScrollAnimation delay={0}>
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 ring-1 ring-white/5 rounded-full pl-1 pr-3 py-1 mb-6 md:mb-8 shadow-2xl hover:bg-white/10 transition-all cursor-pointer hover:scale-[1.02] group">
            <span className="bg-primary-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-lg shadow-primary-600/50 group-hover:bg-primary-500 transition-colors">{t('hero.newBadgeLabel')}</span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{t('hero.newBadge')}</span>
            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          {/* Adjusted text sizes for mobile to be less overwhelming */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
            {t('hero.titleStart')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-cyan to-primary-400 shimmer-text animate-text-shimmer drop-shadow-lg">
              {t('hero.titleHighlight')}
            </span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="mt-4 text-base md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-normal px-2">
            {t('hero.description')}
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          {/* Reduced gap and button padding/sizes for mobile */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mb-12">
            <button 
              onClick={handleContactClick}
              className="group w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 bg-white hover:bg-slate-200 text-slate-950 rounded-full font-bold text-sm md:text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 flex items-center justify-center gap-2 duration-300 animate-pulsate-fwd hover:bg-gradient-to-r hover:from-white hover:via-slate-200 hover:to-white hover:bg-[length:200%_auto] hover:animate-shimmer-slide"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleContactClick}
              className="w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full font-bold text-sm md:text-lg transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 duration-300 animate-pulsate-fwd"
            >
              <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
