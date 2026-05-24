import Link from "next/link";
import { ArrowRight, Shield, Truck, RotateCcw, Headphones, Smartphone, Zap, Volume2, Battery, MonitorSmartphone } from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const perks = [
  { icon: Truck, title: "Gratis fragt", sub: "Ved køb over 499 kr" },
  { icon: RotateCcw, title: "30 dages retur", sub: "Ingen begrundelse krævet" },
  { icon: Shield, title: "2 års garanti", sub: "På alle produkter" },
  { icon: Headphones, title: "Support 7 dage", sub: "Chat, telefon og e-mail" },
];

const categoryIcons: Record<string, React.ElementType> = {
  "phone-cases": Smartphone,
  "chargers-cables": Zap,
  "headphones-earbuds": Volume2,
  "power-banks": Battery,
  "screen-protectors": MonitorSmartphone,
  "wireless-charging": Zap,
  "mounts-stands": MonitorSmartphone,
};

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6 text-gray-900">
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

          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=640&q=80"
                alt="Premium tilbehør"
                className="w-full h-full object-cover"
              />
            </div>
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Shop efter kategori</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.slice(0, 8).map((cat) => {
            const Icon = categoryIcons[cat.slug] ?? Smartphone;
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <Icon className="w-5 h-5 text-[#2563eb]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{cat.name}</p>
                  <p className="text-xs text-gray-400">{cat.count} produkter</p>
                </div>
              </Link>
            );
          })}
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
