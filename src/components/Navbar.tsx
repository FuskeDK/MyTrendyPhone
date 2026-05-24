"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/categories";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const results = searchQuery.length > 1 ? searchProducts(searchQuery).slice(0, 5) : [];

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gray-900 text-white text-xs text-center py-2 px-4 font-medium tracking-wide">
        Gratis fragt ved køb over 499 kr · Nem 30-dages returret
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-4 shrink-0">
            <img src="/logo.png" alt="MyTrendyPhone" className="h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-6">
                Kategorier <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl shadow-xl p-4 w-64 grid grid-cols-1 gap-0.5 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors group"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-500">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/category/phone-cases"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Mobilcovers
            </Link>
            <Link
              href="/category/chargers-cables"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Opladere
            </Link>
            <Link
              href="/category/headphones-earbuds"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Hovedtelefoner
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => {
                  setSearchOpen((s) => !s);
                  setSearchQuery("");
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <Search className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Søg produkter..."
                      className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {results.length > 0 && (
                    <ul className="py-2 max-h-80 overflow-y-auto">
                      {results.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/product/${p.slug}`}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                              <img
                                src={p.images[0]}
                                alt={p.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {p.name}
                              </p>
                              <p className="text-xs text-gray-400">{p.brand}</p>
                            </div>
                            <p className="text-sm font-semibold text-gray-900 shrink-0">
                              {formatPrice(p.price)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {searchQuery.length > 1 && results.length === 0 && (
                    <p className="px-4 py-5 text-sm text-gray-400 text-center">
                      Ingen resultater for &ldquo;{searchQuery}&rdquo;
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {cat.name}
                <span className="text-xs text-gray-400">{cat.count}</span>
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
