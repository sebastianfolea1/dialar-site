export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white bg-gray-900">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hotel Tolea
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Cazare 4★ în Târgoviște • Confort • Liniște • Servicii premium
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

      {/* INFO BAR */}
      <section className="grid md:grid-cols-4 text-center border-b">
        <div className="p-6">
          <p className="font-semibold">📍 Târgoviște</p>
          <p className="text-sm text-gray-500">Locație centrală</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">⭐ 4 stele</p>
          <p className="text-sm text-gray-500">Standard hotelier</p>
        </div>

        <div className="p-6">
          <p className="font-semibold">🕒 Recepție 24/7</p>
          <p className="text-sm text-gray-500">Non-stop</p>
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
          oferind servicii moderne de cazare, camere confortabile,
          restaurant și facilități pentru turiști și oameni de afaceri.
        </p>
      </section>

      {/* CAMERE */}
      <section id="camere" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Camere</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA CAMERA SINGLE
            </div>
            <h3 className="text-xl font-semibold">Single</h3>
            <p className="text-gray-600 mt-2">
              Ideală pentru șederi scurte și business.
            </p>
            <p className="mt-3 font-bold">~280 lei/noapte</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA CAMERA DOUBLE
            </div>
            <h3 className="text-xl font-semibold">Double</h3>
            <p className="text-gray-600 mt-2">
              Cameră spațioasă pentru 2 persoane.
            </p>
            <p className="mt-3 font-bold">~360 lei/noapte</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA APARTAMENT
            </div>
            <h3 className="text-xl font-semibold">Apartament</h3>
            <p className="text-gray-600 mt-2">
              Lux și spațiu pentru familii sau sejururi lungi.
            </p>
            <p className="mt-3 font-bold">~440 lei/noapte</p>
          </div>

        </div>
      </section>

      {/* FACILITĂȚI */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Facilități</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>✔ WiFi gratuit</p>
          <p>✔ Restaurant propriu</p>
          <p>✔ Mic dejun inclus</p>
          <p>✔ Parcare privată</p>
          <p>✔ Aer condiționat</p>
          <p>✔ Room service</p>
          <p>✔ Recepție 24/7</p>
          <p>✔ Camere izolate fonic</p>
          <p>✔ Curățenie zilnică</p>
          <p>✔ Lift</p>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Galerie</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA 1 HOTEL
          </div>

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA 2 HOTEL
          </div>

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA 3 HOTEL
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Locație</h2>

        <div className="h-80 bg-gray-300 flex items-center justify-center rounded-xl">
          GOOGLE MAPS AICI
        </div>

        <p className="mt-4 text-gray-600">
          Târgoviște, Str. Liniștei nr. 28–31
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Rezervări</h2>

        <p>Telefon: +40 245 222 225</p>
        <p>Email: contact@hoteltolea.ro</p>

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