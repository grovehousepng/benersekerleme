'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../products/ProductCard';
import { SectionTitle } from '../ui/SectionTitle';
import { OrnamentDivider } from '../ui/OrnamentDivider';
import { GoldButton } from '../ui/GoldButton';
import { products } from '@/data/products';
import { fadeUpVariant } from '@/lib/animations';

export const FeaturedProducts: React.FC = () => {
  // Get featured products and limit to maximum 6
  const featured = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className="flex flex-col items-center"
        >
          <SectionTitle
            label="ÖZEL SEÇKİ"
            title="Öne Çıkan Lezzetlerimiz"
            subtitle="Elvan Şekeri, fındıklı ve fıstıklı Akide Şekerleri ile rengarenk Bayram Şekerleri — en seçkin lezzetlerimiz."
            align="center"
          />
          <OrnamentDivider lineWidth="w-24" className="mb-16" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <GoldButton href="/urunler" variant="outline" className="px-10">
            TÜM KATALOĞU GÖRÜNTÜLE
          </GoldButton>
        </motion.div>

      </div>
    </section>
  );
};
