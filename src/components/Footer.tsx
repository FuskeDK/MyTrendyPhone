import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

const productLinks = [
  { label: "Mobilcovers", href: "/category/phone-cases" },
  { label: "Skærmskånere", href: "/category/screen-protectors" },
  { label: "Opladere og kabler", href: "/category/chargers-cables" },
  { label: "Trådløs opladning", href: "/category/wireless-charging" },
  { label: "Hovedtelefoner", href: "/category/headphones-earbuds" },
  { label: "Powerbanks", href: "/category/power-banks" },
];

const supportLinks = [
  { label: "Kontakt os", href: "/contact" },
  { label: "Handelsbetingelser", href: "/handelsbetingelser" },
  { label: "Privatlivspolitik", href: "/privatlivspolitik" },
  { label: "Leveringsinformation", href: "/handelsbetingelser" },
  { label: "Retur og ombytning", href: "/handelsbetingelser" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img
            src="/logo.png"
            alt="MyTrendyPhone"
            className="h-12 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Danmarks største udvalg af mobiltilbehør. Premium brands, hurtig levering, nem returret.
          </p>
          <div className="flex gap-3">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Produkter</p>
          <ul className="space-y-2.5">
            {productLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Brands</p>
          <ul className="space-y-2.5">
            {["Apple", "Samsung", "Spigen", "Anker", "Sony", "Belkin", "Mujjo", "Otterbox"].map((item) => (
              <li key={item}>
                <span className="text-sm text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Support</p>
          <ul className="space-y-2.5">
            {supportLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MyTrendyPhone. Alle rettigheder forbeholdes.
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: "VISA", bg: "#1A1F71", color: "#fff" },
              { label: "MC", bg: "#252525", color: "#fff" },
              { label: "PayPal", bg: "#003087", color: "#fff" },
            ].map(({ label, bg, color }) => (
              <span
                key={label}
                className="px-2.5 py-1 text-[11px] font-extrabold rounded tracking-wide"
                style={{ background: bg, color }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
