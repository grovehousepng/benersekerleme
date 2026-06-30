'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import { GoldButton } from '../ui/GoldButton';
import { siteConfig } from '@/data/siteConfig';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState<'top' | 'scrolled' | 'hidden'>('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // State 1: At the top (Big, Transparent)
        setScrollState('top');
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > 400) {
          // State 3: Disappear
          setScrollState('hidden');
        } else {
          // State 2: Scrolled & Shrunken
          setScrollState('scrolled');
        }
      } else {
        // Scrolling up
        // State 2: Reveal shrunken header
        setScrollState('scrolled');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    {
      name: 'Ürünlerimiz',
      href: '/urunler',
      dropdown: [
        { name: 'Tüm Ürünler', href: '/urunler' },
        { name: 'Şekerler', href: '/urunler/seker' },
        { name: 'Lokumlar', href: '/urunler/lokum' },
        { name: 'Cezeryeler', href: '/urunler/cezerye' },
      ],
    },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const isHome = pathname === '/';
  const isAbout = pathname === '/hakkimizda';

  // Determine if header currently sits on a dark background (top section of Home or About)
  const isDarkBg = (isHome || isAbout) && scrollState === 'top';

  const getHeaderClass = () => {
    const baseClass = 'fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ';
    
    if (scrollState === 'hidden') {
      return baseClass + 'translate-y-[-100%] pointer-events-none bg-cream/90 border-border/60 py-1.5 shadow-sm';
    }
    if (scrollState === 'scrolled') {
      return baseClass + 'translate-y-0 bg-cream/90 backdrop-blur-md border-border/60 py-1.5 lg:py-2 shadow-sm';
    }
    // scrollState === 'top'
    return baseClass + 'translate-y-0 bg-transparent border-transparent py-2 lg:py-2.5';
  };

  const getLinkColor = (linkHref: string) => {
    const isActive = pathname === linkHref;
    if (isActive) return 'text-gold';

    return isDarkBg ? 'text-cream/80 hover:text-gold' : 'text-text-primary hover:text-gold';
  };

  const getDropdownColor = () => {
    const isSubActive = pathname.startsWith('/urunler');
    if (isSubActive) return 'text-gold';

    return isDarkBg ? 'text-cream/80 hover:text-gold' : 'text-text-primary hover:text-gold';
  };

  return (
    <>
      <header className={getHeaderClass()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group -ml-8 sm:-ml-6 lg:ml-0">
              <div
                className={`relative transition-all duration-500 overflow-hidden ${
                  scrollState === 'top'
                    ? 'w-40 h-14 sm:w-48 sm:h-16'
                    : 'w-32 h-10 sm:w-36 sm:h-12'
                }`}
              >
                <Image
                  src="/images/logo/bener-logo.png"
                  alt="Bener Logo"
                  fill
                  className="object-contain scale-[1.48] transition-transform duration-500 group-hover:scale-[1.53]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <button
                        className={`font-body text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 transition-colors py-2 focus:outline-none ${getDropdownColor()}`}
                      >
                        {link.name}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full w-48 bg-cream border border-border py-2 shadow-lg transition-all duration-300 ${
                          isProductsDropdownOpen
                            ? 'opacity-100 visible translate-y-1'
                            : 'opacity-0 invisible translate-y-3 pointer-events-none'
                        }`}
                      >
                        {link.dropdown.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-5 py-2.5 font-body text-xs uppercase tracking-widest font-medium transition-colors hover:bg-cream-warm ${
                                isSubActive ? 'text-gold font-semibold bg-cream-warm' : 'text-text-primary hover:text-gold'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-body text-xs uppercase tracking-widest font-semibold transition-colors py-2 relative ${getLinkColor(link.href)}`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <GoldButton
                href={`tel:${siteConfig.contact.phone1Raw}`}
                variant={isDarkBg ? 'ghost' : 'outline'}
                className="py-2.5 px-6 flex items-center gap-2"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>HIZLI SİPARİŞ</span>
              </GoldButton>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 transition-colors focus:outline-none ${
                  isDarkBg ? 'text-cream hover:text-gold' : 'text-text-primary hover:text-gold'
                }`}
                aria-label="Menüyü Aç"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to push content down so header doesn't cover it (unless we are on home page or about page where hero handles it) */}
      {pathname !== '/' && pathname !== '/hakkimizda' && <div className="h-24" />}

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
