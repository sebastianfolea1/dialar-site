export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[80vh] flex items-center justify-center bg-gray-900 text-white text-center p-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hotel Tolea
          </h1>
          <p className="text-xl opacity-80">
            Cazare 4★ în Târgoviște – confort, liniște și eleganță
          </p>

          <a
            href="#rezervari"
            className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
          >
            Rezervă acum
          </a>
        </div>
      </section>

      {/* DESPRE */}
      <section className="max-w-5xl mx-auto p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Despre hotel</h2>

        <p className="text-gray-700 leading-relaxed">
          Hotel Tolea este un hotel de 4 stele situat în Târgoviște,
          pe Strada Liniștei nr. 28–31, oferind camere moderne,
          restaurant, parcare și servicii complete pentru turiști și business.
        </p>
      </section>

      {/* CAMERE */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Camere</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Single</h3>
            <p className="text-gray-600 mt-2">
              Cameră confortabilă pentru șederi scurte de business.
            </p>
            <p className="mt-2 font-bold">~280 lei/noapte</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Double</h3>
            <p className="text-gray-600 mt-2">
              Cameră spațioasă cu pat king size și balcon.
            </p>
            <p className="mt-2 font-bold">~360 lei/noapte</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Apartament</h3>
            <p className="text-gray-600 mt-2">
              Suită mare, ideală pentru familii sau sejururi lungi.
            </p>
            <p className="mt-2 font-bold">~440 lei/noapte</p>
          </div>

        </div>
      </section>

      {/* FACILITĂȚI */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Facilități</h2>

        <div className="grid md:grid-cols-2 gap-3 text-gray-700">
          <p>✔ Restaurant & mic dejun</p>
          <p>✔ WiFi gratuit</p>
          <p>✔ Parcare privată</p>
          <p>✔ Room service</p>
          <p>✔ Aer condiționat</p>
          <p>✔ Recepție 24/7</p>
          <p>✔ Camere izolate fonic</p>
          <p>✔ Lift</p>
        </div>
      </section>

      {/* LOCATIE */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Locație</h2>

        <p className="mb-4 text-gray-700">
          Str. Liniștei nr. 28–31, Târgoviște, Dâmbovița
        </p>

        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.google.com/maps?q=Hotel%20Tolea%20Targoviste&output=embed"
        />
      </section>

      {/* CONTACT */}
      <section id="rezervari" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact & Rezervări</h2>

        <p>Telefon: +40 245 222 225</p>
        <p>Email: contact@hoteltolea.ro</p>

        <a
          href="tel:+40245222225"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full"
        >
          Sună acum
        </a>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-gray-500 text-sm">
        © Hotel Tolea – Târgoviște
      </footer>

    </main>
  );
}