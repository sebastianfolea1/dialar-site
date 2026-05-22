export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-white text-center bg-[url('/hotel.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hotel Tolea
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Confort premium în Târgoviște • Liniște • Eleganță • Relaxare
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a
              href="#camere"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
            >
              Vezi camerele
            </a>

            <a
              href="#contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
            >
              Rezervă acum
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="grid md:grid-cols-3 text-center border-b">
        <div className="p-6">
          <p className="font-semibold">📍 Locație centrală</p>
          <p className="text-sm text-gray-500">Târgoviște</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">⭐ Hotel 4 stele</p>
          <p className="text-sm text-gray-500">Confort garantat</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">🕒 Recepție 24/7</p>
          <p className="text-sm text-gray-500">Non-stop suport</p>
        </div>
      </section>

      {/* DESPRE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Despre noi</h2>
        <p className="text-gray-600 leading-relaxed">
          Hotel Tolea oferă servicii de cazare moderne în Târgoviște,
          combinând confortul camerelor elegante cu servicii profesionale.
          Este alegerea ideală atât pentru turiști, cât și pentru călătorii de afaceri.
        </p>
      </section>

      {/* CAMERE */}
      <section id="camere" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Camere</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            { title: "Single", price: "~280 lei", desc: "Perfectă pentru business și șederi scurte." },
            { title: "Double", price: "~360 lei", desc: "Spațioasă, confortabilă, ideală pentru 2 persoane." },
            { title: "Apartament", price: "~440 lei", desc: "Lux și spațiu pentru șederi premium." }
          ].map((room, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-gray-600 mt-2">{room.desc}</p>
              <p className="mt-4 font-bold text-lg">{room.price}/noapte</p>
            </div>
          ))}

        </div>
      </section>

      {/* FACILITĂȚI */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Facilități</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>✔ WiFi gratuit</p>
          <p>✔ Parcare privată</p>
          <p>✔ Restaurant</p>
          <p>✔ Mic dejun inclus</p>
          <p>✔ Aer condiționat</p>
          <p>✔ Room service</p>
          <p>✔ Recepție 24/7</p>
          <p>✔ Camere izolate fonic</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Rezervări</h2>

        <p className="text-gray-300 mb-2">Hotel Tolea – Târgoviște</p>
        <p className="text-gray-300 mb-2">Tel: +40 245 222 225</p>
        <p className="text-gray-300 mb-6">Email: contact@hoteltolea.ro</p>

        <a
          href="tel:+40245222225"
          className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold"
        >
          Sună acum
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Tolea. Toate drepturile rezervate.
      </footer>

    </main>
  );
}