import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { GoldButton } from '@/components/ui/GoldButton';

export const metadata = {
  title: 'Ürünlerimiz | Bener Şekerlemecilik',
  description: 'Konya’nın en meşhur akide şekerleri, çifte kavrulmuş fıstıklı lokumları ve taze havuçlu cezeryeleri. Bener Şekerlemecilik kalitesiyle tüm katalog.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mt-12 mb-16">
          <SectionTitle
            label="BENER KATALOG"
            title="Saray Esintili Ürün Gruplarımız"
            subtitle="Doğal malzemelerle, nesiller boyu aktarılan formüllerle hazırladığımız seçkin lezzetler."
            align="center"
          />
          <OrnamentDivider lineWidth="w-32" />
        </div>

        {/* Categories Alternating Layout */}
        <div className="space-y-24">
          {categories.map((category, index) => {
            const categoryProducts = products
              .filter((p) => p.category === category.slug)
              .slice(0, 3); // Get 3 products as a quick preview

            const isEven = index % 2 === 0;

            return (
              <div 
                key={category.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 border-b border-border/40 last:border-0 last:pb-0`}
              >
                
                {/* Image Block */}
                <div 
                  className={`lg:col-span-5 relative aspect-[4/3] w-full group overflow-hidden border border-border bg-cream-warm shadow-md ${
                    !isEven ? 'lg:order-last' : ''
                  }`}
                >
                  {/* Decorative background box */}
                  <div className={`absolute inset-0 border border-gold/20 translate-x-3 translate-y-3 pointer-events-none z-10 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                  
                  <Image
                    src={category.heroImage}
                    alt={`${category.name} Grubu`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  
                  {/* Subtle corner elements */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/40 z-20" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/40 z-20" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/40 z-20" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/40 z-20" />
                </div>

                {/* Text Block */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <span className="label text-gold font-semibold tracking-wider">
                    {category.namePlural}
                  </span>
                  
                  <h2 className="display-md text-text-primary font-bold">
                    {category.name} Çeşitleri
                  </h2>
                  
                  <p className="subheading text-gold italic">
                    "{category.tagline}"
                  </p>
                  
                  <p className="body-normal text-text-secondary leading-relaxed">
                    {category.description}
                  </p>

                  {/* Preview Items */}
                  <div className="space-y-3 pt-2">
                    <span className="label text-text-muted text-[10px] block">ÖNE ÇIKAN SEÇENEKLER</span>
                    <div className="flex flex-wrap gap-3">
                      {categoryProducts.map((p) => (
                        <Link 
                          key={p.id}
                          href={`/urunler/${category.slug}/${p.slug}`}
                          className="inline-flex items-center gap-1.5 font-body text-xs bg-cream-warm border border-border/80 px-4 py-2 hover:border-gold hover:text-gold transition-colors font-medium text-text-primary"
                        >
                          <svg className="h-2.5 w-2.5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
                          </svg>
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <GoldButton href={`/urunler/${category.slug}`} variant="solid">
                      Tüm {category.namePlural} İncele
                    </GoldButton>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
