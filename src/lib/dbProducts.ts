import type { Product } from "@/types";

export type DbProduct = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image: string | null;
  category_slug: string | null;
  in_stock: boolean;
};

const API = process.env.MARKETY_API_URL ?? "https://www.marketyleadgen.com";
const TOKEN =
  process.env.MARKETY_CLIENT_TOKEN ??
  "c37ff7247f6ffbaf7a2e9d3151e27f05cce6a95cd70fe1a7";

export async function fetchDbProducts(): Promise<DbProduct[]> {
  try {
    const res = await fetch(
      `${API}/api/dashboard-api?token=${TOKEN}&resource=products`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.products ?? []) as DbProduct[];
  } catch {
    return [];
  }
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1583291023438-41cef6453b1f?w=800&q=80";

export function dbToProduct(p: DbProduct): Product {
  return {
    id: `db-${p.id}`,
    name: p.name,
    slug: `db-${p.id}`,
    categoryId: p.category_slug ?? "",
    brand: "",
    description: p.description ?? "",
    price: Number(p.price) || 0,
    rating: 0,
    reviewCount: 0,
    images: p.image ? [p.image] : [FALLBACK_IMAGE],
    variants: [],
    features: [],
  };
}
