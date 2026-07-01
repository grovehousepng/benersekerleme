import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream border-t border-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-charcoal">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group -ml-5 sm:-ml-6 lg:ml-0">
              <div className="relative w-44 h-14 sm:w-48 sm:h-16 md:w-52 md:h-16 overflow-hidden translate-y-1">
                <Image
                  src="/images/logo/bener-logo.png"
                  alt="Bener Logo"
                  fill
                  className="object-contain scale-[1.48] transition-transform duration-500 group-hover:scale-[1.53]"
                />
              </div>
            </Link>
            <p className="body-normal text-text-muted max-w-xs leading-relaxed">
              Konya’nın verimli topraklarından ve köklü saray geleneğinden süzülen el yapımı, premium tatlar.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal border border-border/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 text-text-muted"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal border border-border/10 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 text-text-muted"
                aria-label="Facebook sayfamızı ziyaret edin"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="label text-gold font-semibold tracking-wider">HIZLI MENÜ</h4>
            <ul className="space-y-3 font-body text-sm text-text-muted">
              {siteConfig.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-6">
            <h4 className="label text-gold font-semibold tracking-wider">KATEGORİLER</h4>
            <ul className="space-y-3 font-body text-sm text-text-muted">
              <li>
                <Link
                  href="/urunler"
                  className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler/seker"
                  className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Şeker Çeşitleri
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler/lokum"
                  className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Lokum Çeşitleri
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler/cezerye"
                  className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Cezerye Çeşitleri
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler/paketli"
                  className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Paketli Ürünler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="label text-gold font-semibold tracking-wider">İLETİŞİM BİLGİLERİ</h4>
            <div className="space-y-4 font-body text-sm text-text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </div>
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
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-body text-xs text-text-muted gap-4">
          <p>© {currentYear} Bener Şekerlemecilik. Tüm Hakları Saklıdır.</p>
          <p className="flex items-center gap-1">
            Geleneksel Türk Şekerciliği |
            <span className="text-gold font-semibold"> Konya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
