"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<"info" | "shipping" | "payment" | "done">("info");
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", address: "",
    city: "", zip: "", country: "DK", phone: "",
    cardNumber: "", cardExpiry: "", cardCvc: "",
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const shipping = total >= 499 ? 0 : 49;
  const orderTotal = total + shipping;

  if (step === "done") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Order confirmed!</h1>
          <p className="text-gray-500 text-sm mb-6">
            Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
          </p>
          <Link href="/" className="btn-primary">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link href="/" className="btn-primary">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Steps breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-8">
        <Link href="/" className="text-gray-400 hover:text-gray-600">Cart</Link>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <span className={step === "info" ? "text-[#2563eb] font-bold" : "text-gray-400"}>Information</span>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <span className={step === "shipping" ? "text-[#2563eb] font-bold" : "text-gray-400"}>Shipping</span>
        <ChevronRight className="w-3 h-3 text-gray-300" />
        <span className={step === "payment" ? "text-[#2563eb] font-bold" : "text-gray-400"}>Payment</span>
      </nav>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10">
        {/* Form */}
        <div>
          {step === "info" && (
            <div className="space-y-5">
              <h2 className="text-lg font-extrabold text-gray-900">Contact information</h2>
              <Field label="Email" value={form.email} onChange={(v) => set("email", v)} type="email" placeholder="you@example.com" />
              <Field label="Phone" value={form.phone} onChange={(v) => set("phone", v)} type="tel" placeholder="+45 00 00 00 00" />
              <h2 className="text-lg font-extrabold text-gray-900 pt-2">Shipping address</h2>
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" value={form.firstName} onChange={(v) => set("firstName", v)} placeholder="Lars" />
                <Field label="Last name" value={form.lastName} onChange={(v) => set("lastName", v)} placeholder="Jensen" />
              </div>
              <Field label="Address" value={form.address} onChange={(v) => set("address", v)} placeholder="Vesterbrogade 1" />
              <div className="grid grid-cols-3 gap-4">
                <Field label="ZIP" value={form.zip} onChange={(v) => set("zip", v)} placeholder="1620" />
                <div className="col-span-2">
                  <Field label="City" value={form.city} onChange={(v) => set("city", v)} placeholder="Copenhagen" />
                </div>
              </div>
              <button
                onClick={() => setStep("shipping")}
                disabled={!form.email || !form.firstName || !form.lastName || !form.address || !form.city || !form.zip}
                className="btn-primary btn-primary-full py-3.5"
              >
                Continue to shipping
              </button>
            </div>
          )}

          {step === "shipping" && (
            <div className="space-y-5">
              <h2 className="text-lg font-extrabold text-gray-900">Shipping method</h2>
              <div className="space-y-3">
                {[
                  { id: "std", label: "Standard Delivery", sub: "3-5 business days", price: shipping === 0 ? "Free" : formatPrice(49) },
                  { id: "exp", label: "Express Delivery", sub: "1-2 business days", price: formatPrice(99) },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className="flex items-center gap-4 p-4 border-[1.5px] border-gray-200 rounded-lg cursor-pointer hover:border-[#2563eb] transition-colors has-[:checked]:border-[#2563eb] has-[:checked]:bg-blue-50"
                  >
                    <input type="radio" name="shipping" defaultChecked={opt.id === "std"} className="accent-[#2563eb]" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{opt.label}</p>
                      <p className="text-xs text-gray-400">{opt.sub}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{opt.price}</p>
                  </label>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep("info")} className="btn-secondary flex-1 justify-center">Back</button>
                <button onClick={() => setStep("payment")} className="btn-primary flex-1 justify-center py-3">Continue to payment</button>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-gray-900">Payment</h2>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400">All transactions are encrypted and secure.</p>
              <Field label="Card number" value={form.cardNumber} onChange={(v) => set("cardNumber", v)} placeholder="0000 0000 0000 0000" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Expiry date" value={form.cardExpiry} onChange={(v) => set("cardExpiry", v)} placeholder="MM / YY" />
                <Field label="CVC" value={form.cardCvc} onChange={(v) => set("cardCvc", v)} placeholder="000" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setStep("shipping")} className="btn-secondary flex-1 justify-center">Back</button>
                <button
                  onClick={() => { clearCart(); setStep("done"); }}
                  disabled={!form.cardNumber || !form.cardExpiry || !form.cardCvc}
                  className="btn-primary flex-1 justify-center py-3"
                >
                  <Lock className="w-4 h-4" /> Pay {formatPrice(orderTotal)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div>
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-gray-100">
            <h3 className="text-sm font-extrabold text-gray-900 mb-4">Order summary</h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.variantId ?? ""}`} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg bg-white border border-gray-100 overflow-hidden shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 line-clamp-2">{item.product.name}</p>
                  </div>
                  <p className="text-xs font-extrabold text-gray-900 shrink-0">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 px-4 rounded-lg border-[1.5px] border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#2563eb] transition-colors"
      />
    </div>
  );
}
