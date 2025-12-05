import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  gridArea?: string; // For bento grid layout
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  icon: ReactNode;
}

export interface BlogPost {
  id: string;
  image: string;
  date: string;
  readTime: string;
}
