import { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'seker',
    name: 'Şeker',
    namePlural: 'Şekerler',
    tagline: 'Nesilden nesile taşınan tatlı gelenek.',
    description: `Bener Şekerleri, Konya'nın köklü geleneğiyle hazırlanır. Elvan Şekerleri'nin kıvrımlı nostalji hatırası, Akide Şekerleri'nin çıtır kabuğu ve dolgun içi, Prens ve Bonbon çeşitlerinin zarif formu, Nane Şekeri'nin serinletici dokunuşu — tüm bu lezzetler geleneksel yöntemlerle, özenle seçilen en kaliteli malzemelerle üretilir. Her lokmada mermer tezgahta usta ellerin işçiliği yaşanır.`,
    heroImage: '/images/categories/seker.png',
    color: 'rose',
    accentHex: '#C9525A',
  },
  {
    slug: 'lokum',
    name: 'Lokum',
    namePlural: 'Lokumlar',
    tagline: 'Yumuşacık dokuda asırlık bir lezzet.',
    description: `Bener Lokumları, geleneksel kazanlarda uzun süre pişirilen lokum hamurunun usta ellerce şekillendirilmesiyle hazırlanır. Meyve Aromalı Lokumlar'ın ferah tatlarından, Antep fıstığı ile kaplı Çeşnili Lokumlar'a; fıstık ve fındıkla sarılan Sarma ve Şerit Lokumlar'dan, baklava ve incir dolması çeşitleriyle Gurme Lokumlar'a ve cevizli Sucuk Lokumlar'a kadar geniş bir koleksiyon sunar. Her biri yumuşacık dokusu ve zengin içeriğiyle gerçek bir Türk lokumu deneyimi yaşatır.`,
    heroImage: '/images/categories/lokum.png',
    color: 'rose',
    accentHex: '#C9525A',
  },
  {
    slug: 'cezerye',
    name: 'Cezerye',
    namePlural: 'Cezeryeler',
    tagline: 'Havuç ve kuruyemişin köklü buluşması.',
    description: `Bener Cezerye, taze havucun şeker ve glikoz şurubuyla uzun süre pişirilip Antep fıstığı, fındık ve yer fıstığı gibi seçkin kuruyemişlerle harmanlanmasıyla hazırlanır. Yumuşak, nemli dokusu ve damakta dağılan zengin aromasıyla Mersin yöresinin bu kadim lezzeti, sade ve yaprak çeşitleriyle ikram sofralarınıza geleneksel bir zenginlik katar.`,
    heroImage: '/images/categories/cezerye.png',
    color: 'amber',
    accentHex: '#C97A3A',
  },
];
