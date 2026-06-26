import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { 
    default: 'Bener Şekerlemecilik | Konya\'nın Geleneksel Şeker, Lokum ve Cezerye Üreticisi', 
    template: '%s | Bener Şekerlemecilik' 
  },
  description: 'Konya\'da 1960\'tan bu yana geleneksel yöntemlerle akide şekeri, lokum ve cezerye üretimi. Bener Şekerlemecilik — el yapımı premium lezzetler.',
  keywords: [
    'lokum', 'şeker', 'cezerye', 'Konya şekercisi', 'geleneksel lokum', 'Türk lokumu', 
    'akide şekeri', 'çifte kavrulmuş lokum', 'havuç cezeryesi', 'Bener Şekerleme'
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Bener Şekerlemecilik',
    images: [{ url: '/images/logo/bener-logo.png', width: 500, height: 500, alt: 'Bener Şekerlemecilik Logo' }],
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Bener Şekerlemecilik',
  'url': 'https://www.benersekerleme.com.tr',
  'logo': 'https://www.benersekerleme.com.tr/images/logo/bener-logo.png',
  'sameAs': [
    'https://instagram.com/benersekerleme',
    'https://facebook.com/benersekerleme'
  ],
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': '+90-555-987-47-81',
      'contactType': 'sales',
      'areaServed': 'TR',
      'availableLanguage': 'Turkish'
    },
    {
      '@type': 'ContactPoint',
      'telephone': '+90-505-020-30-33',
      'contactType': 'customer service',
      'areaServed': 'TR',
      'availableLanguage': 'Turkish'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
