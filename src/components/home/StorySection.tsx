'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoldButton } from '../ui/GoldButton';
import { SectionTitle } from '../ui/SectionTitle';
import { OrnamentDivider } from '../ui/OrnamentDivider';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

export const StorySection: React.FC = () => {
  const stats = [
    { value: '60+', label: 'Yıl Deneyim', desc: 'Yarım asrı aşan üretim birikimi.' },
    { value: '175+', label: 'Aktif Ürün', desc: 'Şeker, Lokum ve Cezerye koleksiyonları.' },
    { value: '100%', label: 'El Yapımı', desc: 'Geleneksel bakır kazan yöntemleri.' },
  ];

  return (
    <section className="py-24 bg-ivory border-t border-b border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Text and Stats */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <motion.div variants={fadeUpVariant} className="space-y-4">
              <SectionTitle
                label="HİKAYEMİZ"
                title="1960'tan Bu Yana Aynı Ustalık"
                align="left"
              />
              <OrnamentDivider lineWidth="w-20" className="!justify-start my-4" />
            </motion.div>

            <motion.div variants={fadeUpVariant} className="space-y-6 text-text-secondary font-body text-base leading-relaxed">
              <p>
                Konya’nın kadim şekercilik kültürünü korumak ve gelecek nesillere aktarmak amacıyla 1960 yılında kurulan atölyemiz, ilk günkü sabır ve titizlikle üretimine devam etmektedir. Kurucumuzdan miras kalan bakır kazanlarda yavaşça kaynatma yöntemini ve mermer tezgahlarda elle şekillendirme geleneğini asla bozmadık.
              </p>
              <p className="font-medium text-text-primary italic font-serif text-lg">
                "Ustalık sadece reçeteyi bilmek değil, her kazanda şekerin dilini okuyabilmektir."
              </p>
              <p>
                Bugün, üretici kimliğimize yakışır premium kalitede şeker, lokum ve cezerye hazırlıyoruz. Geleneksel Elvan ve Akide Şekerleri'nden, Antep fıstığı kaplı çeşnili ve sarma lokumlara, baklava çeşitlerinden havuçlu cezeryelere — en iyi fıstık, ceviz ve meyve özleri ile ürettiğimiz her ürün, Bener'in imzası haline gelmiştir.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="pt-4">
              <GoldButton href="/hakkimizda" variant="outline">
                Felsefemizi İnceleyin
              </GoldButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Vintage Workshop Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto group">
              {/* Gold backing border */}
              <div className="absolute inset-0 border border-gold translate-x-4 -translate-y-4 pointer-events-none transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
              
              {/* Image wrapper */}
              <div className="w-full h-full relative overflow-hidden border border-border bg-cream shadow-md">
                <Image
                  src="/images/hero/story-workshop.png"
                  alt="Bener Şekerleme Atölyesi ve Bakır Kazanlar"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
                />
              </div>

              {/* Corner Ornaments */}
              <div className="absolute top-2 left-6 w-3 h-3 border-t border-l border-gold/40" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/40" />
              <div className="absolute bottom-2 left-6 w-3 h-3 border-b border-l border-gold/40" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/40" />
            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 mt-16 border-t border-border/40 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="space-y-2">
              <span className="font-display text-4xl md:text-5xl font-bold text-gold block">
                {stat.value}
              </span>
              <h4 className="font-serif text-lg font-semibold text-text-primary">
                {stat.label}
              </h4>
              <p className="caption text-text-muted max-w-[200px] mx-auto">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
