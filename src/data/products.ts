import type { Product } from "@/types";

export const products: Product[] = [
  // ── Phone Cases ─────────────────────────────────────────────────────────────
  {
    id: "p1",
    name: "MagSafe Clear Case for iPhone 16 Pro",
    slug: "magsafe-clear-case-iphone-16-pro",
    categoryId: "cases",
    brand: "Spigen",
    compatibleWith: ["iPhone 16 Pro"],
    description: "Military-grade protection meets crystal clarity. The Spigen Ultra Hybrid MagSafe case offers drop protection up to 8 feet while showing off your iPhone's design. Built-in MagSafe magnets for seamless accessory attachment.",
    price: 189,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 1284,
    images: [
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Clear", colorHex: "#f0f0f0", stock: 24 },
      { id: "v2", color: "Black", colorHex: "#1a1a1a", stock: 18 },
      { id: "v3", color: "Midnight Blue", colorHex: "#1e3a5f", stock: 6 },
    ],
    badge: "sale",
    features: ["MagSafe compatible", "Military-grade drop protection", "Anti-yellow coating", "Wireless charging compatible"],
  },
  {
    id: "p2",
    name: "Leather Case for Samsung Galaxy S25 Ultra",
    slug: "leather-case-samsung-s25-ultra",
    categoryId: "cases",
    brand: "Mujjo",
    compatibleWith: ["Samsung Galaxy S25 Ultra"],
    description: "Genuine top-grain leather case handcrafted for the Galaxy S25 Ultra. Ages beautifully with a rich patina. Features a microfiber lining to protect your screen.",
    price: 299,
    rating: 4.5,
    reviewCount: 342,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Tan", colorHex: "#c49a6c", stock: 12 },
      { id: "v2", color: "Black", colorHex: "#1a1a1a", stock: 20 },
      { id: "v3", color: "Forest", colorHex: "#2d5016", stock: 8 },
    ],
    badge: "new",
    features: ["Genuine top-grain leather", "Microfiber lining", "Slim profile", "Card slot"],
  },
  {
    id: "p3",
    name: "Tough Armor Case for iPhone 15 Series",
    slug: "tough-armor-case-iphone-15",
    categoryId: "cases",
    brand: "Spigen",
    compatibleWith: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
    description: "Double-layered protection with Air Cushion Technology. The Tough Armor case combines hard polycarbonate and flexible TPU for maximum drop protection.",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviewCount: 2108,
    images: [
      "https://images.unsplash.com/photo-1617296538902-887900d9b592?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Black", colorHex: "#1a1a1a", stock: 45 },
      { id: "v2", color: "Metal Slate", colorHex: "#4a5568", stock: 22 },
    ],
    badge: "popular",
    features: ["Air Cushion Technology", "Dual-layer protection", "Kickstand included", "Wireless charging compatible"],
  },
  {
    id: "p4",
    name: "Silicone Case for Google Pixel 9 Pro",
    slug: "silicone-case-pixel-9-pro",
    categoryId: "cases",
    brand: "Google",
    compatibleWith: ["Google Pixel 9 Pro"],
    description: "Official Google silicone case with a soft matte finish. Precise cutouts for all ports and buttons. Dye-free silicone resists staining.",
    price: 199,
    rating: 4.4,
    reviewCount: 218,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Hazel", colorHex: "#6b5344", stock: 15 },
      { id: "v2", color: "Obsidian", colorHex: "#1a1a1a", stock: 30 },
      { id: "v3", color: "Porcelain", colorHex: "#f5f0eb", stock: 18 },
      { id: "v4", color: "Rose Quartz", colorHex: "#e8b4b8", stock: 9 },
    ],
    features: ["Dye-free silicone", "Soft microfiber lining", "Precise cutouts", "Wireless charging compatible"],
  },
  {
    id: "p5",
    name: "Wallet Case for iPhone 16",
    slug: "wallet-case-iphone-16",
    categoryId: "cases",
    brand: "Vaja",
    compatibleWith: ["iPhone 16"],
    description: "Premium Argentinian leather wallet case with room for up to 3 cards. RFID blocking technology keeps your cards safe. The perfect everyday carry solution.",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Black", colorHex: "#1a1a1a", stock: 10 },
      { id: "v2", color: "Brown", colorHex: "#7c5c3a", stock: 7 },
    ],
    badge: "sale",
    features: ["3 card slots", "RFID blocking", "Argentinian leather", "Magnetic closure"],
  },

  // ── Screen Protectors ────────────────────────────────────────────────────────
  {
    id: "p6",
    name: "Tempered Glass Screen Protector iPhone 16 Pro Max",
    slug: "tempered-glass-iphone-16-pro-max",
    categoryId: "screen-protectors",
    brand: "Belkin",
    compatibleWith: ["iPhone 16 Pro Max"],
    description: "9H hardness tempered glass with anti-glare coating. Easy installation with alignment frame. 3-pack included for long-lasting protection.",
    price: 139,
    rating: 4.6,
    reviewCount: 3241,
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    ],
    variants: [
      { id: "v1", label: "1-pack", stock: 100 },
      { id: "v2", label: "3-pack", stock: 80 },
    ],
    badge: "popular",
    features: ["9H hardness", "Anti-glare coating", "Alignment frame included", "Touch sensitivity maintained"],
  },
  {
    id: "p7",
    name: "Privacy Screen Protector Samsung Galaxy S25",
    slug: "privacy-screen-protector-s25",
    categoryId: "screen-protectors",
    brand: "Spigen",
    compatibleWith: ["Samsung Galaxy S25"],
    description: "Anti-spy tempered glass that limits the viewing angle to 30 degrees. Prevents shoulder surfing while maintaining full clarity when viewed straight-on.",
    price: 99,
    originalPrice: 149,
    rating: 4.3,
    reviewCount: 756,
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    ],
    badge: "sale",
    features: ["30-degree privacy angle", "9H hardness", "Anti-fingerprint", "Case friendly"],
  },
  {
    id: "p8",
    name: "Matte Screen Protector for iPad Pro 13\"",
    slug: "matte-screen-protector-ipad-pro-13",
    categoryId: "screen-protectors",
    brand: "Paperlike",
    compatibleWith: ["iPad Pro 13\" M4"],
    description: "The ultimate writing and drawing experience on your iPad. The matte texture mimics the feel of paper, reducing glare and improving Apple Pencil precision.",
    price: 249,
    rating: 4.9,
    reviewCount: 5612,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    badge: "popular",
    features: ["Paper-like texture", "Apple Pencil compatible", "Anti-glare", "2-pack"],
  },

  // ── Chargers & Cables ────────────────────────────────────────────────────────
  {
    id: "p9",
    name: "140W USB-C GaN Charger",
    slug: "140w-usb-c-gan-charger",
    categoryId: "chargers",
    brand: "Anker",
    description: "Charge your MacBook, iPad, and iPhone simultaneously with a single charger. GaN technology makes it 40% smaller than traditional chargers at the same power output.",
    price: 449,
    originalPrice: 549,
    rating: 4.8,
    reviewCount: 2187,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
    ],
    badge: "popular",
    features: ["3 ports (2x USB-C + USB-A)", "140W total output", "GaN technology", "Compact design"],
  },
  {
    id: "p10",
    name: "MagSafe Charger 2m",
    slug: "magsafe-charger-2m",
    categoryId: "chargers",
    brand: "Apple",
    compatibleWith: ["iPhone 12 and later"],
    description: "Official Apple MagSafe charger with 2-meter cable. Snap on magnetically for perfect alignment every time. Charges up to 15W for lightning-fast wireless charging.",
    price: 349,
    rating: 4.7,
    reviewCount: 8934,
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    ],
    features: ["15W fast charging", "MagSafe magnetic alignment", "2m cable", "USB-C connector"],
  },
  {
    id: "p11",
    name: "Braided USB-C to Lightning Cable 2m",
    slug: "braided-usbc-lightning-2m",
    categoryId: "chargers",
    brand: "Belkin",
    compatibleWith: ["iPhone", "AirPods", "iPad"],
    description: "Military-grade braided cable that's 3x stronger than standard cables. Made from durable nylon braid with aluminum connectors. Apple MFi certified.",
    price: 149,
    rating: 4.5,
    reviewCount: 3456,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Black", colorHex: "#1a1a1a", stock: 50 },
      { id: "v2", color: "White", colorHex: "#f5f5f5", stock: 40 },
    ],
    features: ["Apple MFi certified", "30W charging support", "Nylon braided", "1m and 2m available"],
  },

  // ── Wireless Charging ────────────────────────────────────────────────────────
  {
    id: "p12",
    name: "3-in-1 MagSafe Charging Station",
    slug: "3in1-magsafe-charging-station",
    categoryId: "wireless-charging",
    brand: "Belkin",
    description: "Charge your iPhone, Apple Watch, and AirPods simultaneously. The MagSafe puck delivers up to 15W for iPhone, while the Apple Watch fast charger cuts charge time in half.",
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviewCount: 1127,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    badge: "sale",
    features: ["15W MagSafe for iPhone", "Apple Watch fast charge", "AirPods pad", "Cable-free desktop"],
  },
  {
    id: "p13",
    name: "Qi2 Wireless Charging Pad 15W",
    slug: "qi2-wireless-charging-pad-15w",
    categoryId: "wireless-charging",
    brand: "Anker",
    description: "Next-generation Qi2 standard for 15W fast wireless charging. Compatible with all Qi and Qi2 devices. Includes a non-slip base and LED indicator.",
    price: 249,
    rating: 4.5,
    reviewCount: 892,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    badge: "new",
    features: ["Qi2 standard", "15W fast charging", "Universal compatibility", "LED indicator"],
  },

  // ── Headphones & Earbuds ─────────────────────────────────────────────────────
  {
    id: "p14",
    name: "AirPods Pro (2nd generation)",
    slug: "airpods-pro-2nd-gen",
    categoryId: "headphones",
    brand: "Apple",
    description: "Rebuilt from the ground up, AirPods Pro deliver up to 2x more Active Noise Cancellation. Adaptive Audio dynamically blends ANC and Transparency mode. 30 hours total battery with case.",
    price: 1699,
    rating: 4.9,
    reviewCount: 12847,
    images: [
      "https://images.unsplash.com/photo-1606741965509-717c98d4e27e?w=800&q=80",
    ],
    badge: "popular",
    features: ["Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio", "MagSafe charging case"],
  },
  {
    id: "p15",
    name: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh1000xm5",
    categoryId: "headphones",
    brand: "Sony",
    description: "Industry-leading noise cancelling with auto-optimize. Up to 30 hours battery. Multipoint Bluetooth connects to two devices simultaneously.",
    price: 2799,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 7621,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Black", colorHex: "#1a1a1a", stock: 15 },
      { id: "v2", color: "Silver", colorHex: "#c0c0c0", stock: 8 },
    ],
    badge: "sale",
    features: ["30-hour battery", "Industry-leading ANC", "Multipoint Bluetooth", "Speak-to-chat"],
  },
  {
    id: "p16",
    name: "Samsung Galaxy Buds3 Pro",
    slug: "samsung-galaxy-buds3-pro",
    categoryId: "headphones",
    brand: "Samsung",
    description: "Premium sound with Intelligent Active Noise Cancellation. The blade-type design ensures a comfortable, secure fit for all-day wear.",
    price: 1499,
    rating: 4.6,
    reviewCount: 2304,
    images: [
      "https://images.unsplash.com/photo-1606741965509-717c98d4e27e?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "White Silver", colorHex: "#e8e8e8", stock: 20 },
      { id: "v2", color: "Onyx", colorHex: "#1a1a1a", stock: 16 },
    ],
    badge: "new",
    features: ["Intelligent ANC", "Hi-Fi sound", "360 Audio", "IPX7 water resistant"],
  },

  // ── Power Banks ──────────────────────────────────────────────────────────────
  {
    id: "p17",
    name: "Anker PowerCore 26800mAh 65W",
    slug: "anker-powercore-26800mah-65w",
    categoryId: "power-banks",
    brand: "Anker",
    description: "Charge a MacBook, iPad, and iPhone all at once with 65W USB-C output. Enough capacity to charge an iPhone 16 Pro Max 5+ times.",
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviewCount: 4312,
    images: [
      "https://images.unsplash.com/photo-1609592806156-4a95b2ad6e52?w=800&q=80",
    ],
    badge: "popular",
    features: ["26800mAh capacity", "65W USB-C output", "3 ports simultaneously", "PowerIQ 4.0"],
  },
  {
    id: "p18",
    name: "MagSafe Power Bank 10000mAh",
    slug: "magsafe-power-bank-10000mah",
    categoryId: "power-banks",
    brand: "Anker",
    compatibleWith: ["iPhone 12 and later"],
    description: "Snap onto your iPhone magnetically for on-the-go charging without cables. Foldable stand lets you charge in landscape for watching content.",
    price: 399,
    rating: 4.5,
    reviewCount: 1892,
    images: [
      "https://images.unsplash.com/photo-1609592806156-4a95b2ad6e52?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "White", colorHex: "#f5f5f5", stock: 22 },
      { id: "v2", color: "Black", colorHex: "#1a1a1a", stock: 19 },
    ],
    badge: "new",
    features: ["MagSafe magnetic attachment", "Foldable stand", "10000mAh", "USB-C passthrough"],
  },

  // ── Mounts & Stands ──────────────────────────────────────────────────────────
  {
    id: "p19",
    name: "MagSafe Car Mount for Vents",
    slug: "magsafe-car-mount-vent",
    categoryId: "mounts-stands",
    brand: "Peak Design",
    compatibleWith: ["iPhone 12 and later"],
    description: "The strongest MagSafe car mount available. 4x stronger magnets than standard MagSafe. 360-degree rotation, one-hand operation.",
    price: 349,
    rating: 4.8,
    reviewCount: 2876,
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    ],
    badge: "popular",
    features: ["4x stronger MagSafe", "360-degree rotation", "One-hand operation", "Universal vent clip"],
  },
  {
    id: "p20",
    name: "Adjustable Desk Stand for Phone & Tablet",
    slug: "adjustable-desk-stand",
    categoryId: "mounts-stands",
    brand: "ESR",
    description: "Sturdy aluminum desk stand compatible with phones and tablets up to 13 inches. Adjustable angle from 15-90 degrees. Non-slip base.",
    price: 199,
    rating: 4.4,
    reviewCount: 1543,
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    ],
    features: ["Adjustable 15-90 degrees", "Universal compatibility", "Aluminum build", "Non-slip base"],
  },

  // ── Tablet Cases ─────────────────────────────────────────────────────────────
  {
    id: "p21",
    name: "Smart Folio for iPad Pro 13\" M4",
    slug: "smart-folio-ipad-pro-13-m4",
    categoryId: "tablet-cases",
    brand: "Apple",
    compatibleWith: ["iPad Pro 13\" M4"],
    description: "Official Apple Smart Folio made from specially tanned and dyed European leather. Automatically wakes and sleeps your iPad. Folds to any viewing angle.",
    price: 899,
    rating: 4.7,
    reviewCount: 3421,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    variants: [
      { id: "v1", color: "Black", colorHex: "#1a1a1a", stock: 20 },
      { id: "v2", color: "Light Violet", colorHex: "#b8b5d9", stock: 14 },
      { id: "v3", color: "Denim", colorHex: "#4a6fa5", stock: 10 },
    ],
    features: ["European leather", "Auto wake/sleep", "Multiple viewing angles", "Pencil Pro slot"],
  },
  {
    id: "p22",
    name: "Rugged Case for Samsung Galaxy Tab S10+",
    slug: "rugged-case-samsung-tab-s10-plus",
    categoryId: "tablet-cases",
    brand: "Otterbox",
    compatibleWith: ["Samsung Galaxy Tab S10+"],
    description: "Defender Series protection for your Galaxy Tab. 3-layer protection against drops, dirt, and scrapes. Built-in stand and S Pen holder.",
    price: 499,
    originalPrice: 649,
    rating: 4.5,
    reviewCount: 876,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    ],
    badge: "sale",
    features: ["3-layer protection", "Built-in kickstand", "S Pen holder", "Port covers"],
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
