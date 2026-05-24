"use client";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, count, total, isOpen, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gray-600" />
            <h2 className="text-base font-extrabold text-gray-900">
              Kurv {count > 0 && <span className="text-gray-400 font-normal">({count})</span>}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="btn-secondary !px-2 !py-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-gray-400" />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 mb-1">Din kurv er tom</p>
              <p className="text-sm text-gray-400">Tilføj produkter for at komme i gang</p>
            </div>
            <button onClick={closeCart} className="btn-primary mt-2">
              Fortsæt med at handle
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => {
                const variant = item.variantId
                  ? item.product.variants?.find((v) => v.id === item.variantId)
                  : null;
                return (
                  <div key={`${item.product.id}-${item.variantId ?? ""}`} className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                        {item.product.name}
                      </p>
                      {variant && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {variant.color ?? variant.label}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white transition-colors text-gray-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white transition-colors text-gray-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-extrabold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.product.id, item.variantId)}
                            className="text-gray-300 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-6 py-5 space-y-3">
              {total >= 499 ? (
                <p className="text-xs text-green-600 font-bold text-center">
                  Du har kvalificeret dig til gratis fragt!
                </p>
              ) : (
                <p className="text-xs text-gray-400 text-center">
                  Tilføj {formatPrice(499 - total)} mere for gratis fragt
                </p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-base font-extrabold text-gray-900">{formatPrice(total)}</p>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary btn-primary-full"
              >
                Ga til kassen
              </Link>
              <button
                onClick={closeCart}
                className="btn-secondary btn-secondary-full"
              >
                Fortsæt med at handle
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
