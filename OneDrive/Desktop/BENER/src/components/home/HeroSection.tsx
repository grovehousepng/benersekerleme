'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoldButton } from '../ui/GoldButton';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const backgrounds = [
  {
    url: '/images/hero/hero_bg_lokum.png',
    title: 'Lokum Çeşitleri',
    description: 'Çifte kavrulmuş fıstıklı, güllü, narlı premium lokumlar.',
  },
  {
    url: '/images/hero/hero_bg_seker.png',
    title: 'Geleneksel Şekerler',
    description: 'Konya’nın asırlık lezzeti, meşhur Mevlana şekeri.',
  },
  {
    url: '/images/hero/hero_bg_cezerye.png',
    title: 'Nefis Cezerye',
    description: 'Havuç ve antep fıstığının muazzam uyumu.',
  },
  {
    url: '/images/hero/hero_bg_bayram.png',
    title: 'Bayram Şekerleri',
    description: 'Meyveli, dolgulu ve çikolatalı ikramlık bayram şekerleri.',
  },
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center bg-dark text-cream py-24 lg:py-0 overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgrounds.map((bg, idx) => (
          <motion.div
            key={bg.url}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: currentImageIndex === idx ? 1 : 0,
              scale: currentImageIndex === idx ? 1 : 1.05
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={bg.url}
              alt={bg.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
        
        {/* Brown (Charcoal) Overlay with 70% Opacity */}
        <div className="absolute inset-0 bg-charcoal/70 z-10 pointer-events-none" />
      </div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_50%)] pointer-events-none z-15" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none z-15" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col justify-center text-left"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <span className="label text-gold font-semibold tracking-[0.25em]">
                BENER ŞEKERLEMECİLİK
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariant}
              className="display-xl text-cream mb-6 tracking-tight font-bold"
            >
              Konya’nın <span className="text-gold font-serif italic font-medium">Tatlı</span> Geleneği
            </motion.h1>

            <motion.p 
              variants={fadeUpVariant}
              className="font-serif text-lg md:text-xl text-cream-warm/80 max-w-xl mb-10 leading-relaxed font-light italic"
            >
              "1960'tan bu yana; şeker, lokum, cezerye."
            </motion.p>

            <motion.div 
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4"
            >
              <GoldButton href="/urunler" variant="solid">
                Ürünleri Keşfet
              </GoldButton>
              <GoldButton href="/hakkimizda" variant="ghost">
                Hakkımızda
              </GoldButton>
            </motion.div>
          </motion.div>

          {/* Slider Controls / Previews */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-3 lg:gap-4 justify-between w-full mt-6 lg:mt-0"
          >
            {backgrounds.map((bg, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex items-center gap-3 p-3 lg:p-4 border transition-all duration-500 text-left rounded-none cursor-pointer group flex-1 min-w-0 ${
                  currentImageIndex === idx 
                    ? 'border-gold bg-charcoal/80 shadow-lg translate-y-[-2px] lg:translate-y-0 lg:translate-x-2' 
                    : 'border-border/10 bg-charcoal/40 hover:border-gold/30 hover:bg-charcoal/60'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h4 className={`font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${currentImageIndex === idx ? 'text-cream' : 'text-cream-warm/70'}`}>
                    {bg.title}
                  </h4>
                  <p className="caption text-cream-warm/50 transition-colors duration-300 leading-normal mt-0.5 line-clamp-1 hidden lg:block">
                    {bg.description}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
