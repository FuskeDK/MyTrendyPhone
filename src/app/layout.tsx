import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const API = "https://www.marketyleadgen.com";
const TOKEN = "c37ff7247f6ffbaf7a2e9d3151e27f05cce6a95cd70fe1a7";

export const metadata: Metadata = {
  title: "MyTrendyPhone - Mobilcovers, opladere og tilbehor",
  description:
    "Danmarks storste udvalg af mobilcovers, skærmskånere, opladere og tilbehor. Nem 30-dages returret.",
};

async function isSitePaused(): Promise<boolean> {
  try {
    const res = await fetch(`${API}/api/dashboard-api?token=${TOKEN}&resource=status`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.paused === true;
  } catch {
    return false;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const paused = await isSitePaused();

  if (paused) {
    return (
      <html lang="da">
        <body style={{ margin: 0, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#fff" }}>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "6rem", fontWeight: 800, color: "#f3f4f6", lineHeight: 1, margin: "0 0 1.5rem" }}>404</p>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: "0 0 0.75rem" }}>
              Siden er ikke tilgaengelig
            </h1>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", maxWidth: "360px", lineHeight: 1.6, margin: 0 }}>
              Siden er midlertidigt utilgaengelig. Prov igen senere eller kontakt os direkte.
            </p>
          </div>
        </body>
      </html>
    );
  }

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
