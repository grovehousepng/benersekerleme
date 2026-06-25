'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, pathname }) => {
  const sidebarVariants = {
    closed: {
      x: '100%',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    },
    open: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Tüm Ürünler', href: '/urunler' },
    { name: 'Şekerler', href: '/urunler/seker' },
    { name: 'Lokumlar', href: '/urunler/lokum' },
    { name: 'Cezeryeler', href: '/urunler/cezerye' },
    { name: 'Bayram Şekerleri', href: '/urunler/bayram-sekeri' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            transition={{ duration: 0.3 }}
          />

          {/* Sliding menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-dark text-cream z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-charcoal">
                <div className="relative w-36 h-10 overflow-hidden">
                  <Image
                    src="/images/logo/bener-logo.png"
                    alt="Bener Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-text-muted hover:text-gold transition-colors focus:outline-none"
                  aria-label="Menüyü Kapat"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-4">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`font-body text-base uppercase tracking-wider py-2 transition-all duration-300 ${
                        isActive ? 'text-gold pl-2 border-l-2 border-gold font-semibold' : 'text-text-muted hover:text-cream'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer / Contact Details */}
            <div className="border-t border-charcoal pt-6 mt-auto space-y-4">
              <span className="label text-gold font-semibold block">İletişim</span>
              
              <div className="space-y-3 font-body text-xs text-text-muted">
                <a 
                  href={`tel:${siteConfig.contact.phone1Raw}`} 
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.contact.phone1}</span>
                </a>
                
                <a 
                  href={`tel:${siteConfig.contact.phone2Raw}`} 
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.contact.phone2}</span>
                </a>

                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
