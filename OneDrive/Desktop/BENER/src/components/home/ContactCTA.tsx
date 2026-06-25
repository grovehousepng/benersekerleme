'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-gold text-dark py-16 relative overflow-hidden">
      
      {/* Decorative SVG ornaments inside background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          
          {/* Text block */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-center lg:text-left space-y-3 max-w-2xl"
          >
            <span className="label text-dark/70 font-semibold tracking-wider">TOPLU SİPARİŞ & BAYİLİK</span>
            <h2 className="display-md text-dark font-bold leading-tight">
              Geleneksel Lezzeti Tezgâhınıza Taşıyın
            </h2>
            <p className="font-serif text-lg text-dark/80 italic">
              Türkiye'nin her yerine bayilik ve toplu sipariş imkânı sunuyoruz. Kurumsal talepleriniz ve özel ambalajlı siparişleriniz için bizimle irtibata geçin.
            </p>
          </motion.div>

          {/* Contact Numbers block */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            
            {/* Phone Number Box 1 */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={`tel:${siteConfig.contact.phone1Raw}`}
              className="bg-dark text-gold py-4 px-6 border border-dark flex items-center gap-4 transition-all duration-300 shadow-md min-w-[240px]"
            >
              <div className="h-10 w-10 bg-gold text-dark flex items-center justify-center rounded-none">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Sipariş Hattı</span>
                <span className="font-body text-base font-bold text-cream">{siteConfig.contact.phone1}</span>
              </div>
            </motion.a>

            {/* Phone Number Box 2 */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={`tel:${siteConfig.contact.phone2Raw}`}
              className="bg-dark text-gold py-4 px-6 border border-dark flex items-center gap-4 transition-all duration-300 shadow-md min-w-[240px]"
            >
              <div className="h-10 w-10 bg-gold text-dark flex items-center justify-center rounded-none">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Ofis & Atölye</span>
                <span className="font-body text-base font-bold text-cream">{siteConfig.contact.phone2}</span>
              </div>
            </motion.a>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
export default ContactCTA;
