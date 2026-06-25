'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { categories } from '@/data/categories';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Find the category display name
  const categoryInfo = categories.find((c) => c.slug === product.category);
  const categoryName = categoryInfo ? categoryInfo.name : product.category;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <Link href={`/urunler/${product.category}/${product.slug}`} className="block h-full">
      <motion.article 
        variants={cardVariants}
        className="group bg-cream-warm border border-border/80 flex flex-col h-full hover:border-gold transition-colors duration-500 shadow-sm relative overflow-hidden"
      >
        {/* Product Image Area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream border-b border-border/50">
          
          {/* Badges (New, Featured, etc.) */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            {product.isNew && <Badge variant="gold">YENİ</Badge>}
            {product.isFeatured && <Badge variant="dark">ÖZEL SEÇİM</Badge>}
          </div>

          {/* Fallback pattern background or placeholder for demo */}
          <div className="absolute inset-0 bg-radial from-cream-warm to-cream/80 opacity-50 flex items-center justify-center">
            <span className="font-serif italic text-4xl text-text-muted/15 select-none">{product.name}</span>
          </div>

          {/* Image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            priority={product.isFeatured}
          />
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Product Info Area */}
        <div className="p-5 flex flex-col flex-grow">
          <span className="label text-gold font-medium mb-1.5 block">
            {categoryName}
          </span>
          
          <h3 className="heading text-text-primary mb-2 group-hover:text-gold transition-colors duration-300 font-bold">
            {product.name}
          </h3>
          
          <p className="body-normal text-text-secondary line-clamp-2 mb-6 flex-grow">
            {product.shortDescription}
          </p>
          
          <div className="pt-3 border-t border-border/40 mt-auto flex items-center justify-between">
            <span className="font-body text-xs font-bold uppercase tracking-wider text-text-primary group-hover:text-gold inline-flex items-center gap-1.5 transition-colors duration-300">
              İncele 
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
export default ProductCard;
