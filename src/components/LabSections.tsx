import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Zap, Palette, Focus, Box, Sun, ArrowRight, X } from 'lucide-react';

export const LabBox = ({ title, description }: { title: string, description: string }) => (
  <div className="border border-brand-fg/[0.08] p-4 group hover:bg-brand-fg/[0.02] transition-all">
    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-fg/40 group-hover:text-brand-fg mb-1 transition-colors">{title}</h4>
    <p className="text-[11px] font-medium tracking-tight text-brand-fg/60 leading-tight">{description}</p>
  </div>
);

export const LabArticle = ({ 
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
      <h3 className="text-2xl font-black uppercase tracking-tighter">{title}</h3>
    </div>
    <span className="mb-6 inline-block bg-brand-fg text-brand-bg px-2 py-1 text-[10px] font-bold uppercase tracking-widest">{subtitle}</span>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <div className="text-[13px] leading-relaxed opacity-70 mb-6 whitespace-pre-line font-medium">
          {description}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {options.map((opt, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 5 }}
              className="flex flex-col border-l border-brand-border pl-3 group hover:border-brand-fg transition-colors cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-[0.1em] font-black mb-1 group-hover:text-brand-fg">{opt}</span>
              <span className="text-[8px] opacity-40 uppercase tracking-widest font-mono">LAB PROTOCOL v4.2</span>
            </motion.div>
          ))}
        </div>
      </div>
      {imageUrl && (
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-fg/5 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={imageUrl} 
            alt={`Ejemplo de protocolo visual: ${title}`} 
            loading="lazy"
            decoding="async"
            className="w-full grayscale border border-brand-border aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  </div>
);

export const LaboratoryTabs = ({ t }: { t: any }) => {
  const [activeTab, setActiveTab] = useState(0);

  const labData = t.labData;
  const labImages = [
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=25&w=350&fm=webp",
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=15&w=350&fm=webp",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=15&w=350&fm=webp"
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3 flex flex-col gap-1">
        {labData.map((item: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left px-4 py-4 text-[11px] uppercase tracking-widest transition-all border-l-2 ${
              activeTab === idx ? "bg-brand-fg text-brand-bg font-black border-brand-fg" : "hover:bg-brand-fg/5 opacity-50 border-transparent"
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
