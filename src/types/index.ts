export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
};

export type ProductVariant = {
  id: string;
  color?: string;
  colorHex?: string;
  label?: string;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  brand: string;
  compatibleWith?: string[];
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  variants?: ProductVariant[];
  badge?: "new" | "sale" | "popular";
  features?: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
  variantId?: string;
};
