import Link from "next/link";
import { ArrowRight, Shield, Truck, RotateCcw, Headphones } from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getNewArrivals, getSaleProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const perks = [
  { icon: Truck, title: "Free shipping", sub: "On orders over 499 kr" },
  { icon: RotateCcw, title: "30-day returns", sub: "No questions asked" },
  { icon: Shield, title: "2-year warranty", sub: "On all products" },
  { icon: Headphones, title: "Support 7 days", sub: "Chat, phone & email" },
];

const heroProducts = [
  {
    label: "Phone Cases",
    img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&q=80",
    href: "/category/phone-cases",
  },
  {
    label: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    href: "/category/headphones-earbuds",
  },
  {
    label: "Chargers",
    img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    href: "/category/chargers-cables",
  },
  {
    label: "Wireless",
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
      <section className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Left */}
          <div className="max-w-lg">
            <p className="text-[#2563eb] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Denmark&rsquo;s #1 phone accessory store
            </p>
            <h1 className="text-4xl md:text-[52px] font-extrabold leading-[1.1] tracking-tight mb-5">
              Everything your<br />
              <span className="text-[#2563eb]">phone needs.</span>
            </h1>
            <p className="text-[#999] text-base leading-relaxed mb-8">
              Cases, chargers, headphones and more — 700+ products from Apple, Samsung, Spigen, Anker and other top brands. Fast delivery across Denmark.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/category/phone-cases" className="btn-primary">
                Shop now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/category/headphones-earbuds" className="btn-secondary" style={{ background: "transparent", color: "#fff", borderColor: "#333" }}>
                Browse all categories
              </Link>
            </div>
          </div>

          {/* Right – 2×2 product grid */}
          <div className="hidden md:grid grid-cols-2 gap-3 w-[360px] shrink-0">
            {heroProducts.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group relative rounded-xl overflow-hidden aspect-square bg-[#111]"
              >
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-white text-xs font-bold">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#2563eb]" />
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Shop by category</h2>
          <p className="text-sm text-gray-400 mt-1">Find exactly what you&rsquo;re looking for</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm leading-snug">{cat.name}</p>
                <p className="text-gray-300 text-xs mt-0.5">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Best sellers ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Best sellers</h2>
              <p className="text-sm text-gray-400 mt-1">Our most loved products</p>
            </div>
            <Link href="/category/phone-cases" className="btn-secondary text-xs">
              View all <ArrowRight className="w-3.5 h-3.5" />
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/category/wireless-charging"
            className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] p-8 min-h-52 flex flex-col justify-between border border-gray-100"
          >
            <div>
              <span className="text-[#2563eb] text-xs font-bold uppercase tracking-widest">Featured</span>
              <h3 className="text-white text-2xl font-extrabold mt-2 leading-tight">
                Go wireless.<br />Charge faster.
              </h3>
              <p className="text-gray-400 text-sm mt-2">MagSafe &amp; Qi2 up to 15W</p>
            </div>
            <span className="btn-primary mt-4 self-start">
              Shop charging <ArrowRight className="w-4 h-4" />
            </span>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
              alt=""
              className="absolute right-0 bottom-0 w-40 h-40 object-cover rounded-tl-2xl opacity-20"
            />
          </Link>
          <Link
            href="/category/headphones-earbuds"
            className="group relative rounded-2xl overflow-hidden bg-[#f5f5f5] p-8 min-h-52 flex flex-col justify-between border border-gray-100"
          >
            <div>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Premium audio</span>
              <h3 className="text-gray-900 text-2xl font-extrabold mt-2 leading-tight">
                Hear every<br />detail.
              </h3>
              <p className="text-gray-400 text-sm mt-2">Sony, Apple, Samsung &amp; more</p>
            </div>
            <span className="btn-primary mt-4 self-start">
              Shop headphones <ArrowRight className="w-4 h-4" />
            </span>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
              alt=""
              className="absolute right-0 bottom-0 w-40 h-40 object-cover rounded-tl-2xl opacity-30"
            />
          </Link>
        </div>
      </section>

      {/* ── New arrivals ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">New arrivals</h2>
            <p className="text-sm text-gray-400 mt-1">Just landed in our store</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sale ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <span className="inline-block bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wide mb-2">
            Sale
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">On sale now</h2>
          <p className="text-sm text-gray-400 mt-1">Limited time deals</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sale.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Official reseller of top brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["Apple", "Samsung", "Spigen", "Anker", "Sony", "Belkin", "Mujjo", "Otterbox"].map((brand) => (
              <span
                key={brand}
                className="text-lg font-extrabold text-gray-200 hover:text-gray-400 transition-colors cursor-pointer tracking-tight"
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
