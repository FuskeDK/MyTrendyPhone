import Link from "next/link";
import { ArrowRight, Shield, Truck, RotateCcw, Headphones } from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getNewArrivals, getSaleProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const perks = [
  { icon: Truck, title: "Gratis fragt", sub: "Ved kob over 499 kr" },
  { icon: RotateCcw, title: "30 dages retur", sub: "Ingen begrundelse krævet" },
  { icon: Shield, title: "2 ars garanti", sub: "Pa alle produkter" },
  { icon: Headphones, title: "Support 7 dage", sub: "Chat, telefon og e-mail" },
];

const heroProducts = [
  {
    label: "Mobilcovers",
    img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&q=80",
    href: "/category/phone-cases",
  },
  {
    label: "Hovedtelefoner",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    href: "/category/headphones-earbuds",
  },
  {
    label: "Opladere",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    href: "/category/chargers-cables",
  },
  {
    label: "Tradlos opladning",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    href: "/category/wireless-charging",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const sale = getSaleProducts();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-[1fr_auto] gap-14 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-[68px] font-extrabold leading-[1.0] tracking-tight mb-6 text-gray-900">
              Alt hvad din telefon har brug for.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              700+ produkter fra Apple, Samsung, Spigen og Anker. Hurtig levering i hele Danmark.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/category/phone-cases" className="btn-primary">
                Shop nu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/category/headphones-earbuds" className="btn-secondary">
                Se alle kategorier
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-3 w-[380px] shrink-0">
            {heroProducts.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100"
              >
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-4.5 h-4.5 text-[#2563eb]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{title}</p>
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Shop efter kategori</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm leading-snug">{cat.name}</p>
                <p className="text-white/60 text-xs mt-0.5">{cat.count} produkter</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Best sellers ── */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Bestsellere</h2>
            <Link href="/category/phone-cases" className="btn-secondary text-xs">
              Se alle <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Promo banners ── */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/category/wireless-charging"
              className="group relative rounded-2xl overflow-hidden bg-gray-900 p-8 min-h-56 flex flex-col justify-between"
            >
              <div>
                <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest">Udvalgt</span>
                <h3 className="text-white text-2xl font-extrabold mt-2 leading-tight">
                  Oplad tradlost.<br />Oplad hurtigere.
                </h3>
                <p className="text-white/50 text-sm mt-2">MagSafe og Qi2 op til 15W</p>
              </div>
              <span className="btn-primary mt-4 self-start">
                Shop opladere <ArrowRight className="w-4 h-4" />
              </span>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                alt=""
                className="absolute right-0 bottom-0 w-44 h-44 object-cover rounded-tl-2xl opacity-20"
              />
            </Link>
            <Link
              href="/category/headphones-earbuds"
              className="group relative rounded-2xl overflow-hidden bg-gray-50 p-8 min-h-56 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Premium lyd</span>
                <h3 className="text-gray-900 text-2xl font-extrabold mt-2 leading-tight">
                  Hor hvert<br />eneste detalje.
                </h3>
                <p className="text-gray-400 text-sm mt-2">Sony, Apple, Samsung og meget mere</p>
              </div>
              <span className="btn-primary mt-4 self-start">
                Shop hovedtelefoner <ArrowRight className="w-4 h-4" />
              </span>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                alt=""
                className="absolute right-0 bottom-0 w-44 h-44 object-cover rounded-tl-2xl opacity-30"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── New arrivals ── */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Nyheder</h2>
            <Link href="/category/headphones-earbuds" className="btn-secondary text-xs">
              Se alle <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sale ── */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Pa tilbud nu</h2>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                Tilbud
              </span>
            </div>
            <Link href="/category/phone-cases" className="btn-secondary text-xs">
              Se alle <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sale.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-300 mb-8">
            Officiel forhandler af topbrands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {["Apple", "Samsung", "Spigen", "Anker", "Sony", "Belkin", "Mujjo", "Otterbox"].map((brand) => (
              <span
                key={brand}
                className="text-base font-extrabold text-gray-200 hover:text-gray-500 transition-colors cursor-pointer tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
