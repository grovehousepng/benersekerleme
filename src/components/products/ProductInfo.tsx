'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Product } from '@/types';
import { categories } from '@/data/categories';
import { siteConfig } from '@/data/siteConfig';
import { OrnamentDivider } from '../ui/OrnamentDivider';
import { GoldButton } from '../ui/GoldButton';

interface ProductInfoProps {
  product: Product;
}



export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const categoryInfo = categories.find((c) => c.slug === product.category);
  const categoryName = categoryInfo ? categoryInfo.name : product.category;

  const handleWhatsappOrder = () => {
    const text = `Merhaba Bener Şekerleme, web sitenizden "${product.name}" ürününüzü gördüm. Sipariş / bilgi almak istiyorum.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/905559977281?text=${encodedText}`, '_blank');
  };

  return (
    <div className="space-y-6 text-left">
      {/* Category Badge */}
      <span className="label text-gold font-semibold tracking-widest block">
        {categoryName}
      </span>

      {/* Product Name */}
      <h1 className="display-lg text-text-primary font-bold leading-tight">
        {product.name}
      </h1>

      {/* Short Description */}
      <p className="subheading text-text-secondary">
        "{product.shortDescription}"
      </p>

      <OrnamentDivider lineWidth="w-16" className="!justify-start my-4" />

      {/* Full Description */}
      <div className="body-normal text-text-secondary space-y-4 leading-relaxed">
        {product.description.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>





      {/* Action CTA Buttons */}
      <div className="pt-6 border-t border-border/40 mt-8 space-y-4">
        <span className="label text-text-muted text-[10px] block tracking-widest">SİPARİŞ VE BİLGİ HATTI</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Call button */}
          <GoldButton 
            href={`tel:${siteConfig.contact.phone1Raw}`}
            variant="solid"
            className="flex items-center justify-center gap-2.5 py-4 w-full"
          >
            <Phone className="h-4 w-4" />
            <span>Telefonla Sipariş</span>
          </GoldButton>

          {/* Whatsapp button */}
          <button
            onClick={handleWhatsappOrder}
            className="inline-flex items-center justify-center font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-4 px-8 border border-green-600 bg-transparent text-green-700 hover:bg-green-600 hover:text-white rounded-none w-full"
          >
            <MessageCircle className="h-4 w-4 mr-2.5" />
            <span>WhatsApp Sipariş</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
