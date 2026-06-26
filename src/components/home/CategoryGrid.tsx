'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { SectionTitle } from '../ui/SectionTitle';
import { OrnamentDivider } from '../ui/OrnamentDivider';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className="flex flex-col items-center"
        >
          <SectionTitle
            label="TATLI BİR YOLCULUK"
            title="Ürün Seçkilerimiz"
            subtitle="Elvan'dan Akide'ye, Nane'den Bayram Şekeri'ne — Konya'nın köklü geleneğinden ilham alınan iki ana koleksiyon."
            align="center"
          />
          <OrnamentDivider lineWidth="w-24" className="mb-16" />
        </motion.div>

        {/* 3 Column Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.slug}
              variants={fadeUpVariant}
              className="group relative h-[450px] border border-border bg-dark overflow-hidden flex flex-col justify-end p-8"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={category.heroImage}
                  alt={`${category.name} Kategorisi`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-90"
                />
                {/* Standard darkening overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                {/* Golden hover glow overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Decorative Border Glow on Hover */}
              <div className="absolute inset-4 border border-transparent group-hover:border-gold/30 transition-all duration-700 pointer-events-none z-10" />

              {/* Card Content */}
              <div className="relative z-20 space-y-3 text-cream text-left">
                <span className="label text-gold font-semibold tracking-widest block">
                  {category.namePlural}
                </span>
                
                <h3 className="font-display text-2xl font-bold">
                  {category.name}
                </h3>
                
                <p className="caption text-cream-warm/75 line-clamp-2 leading-relaxed">
                  {category.tagline}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/urunler/${category.slug}`}
                    className="font-body text-xs font-bold uppercase tracking-wider text-gold group-hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"
                  >
                    Keşfet
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
