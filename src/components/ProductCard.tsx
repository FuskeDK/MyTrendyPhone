"use client";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, discountPercent } from "@/lib/utils";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          {product.badge === "sale" && product.originalPrice && (
            <span className="inline-block bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              -{discountPercent(product.originalPrice, product.price)}%
            </span>
          )}
          {product.badge === "new" && (
            <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              New
            </span>
          )}
          {product.badge === "popular" && (
            <span className="inline-block bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Popular
            </span>
          )}
        </div>
      )}

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Add to cart quick button */}
      <button
        onClick={() => addItem(product)}
        className="absolute bottom-[88px] right-3 w-9 h-9 bg-white border-[1.5px] border-gray-200 rounded-lg flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white text-gray-600"
        aria-label="Add to cart"
      >
        <ShoppingCart className="w-4 h-4" />
      </button>

      {/* Info */}
      <Link href={`/product/${product.slug}`} className="block px-4 pb-4 pt-3">
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= Math.round(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-200 fill-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
