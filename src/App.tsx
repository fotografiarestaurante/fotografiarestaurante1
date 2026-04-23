import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Upload, 
  Maximize2, 
  Zap, 
  Layers, 
  Sun, 
  Palette, 
  Focus, 
  Box,
  Play,
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  Cookie,
  Settings,
  X,
  Info,
  Globe,
  Moon,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { Language, translations } from './translations';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDocFromServer, getDocs, writeBatch, query } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// --- Tally Type Declaration ---
declare global {
  interface Window {
    Tally: any;
  }
}

const Tally = (window as any).Tally;

// --- Firebase Initialization ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Components ---

const Viewfinder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative group silver-glow ${className}`}>
      {/* Nikon Viewfinder Corners */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 w-4 h-4 md:w-6 md:h-6 border-t-[1px] md:border-t-[1.5px] border-l-[1px] md:border-l-[1.5px] border-white/40 z-20 pointer-events-none" />
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-4 h-4 md:w-6 md:h-6 border-t-[1px] md:border-t-[1.5px] border-r-[1px] md:border-r-[1.5px] border-white/40 z-20 pointer-events-none" />
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-4 h-4 md:w-6 md:h-6 border-b-[1px] md:border-b-[1.5px] border-l-[1px] md:border-l-[1.5px] border-white/40 z-20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 md:w-6 md:h-6 border-b-[1px] md:border-b-[1.5px] border-r-[1px] md:border-r-[1.5px] border-white/40 z-20 pointer-events-none" />
      
      {/* Central Focus Circle & HUD */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-32 h-32 md:w-48 md:h-48 border-[0.5px] border-white/10 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 md:w-4 md:h-4 border-[0.5px] border-red-500/40 rounded-sm" />
          {/* Rule of thirds lines - subtle */}
          <div className="absolute top-1/3 left-0 w-full h-[0.5px] bg-white/5" />
          <div className="absolute top-2/3 left-0 w-full h-[0.5px] bg-white/5" />
          <div className="absolute left-1/3 top-0 h-full w-[0.5px] bg-white/5" />
          <div className="absolute left-2/3 top-0 h-full w-[0.5px] bg-white/5" />
        </div>
      </div>

      {children}

      {/* Nikon Metadata Bar */}
      <div className="absolute top-3 md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-6 px-4 md:px-6 py-1 md:py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 scale-75 md:scale-100">
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] md:text-[7px] font-mono text-white/40 uppercase tracking-tighter">F-Stop</span>
          <span className="text-[8px] md:text-[9px] font-mono text-white font-bold tracking-widest">2.8</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] md:text-[7px] font-mono text-white/40 uppercase tracking-tighter">Shutter</span>
          <span className="text-[8px] md:text-[9px] font-mono text-white font-bold tracking-widest">1/250</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-1.5">
          <span className="text-[6px] md:text-[7px] font-mono text-white/40 uppercase tracking-tighter">ISO</span>
          <span className="text-[8px] md:text-[9px] font-mono text-white font-bold tracking-widest">100</span>
        </div>
      </div>
    </div>
  );
};

const ThemeToggle = ({ isDark, onToggle, t }: { isDark: boolean, onToggle: () => void, t: any }) => {
  return (
    <button 
      onClick={onToggle}
      className="flex items-center gap-2 hover:opacity-50 transition-opacity font-black tracking-[0.2em] text-[10px] py-1 px-3 border border-brand-border h-[32px]"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <>
          <Sun size={12} strokeWidth={3} />
          <span className="hidden lg:inline">{t.header.lightMode}</span>
        </>
      ) : (
        <>
          <Moon size={12} strokeWidth={3} />
          <span className="hidden lg:inline">{t.header.darkMode}</span>
        </>
      )}
    </button>
  );
};

const LanguageSwitcher = ({ current, onChange }: { current: Language, onChange: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const langs: { key: Language; name: string }[] = [
    { key: 'es', name: 'ES' },
    { key: 'en', name: 'EN' },
    { key: 'fr', name: 'FR' },
    { key: 'it', name: 'IT' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:opacity-50 transition-opacity font-black tracking-[0.2em] text-[10px] py-1 px-2 border border-transparent hover:border-brand-border"
        aria-label="Change Language"
      >
        <Globe size={12} strokeWidth={3} />
        <span>{current.toUpperCase()}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-[190]" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-full mt-2 right-0 bg-brand-bg border border-brand-border p-1 min-w-[60px] z-[200] shadow-xl"
            >
              {langs.map((l) => (
                <button
                  key={l.key}
                  onClick={() => {
                    onChange(l.key);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-[9px] font-black hover:bg-brand-fg hover:text-brand-bg transition-colors tracking-widest ${current === l.key ? 'bg-brand-fg text-brand-bg' : 'text-brand-fg'}`}
                >
                  {l.name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const BeforeAfterSlider = ({ t }: { t: any }) => {
  const [sliderPos, setSliderPos] = useState(60);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <Viewfinder className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[9/16] mb-6 shadow-xl">
      <div 
        ref={containerRef}
        className="relative w-full h-full bg-brand-fg/5 overflow-hidden cursor-ew-resize select-none border border-brand-border"
        onMouseMove={(e) => (e.buttons === 1 || e.type === 'mousedown') && handleMove(e)}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
      >
        {/* After (Color) - Always full width background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000" 
            alt={t.common.sliderAfter} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-[20px] md:top-[30px] right-[20px] md:right-[30px] z-30 text-brand-fg text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-brand-bg/80 px-2 py-1">
            AFTER [8K]
          </div>
        </div>

        {/* Before (B&W) - Overlaid with controllable width */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden z-20 pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-[1000%] h-full"> 
            {/* The inner div is much wider to ensure the image doesn't squash, but we use calc or fixed width trick */}
            {/* Actually, a cleaner way is using object-fit cover and relative positioning */}
            <img 
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000&sat=-100&bri=-20" 
              alt={t.common.sliderBefore} 
              className="absolute inset-0 h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '1000px' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-[20px] md:top-[30px] left-[20px] md:left-[30px] z-30 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-black/40 px-2 py-1">
            BEFORE [RAW]
          </div>
        </div>

        {/* Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-brand-fg z-30"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-fg text-brand-bg flex items-center justify-center shadow-xl border-4 border-brand-bg/20">
            <Maximize2 size={12} className="rotate-45" />
          </div>
        </div>
      </div>
    </Viewfinder>
  );
};

const MainHero = ({ t, scrollToAndHighlight }: { t: any, scrollToAndHighlight: (id: string, open: boolean) => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = t.heroBanner.slides;
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="mb-24 relative overflow-hidden border border-brand-border h-[500px] md:h-[600px] bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with overlay */}
          <img 
            src={images[currentSlide]} 
            className="w-full h-full object-cover opacity-40 md:opacity-50"
            alt={slides[currentSlide].title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Content Layer */}
      <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-center pointer-events-none">
        <div className="max-w-[700px] pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-brand-fg" />
                <span className="text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-brand-fg mb-0">
                  {slides[currentSlide].subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-brand-fg text-balance drop-shadow-2xl">
                {slides[currentSlide].title}
              </h2>
              
              <p className="text-[14px] md:text-[18px] opacity-100 leading-relaxed max-w-[500px] mb-10 font-normal italic tracking-tight">
                {slides[currentSlide].desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (currentSlide === 0) {
                      scrollToAndHighlight('pack-degustacion', true);
                    } else if (currentSlide === 1) {
                      document.getElementById('comanda')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      document.getElementById('pack-degustacion')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative inline-flex items-center gap-8 bg-brand-fg text-brand-bg px-10 py-6 text-[12px] font-black uppercase tracking-[0.4em] overflow-hidden pointer-events-auto"
                >
                  <span className="relative z-10">{slides[currentSlide].button}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform" />
                  
                  <motion.div 
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-20 bg-white/20 skew-x-12 z-0"
                  />
                </motion.button>
                
                <div className="flex items-center gap-4 bg-brand-bg/60 backdrop-blur-md px-6 py-4 border border-brand-border">
                  <div className="flex flex-col">
                    <span className="text-[8px] opacity-40 uppercase tracking-widest">Digital_Chef</span>
                    <span className="text-[10px] font-mono font-black italic">ACTIVE_PROTOCOL</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex items-center gap-8">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group relative w-12 h-1 overflow-hidden bg-white/10"
            >
              <div 
                className={`absolute inset-0 bg-brand-fg transition-transform duration-500 origin-left ${currentSlide === i ? 'scale-x-100' : 'scale-x-0'}`} 
              />
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-3 border border-white/10 hover:bg-white/10 text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-3 border border-white/10 hover:bg-white/10 text-white transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-12 right-12 z-20 hidden md:flex flex-col items-end gap-1 opacity-20 pointer-events-none">
        <span className="text-[8px] font-mono tracking-widest">SCAN_COORDS: 41.3851° N, 2.1734° E</span>
        <span className="text-[8px] font-mono tracking-widest">BUFFER_STATE: [READY]</span>
        <div className="w-32 h-[1px] bg-brand-fg mt-2" />
      </div>
    </section>
  );
};

const CookieModal = ({ 
  isOpen, 
  onClose, 
  preferences, 
  onSave,
  t 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  preferences: { technical: boolean, analytical: boolean, marketing: boolean };
  onSave: (prefs: { technical: boolean, analytical: boolean, marketing: boolean }) => void;
  t: any;
}) => {
  const [localPrefs, setLocalPrefs] = React.useState(preferences);

  const toggle = (key: keyof typeof localPrefs) => {
    if (key === 'technical') return; // Cannot disable technical cookies
    setLocalPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-brand-bg/95 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-brand-bg border border-brand-border w-full max-w-lg p-8 relative shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-brand-fg opacity-30 hover:opacity-100 transition-opacity"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <div className="px-0 py-4 border-t border-brand-fg/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-4 bg-brand-fg" />
                  <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                    {t.cookies.config}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">{t.cookies.modalTitle}</h2>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold uppercase tracking-widest">{t.cookies.technical} ({(t.cookies.technicalDesc.includes('Necesarias') || t.cookies.technicalDesc.includes('Required')) ? 'Obligatorias' : 'Required'})</span>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{t.cookies.technicalDesc}</p>
                </div>
                <div className="w-10 h-6 bg-brand-fg rounded-full flex items-center px-1 opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full translate-x-4" />
                </div>
              </div>

              <div className="flex justify-between items-start gap-4 cursor-pointer" onClick={() => toggle('analytical')}>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold uppercase tracking-widest">{t.cookies.analytical}</span>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{t.cookies.analyticalDesc}</p>
                </div>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${localPrefs.analytical ? 'bg-brand-fg' : 'bg-brand-fg/20'}`}>
                  <motion.div 
                    animate={{ x: localPrefs.analytical ? 16 : 0 }}
                    className="w-4 h-4 bg-white rounded-full" 
                  />
                </div>
              </div>

              <div className="flex justify-between items-start gap-4 cursor-pointer" onClick={() => toggle('marketing')}>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold uppercase tracking-widest">{t.cookies.marketing}</span>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{t.cookies.marketingDesc}</p>
                </div>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${localPrefs.marketing ? 'bg-brand-fg' : 'bg-brand-fg/20'}`}>
                  <motion.div 
                    animate={{ x: localPrefs.marketing ? 16 : 0 }}
                    className="w-4 h-4 bg-white rounded-full" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => onSave(localPrefs)}
                className="bg-brand-fg text-brand-bg py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:opacity-90 transition-colors"
              >
                {t.cookies.save}
              </button>
              <button 
                onClick={() => onSave({ technical: true, analytical: true, marketing: true })}
                className="border border-brand-border py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-fg/5 transition-colors"
              >
                {t.cookies.acceptAll}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CookieConsent = ({ 
  onAccept, 
  onConfigure,
  t
}: { 
  onAccept: () => void, 
  onConfigure: () => void,
  t: any
}) => (
  <motion.div 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed bottom-10 left-10 right-10 z-[150] bg-brand-bg border border-brand-fg p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-brand-fg flex items-center justify-center text-brand-bg shrink-0">
        <Cookie size={24} />
      </div>
      <div>
        <div className="px-0 py-2 border-t border-brand-fg/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-brand-fg" />
            <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
              {t.cookies.bannerTitle}
            </span>
          </div>
        </div>
        <p className="text-[11px] opacity-70 uppercase tracking-widest leading-relaxed max-w-2xl">
          {t.cookies.bannerText}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4 shrink-0">
      <button 
        onClick={onConfigure}
        className="text-[10px] font-bold uppercase tracking-widest hover:underline px-4"
      >
        {t.cookies.configure}
      </button>
      <button 
        onClick={onAccept}
        className="bg-brand-fg text-brand-bg px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:opacity-80 transition-opacity"
      >
        {t.cookies.acceptAll}
      </button>
    </div>
  </motion.div>
);

const LegalModal = ({ 
  isOpen, 
  onClose, 
  title, 
  content,
  t
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  content: string;
  t: any;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-bg/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-brand-bg border border-brand-border w-full max-w-3xl p-12 max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-[24px] font-thin uppercase tracking-widest">{title}</h2>
              <button onClick={onClose} className="text-[10px] uppercase tracking-widest hover:underline">{t.legal.close.split(' ')[0]}</button>
            </div>
            <div className="text-[14px] leading-relaxed opacity-80 space-y-6 whitespace-pre-line">
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PackItem = ({ id, title, subtitle, price, details, t }: { id?: string, title: string, subtitle?: string, price: string, details?: string, t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFree = price === "0€";
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  // Listen for custom events to open modal or highlight from sidebar
  React.useEffect(() => {
    if (!id) return;
    
    const handleOpen = (e: any) => {
      if (e.detail?.id === id) {
        setIsOpen(true);
      }
    };

    const handleHighlight = (e: any) => {
      if (e.detail?.id === id) {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      }
    };

    window.addEventListener('open-protocol', handleOpen);
    window.addEventListener('highlight-protocol', handleHighlight);
    return () => {
      window.removeEventListener('open-protocol', handleOpen);
      window.removeEventListener('highlight-protocol', handleHighlight);
    };
  }, [id]);
  
  // Split title to put photo count on a second line in the modal
  const [mainTitle, photoCountRaw] = title.split('(');
  const photoCount = photoCountRaw ? `(${photoCountRaw}` : null;

  return (
    <>
      <motion.li 
        id={id}
        whileHover={{ x: 10 }}
        animate={isHighlighted ? { backgroundColor: "var(--brand-border)", x: 10 } : { backgroundColor: "transparent", x: 0 }}
        className="py-6 border-b border-brand-border last:border-0 cursor-pointer hover:bg-brand-fg/5 transition-all duration-300 px-4 -mx-4 group flex justify-between items-center"
        onClick={() => details && setIsOpen(true)}
      >
        <div className="flex flex-col">
          <span className="text-[14px] font-bold uppercase tracking-tighter group-hover:underline transition-all">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] opacity-40 uppercase tracking-widest mt-1">
              {subtitle}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.2em] p-1 opacity-25 group-hover:opacity-0 transition-opacity">
            <Layers size={12} />
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-all text-[9px] uppercase tracking-[0.2em] bg-brand-fg text-brand-bg px-3 py-2">
            {t.common.viewProtocol}
          </span>
        </div>
      </motion.li>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-brand-bg border border-brand-border max-w-5xl w-full p-6 md:p-12 shadow-2xl text-brand-fg overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-12 gap-6">
                <div className="max-w-[80%]">
                  <span className="section-label">{t.common.diagnosticLabel}</span>
                  <h2 className="text-3xl md:text-5xl font-thin uppercase tracking-tighter leading-tight">
                    {mainTitle.trim()}
                    {photoCount && (
                      <span className="inline-block ml-4 text-xl md:text-2xl font-light opacity-30 lowercase italic tracking-normal">
                        {photoCount}
                      </span>
                    )}
                  </h2>
                  <div className="mt-6">
                    {isFree ? (
                      <span className="inline-block bg-brand-fg text-brand-bg px-6 py-2 text-2xl md:text-3xl font-black tracking-tighter">{t.common.free}</span>
                    ) : (
                      <span className="text-3xl md:text-4xl font-mono font-light">{price}</span>
                    )}
                  </div>
                  
                  {/* High Visibility CTA */}
                  <div className="mt-8">
                    <a 
                      href="https://ig.me/m/fotografiarestaurante"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-brand-fg text-brand-bg px-10 py-5 text-[12px] font-black uppercase tracking-[0.4em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
                    >
                      {t.common.contactBtn}
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-[10px] uppercase tracking-[0.3em] hover:opacity-50 border border-brand-border px-4 py-2 shrink-0">{t.common.close}</button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-[14px] leading-relaxed">
                <div className="lg:col-span-1 space-y-8">
                  {details && details.includes("[PRINCIPIOS]") && (
                    <div className="border-l-2 border-brand-fg pl-8">
                      <strong className="block mb-4 uppercase text-[11px] tracking-[0.2em] opacity-40">{t.common.principles}</strong>
                      <p className="opacity-70 italic text-lg leading-snug">
                        {details.split("[PRINCIPIOS]")[1].split("[")[0].trim()}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                  {details && details.includes("[INCLUSIONES]") && (
                    <div>
                      <strong className="block mb-4 uppercase text-[11px] tracking-[0.2em] border-b border-brand-border pb-3">{t.common.inclusions}</strong>
                      <div className="opacity-70 space-y-3 whitespace-pre-line text-[15px]">
                        {details.split("[INCLUSIONES]")[1].split("[")[0].trim()}
                      </div>
                    </div>
                  )}

                  {details && details.includes("[CONDICIONES]") && (
                    <div>
                      <strong className="block mb-4 uppercase text-[11px] tracking-[0.2em] border-b border-brand-border pb-3">{t.common.conditions}</strong>
                      <div className="opacity-70 space-y-3 whitespace-pre-line text-[15px]">
                        {details.split("[CONDICIONES]")[1].split("[")[0].trim()}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {details && details.includes("[INSTRUCCIONES]") && (
                <div className="mt-12 bg-brand-fg/5 p-6 md:p-10 border border-brand-border">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="shrink-0">
                      <strong className="block uppercase text-[11px] tracking-[0.2em] bg-brand-fg text-brand-bg px-3 py-1">{t.common.instructions}</strong>
                    </div>
                    <div className="opacity-80 whitespace-pre-line text-[15px] leading-relaxed">
                      {details.split("[INSTRUCCIONES]")[1].split("[")[0].trim()}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-16 text-center border-t border-brand-border pt-10">
                <p className="text-[13px] opacity-70 italic mb-4">
                  {t.common.igFollow} <a href="https://instagram.com/fotografiarestaurante" target="_blank" rel="noopener noreferrer" className="text-brand-fg font-medium hover:underline">@fotografiarestaurante</a>.
                </p>
                <div className="opacity-40 text-[10px] uppercase tracking-widest">{t.common.igThanks}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LabBox = ({ title, description }: { title: string, description: string }) => (
  <div className="border border-brand-border p-3 text-[11px]">
    <strong className="block mb-1 uppercase text-[10px] tracking-[0.05em]">{title}</strong>
    {description}
  </div>
);

const LabArticle = ({ 
  title, 
  subtitle, 
  description, 
  options, 
  imageUrl,
  t
}: { 
  title: string, 
  subtitle: string, 
  description: string, 
  options: string[], 
  imageUrl?: string,
  t: any
}) => (
  <div className="mb-8 overflow-hidden">
    <div className="flex items-baseline gap-4 mb-2">
      <h3 className="text-2xl font-thin uppercase tracking-tighter">{title}</h3>
    </div>
    <span className="section-label mb-6 inline-block bg-brand-fg text-brand-bg px-2 py-1">{subtitle}</span>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <div className="text-[13px] leading-relaxed opacity-70 mb-6 whitespace-pre-line">
          {description}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {options.map((opt, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 5 }}
              className="flex flex-col border-l border-brand-border pl-3 group hover:border-brand-fg transition-colors cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-[0.1em] font-medium mb-1 group-hover:text-brand-fg">{opt}</span>
              <span className="text-[8px] opacity-40 uppercase tracking-widest">{t.common.labDisclaimer}</span>
            </motion.div>
          ))}
        </div>
      </div>
      {imageUrl && (
        <Viewfinder className="relative group">
          <div className="absolute inset-0 bg-brand-fg/5 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={imageUrl} 
            alt={`Ejemplo de protocolo visual: ${title}`} 
            loading="lazy"
            className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 border border-brand-border aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </Viewfinder>
      )}
    </div>
  </div>
);

const LaboratoryTabs = ({ t }: { t: any }) => {
  const [activeTab, setActiveTab] = useState(0);

  const labData = t.labData;
  const labImages = [
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3 flex flex-col gap-1">
        <div className="mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.lab.baseProtocol}</span>
        </div>
        {labData.slice(0, 5).map((item: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left px-4 py-4 text-[11px] uppercase tracking-widest transition-all ${
              activeTab === idx ? "bg-brand-fg text-brand-bg font-black" : "hover:bg-brand-fg/5 opacity-50"
            }`}
          >
            {item.title}
          </button>
        ))}
        <div className="mt-8 mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.lab.postProcess}</span>
        </div>
        {labData.slice(5).map((item: any, idx: number) => (
          <button
            key={idx + 5}
            onClick={() => setActiveTab(idx + 5)}
            className={`text-left px-4 py-4 text-[11px] uppercase tracking-widest transition-all ${
              activeTab === idx + 5 ? "bg-brand-fg text-brand-bg font-black" : "hover:bg-brand-fg/5 opacity-50"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-brand-border pt-12 lg:pt-0 lg:pl-12 min-h-[500px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LabArticle 
            title={labData[activeTab].title}
            subtitle={labData[activeTab].subtitle}
            description={labData[activeTab].description}
            options={labData[activeTab].options}
            imageUrl={labImages[activeTab]}
            t={t}
          />
        </motion.div>
      </div>
    </div>
  );
};

const Testimonials = ({ t }: { t: any }) => (
  <section className="mb-24 py-16 border-y border-brand-border overflow-hidden">
    <div className="flex items-center gap-2 mb-12 px-6">
      <div className="w-1 h-4 bg-brand-fg" />
      <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
        {t.sections.testimonials}
      </h2>
    </div>
    
    <div className="relative flex whitespace-nowrap group">
      <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused] px-4">
        {[...t.testimonials, ...t.testimonials].map((test: any, i: number) => (
          <div 
            key={i}
            className="min-w-[320px] max-w-[320px] border border-brand-border p-8 bg-brand-bg flex flex-col justify-between whitespace-normal silver-glow"
          >
            <p className="text-[14px] leading-relaxed italic opacity-70 mb-6 font-light">
              {test.text}
            </p>
            <div className="border-t border-brand-border pt-4">
              <span className="text-[10px] font-black uppercase tracking-widest block">{test.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Equipment = ({ t }: { t: any }) => (
  <section className="mb-24">
    <div className="flex items-center gap-2 mb-12">
      <div className="w-1 h-4 bg-brand-fg" />
      <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
        {t.sections.equipment}
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {t.equipment.map((item: any) => (
        <div key={item.id} className="border border-brand-border p-6 hover:border-brand-fg transition-colors group">
          <span className="text-[10px] font-mono opacity-40 block mb-2">{item.id}</span>
          <h4 className="text-[14px] font-black uppercase tracking-tighter mb-2 group-hover:underline">{item.name}</h4>
          <p className="text-[10px] opacity-50 uppercase tracking-widest leading-relaxed">{item.specs}</p>
        </div>
      ))}
    </div>
  </section>
);

const GalleryItem = ({ src, alt, tag, t }: { src: string, alt: string, tag: string, t: any }) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <Viewfinder className="aspect-square overflow-hidden border border-brand-border cursor-pointer touch-none" >
      <div 
        className="w-full h-full relative"
        onTouchStart={() => setIsTapped(true)}
        onTouchEnd={() => setIsTapped(false)}
        onClick={() => setIsTapped(!isTapped)}
      >
        <motion.img 
          src={src} 
          alt={alt} 
          loading="lazy"
          animate={{
            scale: isTapped ? 1.05 : 1,
            filter: isTapped ? "grayscale(0%)" : undefined
          }}
          className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 scale-100 md:group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-fg/5 md:group-hover:bg-transparent transition-colors pointer-events-none z-10" />
        
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform bg-brand-fg text-brand-bg z-30 ${isTapped ? 'translate-y-0' : 'translate-y-full md:group-hover:translate-y-0'}`}>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">{tag}</span>
        </div>
        
        {/* Mobile Info Overlay */}
        <div className="absolute top-2 right-2 md:hidden z-20">
          <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <Maximize2 size={10} className="text-white/60" />
          </div>
        </div>
      </div>
    </Viewfinder>
  );
};

const TechStepItem = ({ m }: { m: any; key?: any }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  const getTechData = (id: string) => {
    const data: Record<string, string> = {
      "01": "LUZ: PROFESIONAL | INTENSIDAD: 85% | DIFUSIÓN: ÓPTIMA",
      "02": "RECORTE: QUIRÚRGICO | ALGORITMO: MASK-AI v4 | PRECISIÓN: 99.8%",
      "03": "UMAMI: ACTIVO | VAPOR DETECTADO | ENTROPÍA: ESTABLE",
      "04": "UPSCALING: 400% | RESOLUCIÓN: 8K READY | NITIDEZ: MÁX"
    };
    return data[id] || "ESTADO: CALIBRANDO...";
  };

  return (
    <div 
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onClick={() => setIsFocused(!isFocused)}
      className="flex flex-col gap-4 group cursor-help transition-all active:scale-[0.98] select-none"
    >
      <span className={`font-mono text-[10px] transition-colors ${isFocused ? 'text-brand-fg' : 'opacity-40 group-hover:text-brand-fg'}`}>{m.step}</span>
      <h3 className={`text-[14px] font-black uppercase tracking-widest transition-all ${isFocused ? 'underline text-brand-fg' : 'group-hover:underline'}`}>{m.title}</h3>
      <p className="text-[12px] opacity-60 leading-relaxed font-light">{m.desc}</p>
      
      <AnimatePresence>
        {isFocused && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-brand-fg/20 mt-2">
              <p className="font-mono text-[8px] tracking-[0.1em] text-brand-fg/80 leading-tight block">
                <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full mr-2 animate-pulse" />
                {getTechData(m.step)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isDark, setIsDark] = useState<boolean>(false);
  const t = translations[lang];

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('fotografia_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('fotografia_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('fotografia_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    document.title = t.header.title + " | " + t.header.subtitle;
    document.documentElement.lang = lang;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.seo.description);
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', t.seo.keywords);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.header.title + " | " + t.header.subtitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.seo.description);

    // Update hreflang
    let link = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, [lang, t]);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as Language;
    if (['es', 'en', 'fr', 'it'].includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const [legalType, setLegalType] = useState<'terms' | 'privacy' | 'ip' | null>(null);
  const [activeProtocol, setActiveProtocol] = useState<{title: string, details: string} | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    technical: true,
    analytical: false,
    marketing: false
  });

  React.useEffect(() => {
    const savedCookies = localStorage.getItem('fotografia_cookies_accepted');
    if (!savedCookies) {
      setShowCookieBanner(true);
    } else {
      setCookieSettings(JSON.parse(savedCookies));
    }
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = { technical: true, analytical: true, marketing: true };
    localStorage.setItem('fotografia_cookies_accepted', JSON.stringify(allPrefs));
    setCookieSettings(allPrefs);
    setShowCookieBanner(false);
    setShowCookieModal(false);
  };

  const handleSavePrefs = (prefs: typeof cookieSettings) => {
    localStorage.setItem('fotografia_cookies_accepted', JSON.stringify(prefs));
    setCookieSettings(prefs);
    setShowCookieBanner(false);
    setShowCookieModal(false);
  };

  const [isResetting, setIsResetting] = useState(false);
  const handleResetData = async () => {
    if (!window.confirm('¿Desea borrar todas las comandas y entradas de datos? Esta acción es irreversible y reseteará el historial para la gestión por Nominalia.')) return;
    setIsResetting(true);
    try {
      const q = query(collection(db, 'comandas'));
      const snapshot = await getDocs(q);
      const batch = writeBatch(db);
      snapshot.docs.forEach((d) => {
        batch.delete(d.ref);
      });
      await batch.commit();
      alert('Todas las entradas han sido borradas con éxito. El sistema está ahora limpio para su gestión.');
    } catch (error) {
      console.error('Error al borrar datos:', error);
      alert('Error técnico al borrar los datos. Verifique permisos.');
    } finally {
      setIsResetting(false);
    }
  };

  const authorityProtocols = t.authorityProtocols;
  const videoProtocols = t.videoProtocols;

  const scrollToAndHighlight = (id: string, openDetail: boolean = false) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (openDetail) {
        window.dispatchEvent(new CustomEvent('open-protocol', { detail: { id } }));
      } else {
        window.dispatchEvent(new CustomEvent('highlight-protocol', { detail: { id } }));
      }
    }
  };

  const legalContent = t.legalContent;

  return (
    <div className="min-h-screen lg:h-screen w-full grid grid-cols-1 lg:grid-cols-[340px_1fr_280px] bg-brand-bg text-brand-fg selection:bg-brand-fg selection:text-brand-bg">
      {/* Header */}
      <header className="col-span-full border-b border-brand-border flex items-center justify-between px-4 md:px-10 tracking-[0.2em] uppercase text-[9px] min-[320px]:text-[10px] sm:text-[11px] md:text-[12px] h-[80px] sticky top-0 bg-brand-bg/80 backdrop-blur-sm z-[100]">
        <nav className="flex items-center gap-2 md:gap-10 w-full font-black">
          <span className="shrink-0 cursor-default text-[12px] md:text-[14px] lg:text-[16px] tracking-[0.25em]">{t.header.title}</span>
          <div className="hidden lg:flex gap-6">
            <button onClick={() => document.getElementById('tecnologia')?.scrollIntoView({behavior: 'smooth'})} className="hover:opacity-50 transition-all cursor-pointer">{t.header.nav.protocols}</button>
            <button onClick={() => document.getElementById('laboratorio')?.scrollIntoView({behavior: 'smooth'})} className="hover:opacity-50 transition-all cursor-pointer">{t.header.nav.lab}</button>
            <button onClick={() => document.getElementById('comanda')?.scrollIntoView({behavior: 'smooth'})} className="hover:opacity-50 transition-all cursor-pointer">{t.header.nav.contact}</button>
          </div>
          <div className="ml-auto flex items-center gap-3 sm:gap-6">
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} t={t} />
            <LanguageSwitcher current={lang} onChange={setLang} />
            <span className="hidden sm:inline opacity-40">{t.header.subtitle}</span>
          </div>
        </nav>
      </header>

      {/* Left Panel */}
      <aside className="border-b lg:border-b-0 lg:border-r border-brand-border p-5 h-auto lg:h-full lg:p-10 flex flex-col justify-start lg:overflow-y-auto custom-scrollbar" role="complementary">
        <div>
          <div className="flex items-center gap-2 mb-6 pt-12 border-t border-brand-fg/10">
            <div className="w-1 h-4 bg-brand-fg" />
            <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
              {t.aside.diagnostic}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] mb-5 tracking-tighter uppercase text-balance">
            {t.aside.hero}
          </h1>
          <p className="text-[14px] leading-relaxed opacity-80 max-w-[500px] mb-10">
            {t.aside.desc}
          </p>
          <div className="w-8 h-[1px] bg-brand-fg/20 mb-6" /> 
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-fg flex items-center gap-2">
            {t.aside.selectMenu} <ArrowRight size={12} strokeWidth={3} />
          </p>
          <div className="mt-6">
            <motion.a 
              href="https://instagram.com/fotografiarestaurante" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 bg-brand-fg text-brand-bg px-6 py-3 text-[10px] uppercase tracking-[0.3em] hover:opacity-80 transition-colors"
            >
              <Instagram size={14} />
              {t.aside.galleryBtn}
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8">
          <BeforeAfterSlider t={t} />
        </div>
      </aside>

      {/* Main Panel */}
      <main className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-brand-border lg:overflow-y-auto custom-scrollbar">
        <MainHero t={t} scrollToAndHighlight={scrollToAndHighlight} />
        
        {/* El Método de Rescate AI */}
        <section id="tecnologia" className="mb-24">
          <div className="px-0 py-8 border-t border-brand-fg/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-brand-fg" />
              <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                {t.sections.tech}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
            {t.techSteps.map((m, idx) => (
              <TechStepItem key={idx} m={m} />
            ))}
          </div>
        </section>

        <div className="px-0 py-8 border-t border-brand-fg/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-brand-fg" />
            <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
              {t.sections.packs}
            </h2>
          </div>
        </div>
        <ul className="list-none">
          {t.packs.map((pack: any, idx: number) => {
            let packId = '';
            if (idx === 0) packId = 'pack-degustacion';
            if (idx === 2) packId = 'pack-lifting';
            if (idx === 5) packId = 'pack-integral';
            
            return (
              <React.Fragment key={idx}>
                <PackItem 
                  id={packId}
                  title={pack.title}
                  subtitle={pack.subtitle}
                  price={pack.price}
                  details={pack.details}
                  t={t}
                />
              </React.Fragment>
            );
          })}
        </ul>

        {/* Taste Gallery Section */}
        <div className="mt-16 mb-16">
          <div className="px-0 py-8 border-t border-brand-fg/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-brand-fg" />
              <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                {t.sections.gallery}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <GalleryItem 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
              alt={t.gallery.alt1}
              tag={t.gallery.tag1}
              t={t}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800"
              alt={t.gallery.alt2}
              tag={t.gallery.tag2}
              t={t}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
              alt={t.gallery.alt3}
              tag={t.gallery.tag3}
              t={t}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800"
              alt={t.gallery.alt4}
              tag={t.gallery.tag4}
              t={t}
            />
          </div>
          <p className="text-[11px] opacity-40 italic mt-4 border-t border-brand-border pt-4">
            {t.gallery.disclaimer}
          </p>
        </div>

        {/* Testimonials Section */}
        <Testimonials t={t} />

        {/* Equipment Section */}
        <Equipment t={t} />

        <div id="laboratorio" className="mt-24">
          <div className="mb-12">
            <div className="px-0 py-8 border-t border-brand-fg/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-brand-fg" />
                <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                  {t.sections.lab}
                </h2>
              </div>
            </div>
            <p className="text-[12px] text-gray-400 mt-2 max-w-xl">
              {t.lab.desc}
            </p>
          </div>
          <LaboratoryTabs t={t} />
        </div>

        {/* Marquee Sections */}
        <div className="mt-16 -mx-10 overflow-hidden border-y border-brand-border py-8 bg-brand-fg/5">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-fg flex items-center justify-center text-brand-bg rounded-sm">
                    <span className="text-[14px] font-bold">A</span>
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.2em] font-black">L'Anima</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="border-2 border-brand-fg p-1 rounded-full">
                    <div className="w-4 h-4 bg-brand-fg rounded-full" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.4em] font-light">Bistró 1924</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-brand-fg" />
                  <span className="text-[10px] uppercase tracking-[0.5em] italic">Komorebi</span>
                  <div className="w-10 h-[1px] bg-brand-fg" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-serif italic">T&F</span>
                  <span className="text-[9px] uppercase tracking-[0.1em] border-l border-brand-fg pl-2">Terra & Foc</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-4 h-[1px] bg-brand-fg" />
                    <div className="w-4 h-[1px] bg-brand-fg" />
                    <div className="w-4 h-[1px] bg-brand-fg" />
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.3em] font-medium">Marea Alta</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border border-brand-fg rotate-45 flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-fg -rotate-45" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em]">Oasis</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-mono font-bold">#</span>
                  <span className="text-[11px] uppercase tracking-tighter font-bold">La Forja</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-fg rounded-full" />
                  <span className="text-[10px] uppercase tracking-[0.6em] font-thin">Urbano 77</span>
                  <div className="w-2 h-2 bg-brand-fg rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-24 border-t border-brand-border pt-16 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            {/* Col 1: Logo & Mission */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-brand-bg relative group overflow-hidden shadow-2xl border border-brand-border">
                  {/* Neon Glow Ring - More Vibrant */}
                  <div className="absolute inset-0 rounded-full opacity-60 blur-[3px]" style={{
                    background: 'conic-gradient(from 0deg, #9333ea, #ef4444, #f59e0b, #ef4444, #9333ea)',
                  }} />
                  <div className="absolute inset-[3px] rounded-full bg-brand-bg" />
                  
                  {/* Circular Text Simulation */}
                  <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                      <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                      <text className="text-[6px] uppercase tracking-[0.3em] font-black fill-brand-fg">
                        <textPath href="#circlePath" startOffset="0%">
                          FOTOGRAFÍA • RESTAURANTE • FOTOGRAFÍA • RESTAURANTE •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Central Emblem - Fork F */}
                  <div className="relative flex items-start translate-x-1">
                    <span className="text-[32px] font-black leading-none text-brand-fg tracking-tighter">F</span>
                    <div className="flex flex-col gap-[2.5px] mt-[6px] ml-[1.5px]">
                      <div className="w-5 h-[2.5px] bg-brand-fg rounded-full" />
                      <div className="w-5 h-[2.5px] bg-brand-fg rounded-full" />
                      <div className="w-5 h-[2.5px] bg-brand-fg rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="block text-[14px] font-black uppercase tracking-widest">{t.header.title.split(' ')[0]}</span>
                  <span className="block text-[10px] uppercase tracking-[0.4em] opacity-40">{t.header.title.split(' ')[1]}</span>
                </div>
              </div>
              <p className="text-[12px] opacity-70 leading-relaxed max-w-[240px]">
                {t.footer.mission}
              </p>
            </div>

            {/* Col 2: Servicios */}
            <div className="flex flex-col gap-6">
              <div className="px-0 py-4 border-t border-brand-fg/10">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-brand-fg" />
                  <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                    {t.footer.servicios}
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li><button onClick={() => scrollToAndHighlight('pack-degustacion')} className="text-left text-[12px] hover:underline uppercase tracking-widest opacity-50 hover:opacity-100 transition-colors">{t.packs[0].title}</button></li>
                <li><button onClick={() => scrollToAndHighlight('pack-lifting')} className="text-left text-[12px] hover:underline uppercase tracking-widest opacity-50 hover:opacity-100 transition-colors">{t.packs[2].title}</button></li>
                <li><button onClick={() => scrollToAndHighlight('pack-integral')} className="text-left text-[12px] hover:underline uppercase tracking-widest opacity-50 hover:opacity-100 transition-colors">{t.packs[5].title}</button></li>
              </ul>
            </div>

            {/* Col 3: Legal */}
            <div className="flex flex-col gap-6">
              <div className="px-0 py-4 border-t border-brand-fg/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="opacity-40" />
                  <div className="w-1 h-4 bg-brand-fg" />
                  <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                    {t.footer.legal}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={() => setLegalType('terms')} className="text-left text-[12px] hover:underline uppercase tracking-widest">{t.legal.terms}</button>
                <button onClick={() => setLegalType('privacy')} className="text-left text-[12px] hover:underline uppercase tracking-widest">{t.legal.privacy}</button>
                <button onClick={() => setLegalType('ip')} className="text-left text-[12px] hover:underline uppercase tracking-widest">{t.legal.ip}</button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] opacity-40 uppercase tracking-widest">{t.footer.rights}</span>
            <span className="text-[10px] opacity-40 uppercase tracking-widest italic">{t.footer.tagline}</span>
          </div>
        </footer>
      </main>

      <LegalModal 
        isOpen={legalType !== null} 
        onClose={() => setLegalType(null)} 
        title={
          legalType === 'terms' ? t.legal.terms : 
          legalType === 'privacy' ? t.legal.privacy : 
          t.legal.ip
        }
        content={legalType ? legalContent[legalType] : ''}
        t={t}
      />

      <AnimatePresence>
        {activeProtocol && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveProtocol(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-brand-bg border border-brand-border w-full max-w-2xl p-12 relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveProtocol(null)}
                className="absolute top-8 right-8 text-brand-fg opacity-30 hover:opacity-100 transition-opacity"
              >
                {t.legal.close}
              </button>
              
              <div className="mb-10">
                <div className="px-0 py-4 border-t border-brand-fg/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 bg-brand-fg" />
                    <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                      {t.protocolModal.label}
                    </span>
                  </div>
                </div>
                <h2 className="text-[28px] md:text-[32px] font-thin uppercase tracking-tight leading-none pr-8">
                  {activeProtocol.title}
                </h2>
              </div>

              <div className="bg-brand-fg/5 border border-brand-border p-6 md:p-8">
                <div className="whitespace-pre-wrap text-[12px] leading-relaxed opacity-70 font-light">
                  {activeProtocol.details.split('\n').map((line, i) => {
                    if (line.startsWith('[')) {
                      return <h4 key={i} className="text-brand-fg font-bold mt-6 mb-2 first:mt-0 uppercase tracking-widest text-[10px]">{line}</h4>;
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveProtocol(null)}
                  className="insta-button text-[10px] px-8 py-4 bg-brand-fg text-brand-bg hover:opacity-90"
                >
                  {t.common.back}
                </button>
                <div className="flex-1 text-[9px] uppercase tracking-[0.2em] opacity-40 flex items-center">
                  {t.protocolModal.disclaimer}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Panel */}
      <aside className="p-6 md:p-10 flex flex-col gap-8 lg:overflow-y-auto">
        <div>
          <div className="px-0 py-8 border-t border-brand-fg/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-brand-fg" />
              <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block flex items-center">
                <span className="w-[6px] h-[6px] bg-[#ff0000] rounded-full inline-block mr-2" />
                {t.sections.cinema}
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
              onClick={() => setActiveProtocol(videoProtocols.viral)}
            >
              <p className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{t.videoProtocols.viral.title}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Impacto Sensorial</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="group cursor-pointer pt-4 border-t border-brand-fg/10"
              onClick={() => setActiveProtocol(videoProtocols.trailer)}
            >
              <p className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{t.videoProtocols.trailer.title}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Narrativa Dinámica</p>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="px-0 py-8 border-t border-brand-fg/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-brand-fg" />
              <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                {t.sections.activeProtocols}
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
              onClick={() => setActiveProtocol(authorityProtocols.nap)}
            >
              <p className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{t.authorityProtocols.nap.title}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Sincronización Técnica</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="group cursor-pointer pt-4 border-t border-brand-fg/10"
              onClick={() => setActiveProtocol(authorityProtocols.gmb)}
            >
              <p className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{t.authorityProtocols.gmb.title}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Mantenimiento Autoridad</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="group cursor-pointer pt-4 border-t border-brand-fg/10"
              onClick={() => setActiveProtocol(authorityProtocols.identity)}
            >
              <p className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{t.authorityProtocols.identity.title}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Validación de Marca</p>
            </motion.div>
          </div>
        </div>

        <div id="comanda" className="mt-auto border-t border-brand-border pt-8 pb-4">
          <div className="px-0 py-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-brand-fg" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                  {t.sections.contact}
                </span>
              </div>
            </div>
            <p className="text-[11px] opacity-40 uppercase tracking-widest leading-relaxed">
              {t.contact.disclaimer}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full group overflow-hidden"
            onClick={() => {
              if (window.Tally) {
                window.Tally.openPopup(t.contact.tallyId || 'RGBpRP', {
                  layout: 'modal',
                  width: 700,
                  locale: lang,
                  hiddenFields: {
                    language: lang
                  }
                });
              } else {
                window.open(`https://tally.so/forms/${t.contact.tallyId || 'RGBpRP'}?locale=${lang}`, '_blank');
              }
            }}
          >
            {/* Animated background glow */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-brand-fg/20 blur-xl group-hover:bg-brand-fg/40 transition-colors"
            />
            
            <div className="relative border border-brand-fg bg-brand-fg text-brand-bg py-5 px-6 flex items-center justify-between overflow-hidden">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] z-10">
                {t.contact.submit}
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="z-10"
              >
                <ArrowRight size={18} />
              </motion.div>

              {/* Scanning line effect */}
              <motion.div 
                animate={{ top: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-brand-bg/30 z-20"
              />
            </div>
          </motion.button>

          {/* Consultancy Section */}
          <div className="px-0 py-4 mt-8 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-brand-fg" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
                  {t.sections.consultancy}
                </span>
              </div>
            </div>
            <p className="text-[11px] opacity-40 uppercase tracking-widest leading-relaxed">
              {t.consultancy.desc}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full group overflow-hidden"
            onClick={() => {
              window.open('https://app.lemcal.com/@fotografiarestaurante/30-minutes', '_blank');
            }}
          >
            <motion.div 
              animate={{ 
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-brand-fg/10 blur-xl group-hover:bg-brand-fg/20 transition-colors"
            />
            
            <div className="relative border border-brand-fg bg-brand-fg text-brand-bg py-5 px-6 flex items-center justify-between overflow-hidden">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] z-10">
                {t.consultancy.button}
              </span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="z-10"
              >
                <Calendar size={18} />
              </motion.div>

              <motion.div 
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-brand-fg/10 to-transparent skew-x-12 z-20 pointer-events-none"
              />
            </div>
          </motion.button>
          
          <div className="mt-6 flex flex-col gap-3">
             <div className="flex items-center justify-between text-[8px] font-mono opacity-20 uppercase tracking-widest">
               <span>Status: Standby</span>
               <span>v4.0.2</span>
             </div>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="col-span-full border-t border-brand-border flex flex-col md:flex-row items-center p-6 md:px-10 justify-between text-[10px] opacity-40 uppercase tracking-[0.1em] gap-6 md:gap-0">
        <div className="flex gap-8 items-center">
          <span>{t.footer.rights}</span>
          <motion.button whileHover={{ x: 5 }} onClick={() => setLegalType('terms')} className="hover:text-brand-fg transition-colors">{t.legal.terms.split(' ')[0]}</motion.button>
          <motion.button whileHover={{ x: 5 }} onClick={() => setLegalType('privacy')} className="hover:text-brand-fg transition-colors">{t.legal.privacy.split(' ')[0]}</motion.button>
          <motion.button whileHover={{ x: 5 }} onClick={() => setLegalType('ip')} className="hover:text-brand-fg transition-colors">{t.legal.ip.split(' ')[0]}</motion.button>
          <motion.button whileHover={{ x: 5 }} onClick={() => setShowCookieModal(true)} className="hover:text-brand-fg transition-colors flex items-center gap-1">
            <Cookie size={10} /> {t.cookies.modalTitle.split(' ')[1]}
          </motion.button>
          {(import.meta as any).env.DEV && (
            <button 
              onClick={handleResetData}
              disabled={isResetting}
              className="ml-4 border border-red-500/30 px-2 py-1 text-red-500/60 hover:bg-red-500/5 transition-colors"
            >
              {isResetting ? 'RESETTING...' : 'RESET DATA'}
            </button>
          )}
        </div>
        <div className="hidden lg:flex items-center gap-4 italic opacity-50">
          {t.footer.mission}
        </div>
        <motion.div whileHover={{ x: -10 }} className="flex gap-4 items-center cursor-pointer">
          <Instagram size={12} />
          <span>@fotografiarestaurante</span>
        </motion.div>
      </footer>

      <CookieModal 
        isOpen={showCookieModal}
        onClose={() => setShowCookieModal(false)}
        preferences={cookieSettings}
        onSave={handleSavePrefs}
        t={t}
      />

      <AnimatePresence>
        {showCookieBanner && (
          <CookieConsent 
            onAccept={handleAcceptAll}
            onConfigure={() => setShowCookieModal(true)}
            t={t}
          />
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}
