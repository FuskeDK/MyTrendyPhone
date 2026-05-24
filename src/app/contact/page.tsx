import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Kontakt os</h1>
      <p className="text-gray-400 mb-12">Vi er klar til at hjælpe dig. Ræk ud til os via en af nedenstående kanaler.</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        {[
          { icon: Mail, title: "E-mail", value: "support@mytrendyphone.dk", sub: "Svar inden for 24 timer" },
          { icon: Phone, title: "Telefon", value: "+45 78 76 94 94", sub: "Man-fre 10-15" },
          { icon: Clock, title: "Åbningstider", value: "Chat: alle dage 8-22", sub: "Telefon: man-fre 10-15" },
          { icon: MapPin, title: "Adresse", value: "Karlebovej 59, 3400 Hillerød", sub: "Mtp.dk ApS - CVR 37860220" },
        ].map(({ icon: Icon, title, value, sub }) => (
          <div key={title} className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{title}</p>
            <p className="text-sm font-semibold text-gray-900 mb-0.5">{value}</p>
            <p className="text-xs text-gray-400">{sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Send os en besked</h2>
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Navn</label>
              <input
                type="text"
                placeholder="Dit navn"
                className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">E-mail</label>
              <input
                type="email"
                placeholder="din@email.dk"
                className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Emne</label>
            <input
              type="text"
              placeholder="Hvad drejer det sig om?"
              className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Besked</label>
            <textarea
              rows={5}
              placeholder="Skriv din besked her..."
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            Send besked
          </button>
        </form>
      </div>
    </div>
  );
}
