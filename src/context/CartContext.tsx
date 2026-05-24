"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { CartItem, Product } from "@/types";

type CartContextType = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, variantId?: string) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const key = (productId: string, variantId?: string) =>
    variantId ? `${productId}::${variantId}` : productId;

  const addItem = useCallback((product: Product, variantId?: string) => {
    setItems((prev) => {
      const k = key(product.id, variantId);
      const existing = prev.find(
        (i) => key(i.product.id, i.variantId) === k
      );
      if (existing) {
        return prev.map((i) =>
          key(i.product.id, i.variantId) === k
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1, variantId }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, variantId?: string) => {
    const k = key(productId, variantId);
    setItems((prev) =>
      prev.filter((i) => key(i.product.id, i.variantId) !== k)
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number, variantId?: string) => {
      const k = key(productId, variantId);
      if (quantity <= 0) {
        setItems((prev) =>
          prev.filter((i) => key(i.product.id, i.variantId) !== k)
        );
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          key(i.product.id, i.variantId) === k ? { ...i, quantity } : i
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((acc, i) => acc + i.quantity, 0);
  const total = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
