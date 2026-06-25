import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { ProductInfo } from '@/components/products/ProductInfo';
import { ProductCard } from '@/components/products/ProductCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';

interface PageProps {
  params: Promise<{
    kategori: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    kategori: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı | Bener Şekerlemecilik',
    };
  }

  const categoryInfo = categories.find((c) => c.slug === product.category);
  const categoryName = categoryInfo ? categoryInfo.name : product.category;

  return {
    title: `${product.name} | ${categoryName} | Bener Şekerlemecilik`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Bener Şekerlemecilik`,
      description: product.shortDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { kategori, slug } = await params;
  
  const product = products.find((p) => p.slug === slug && p.category === kategori);
  
  if (!product) {
    notFound();
  }

  const categoryInfo = categories.find((c) => c.slug === product.category);
  const categoryName = categoryInfo ? categoryInfo.name : product.category;

  // Get up to 3 related products from the same category (excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': `https://www.benersekerleme.com.tr${product.images[0]}`,
    'description': product.shortDescription,
    'brand': {
      '@type': 'Brand',
      'name': 'Bener Şekerlemecilik'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'TRY',
      'price': '0',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'price': '0',
        'valueAddedTaxIncluded': true
      },
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Bener Şekerlemecilik'
      }
    }
  };

  return (
    <main className="min-h-screen bg-cream py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        
        {/* Breadcrumb Menu */}
        <nav className="flex items-center gap-2 font-body text-xs uppercase tracking-wider text-text-muted mb-10 justify-start">
          <Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/urunler" className="hover:text-gold transition-colors">Ürünler</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href={`/urunler/${product.category}`} className="hover:text-gold transition-colors">
            {categoryName}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold font-medium">{product.name}</span>
        </nav>

        {/* Product Details Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-border/40">
          
          {/* Left Column - Big Image */}
          <div className="lg:col-span-5 relative w-full aspect-square border border-border bg-cream-warm shadow-md overflow-hidden group">
            {/* Background frame ornament */}
            <div className="absolute inset-0 border border-gold/15 translate-x-3 translate-y-3 pointer-events-none z-10" />
            
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            
            {/* Visual fallback gradient */}
            <div className="absolute inset-0 bg-radial from-transparent to-dark/5 pointer-events-none" />

            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/40 z-20" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/40 z-20" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/40 z-20" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/40 z-20" />
          </div>

          {/* Right Column - Product details and order actions */}
          <div className="lg:col-span-7">
            <ProductInfo product={product} />
          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-16">
            <div className="text-center max-w-xl mx-auto mb-12">
              <SectionTitle
                title="İlginizi Çekebilecek Diğer Lezzetler"
                subtitle={`${categoryName} serimizden diğer el yapımı geleneksel tatlar.`}
                align="center"
              />
              <OrnamentDivider lineWidth="w-20" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
