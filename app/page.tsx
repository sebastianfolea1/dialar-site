export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-white text-center bg-gray-900">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold">Hotel Tolea</h1>
          <p className="mt-4 text-lg text-gray-200">
            Cazare modernă în Târgoviște
          </p>
        </div>
      </section>

      {/* CAMERE */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Camere</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA TA AICI
            </div>
            <h3 className="text-xl font-semibold">Single</h3>
            <p>Camere confortabile pentru șederi scurte.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA TA AICI
            </div>
            <h3 className="text-xl font-semibold">Double</h3>
            <p>Ideală pentru 2 persoane, spațioasă.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
              POZA TA AICI
            </div>
            <h3 className="text-xl font-semibold">Apartament</h3>
            <p>Lux și spațiu pentru familii.</p>
          </div>

        </div>
      </section>

      {/* GALERIE */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Galerie</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA TA AICI
          </div>

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA TA AICI
          </div>

          <div className="h-60 bg-gray-300 flex items-center justify-center rounded-xl">
            POZA TA AICI
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Locație</h2>

        <div className="h-80 bg-gray-300 flex items-center justify-center rounded-xl">
          HARTA AICI (Google Maps embed)
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Telefon: +40 xxx xxx xxx</p>
        <p>Email: contact@hoteltolea.ro</p>
      </section>

    </main>
  );
}