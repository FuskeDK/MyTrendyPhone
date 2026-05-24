import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTrendyPhone - Mobilcovers, opladere og tilbehor",
  description:
    "Danmarks storste udvalg af mobilcovers, skærmskånere, opladere og tilbehor. Gratis fragt over 499 kr. Nem 30-dages returret.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-gray-900 antialiased`}>
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
