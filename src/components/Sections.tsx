import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, MapPin, Globe, Check, Zap, Layers, Palette, Focus, Box, Sun, Instagram } from 'lucide-react';

export const FAQSection = ({ t }: { t: any }) => {
  return (
    <section id="qa" className="mt-32 pt-20 border-t border-brand-border section-optimize">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-1.5 h-6 bg-brand-fg" />
        <div>
          <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
            {t.faq.title}
          </h2>
          <p className="text-[14px] font-black uppercase tracking-widest mt-1 opacity-50">{t.faq.subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {t.faq.items.map((item: any, idx: number) => (
          <details key={idx} className="group border-b border-brand-border py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-[12px] font-black uppercase tracking-tight group-open:text-brand-fg transition-colors">
                {item.q}
              </span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 opacity-30" />
            </summary>
            <div className="mt-4 text-[12px] leading-relaxed text-brand-fg/70 font-medium">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export const LocalSEOSection = ({ t }: { t: any }) => {
  return (
    <section id="cobertura" className="mt-32 mb-16 scroll-mt-20 section-optimize">
      <div className="px-0 py-8 border-t border-brand-fg/10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-brand-fg" />
          <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
            {t.localSEO.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
          {t.localSEO.cities.map((city: any, idx: number) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <MapPin className="w-3 h-3 text-brand-fg/20 group-hover:text-brand-fg transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-fg/40 group-hover:text-brand-fg transition-colors">
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolutionsSection = ({ t }: { t: any }) => {
  return (
    <section id="soluciones" className="mt-32 mb-16 scroll-mt-20 section-optimize">
      <div className="px-0 py-8 border-t border-brand-fg/10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-brand-fg" />
          <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
            {t.solutions.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.solutions.items.map((sol: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3 group">
              <Globe className="w-4 h-4 text-brand-fg/30 group-hover:text-brand-fg group-hover:rotate-12 transition-all" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-fg/50 group-hover:text-brand-fg">
                {sol.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = ({ t }: { t: any }) => (
  <section className="mb-24 py-16 border-y border-brand-border overflow-hidden section-optimize">
    <div className="flex items-center gap-2 mb-12 px-6">
      <div className="w-1 h-4 bg-brand-fg" />
      <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
        {t.header.nav.qa}
      </h2>
    </div>
    <div className="flex animate-marquee gap-12 whitespace-nowrap px-6">
      {[...t.testimonials, ...t.testimonials].map((item: any, idx: number) => (
        <div key={idx} className="flex-shrink-0 w-[400px] bg-brand-fg/5 p-8 border border-white/5 whitespace-normal">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Check key={i} className="w-3 h-3 text-brand-fg/40" />
            ))}
          </div>
          <p className="text-[14px] font-medium leading-relaxed italic mb-6 break-words text-brand-fg/80">
            "{item.text || item.quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-fg/10 flex items-center justify-center font-black text-[10px]">
              {item.author[0]}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest">{item.author}</p>
              <p className="text-[9px] font-medium text-brand-fg/40 uppercase tracking-tighter">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const Equipment = ({ t }: { t: any }) => (
  <section className="mb-24 section-optimize">
    <div className="flex items-center gap-2 mb-12">
      <div className="w-1 h-4 bg-brand-fg" />
      <h2 className="text-[10px] font-black text-brand-fg tracking-[0.3em] uppercase block">
        {t.header.nav.lab}
      </h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {t.equipment.map((item: any, idx: number) => (
        <div key={idx} className="group border border-brand-border p-6 hover:bg-brand-fg/5 transition-colors">
          <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
            {idx === 0 && <Sun className="w-5 h-5 text-brand-fg" />}
            {idx === 1 && <Focus className="w-5 h-5 text-brand-fg" />}
            {idx === 2 && <Box className="w-5 h-5 text-brand-fg" />}
            {idx === 3 && <Layers className="w-5 h-5 text-brand-fg" />}
          </div>
          <h3 className="text-[11px] font-black uppercase tracking-widest mb-2 group-hover:text-brand-fg">{item.name}</h3>
          <p className="text-[9px] font-medium text-brand-fg/40 uppercase tracking-tighter leading-relaxed">{item.specs || item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
