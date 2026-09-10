import Link from 'next/link'

export default function NaranGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Destination Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Ultimate Naran Kaghan Travel Guide: Best Places & Tips
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Complete Sightseeing & Route Plan
        </p>
      </div>

      {/* Main Cover Image */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="/guides/siri-paye.jpg"
          alt="Siri Paye Meadows Naran"
          className="w-full h-[350px] md:h-[480px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          Naran Kaghan Valley is one of the most breathtaking destinations in Northern Pakistan. Surrounded by dense pine forests, crystal-clear rivers, and alpine lakes, it offers an unforgettable getaway for families and adventure lovers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
          Top Attractions to Visit
        </h2>
        
        {/* Spot 1: Siri Paye */}
        <div className="my-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Siri Paye Meadows & Shogran</h3>
          <p className="text-gray-700 mb-4">
            Located near Shogran, Siri Paye is a high-altitude meadow famous for its lush green pastures, wild flowers, and views of Makra Peak.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/guides/siri-paye.jpg"
              alt="Siri Paye Meadows"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Spot 2: Saif ul Muluk */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">2. Lake Saif-ul-Muluk</h3>
          <p className="text-gray-700">
            Famous for its emerald-green waters and stunning views of Malika Parbat. Accessible via 4x4 jeep from Naran Bazaar.
          </p>
        </div>

        {/* Spot 3: Babusar Top */}
        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Babusar Top & Lulusar Lake</h3>
          <p className="text-gray-700">
            Situated at 13,690 feet, Babusar Pass offers magnificent panoramic views of the surrounding mountain ranges.
          </p>
        </div>

        {/* Booking Call-to-Action Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl my-10 shadow-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Plan Your Naran Tour with Royal Route</h3>
          <p className="text-blue-100 mb-6">
            Book our exclusive family & group tour packages with luxury transport, hotel stay, and expert tour management.
          </p>
          <a
            href="https://wa.me/923074326061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition shadow-md"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
