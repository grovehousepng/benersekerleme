'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoldButton } from '../ui/GoldButton';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const backgrounds = [
  {
    url: '/images/hero/hero_bg_seker.avif',
    title: 'Geleneksel Sekerler',
    description: 'Elvan, Akide, Prens Akide ve Nane - Konya\'nın yuzyıllık gelenegı mermer tezgahta.',
  },
  {
    url: '/images/hero/hero_bg_lokum.avif',
    title: 'El Yapımı Lokumlar',
    description: 'Meyve aromalı, fıstık kaplı cesnili ve sarma lokumlar yumusacık dokuda.',
  },
  {
    url: '/images/hero/hero_bg_cezerye.avif',
    title: 'Geleneksel Cezerye',
    description: 'Havuc ve kuruyemisle hazırlanan, Mersin usulu kadim cezerye lezzeti.',
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            <div>
              <h1 className="display-xl text-cream font-bold mb-4">
                Konya'nın Gelenegı
              </h1>
              <p className="text-xl lg:text-2xl text-cream-warm/90 font-body font-medium">
                1960'tan beri ustalıkla hazırlanmış, geleneksel sekerlerimiz.
              </p>
            </div>

            <p className="font-body text-base lg:text-lg text-text-muted max-w-lg">
              Elvan Sekeri, Akide Sekeri, Prens Akide ve Nane Sekeri — mermer tezgahta elle seklendirilen, bakır kazanlarda sabrıyla kaynatılan sekerler.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <GoldButton href="/urunler" variant="solid">
                Tum Urunleri Incele
              </GoldButton>
            </motion.div>
          </motion.div>

          {/* Carousel Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="flex gap-2">
              {backgrounds.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-gold w-8' : 'bg-cream/40'
                  }`}
                  aria-label={`Slayt ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
