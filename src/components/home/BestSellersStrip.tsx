'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { bestSellers } from '@/data/bestSellers';

// Şeridi kesintisiz kaydırabilmek için listeyi iki kez basıyoruz.
// CSS marquee -50% kaydığından iki set birebir aynı olmalı.
const items = [...bestSellers, ...bestSellers];

export const BestSellersStrip: React.FC = () => {
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

        <div className="bener-marquee-track flex w-max">
          {items.map((item, i) => (
            <Link
              key={`${item.name}-${i}`}
              href={item.href}
              aria-hidden={i >= bestSellers.length}
              tabIndex={i >= bestSellers.length ? -1 : 0}
              className="group block w-[240px] flex-shrink-0 mr-5"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-cream border border-border/60 group-hover:border-gold transition-colors duration-300 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
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
        </div>
      </div>
    </section>
  );
};

export default BestSellersStrip;
