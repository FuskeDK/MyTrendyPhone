import type { Product } from "@/types";

export const products: Product[] = [
  // ── Mobilcovers ──────────────────────────────────────────────────────────────
  {
    id: "p1",
    name: "MagSafe Clear Case til iPhone 16 Pro",
    slug: "magsafe-clear-case-iphone-16-pro",
    categoryId: "cases",
    brand: "Spigen",
    compatibleWith: ["iPhone 16 Pro"],
    description: "Militærklasse-beskyttelse møder krystalklarhed. Spigen Ultra Hybrid MagSafe-coveret giver faldsbeskyttelse op til 2,4 meter, mens det viser dit iPhones design frem. Indbyggede MagSafe-magneter til problemfri tilbehørstilslutning.",
    price: 189,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 1284,
    images: [
      "https://images.unsplash.com/photo-1583291023438-41cef6453b1f?w=800&q=80",
      "https://images.unsplash.com/photo-1547658718-f4311ad64746?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Clear", colorHex: "#f0f0f0", stock: 24 },
      { id: "v2", color: "Sort", colorHex: "#1a1a1a", stock: 18 },
      { id: "v3", color: "Midnight Blue", colorHex: "#1e3a5f", stock: 6 },
    ],
    badge: "sale",
    features: ["MagSafe-kompatibel", "Militærklasse faldsbeskyttelse", "Anti-gulning-coating", "Kompatibel med tradlos opladning"],
  },
  {
    id: "p2",
    name: "Leather Case til Samsung Galaxy S25 Ultra",
    slug: "leather-case-samsung-s25-ultra",
    categoryId: "cases",
    brand: "Mujjo",
    compatibleWith: ["Samsung Galaxy S25 Ultra"],
    description: "Ægte top-grain læderscover håndlavet til Galaxy S25 Ultra. Bliver smukkere med alderen og udvikler en rig patina. Mikrofiberforing beskytter din skærm mod ridser.",
    price: 299,
    rating: 4.5,
    reviewCount: 342,
    images: [
      "https://images.unsplash.com/photo-1547658718-f4311ad64746?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Tan", colorHex: "#c49a6c", stock: 12 },
      { id: "v2", color: "Sort", colorHex: "#1a1a1a", stock: 20 },
      { id: "v3", color: "Forest", colorHex: "#2d5016", stock: 8 },
    ],
    badge: "new",
    features: ["Ægte top-grain læder", "Mikrofiberforing", "Slank profil", "Kortholder"],
  },
  {
    id: "p3",
    name: "Tough Armor Case til iPhone 15 serien",
    slug: "tough-armor-case-iphone-15",
    categoryId: "cases",
    brand: "Spigen",
    compatibleWith: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
    description: "Dobbeltlags-beskyttelse med Air Cushion Technology. Tough Armor-coveret kombinerer hård polykarbonat og fleksibel TPU for maksimal faldsbeskyttelse i alle situationer.",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviewCount: 2108,
    images: [
      "https://images.unsplash.com/photo-1623393884989-cb3663e431c5?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Sort", colorHex: "#1a1a1a", stock: 45 },
      { id: "v2", color: "Metal Slate", colorHex: "#4a5568", stock: 22 },
    ],
    badge: "popular",
    features: ["Air Cushion Technology", "Dobbeltlags beskyttelse", "Kickstand inkluderet", "Kompatibel med tradlos opladning"],
  },
  {
    id: "p4",
    name: "Silicone Case til Google Pixel 9 Pro",
    slug: "silicone-case-pixel-9-pro",
    categoryId: "cases",
    brand: "Google",
    compatibleWith: ["Google Pixel 9 Pro"],
    description: "Officielt Google silikonecover med blod mat overflade. Præcise udskæringer til alle porte og knapper. Farvestoffrit silikon modstår pletter og misfarvning.",
    price: 199,
    rating: 4.4,
    reviewCount: 218,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Hazel", colorHex: "#6b5344", stock: 15 },
      { id: "v2", color: "Obsidian", colorHex: "#1a1a1a", stock: 30 },
      { id: "v3", color: "Porcelain", colorHex: "#f5f0eb", stock: 18 },
      { id: "v4", color: "Rose Quartz", colorHex: "#e8b4b8", stock: 9 },
    ],
    features: ["Farvestoffrit silikon", "Blod mikrofiberforing", "Præcise udskæringer", "Kompatibel med tradlos opladning"],
  },
  {
    id: "p5",
    name: "Wallet Case til iPhone 16",
    slug: "wallet-case-iphone-16",
    categoryId: "cases",
    brand: "Vaja",
    compatibleWith: ["iPhone 16"],
    description: "Premium argentinsk læderwallet-cover med plads til op til 3 kort. RFID-blokeringsteknologi holder dine kort sikre. Den perfekte hverdagslosning for dem der vil rejse let.",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1619510077413-6ad48a569b5d?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Sort", colorHex: "#1a1a1a", stock: 10 },
      { id: "v2", color: "Brun", colorHex: "#7c5c3a", stock: 7 },
    ],
    badge: "sale",
    features: ["3 kortholdere", "RFID-blokering", "Argentinsk læder", "Magnetisk lukke"],
  },

  // ── Skærmskånere ─────────────────────────────────────────────────────────────
  {
    id: "p6",
    name: "Tempered Glass Skærmskåner til iPhone 16 Pro Max",
    slug: "tempered-glass-iphone-16-pro-max",
    categoryId: "screen-protectors",
    brand: "Belkin",
    compatibleWith: ["iPhone 16 Pro Max"],
    description: "9H hårdt hærdet glas med anti-reflex-coating. Nem montering med justeringsramme. 3-pak inkluderet for langvarig beskyttelse af din skærm.",
    price: 139,
    rating: 4.6,
    reviewCount: 3241,
    images: [
      "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?w=800&q=80",
    ],
    variants: [
      { id: "v1", label: "1-pak", stock: 100 },
      { id: "v2", label: "3-pak", stock: 80 },
    ],
    badge: "popular",
    features: ["9H hårdhed", "Anti-reflex-coating", "Justeringsramme inkluderet", "Touch-folsomhed bevaret"],
  },
  {
    id: "p7",
    name: "Privacy Skærmskåner til Samsung Galaxy S25",
    slug: "privacy-screen-protector-s25",
    categoryId: "screen-protectors",
    brand: "Spigen",
    compatibleWith: ["Samsung Galaxy S25"],
    description: "Anti-spion hærdet glas der begrænser synsvinklen til 30 grader. Forhindrer skulder-surfing, mens du bevarer fuld klarhed ved direkte syn.",
    price: 99,
    originalPrice: 149,
    rating: 4.3,
    reviewCount: 756,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    ],
    badge: "sale",
    features: ["30 graders privatlivsvinkel", "9H hårdhed", "Anti-fingeraftryk", "Cover-venlig"],
  },
  {
    id: "p8",
    name: "Mat Skærmskåner til iPad Pro 13\"",
    slug: "matte-screen-protector-ipad-pro-13",
    categoryId: "screen-protectors",
    brand: "Paperlike",
    compatibleWith: ["iPad Pro 13\" M4"],
    description: "Den ultimative skrive- og tegneoplevelse på din iPad. Den matte tekstur efterligner følelsen af papir, reducerer reflekser og forbedrer Apple Pencil-præcision markant.",
    price: 249,
    rating: 4.9,
    reviewCount: 5612,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    badge: "popular",
    features: ["Papirlignende tekstur", "Apple Pencil-kompatibel", "Anti-refleks", "2-pak"],
  },

  // ── Opladere og kabler ───────────────────────────────────────────────────────
  {
    id: "p9",
    name: "140W USB-C GaN Oplader",
    slug: "140w-usb-c-gan-charger",
    categoryId: "chargers",
    brand: "Anker",
    description: "Oplad din MacBook, iPad og iPhone samtidigt med én enkelt oplader. GaN-teknologi gør den 40% mindre end traditionelle opladere ved samme effekt. Perfekt til rejser.",
    price: 449,
    originalPrice: 549,
    rating: 4.8,
    reviewCount: 2187,
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
    ],
    badge: "popular",
    features: ["3 porte (2x USB-C + USB-A)", "140W samlet output", "GaN-teknologi", "Kompakt design"],
  },
  {
    id: "p10",
    name: "MagSafe Oplader 2m",
    slug: "magsafe-charger-2m",
    categoryId: "chargers",
    brand: "Apple",
    compatibleWith: ["iPhone 12 og nyere"],
    description: "Officiel Apple MagSafe-oplader med 2 meter kabel. Klikker magnetisk på for perfekt justering hver gang. Oplader op til 15W for lynhurtig tradlos opladning.",
    price: 349,
    rating: 4.7,
    reviewCount: 8934,
    images: [
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80",
    ],
    features: ["15W hurtigopladning", "MagSafe magnetisk justering", "2m kabel", "USB-C stik"],
  },
  {
    id: "p11",
    name: "Flettet USB-C til Lightning Kabel 2m",
    slug: "braided-usbc-lightning-2m",
    categoryId: "chargers",
    brand: "Belkin",
    compatibleWith: ["iPhone", "AirPods", "iPad"],
    description: "Militærklasse flettet kabel der er 3x stærkere end standardkabler. Fremstillet af holdbar nylon med aluminiumsstik. Apple MFi-certificeret for fuld kompatibilitet.",
    price: 149,
    rating: 4.5,
    reviewCount: 3456,
    images: [
      "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Sort", colorHex: "#1a1a1a", stock: 50 },
      { id: "v2", color: "Hvid", colorHex: "#f5f5f5", stock: 40 },
    ],
    features: ["Apple MFi-certificeret", "30W opladningsstotte", "Nylonflættet", "1m og 2m tilgængelig"],
  },

  // ── Tradlos opladning ────────────────────────────────────────────────────────
  {
    id: "p12",
    name: "3-i-1 MagSafe Opladningsstation",
    slug: "3in1-magsafe-charging-station",
    categoryId: "wireless-charging",
    brand: "Belkin",
    description: "Oplad din iPhone, Apple Watch og AirPods samtidigt. MagSafe-pucken leverer op til 15W til iPhone, mens Apple Watch-hurtigoplader halverer opladningstiden. Kabelfrit skrivebord.",
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviewCount: 1127,
    images: [
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80",
    ],
    badge: "sale",
    features: ["15W MagSafe til iPhone", "Apple Watch hurtigopladning", "AirPods-pude", "Kabelfrit skrivebord"],
  },
  {
    id: "p13",
    name: "Qi2 Tradlos Opladepude 15W",
    slug: "qi2-wireless-charging-pad-15w",
    categoryId: "wireless-charging",
    brand: "Anker",
    description: "Næste generation Qi2-standard for 15W hurtig tradlos opladning. Kompatibel med alle Qi og Qi2-enheder. Inkluderer skridsikker bund og LED-indikator for opladningsstatus.",
    price: 249,
    rating: 4.5,
    reviewCount: 892,
    images: [
      "https://images.unsplash.com/photo-1627886107121-b7daaede3974?w=800&q=80",
    ],
    badge: "new",
    features: ["Qi2-standard", "15W hurtigopladning", "Universal kompatibilitet", "LED-indikator"],
  },

  // ── Hovedtelefoner og earbuds ─────────────────────────────────────────────────
  {
    id: "p14",
    name: "AirPods Pro (2. generation)",
    slug: "airpods-pro-2nd-gen",
    categoryId: "headphones",
    brand: "Apple",
    description: "Genopbygget fra bunden leverer AirPods Pro op til 2x mere aktiv stojreduktion. Adaptiv lyd blander dynamisk ANC og gennemsigtighedstilstand. 30 timers samlet batteritid med etuiet.",
    price: 1699,
    rating: 4.9,
    reviewCount: 12847,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80",
    ],
    badge: "popular",
    features: ["Aktiv stojreduktion", "Adaptiv gennemsigtighed", "Personaliseret rumlig lyd", "MagSafe-opladeretui"],
  },
  {
    id: "p15",
    name: "Sony WH-1000XM5 Hovedtelefoner",
    slug: "sony-wh1000xm5",
    categoryId: "headphones",
    brand: "Sony",
    description: "Brancheledende stojreduktion med auto-optimering. Op til 30 timers batteri. Multipoint Bluetooth forbinder to enheder samtidigt for problemfri skift mellem enheder.",
    price: 2799,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 7621,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Sort", colorHex: "#1a1a1a", stock: 15 },
      { id: "v2", color: "Solv", colorHex: "#c0c0c0", stock: 8 },
    ],
    badge: "sale",
    features: ["30 timers batteri", "Brancheledende stojreduktion", "Multipoint Bluetooth", "Speak-to-chat"],
  },
  {
    id: "p16",
    name: "Samsung Galaxy Buds3 Pro",
    slug: "samsung-galaxy-buds3-pro",
    categoryId: "headphones",
    brand: "Samsung",
    description: "Premium lyd med intelligent aktiv stojreduktion. Det slanke blade-design sikrer en komfortabel og sikker pasform til hele dagen. Perfekt til sport og pendling.",
    price: 1499,
    rating: 4.6,
    reviewCount: 2304,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Hvid Solv", colorHex: "#e8e8e8", stock: 20 },
      { id: "v2", color: "Onyx", colorHex: "#1a1a1a", stock: 16 },
    ],
    badge: "new",
    features: ["Intelligent stojreduktion", "Hi-Fi lyd", "360 lyd", "IPX7 vandafvisende"],
  },

  // ── Powerbanks ───────────────────────────────────────────────────────────────
  {
    id: "p17",
    name: "Anker PowerCore 26800mAh 65W",
    slug: "anker-powercore-26800mah-65w",
    categoryId: "power-banks",
    brand: "Anker",
    description: "Oplad en MacBook, iPad og iPhone på én gang med 65W USB-C-output. Kapacitet nok til at lade en iPhone 16 Pro Max op 5+ gange. Ideel til rejser og lange arbejdsdage.",
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviewCount: 4312,
    images: [
      "https://images.unsplash.com/photo-1566554738544-d962991c3fee?w=800&q=80",
    ],
    badge: "popular",
    features: ["26800mAh kapacitet", "65W USB-C output", "3 porte samtidigt", "PowerIQ 4.0"],
  },
  {
    id: "p18",
    name: "MagSafe Powerbank 10000mAh",
    slug: "magsafe-power-bank-10000mah",
    categoryId: "power-banks",
    brand: "Anker",
    compatibleWith: ["iPhone 12 og nyere"],
    description: "Fastgøres magnetisk til din iPhone for opladning pa farten uden kabler. Foldbar stand til opladning i liggende stilling mens du ser film eller videoer.",
    price: 399,
    rating: 4.5,
    reviewCount: 1892,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Hvid", colorHex: "#f5f5f5", stock: 22 },
      { id: "v2", color: "Sort", colorHex: "#1a1a1a", stock: 19 },
    ],
    badge: "new",
    features: ["MagSafe magnetisk fastgorelse", "Foldbar stand", "10000mAh", "USB-C gennemgang"],
  },

  // ── Holdere og stativer ──────────────────────────────────────────────────────
  {
    id: "p19",
    name: "MagSafe Bilholder til udblæsning",
    slug: "magsafe-car-mount-vent",
    categoryId: "mounts-stands",
    brand: "Peak Design",
    compatibleWith: ["iPhone 12 og nyere"],
    description: "Den stærkeste MagSafe bilholder pa markedet. 4x stærkere magneter end standard MagSafe. 360-graders rotation og én-hånds betjening for nem justering under korslen.",
    price: 349,
    rating: 4.8,
    reviewCount: 2876,
    images: [
      "https://images.unsplash.com/photo-1536825591064-574efec257f2?w=800&q=80",
    ],
    badge: "popular",
    features: ["4x stærkere MagSafe", "360-graders rotation", "En-hands betjening", "Universal ventilationsklemme"],
  },
  {
    id: "p20",
    name: "Justerbart Bordstativ til telefon og tablet",
    slug: "adjustable-desk-stand",
    categoryId: "mounts-stands",
    brand: "ESR",
    description: "Stødig aluminiumsbordstativ kompatibelt med telefoner og tablets op til 13 tommer. Justerbar vinkel fra 15-90 grader. Skridsikker bund forhindrer slid pa din overflade.",
    price: 199,
    rating: 4.4,
    reviewCount: 1543,
    images: [
      "https://images.unsplash.com/photo-1717007873182-7cc5d673cbff?w=800&q=80",
    ],
    features: ["Justerbar 15-90 grader", "Universal kompatibilitet", "Aluminiumskonstruktion", "Skridsikker bund"],
  },

  // ── Tabletcovers ─────────────────────────────────────────────────────────────
  {
    id: "p21",
    name: "Smart Folio til iPad Pro 13\" M4",
    slug: "smart-folio-ipad-pro-13-m4",
    categoryId: "tablet-cases",
    brand: "Apple",
    compatibleWith: ["iPad Pro 13\" M4"],
    description: "Officielt Apple Smart Folio fremstillet af specielt garvet og farvet europæisk læder. Vækker og slukker automatisk din iPad. Foldes til enhver visningsvinkel.",
    price: 899,
    rating: 4.7,
    reviewCount: 3421,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Sort", colorHex: "#1a1a1a", stock: 20 },
      { id: "v2", color: "Light Violet", colorHex: "#b8b5d9", stock: 14 },
      { id: "v3", color: "Denim", colorHex: "#4a6fa5", stock: 10 },
    ],
    features: ["Europæisk læder", "Automatisk vækking/sleep", "Flere visningsvinkler", "Pencil Pro-holder"],
  },
  {
    id: "p22",
    name: "Rugged Case til Samsung Galaxy Tab S10+",
    slug: "rugged-case-samsung-tab-s10-plus",
    categoryId: "tablet-cases",
    brand: "Otterbox",
    compatibleWith: ["Samsung Galaxy Tab S10+"],
    description: "Defender Series-beskyttelse til din Galaxy Tab. 3-lags beskyttelse mod fald, snavs og ridser. Indbygget stand og S Pen-holder - klar til alt hvad hverdagen bringer.",
    price: 499,
    originalPrice: 649,
    rating: 4.5,
    reviewCount: 876,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    badge: "sale",
    features: ["3-lags beskyttelse", "Indbygget kickstand", "S Pen-holder", "Portdæksler"],
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "popular").slice(0, 4);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "new").slice(0, 4);
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.badge === "sale").slice(0, 4);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.compatibleWith?.some((c) => c.toLowerCase().includes(q))
  );
}
