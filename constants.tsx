
import React from 'react';
import { NavItem, Feature, FAQItem, Plan, Testimonial, ProcessStep, BlogPost } from './types';
import { Search, Lightbulb, Cog, Rocket, Bot, MessageCircle, BarChart3, Sliders, Network, PenTool, BrainCircuit, Instagram, Facebook, Linkedin, Twitter, Youtube, Twitch, FileSpreadsheet, FileCode, FileJson, FileType, Table, FileText } from 'lucide-react';

/* 
  -------------------------------------------------------------------------
  ARCHIVO DE DATOS ESTÁTICOS / STATIC DATA FILE
  -------------------------------------------------------------------------
*/

// ENLACES DE CHAT REAL (Configurar con tus datos reales)
export const CHAT_LINKS = {
  // Para WhatsApp: https://wa.me/[numero]
  whatsapp: "https://wa.me/1234567890", 
  
  // Para LINE: https://line.me/R/ti/p/[LINE_ID]
  // ID actualizado
  line: "https://line.me/R/ti/p/@147ahxmg" 
};

export const LOGOS = [
  { 
    name: "AWS", 
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
  },
  { 
    name: "n8n", 
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/N8n-logo.svg" 
  },
  { 
    name: "Google Cloud", 
    src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" 
  },
  { 
    name: "Google Workspace", 
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg" 
  },
  { 
    name: "Google Gemini", 
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" 
  },
  { 
    name: "OpenAI", 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" 
  }
];

export const FEATURES_DATA = [
  // Top Row (2 Items)
  {
    id: "automation", 
    icon: <Bot className="w-6 h-6 text-white" />, 
    gridArea: "md:col-span-1 lg:col-span-3"
  },
  {
    id: "conversational",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    gridArea: "md:col-span-1 lg:col-span-3"
  },
  // Bottom Row (3 Items)
  {
    id: "content-generation",
    icon: <PenTool className="w-6 h-6 text-white" />,
    gridArea: "md:col-span-1 lg:col-span-2"
  },
  {
    id: "integration",
    icon: <Network className="w-6 h-6 text-white" />,
    gridArea: "md:col-span-1 lg:col-span-2"
  },
  {
    id: "autonomous-agents",
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    gridArea: "md:col-span-1 lg:col-span-2"
  }
];

export const FAQS_DATA = [
  { id: "integrationTime" },
  { id: "customAI" },
  { id: "dataPrivacy" },
  { id: "maintenance" }
];

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and hobbies.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "48-hour response time"
    ],
    buttonText: "Ponte en contacto" 
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams and businesses.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "24-hour response time",
      "Custom domains"
    ],
    isPopular: true,
    buttonText: "Ponte en contacto" 
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with specific needs.",
    features: [
      "Unlimited everything",
      "Custom reporting",
      "Dedicated account manager",
      "1-hour response time",
      "SSO & Audit logs"
    ],
    buttonText: "Ponte en contacto" 
  }
];

export const TESTIMONIALS: (Testimonial & { id: string })[] = [
  {
    id: "t1",
    content: "Implementation of Avanti's conversational agents reduced our response time by 90%. We are now closing deals while our team sleeps.",
    author: "Elena Rodriguez",
    role: "Operations Director",
    company: "Global Logistics",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t2",
    content: "The n8n automation architecture they built for our finances saved us hiring two full-time accountants. The ROI was immediate.",
    author: "James Chen",
    role: "CEO",
    company: "FinTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t3",
    content: "We were skeptical about AI, but Avanti's strategic approach gave us clarity. Their predictive analytics model is now the core of our inventory planning.",
    author: "Sarah Miller",
    role: "VP of Supply Chain",
    company: "Retail Giants",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "discovery", icon: <Search className="w-8 h-8" /> },
  { id: "strategy", icon: <Lightbulb className="w-8 h-8" /> },
  { id: "development", icon: <Cog className="w-8 h-8" /> },
  { id: "deployment", icon: <Rocket className="w-8 h-8" /> }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-15",
    readTime: "5 min read"
  },
  {
    id: "automation",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-10",
    readTime: "4 min read"
  },
  {
    id: "future-work",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-01",
    readTime: "6 min read"
  }
];
