export interface BestSeller {
  name: string;
  tagline: string;
  image: string;
  /** Link to the packaged product's detail page */
  href: string;
}

const IMG = '/urunler/cok-satanlar';
const PKG = '/urunler/paketli';

// Paketli çok satan ürünler — hero altındaki otomatik kayan şeritte gösterilir.
// Her biri kendi paketli ürün sayfasına yönlendirir.
export const bestSellers: BestSeller[] = [
  {
    name: 'Kapiçino Aromalı Şeker',
    tagline: 'Yoğun kahve aroması',
    image: `${IMG}/kapicino-aromali-seker.png`,
    href: `${PKG}/kapicino-aromali-seker`,
  },
  {
    name: 'Fındıklı Şeker',
    tagline: 'Bütün fındık dolgulu',
    image: `${IMG}/findikli-seker.png`,
    href: `${PKG}/findikli-seker`,
  },
  {
    name: 'Nane Aromalı Şeker',
    tagline: 'Ferahlatıcı nane',
    image: `${IMG}/nane-aromali-seker.png`,
    href: `${PKG}/nane-aromali-seker`,
  },
  {
    name: 'Susamlı Şeker',
    tagline: 'Kıtır susam kaplı',
    image: `${IMG}/susamli-seker.png`,
    href: `${PKG}/susamli-seker`,
  },
  {
    name: 'Bademli Şeker',
    tagline: 'Bütün badem dolgulu',
    image: `${IMG}/bademli-seker.png`,
    href: `${PKG}/bademli-seker`,
  },
  {
    name: 'Karışık Meyve Aromalı Şeker',
    tagline: 'Rengarenk meyve çeşitleri',
    image: `${IMG}/karisik-meyve-aromali-seker.png`,
    href: `${PKG}/karisik-meyve-aromali-seker`,
  },
  {
    name: 'Limon Aromalı Şeker',
    tagline: 'Ferah limon ekşiliği',
    image: `${IMG}/limon-aromali-seker.png`,
    href: `${PKG}/limon-aromali-seker`,
  },
  {
    name: 'Çilek Aromalı Şeker',
    tagline: 'Mis gibi çilek',
    image: `${IMG}/cilek-aromali-seker.png`,
    href: `${PKG}/cilek-aromali-seker`,
  },
  {
    name: 'Citybon Karışık Meyve',
    tagline: 'Tropik meyve karışımı',
    image: `${IMG}/citybon-karisik-meyve.png`,
    href: `${PKG}/citybon-karisik-meyve`,
  },
  {
    name: 'Gül Aromalı Şeker',
    tagline: 'Zarif gül esansı',
    image: `${IMG}/gul-aromali-seker.png`,
    href: `${PKG}/gul-aromali-seker`,
  },
];
