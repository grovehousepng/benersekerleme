import React from 'react';
import Image from 'next/image';
import { Leaf, Award, Scroll } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrnamentDivider } from '@/components/ui/OrnamentDivider';

export const metadata = {
  title: 'Hakkımızda | Bener Şekerlemecilik',
  description: '1960’tan bu yana Konya Karatay’da yarım asrı aşan ustalık hikayemiz. Bener Şekerlemecilik üretim felsefesi.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-gold" />,
      title: 'Doğal Malzeme',
      desc: 'Şekerlerimizde ve lokumlarımızda yapay aromalar veya kimyasal renklendiriciler yerine gerçek pancar şekeri ve doğal meyve konsantreleri kullanıyoruz.',
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: 'Usta El Yapımı',
      desc: 'Fabrikasyon kalıplarla değil; mermer tezgahlarda kıvam alan hamurlarımızı usta ellerle yoğuruyor, özel makaslarla dilimliyoruz.',
    },
    {
      icon: <Scroll className="h-8 w-8 text-gold" />,
      title: 'Geleneksel Tarif',
      desc: '1960 yılında Konya şeker atölyemizde kaynamaya başlayan bakır kazanlardaki asırlık reçetelere sadık kalıyor, lezzet hafızasını yaşatıyoruz.',
    },
  ];



  return (
    <main className="min-h-screen bg-cream">
      
      {/* 1. Hero Section */}
      <section className="bg-dark text-cream pt-32 pb-24 relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4 mt-8">
          <span className="label text-gold font-semibold tracking-[0.25em]">BENER MİRASI</span>
          <h1 className="display-lg text-cream font-bold">Yarım Asrı Aşan Ustalık Hikayesi</h1>
          <OrnamentDivider lineWidth="w-24" />
        </div>
      </section>

      {/* 2. Kuruluş / History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* History Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <SectionTitle
                label="BİZ KİMİZ?"
                title="Konya Şekerler Sitesi'nde Başlayan Yolculuk"
                align="left"
              />
              <OrnamentDivider lineWidth="w-16" className="!justify-start my-2" />
              
              <div className="body-normal text-text-secondary space-y-4 leading-relaxed">
                <p>
                  Bener Şekerlemecilik olarak temellerimiz, Konya’nın geleneksel çarşı kültürünün kalbinde atılmıştır. Kuruluşumuzdan bu yana şekerlemeciliği ticari bir iş olmaktan ziyade, kültürel bir miras olarak kabul ettik. Bakır kazanlarda pancar şekerinin yavaş yavaş karamelize olması, taze havuçların saatlerce kaynatılarak cezeryeye dönüşmesi bizim için bir sabır ve aşk hikayesidir.
                </p>
                <p>
                  Konya Karatay'daki modern ama geleneksel dokusunu kaybetmemiş atölyemizde, geleneksel Türk tatlıcılığının en kıymetli örneklerini üretiyoruz. Yeni Şekerler Sitesi’ndeki imalat hanemiz, asırlık tekniklerle modern gıda güvenliği standartlarının uyum içerisinde çalıştığı örnek bir mekandır.
                </p>
              </div>
            </div>

            {/* History Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] w-full border border-border shadow-md overflow-hidden bg-cream-warm group">
              <div className="absolute inset-0 border border-gold/15 translate-x-3 translate-y-3 pointer-events-none z-10" />
              <Image
                src="/images/categories/seker.png"
                alt="Geleneksel Şeker Üretimi"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Üretim Felsefesi / Core Values */}
      <section className="py-20 bg-ivory border-t border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <SectionTitle
              title="Üretim Felsefemiz"
              subtitle="Ürünlerimizi benzersiz kılan, taviz vermediğimiz üç temel prensibimiz."
              align="center"
            />
            <OrnamentDivider lineWidth="w-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, idx) => (
              <div key={idx} className="bg-cream border border-border p-8 text-center space-y-4 hover:border-gold hover:shadow-sm transition-all duration-300">
                <div className="h-16 w-16 bg-cream-warm border border-border flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="heading text-text-primary font-bold">{value.title}</h3>
                <p className="caption text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


    </main>
  );
}
