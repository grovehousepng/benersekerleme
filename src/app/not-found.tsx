import React from 'react';
import Link from 'next/link';
import { GoldButton } from '@/components/ui/GoldButton';

export const metadata = {
  title: 'Sayfa Bulunamadı | Bener Şekerlemecilik',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6 py-32">
      <span className="font-display text-7xl sm:text-8xl font-bold text-gold/30 select-none">
        404
      </span>
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-4">
        Aradığınız Sayfa Bulunamadı
      </h1>
      <p className="font-body text-text-secondary max-w-md mt-4 leading-relaxed">
        Bu sayfa kaldırılmış veya adresi değişmiş olabilir. Dilerseniz ana sayfaya
        dönebilir ya da tüm ürünlerimizi inceleyebilirsiniz.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <GoldButton href="/" variant="solid">
          Ana Sayfaya Dön
        </GoldButton>
        <Link
          href="/urunler"
          className="font-body text-xs font-bold uppercase tracking-widest text-text-primary hover:text-gold transition-colors"
        >
          Tüm Ürünleri İncele →
        </Link>
      </div>
    </main>
  );
}
