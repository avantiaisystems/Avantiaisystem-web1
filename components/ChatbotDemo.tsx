
import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, Bot, Send, X, Minimize2, Paperclip } from 'lucide-react';
import { CHAT_LINKS } from '../constants';

const ChatbotDemo: React.FC = () => {
  const { t, language } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Determine platform based on language
  const isJapanese = language === 'ja';
  const platformName = isJapanese ? 'LINE' : 'WhatsApp';
  const platformColor = isJapanese ? 'bg-[#06C755]' : 'bg-[#25D366]';
  const platformHeader = isJapanese ? 'bg-[#06C755]' : 'bg-[#075E54]'; // WhatsApp header is darker green usually
  const bubbleColor = isJapanese ? 'bg-[#8DE055]' : 'bg-[#dcf8c6]';

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { text: t('chatbotDemo.demoMsg1'), isUser: false },
        { text: t('chatbotDemo.demoMsg2'), isUser: false }
      ]);
    }
  }, [t, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim()) return;

    // Add user message to UI
    const userText = message;
    setMessages(prev => [...prev, { text: userText, isUser: true }]);
    setMessage('');

    // Simulate "Typing..." delay then redirect logic
    setTimeout(() => {
        // Construct the URL to send this specific message
        // This keeps the user feeling like they started the chat here
        let link = '';
        if (isJapanese) {
           link = CHAT_LINKS.line; // LINE doesn't support pre-filled text in the same simple way via URL scheme, usually just opens profile
           window.open(link, '_blank', 'noopener,noreferrer');
        } else {
           // WhatsApp Pre-filled message
           const phone = CHAT_LINKS.whatsapp.replace('https://wa.me/', '');
           link = `https://wa.me/${phone}?text=${encodeURIComponent(userText)}`;
           window.open(link, '_blank', 'noopener,noreferrer');
        }
    }, 800);
  };

  return (
    <section id="chatbot-demo" className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <ScrollAnimation>
            <div className="text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">
                {t('chatbotDemo.label')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                {t('chatbotDemo.title')}
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t('chatbotDemo.subtitle')}
              </p>
              
              {/* Trigger Button (if widget is closed) */}
              {!isChatOpen && (
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className={`inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 ${platformColor} hover:brightness-110 text-white rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] active:scale-95 animate-pulsate-fwd mx-auto md:mx-0`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('chatbotDemo.startChat')}</span>
                </button>
              )}
            </div>
          </ScrollAnimation>

          {/* Interactive Widget Container */}
          <div className="relative flex justify-center h-[550px] items-end md:items-center">
            
             {/* THE WIDGET */}
             <div 
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isChatOpen 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-50 translate-y-10 scale-95 pointer-events-none'
                } w-full max-w-sm bg-slate-900 rounded-[1.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[500px]`}
             >
                {/* Header */}
                <div className={`${platformHeader} p-4 flex items-center justify-between text-white shadow-md z-10`}>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-base leading-tight">{t('chatbotDemo.agentName')}</h4>
                            <p className="text-xs opacity-80">Online</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                            <Minimize2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Chat Body */}
                <div className="flex-1 bg-[#E5DDD5] relative overflow-y-auto p-4 space-y-3 custom-scrollbar">
                     {/* Chat Background Pattern Overlay */}
                     <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>
                     
                     {messages.map((msg, idx) => (
                        <div key={idx} className={`relative z-10 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                            <div 
                                className={`max-w-[80%] p-3 text-sm rounded-lg shadow-sm ${
                                    msg.isUser 
                                    ? `${bubbleColor} text-slate-900 rounded-tr-none` 
                                    : 'bg-white text-slate-900 rounded-tl-none'
                                } animate-message-pop-in`}
                            >
                                {msg.text}
                                <span className="text-[10px] text-slate-500 block text-right mt-1 opacity-70">
                                    {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                            </div>
                        </div>
                     ))}
                     <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-slate-200">
                    <button type="button" className="p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors">
                        <Paperclip className="w-5 h-5" />
                    </button>
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t('chatbotDemo.placeholder')}
                        className="flex-1 bg-white border-none rounded-full px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-slate-300 shadow-sm"
                    />
                    <button 
                        type="submit" 
                        disabled={!message.trim()}
                        className={`p-2.5 rounded-full text-white transition-all transform active:scale-95 ${
                            message.trim() ? platformHeader : 'bg-slate-400 cursor-not-allowed'
                        }`}
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
             </div>

             {/* Closed State Placeholder / Visual Aid */}
             {!isChatOpen && (
                 <div 
                    className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none" 
                    aria-hidden="true"
                 >
                     <div className="w-64 h-64 rounded-full bg-primary-500/20 filter blur-[80px] animate-pulse"></div>
                 </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatbotDemo;
