export interface BestSeller {
  name: string;
  tagline: string;
  image: string;
  /** Optional link to a related category or product page */
  href: string;
}

const IMG = '/urunler/cok-satanlar';

// Paketli çok satan ürünler — hero altındaki otomatik kayan şeritte gösterilir.
export const bestSellers: BestSeller[] = [
  {
    name: 'Kapiçino Aromalı Şeker',
    tagline: 'Yoğun kahve aroması',
    image: `${IMG}/kapicino-aromali-seker.png`,
    href: '/urunler/seker',
  },
  {
    name: 'Fındıklı Şeker',
    tagline: 'Bütün fındık dolgulu',
    image: `${IMG}/findikli-seker.png`,
    href: '/urunler/seker/findikli-akide-sekeri-ea101',
  },
  {
    name: 'Nane Aromalı Şeker',
    tagline: 'Ferahlatıcı nane',
    image: `${IMG}/nane-aromali-seker.png`,
    href: '/urunler/seker/nane-sekeri-ea118',
  },
  {
    name: 'Susamlı Şeker',
    tagline: 'Kıtır susam kaplı',
    image: `${IMG}/susamli-seker.png`,
    href: '/urunler/seker/susamli-akide-sekeri-ea102',
  },
  {
    name: 'Bademli Şeker',
    tagline: 'Bütün badem dolgulu',
    image: `${IMG}/bademli-seker.png`,
    href: '/urunler/seker',
  },
  {
    name: 'Karışık Meyve Aromalı Şeker',
    tagline: 'Rengarenk meyve çeşitleri',
    image: `${IMG}/karisik-meyve-aromali-seker.png`,
    href: '/urunler/seker/mix-meyve-aromali-elvan-sekeri-em110',
  },
  {
    name: 'Limon Aromalı Şeker',
    tagline: 'Ferah limon ekşiliği',
    image: `${IMG}/limon-aromali-seker.png`,
    href: '/urunler/seker/limon-aromali-elvan-sekeri-em102',
  },
  {
    name: 'Çilek Aromalı Şeker',
    tagline: 'Mis gibi çilek',
    image: `${IMG}/cilek-aromali-seker.png`,
    href: '/urunler/seker',
  },
  {
    name: 'Citybon Karışık Meyve',
    tagline: 'Tropik meyve karışımı',
    image: `${IMG}/citybon-karisik-meyve.png`,
    href: '/urunler/seker',
  },
  {
    name: 'Gül Aromalı Şeker',
    tagline: 'Zarif gül esansı',
    image: `${IMG}/gul-aromali-seker.png`,
    href: '/urunler/seker/gul-aromali-elvan-sekeri-em106',
  },
];
