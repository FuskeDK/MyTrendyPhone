import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src="/logo.png" alt="MyTrendyPhone" className="h-8 w-auto mb-1 invert opacity-90" />
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Denmark&rsquo;s largest selection of phone accessories. Premium brands, fast delivery, easy returns.
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Products</p>
          <ul className="space-y-2.5">
            {["Phone Cases", "Screen Protectors", "Chargers & Cables", "Wireless Charging", "Headphones", "Power Banks"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
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
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Support</p>
          <ul className="space-y-2.5">
            {["Shipping Info", "Returns & Exchanges", "Track Your Order", "FAQ", "Contact Us", "Privacy Policy"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MyTrendyPhone. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5 opacity-60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
}
