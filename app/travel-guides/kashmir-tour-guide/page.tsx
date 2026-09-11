import Link from 'next/link'

export default function KashmirGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Complete Travel Guide & Itinerary
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Azad Kashmir Travel Guide: Neelum Valley, Arang Kel & 3-Day Itinerary
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Complete Sightseeing Guide
        </p>
      </div>

      {/* Main Cover Banner - Neelum Valley */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="/guides/kashmir/Neelam Valley.jpg"
          alt="Azad Kashmir Neelum Valley Tourism"
          className="w-full h-[350px] md:h-[480px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Azad Kashmir, globally renowned as "Heaven on Earth," is Pakistan's premier mountain paradise. Stretching along the enchanting Himalayan foothills, this region is celebrated for its lush pine-forested mountains, cascading waterfalls, crystal-clear glacial streams, and legendary Kashmiri hospitality.
        </p>

        <p>
          Whether you are planning a romantic honeymoon getaway, a refreshing family vacation, or an adventurous off-road trek, having a well-structured travel guide ensures a seamless experience. Below is the ultimate comprehensive Kashmir travel guide curated by <strong>Royal Route Travel & Tours</strong>.
        </p>

        <hr className="my-8 border-gray-200" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Top Places & Key Attractions in Azad Kashmir
        </h2>

        {/* Spot 1: Neelum River & Valley */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Neelum River & Valley</h2>
          <p className="text-gray-700 mb-4">
            The <strong>Neelum Valley</strong> is the heart and crown jewel of tourism in Azad Kashmir. Running parallel to the main highway for over 200 kilometers, the turquoise Neelum River flows gracefully through dense pine forests, dramatic cliffs, and picturesque wooden villages like Keran, Kutton, and Sharda.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/kashmir/Neelam-River.jpg"
              alt="Neelum River Kashmir"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Tip: Enjoy riverside tea breaks at Keran or visit the historical Sharda Peeth university ruins for a blend of natural beauty and history.
          </p>
        </div>

        {/* Spot 2: Dhani Waterfall */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Dhani Waterfall (Noseri)</h2>
          <p className="text-gray-700 mb-4">
            Located just 38 kilometers from Muzaffarabad along the Neelum Valley highway, <strong>Dhani Waterfall</strong> (also known as Dhani Noseri Waterfall) is the highest and most roaring natural cascade in the region. Falling from a massive mountain cliff into a crystal basin, it creates a refreshing mist that cools travelers stopping by.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/kashmir/dhani waterfall.jpg"
              alt="Dhani Waterfall Neelum Valley"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Best Time to Visit:</strong> Peak summer months (May to August) when spring snowmelt feeds maximum water flow to the falls.
          </p>
        </div>

        {/* Spot 3: Kundal Shahi Waterfall */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Kundal Shahi Waterfall</h2>
          <p className="text-gray-700 mb-4">
            Situated further up the highway near the town of Kundal Shahi, this spectacular waterfall originates from the high Jagran stream. The icy mountain water gushes through rocky terrain before merging directly into the Neelum River, making it an ideal spot for trout fishing and photography.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/kashmir/Kundalshahi Waterfall.jpg"
              alt="Kundal Shahi Waterfall"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Key Feature:</strong> Located close to Kutton Jagran Resort, offering peaceful sitting areas right alongside cold mountain currents.
          </p>
        </div>

        {/* Spot 4: Arang Kel */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Arang Kel – The Pearl of Neelum Valley</h2>
          <p className="text-gray-700 mb-4">
            Perched high on a hill at 8,379 feet opposite Kel village, <strong>Arang Kel</strong> is a tranquil, vehicle-free hilltop village. Reached via an exciting cable car ride across the river followed by a 30-to-45-minute trek through pine woods, Arang Kel rewards travelers with lush green meadows and views of snow peaks.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/kashmir/Arangkel.jpg"
              alt="Arang Kel Meadow Kashmir"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Pro Tip:</strong> Stay overnight in traditional wooden log cabins to witness unforgettable sunrises over the alpine valley.
          </p>
        </div>

        {/* Spot 5: Ratti Gali Lake */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Ratti Gali Lake (Summer & Winter)</h2>
          <p className="text-gray-700 mb-4">
            Sitting at an impressive altitude of 12,130 feet, <strong>Ratti Gali Lake</strong> is an alpine glacial lake fed by surrounding mountain glaciers. During summer, the surrounding fields bloom with vibrant red flowers and alpine green pastures. In winter, the entire landscape freezes into a dramatic, snow-blanketed wonderland.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/guides/kashmir/ratti gali lake.jfif"
                alt="Ratti Gali Lake Summer"
                className="w-full h-60 md:h-72 object-cover"
              />
              <p className="text-xs text-center py-2 bg-gray-100 font-semibold text-gray-600">Summer Blooming Season</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/guides/kashmir/Ratti Gali in winter.jfif"
                alt="Ratti Gali Lake Winter Snow"
                className="w-full h-60 md:h-72 object-cover"
              />
              <p className="text-xs text-center py-2 bg-gray-100 font-semibold text-gray-600">Winter Snowcapped Wonderland</p>
            </div>
          </div>
          <p className="text-gray-700">
            <strong>Access:</strong> Accessible via a thrilling 4x4 Jeep ride from Dowarian followed by a short horseback ride or hike to the main lake basin.
          </p>
        </div>

        {/* Spot 6: Taobatt */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Taobatt – The Final Frontier</h2>
          <p className="text-gray-700 mb-4">
            Located at the extreme end of Neelum Valley near the Line of Control, <strong>Taobatt</strong> is a serene border village where the Gagai Rivulet meets the Neelum River. Characterized by lush meadows, mountain streams, and rustic wooden houses, Taobatt offers absolute peace away from commercial crowds.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/kashmir/Taobatt.jpg"
              alt="Taobatt Village Neelum Valley"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Highlights:</strong> Unspoiled nature, traditional wooden log architecture, and tranquil riverfront walks.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Recommended 3-Day Kashmir Itinerary
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 1: Departure, Waterfalls & Keran Riverside</h3>
            <p className="text-gray-700 text-sm">
              Early morning drive from Lahore/Islamabad via Murree Expressway or Muzaffarabad route. Stop at Dhani Waterfall and Kundal Shahi Waterfall for photos. Arrive at Keran by evening for a peaceful night stay along the Neelum River bank.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 2: Sharda Peeth, Cable Car & Arang Kel Meadow</h3>
            <p className="text-gray-700 text-sm">
              Morning visit to historical Sharda Ruins. Drive up to Kel village and board the chairlift to reach Arang Kel. Spend the day exploring lush green pastures and stay overnight in Arang Kel or Sharda.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 3: Kutton Valley Exploration & Return</h3>
            <p className="text-gray-700 text-sm">
              Morning exploration of Kutton Jagran Valley. Enjoy fresh local trout fish before commencing the return journey through Muzaffarabad back to Islamabad/Lahore by night.
            </p>
          </div>
        </div>

        {/* WhatsApp Booking Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-2xl my-12 shadow-xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Book Your Kashmir Tour Package with Royal Route
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Hassle-free family, honeymoon, and group tour packages from Lahore & Islamabad. Package includes executive transport, top-rated hotel stays, 4x4 jeep transfers, and professional tour guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <a
              href="https://wa.me/923074326061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition shadow-lg text-lg"
            >
              Book via WhatsApp (0307-4326061)
            </a>
            <Link
              href="/packages"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3.5 rounded-xl transition"
            >
              View All Tour Packages
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}
