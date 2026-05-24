import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MyTrendyPhone - Phone Cases, Chargers & Accessories",
  description:
    "Denmark's largest selection of phone cases, screen protectors, chargers, and accessories. Free shipping over 499 kr. Easy 30-day returns.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
