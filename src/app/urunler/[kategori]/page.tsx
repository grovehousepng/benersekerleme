import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { CategoryProductsGrid } from '@/components/products/CategoryProductsGrid';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { CategorySlug } from '@/types';

interface PageProps {
  params: Promise<{
    kategori: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    kategori: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategori } = await params;
  const category = categories.find((c) => c.slug === kategori);
  
  if (!category) {
    return {
      title: 'Kategori Bulunamadı | Bener Şekerlemecilik',
    };
  }

  return {
    title: `${category.name} Çeşitleri | Bener Şekerlemecilik`,
    description: `${category.namePlural} kategorisindeki tüm el yapımı premium Bener ürünleri. ${category.tagline}`,
    openGraph: {
      title: `${category.name} Çeşitleri | Bener Şekerlemecilik`,
      description: category.tagline,
      images: [{ url: category.heroImage }],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { kategori } = await params;
  
  const category = categories.find((c) => c.slug === kategori);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products
    .filter((p) => p.category === category.slug)
    .sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-cream">
      
      {/* Category Hero Header */}
      <section className="relative bg-dark text-cream py-24 border-b border-border/10 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-body text-xs uppercase tracking-wider text-text-muted mb-8 justify-center lg:justify-start">
            <Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/urunler" className="hover:text-gold transition-colors">Ürünler</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold font-medium">{category.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title / Description */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <span className="label text-gold font-semibold tracking-wider block">
                {category.namePlural}
              </span>
              <h1 className="display-lg text-cream font-bold">
                {category.name} Serisi
              </h1>
              <p className="subheading text-cream-warm/95 font-medium">
                "{category.tagline}"
              </p>
              <p className="body-normal text-text-muted leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Banner preview */}
            <div className="lg:col-span-5 relative aspect-[16/10] w-full max-w-md mx-auto overflow-hidden border border-gold/20 shadow-lg">
              <Image
                src={category.heroImage}
                alt={category.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Products Display Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <SectionTitle
              title={`${category.name} Koleksiyonu`}
              subtitle="Geleneksel tatlarımızı filtreleyerek inceleyebilirsiniz."
              align="center"
            />
            <OrnamentDivider lineWidth="w-20" />
          </div>

          <CategoryProductsGrid products={categoryProducts} />

        </div>
      </section>

    </main>
  );
}
