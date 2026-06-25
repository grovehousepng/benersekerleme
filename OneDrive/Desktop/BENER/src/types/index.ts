export type CategorySlug = 'seker' | 'lokum' | 'cezerye' | 'bayram-sekeri';

export interface Category {
  slug: CategorySlug;
  name: string;              // e.g., "Şeker"
  namePlural: string;        // e.g., "Şekerler"
  tagline: string;           // One sentence tagline
  description: string;       // 2-3 paragraphs description
  heroImage: string;
  color: string;             // Tailwind class suffix (e.g. "rose", "purple", "amber")
  accentHex: string;         // CSS hex string
}

export interface Product {
  id: string;
  slug: string;
  category: CategorySlug;
  name: string;
  shortDescription: string;  // One-line card description
  description: string;       // 2-4 paragraphs detail description
  ingredients?: string[];    // List of ingredients
  weightOptions?: string[];  // e.g., ["250g", "500g", "1kg"]
  tags: string[];            // e.g., ["glutensiz", "geleneksel", "özel gün"]
  images: string[];          // Relative URLs to images
  isFeatured: boolean;
  isNew?: boolean;
  order: number;
}
