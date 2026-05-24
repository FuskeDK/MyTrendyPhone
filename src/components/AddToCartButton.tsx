"use client";
import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      onClick={handleAdd}
      className={`btn-primary btn-primary-full py-3.5 text-[15px] justify-center ${
        added ? "!bg-green-600 !border-green-600" : ""
      }`}
    >
      {added ? (
        <><Check className="w-4 h-4" /> Tilfojet i kurven</>
      ) : (
        <><ShoppingCart className="w-4 h-4" /> Tilfo til kurven</>
      )}
    </button>
  );
}
