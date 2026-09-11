import React from 'react'

export const metadata = {
  title: 'Azad Kashmir Travel Guide | Royal Route Travel & Tours',
  description: 'Plan your trip to Azad Kashmir with Royal Route Travel & Tours. Complete travel guide for Neelum Valley, Arang Kel, Ratti Gali Lake, and Taobatt.',
}

export default function KashmirGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="mb-8 border-b pb-8">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Complete Azad Kashmir Travel Guide: Paradise on Earth
        </h1>
        <p className="text-gray-500 text-sm">Published on September 11, 2026 • Royal Route Travel & Tours</p>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-md">
        <img
          src="/guides/kashmir/Neelam Valley.jpg"
          alt="Neelum Valley Kashmir"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed font-medium text-gray-800">
          Welcome to the ultimate <strong>Azad Kashmir Travel Guide</strong> presented by <strong>Royal Route Travel & Tours</strong>. Nestled in the Himalayan foothills, Azad Kashmir is widely celebrated as "Heaven on Earth." Known for its emerald-green river valleys, snow-capped alpine peaks, dense pine forests, and high-altitude glacial lakes, Kashmir offers an unforgettable journey for nature lovers, honeymooners, and adventure seekers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-600 pl-3">
          Why Visit Azad Kashmir?
        </h2>
        <p>
          Azad Kashmir—specifically the world-famous <strong>Neelum Valley</strong>—is one of Pakistan's most scenic regions. The valley stretches over 200 kilometers along the roaring Neelum River, offering picturesque wooden villages, dramatic mountain passes, and hospitable local culture.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Mesmerizing Lakes & Waterfalls:</strong> Visit high-altitude wonders like Ratti Gali Lake and gushing cascades like Dhani Waterfall.</li>
          <li><strong>Serene Hill Stations:</strong> Unwind at elevated, vehicle-free meadows like Arang Kel.</li>
          <li><strong>Rich Culture & Local Hospitality:</strong> Experience traditional Kashmiri wooden architecture and authentic local cuisine.</li>
          <li><strong>Flexible Tour Packages:</strong> Tailored itineraries for families, groups, and couples.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-l-4 border-blue-600 pl-3">
          Must-Visit Attractions in Azad Kashmir
        </h2>

        {/* Spot 1: Neelum River */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <img
            src="/guides/kashmir/Neelam-River.jpg"
            alt="Neelum River"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Neelum River & Valley</h3>
          <p className="text-sm text-gray-600">
            The heart of tourism in Azad Kashmir. Running parallel to the main highway, the crystal-clear turquoise river winds through dense pine forests and rustic wooden settlements.
          </p>
        </div>

        {/* Spot 2: Waterfalls */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <img
              src="/guides/kashmir/dhani waterfall.jpg"
              alt="Dhani Waterfall"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-gray-900">Dhani Waterfall</h3>
            <p className="text-xs text-gray-600 mt-1">A roaring natural cascade right along the main Neelum Valley road.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <img
              src="/guides/kashmir/Kundalshahi Waterfall.jpg"
              alt="Kundalshahi Waterfall"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-gray-900">Kundal Shahi Waterfall</h3>
            <p className="text-xs text-gray-600 mt-1">Cold mountain spring water merging directly into the Neelum River.</p>
          </div>
        </div>

        {/* Spot 3: Arang Kel */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <img
            src="/guides/kashmir/Arangkel.jpg"
            alt="Arang Kel"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">2. Arang Kel – The Pearl of Neelum Valley</h3>
          <p className="text-sm text-gray-600">
            Perched high on a hill, Arang Kel is a lush green meadow reached via a cable car ride followed by a gentle trek. It offers scenic log cabins and panoramic peak views.
          </p>
        </div>

        {/* Spot 4: Ratti Gali Lake */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <img
              src="/guides/kashmir/ratti gali lake.jfif"
              alt="Ratti Gali Lake Summer"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-gray-900">Ratti Gali Lake (Summer)</h3>
            <p className="text-xs text-gray-600 mt-1">Alpine glacial lake surrounded by lush green slopes and blooming alpine flowers.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <img
              src="/guides/kashmir/Ratti Gali in winter.jfif"
              alt="Ratti Gali Lake Winter"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-gray-900">Ratti Gali Lake (Winter)</h3>
            <p className="text-xs text-gray-600 mt-1">Transforms into a completely frozen snow-covered paradise for winter explorers.</p>
          </div>
        </div>

        {/* Spot 5: Taobatt */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <img
            src="/guides/kashmir/Taobatt.jpg"
            alt="Taobatt"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Taobatt – The Final Frontier</h3>
          <p className="text-sm text-gray-600">
            Located at the far end of Neelum Valley, Taobatt is a peaceful border village surrounded by thick forests, crystal streams, and traditional wooden homes.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-600 pl-3">
          Essential Travel Tips
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Identity Documents:</strong> Always carry original CNIC/Passports for security checkpoints.</li>
          <li><strong>Transportation:</strong> 4x4 Jeeps are mandatory for off-road tracks to Ratti Gali Lake and Taobatt.</li>
          <li><strong>Footwear:</strong> Keep sturdy shoes or boots for trekking up to Arang Kel or high lakes.</li>
        </ul>

        {/* CTA Box */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 mt-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Plan Your Kashmir Tour With Us</h3>
          <p className="text-blue-100 mb-6 text-sm">
            Enjoy luxury transport, top-rated hotels, and experienced mountain drivers with Royal Route Travel & Tours.
          </p>
          <a
            href="https://wa.me/923074326061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
