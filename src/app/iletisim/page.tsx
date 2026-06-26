import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';
import { ContactForm } from '@/components/ui/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'İletişim | Bener Şekerlemecilik',
  description: 'Konya Karatay Yeni Şekerler Sitesi’ndeki adresimiz, 0555 997 72 81 numaralı telefonumuz ve bayilik başvuru formu ile irtibata geçin.',
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Bener Şekerlemecilik',
    'image': 'https://www.benersekerleme.com.tr/images/logo/bener-logo.png',
    'telephone': siteConfig.contact.phone1,
    'email': siteConfig.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Yeni Şekerler Sitesi, Fevzi Çakmak Mah. 10548 Sokak No:12, Karatay',
      'addressLocality': 'Konya',
      'addressCountry': 'TR'
    },
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '08:00',
      'closes': '19:00'
    }
  };

  return (
    <main className="min-h-screen bg-cream py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            label="BİZE ULAŞIN"
            title="Sipariş & Bayilik İletişim Hattı"
            subtitle="Sorularınız, toplu sipariş talepleriniz ve bayilik başvurularınız için bizimle doğrudan iletişime geçebilirsiniz."
            align="center"
          />
          <OrnamentDivider lineWidth="w-24" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details and Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-cream-warm border border-border p-6 md:p-8 space-y-6 text-left shadow-sm">
              <h3 className="heading text-text-primary font-bold border-b border-border pb-3">
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                
                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-gold text-dark flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 font-body">
                    <span className="label text-text-muted text-[10px] block font-semibold">ADRES</span>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone block */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-gold text-dark flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 font-body">
                    <span className="label text-text-muted text-[10px] block font-semibold">TELEFON NUMARALARIMIZ</span>
                    <a
                      href={`tel:${siteConfig.contact.phone1Raw}`}
                      className="block text-sm text-text-primary font-bold hover:text-gold transition-colors"
                    >
                      {siteConfig.contact.phone1}
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone2Raw}`}
                      className="block text-sm text-text-primary font-bold hover:text-gold transition-colors"
                    >
                      {siteConfig.contact.phone2}
                    </a>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-gold text-dark flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 font-body">
                    <span className="label text-text-muted text-[10px] block font-semibold">E-POSTA</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="block text-sm text-text-primary font-bold hover:text-gold transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </main>
  );
}
