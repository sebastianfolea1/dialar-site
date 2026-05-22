export default function DialarBookstoreSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop"
          alt="Librarie"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Librăriile Dialar
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Cărți, rechizite și inspirație chiar în centrul Târgoviștei.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Contact
            </a>
            <a
              href="#despre"
              className="border border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              Despre noi
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="despre" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Un spațiu pentru oameni care iubesc cărțile</h2>
          <p className="text-lg text-gray-700 leading-8 mb-4">
            Librăriile Dialar oferă o selecție variată de cărți, rechizite și produse educaționale pentru elevi, studenți și pasionați de lectură.
          </p>
          <p className="text-lg text-gray-700 leading-8">
            Situată în Târgoviște, librăria pune accent pe atmosferă prietenoasă, recomandări utile și produse atent selectate.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1400&auto=format&fit=crop"
            alt="Carti"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Ce găsești la noi</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cărți',
                text: 'Literatură, dezvoltare personală, manuale și titluri pentru toate vârstele.'
              },
              {
                title: 'Rechizite',
                text: 'Produse pentru școală, birou și activități creative.'
              },
              {
                title: 'Recomandări',
                text: 'Ajutor și sugestii personalizate pentru alegerea cărților potrivite.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Atmosfera librăriei</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop'
          ].map((src, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-xl h-80">
              <img
                src={src}
                alt="Librarie"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>

          <div className="space-y-4 text-lg text-gray-300">
            <p>📍 Târgoviște, România</p>
            <p>📞 07xx xxx xxx</p>
            <p>✉️ contact@dialar.ro</p>
            <p>🕒 Luni - Sâmbătă | 09:00 - 20:00</p>
          </div>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="https://maps.google.com"
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Vezi locația
            </a>

            <a
              href="mailto:contact@dialar.ro"
              className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              Trimite email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
