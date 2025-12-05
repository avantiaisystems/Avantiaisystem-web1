
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type View = 'home' | 'features' | 'integrations' | 'changelog' | 'docs' | 'about' | 'blog' | 'careers' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'licenses' | 'compliance' | 'rpa-explanation' | 'pain-lost-leads' | 'pain-data-chaos' | 'pain-manual-work' | 'service-automation' | 'service-conversational' | 'service-content-gen' | 'service-integration' | 'service-autonomous-agents' | 'blog-ai-trends' | 'blog-automation' | 'blog-future-work';

interface NavigationContextType {
  currentView: View;
  navigateTo: (view: View) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
