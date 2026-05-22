export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-white text-center bg-[url('/hotel-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hotel Tolea
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Cazare modernă în Târgoviște • Confort 4★ • Servicii premium
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="#camere" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
              Vezi camere
            </a>
            <a href="#contact" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
              Rezervă acum
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="grid md:grid-cols-4 text-center border-b">
        <div className="p-6">
          <p className="font-semibold">📍 Târgoviște</p>
          <p className="text-sm text-gray-500">Locație centrală</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">⭐ 4 stele</p>
          <p className="text-sm text-gray-500">Standard ridicat</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">🕒 24/7</p>
          <p className="text-sm text-gray-500">Recepție nonstop</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">🚗 Parcare</p>
          <p className="text-sm text-gray-500">Privată</p>
        </div>
      </section>

      {/* DESPRE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Despre Hotel Tolea</h2>

        <p className="text-gray-600 leading-relaxed">
          Hotel Tolea este un hotel de 4 stele situat în Târgoviște,
          oferind servicii moderne de cazare, restaurant propriu,
          camere elegante și facilități pentru turiști și oameni de afaceri.
          Atmosfera este una liniștită, cu accent pe confort și calitate.
        </p>
      </section>

      {/* CAMERE */}
      <section id="camere" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Camere</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Single Room</h3>
            <p className="text-gray-600 mt-2">
              Ideală pentru călătorii business sau șederi scurte.
            </p>
            <p className="mt-4 font-bold">de la ~280 lei/noapte</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Double Room</h3>
            <p className="text-gray-600 mt-2">
              Cameră spațioasă, confortabilă pentru 2 persoane.
            </p>
            <p className="mt-4 font-bold">de la ~360 lei/noapte</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Apartament</h3>
            <p className="text-gray-600 mt-2">
              Spațiu premium pentru familii sau șederi lungi.
            </p>
            <p className="mt-4 font-bold">de la ~440 lei/noapte</p>
          </div>

        </div>
      </section>

      {/* FACILITĂȚI */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Facilități</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>✔ WiFi gratuit în tot hotelul</p>
          <p>✔ Restaurant propriu</p>
          <p>✔ Mic dejun inclus</p>
          <p>✔ Parcare privată</p>
          <p>✔ Aer condiționat</p>
          <p>✔ Room service</p>
          <p>✔ Recepție 24/7</p>
          <p>✔ Camere izolate fonic</p>
          <p>✔ Lift</p>
          <p>✔ Curățenie zilnică</p>
        </div>
      </section>

      {/* GALERIE (placeholder pentru poze reale) */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Galerie</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="h-60 bg-gray-300 rounded-xl"></div>
          <div className="h-60 bg-gray-300 rounded-xl"></div>
          <div className="h-60 bg-gray-300 rounded-xl"></div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Adaugă aici poze reale din hotel (camere, lobby, restaurant)
        </p>
      </section>

      {/* MAP */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Locație</h2>

        <p className="text-gray-600 mb-4">
          Str. Liniștei nr. 28–31, Târgoviște, Dâmbovița
        </p>

        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.google.com/maps?q=Hotel%20Tolea%20Targoviste&output=embed"
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Rezervări</h2>

        <p className="text-gray-300">Tel: +40 245 222 225</p>
        <p className="text-gray-300">Email: contact@hoteltolea.ro</p>

        <a
          href="tel:+40245222225"
          className="inline-block mt-6 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold"
        >
          Sună acum
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Tolea
      </footer>

    </main>
  );
}