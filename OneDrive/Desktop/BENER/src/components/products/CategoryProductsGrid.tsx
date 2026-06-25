'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { staggerContainer } from '@/lib/animations';

interface CategoryProductsGridProps {
  products: Product[];
}

export const CategoryProductsGrid: React.FC<CategoryProductsGridProps> = ({ products }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Hepsi');

  // Extract all unique tags for these products
  const allTags = ['Hepsi', ...Array.from(new Set(products.flatMap((p) => p.tags)))];

  // Filter products based on selected tag
  const filteredProducts = selectedTag === 'Hepsi'
    ? products
    : products.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="space-y-12">
      {/* Tag Filters */}
      {allTags.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-border/20 pb-8">
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`font-body text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all duration-300 rounded-none focus:outline-none border ${
                  isSelected
                    ? 'bg-gold border-gold text-dark'
                    : 'bg-transparent border-border hover:border-gold hover:text-gold text-text-secondary'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20 bg-cream-warm/30 border border-dashed border-border/80">
          <p className="font-serif italic text-lg text-text-secondary">
            Bu kategoride eşleşen ürün bulunamadı.
          </p>
        </div>
      )}
    </div>
  );
};
export default CategoryProductsGrid;
