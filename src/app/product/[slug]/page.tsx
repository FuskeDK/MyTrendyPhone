import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Shield, Truck, RotateCcw, Check } from "lucide-react";
import { products, getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice, discountPercent } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);
  const related = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">Forside</Link>
          <ChevronRight className="w-3 h-3" />
          {category && (
            <>
              <Link href={`/category/${category.slug}`} className="hover:text-gray-700 transition-colors">
                {category.name}
              </Link>
              <ChevronRight className="w-3 h-3" />
            </>
          )}
          <span className="text-gray-600 truncate max-w-48">{product.name}</span>
        </nav>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl bg-gray-50 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 cursor-pointer ${
                      i === 0 ? "border-blue-600" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {product.brand}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">
                ({product.reviewCount.toLocaleString()} anmeldelser)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-extrabold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded-lg">
                    -{discountPercent(product.originalPrice, product.price)}%
                  </span>
                </>
              )}
            </div>

            {/* Compatible with */}
            {product.compatibleWith && product.compatibleWith.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Kompatibel med
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.compatibleWith.map((device) => (
                    <span
                      key={device}
                      className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg font-medium"
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Color variants */}
            {product.variants && product.variants.some((v) => v.color) && (
              <div className="mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Farve
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      title={v.color}
                      className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-offset-1 ring-transparent hover:ring-blue-400 transition-all first:ring-blue-600"
                      style={{ backgroundColor: v.colorHex ?? "#ccc" }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size/label variants */}
            {product.variants && product.variants.some((v) => v.label && !v.color) && (
              <div className="mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Pakkestrrelse
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.id}
                      className={i === 0 ? "btn-primary" : "btn-secondary"}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <AddToCartButton product={product} />

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
              {[
                { icon: Truck, label: "Gratis fragt", sub: "Over 499 kr" },
                { icon: RotateCcw, label: "30 dages retur", sub: "Nem returret" },
                { icon: Shield, label: "2 ars garanti", sub: "Garanteret" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <Icon className="w-4.5 h-4.5 text-blue-600" />
                  <p className="text-xs font-semibold text-gray-700">{label}</p>
                  <p className="text-[11px] text-gray-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & features */}
        <div className="grid md:grid-cols-2 gap-10 mt-14 pt-14 border-t border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Om dette produkt</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          {product.features && product.features.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Specifikationer</h2>
              <ul className="space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-gray-50 mt-14 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Du vil mske ogs synes om</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
