import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { fetchDbProducts, dbToProduct } from "@/lib/dbProducts";

export const revalidate = 60;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const staticProducts = getProductsByCategory(category.id);

  const dbRaw = await fetchDbProducts();
  const dbProducts = dbRaw
    .filter((p) => p.in_stock !== false && p.category_slug === slug)
    .map(dbToProduct);

  const allProducts = [...dbProducts, ...staticProducts];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{category.name}</h1>
          <p className="text-gray-300 max-w-lg">{category.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-400">
            {allProducts.length > 0
              ? `${allProducts.length} produkter`
              : "Ingen produkter i denne kategori endnu"}
          </p>
        </div>

        {allProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-400 mb-4">Ingen produkter fundet i denne kategori.</p>
            <Link href="/" className="btn-primary">
              Tilbage til forsiden
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* Other categories */}
      <section className="border-t border-gray-100 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-gray-500 mb-4">Andre kategorier</p>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.id !== category.id)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.slug}`}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
