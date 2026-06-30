'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useMotionValueEvent,
} from 'framer-motion';
import { bestSellers } from '@/data/bestSellers';

// Şeridi kesintisiz kaydırabilmek için listeyi iki kez basıyoruz.
const items = [...bestSellers, ...bestSellers];

const CARD_WIDTH = 260; // px — kart genişliği + boşluk (sürükleme sarması için)
const SPEED = 40; // px / saniye — otomatik kayma hızı

export const BestSellersStrip: React.FC = () => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const draggingRef = useRef(false);

  // Tek setin toplam genişliği (sarma noktası)
  const loopWidth = bestSellers.length * CARD_WIDTH;

  // x değerini her zaman [-loopWidth, 0] aralığında tut → sonsuz his
  const wrap = (value: number) => {
    let v = value % loopWidth;
    if (v > 0) v -= loopWidth;
    return v;
  };

  useMotionValueEvent(x, 'change', (latest) => {
    const wrapped = wrap(latest);
    if (wrapped !== latest) x.set(wrapped);
  });

  useAnimationFrame((_, delta) => {
    if (isPaused || draggingRef.current) return;
    const moveBy = (SPEED * delta) / 1000;
    x.set(wrap(x.get() - moveBy));
  });

  return (
    <section
      className="relative bg-cream-warm border-y border-border/40 py-10 sm:py-12 overflow-hidden"
      aria-label="Çok Satan Ürünler"
    >
      {/* Başlık */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-7 flex items-end justify-between gap-4">
        <div>
          <span className="label text-gold font-semibold tracking-widest block mb-1.5">
            EN ÇOK TERCİH EDİLENLER
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
            Çok Satanlar
          </h2>
        </div>
        <Link
          href="/urunler"
          className="hidden sm:inline-flex font-body text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-gold transition-colors whitespace-nowrap"
        >
          Tümünü Gör →
        </Link>
      </div>

      {/* Kayan şerit */}
      <div className="relative">
        {/* Kenar yumuşatma (fade) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-cream-warm to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-cream-warm to-transparent" />

        <motion.div
          ref={trackRef}
          className="flex gap-5 cursor-grab active:cursor-grabbing px-6"
          style={{ x, width: 'max-content' }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => {
            draggingRef.current = true;
          }}
          onDragEnd={() => {
            draggingRef.current = false;
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {items.map((item, i) => (
            <Link
              key={`${item.name}-${i}`}
              href={item.href}
              draggable={false}
              onClick={(e) => {
                // Sürükleme sonrası yanlışlıkla tıklamayı engelle
                if (draggingRef.current) e.preventDefault();
              }}
              className="group block w-[240px] flex-shrink-0 select-none"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-cream border border-border/60 group-hover:border-gold transition-colors duration-400 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  draggable={false}
                  sizes="240px"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="font-display text-base font-bold text-text-primary group-hover:text-gold transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="caption text-text-muted mt-0.5">{item.tagline}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellersStrip;
