import Link from 'next/link'

export default function SwatGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Complete Travel Guide & Itinerary
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Top Places to Visit in Swat & Kalam Valley: Ultimate Travel Guide
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Complete Sightseeing & Route Plan
        </p>
      </div>

      {/* Main Cover Banner */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="/guides/swat/swat-kalam.png"
          alt="Swat Kalam Valley Landscape"
          className="w-full h-[350px] md:h-[480px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
        
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Swat Valley, historically revered as the "Switzerland of the East," is a breathtaking paradise located in the Khyber Pakhtunkhwa province of Pakistan. With its roaring Swat River, dense pine forests, alpine lakes, and snow-capped peaks, Swat and its crown jewel—Kalam—offer an unforgettable holiday experience for families, couples, and adventure enthusiasts.
        </p>

        <p>
          Thanks to modern infrastructure like the Swat Expressway, traveling to Swat has become exceptionally smooth and comfortable. Below is an in-depth, comprehensive destination guide curated by <strong>Royal Route Travel & Tours</strong> to help you explore every iconic spot.
        </p>

        <hr className="my-8 border-gray-200" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Top Attractions & Must-Visit Spots in Swat & Kalam
        </h2>

        {/* Spot 1: Malam Jabba */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Malam Jabba Ski Resort</h2>
          <p className="text-gray-700 mb-4">
            Perched at 9,199 feet in the Hindu Kush mountain range, <strong>Malam Jabba</strong> is Pakistan's premier hill station and ski resort. It offers year-round attractions including chairlift rides, zip-lining, human slingshots, and snowboarding/skiing competitions during winter months.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/Malam-Jabba.jpg"
              alt="Malam Jabba Ski Resort Swat"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Tip: Ride the iconic dual chairlift to reach the top peak for sweeping panoramic views of the surrounding pine-clad valleys.
          </p>
        </div>

        {/* Spot 2: Ushu Forest */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Ushu Pine Forest</h2>
          <p className="text-gray-700 mb-4">
            Located just a short drive from main Kalam Bazaar, <strong>Ushu Forest</strong> is a dense, magical forest of towering deodar trees. The cool mountain air, wooden bridges over fresh streams, and sun rays filtering through the thick canopy make it a haven for nature walks and photography.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/Ushu Forest.jpg"
              alt="Ushu Pine Forest Kalam"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Key Experience:</strong> Enjoy fresh grilled trout fish at riverside wooden tea stalls right at the entrance of the forest.
          </p>
        </div>

        {/* Spot 3: Mahodand Lake */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Mahodand Lake</h2>
          <p className="text-gray-700 mb-4">
            Situated at an elevation of 9,400 feet in Upper Ushu Valley, <strong>Mahodand Lake</strong> ("Lake of Fishes") is famous for its crystal-clear blue waters, surrounding meadows, and majestic pine mountain peaks. The lake is fed by melting glaciers and flows into the Ushu River.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/Mahodand Lake.jpg"
              alt="Mahodand Lake Kalam Valley"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Activities:</strong> Boating, horse riding along the banks, and trout fishing are extremely popular among visiting families.
          </p>
        </div>

        {/* Spot 4: Shahi Bagh */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Shahi Bagh Meadows</h2>
          <p className="text-gray-700 mb-4">
            Beyond Mahodand Lake lies <strong>Shahi Bagh</strong>, a mesmerizing high-altitude meadow characterized by winding stream channels, lush green turf, and tranquil solitude. The landscape resembles a fairytale royal garden surrounded by towering peaks.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/shahi bagh.jpg"
              alt="Shahi Bagh Meadows Swat"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Pro Tip:</strong> Accessible via 4x4 jeep safari from Kalam, making it an ideal spot for peaceful day-picnics and nature photography.
          </p>
        </div>

        {/* Spot 5: Paloga Village */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Paloga Village</h2>
          <p className="text-gray-700 mb-4">
            Located on the route towards Mahodand Lake, <strong>Paloga Village</strong> is a picturesque high-mountain settlement known for its traditional wooden houses, terraced corn fields, and warm local Pashtun hospitality.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/Paloga Village.jpg"
              alt="Paloga Village Kalam"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Highlight:</strong> Provides an authentic glimpse into local mountain village life surrounded by roaring waterfalls and apple orchards.
          </p>
        </div>

        {/* Spot 6: Shamozai Watch Tower */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Shamozai Tower & Historical Sights</h2>
          <p className="text-gray-700 mb-4">
            Swat Valley boasts a rich historical heritage dating back thousands of years. From ancient Buddhist stupas and rock carvings in Mingora to historic watchtowers like <strong>Shamozai Tower</strong>, the region offers fascinating cultural landmarks alongside natural beauty.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/swat/Shamozai Tower.jpg"
              alt="Shamozai Tower Swat"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Recommended 3-Day Swat & Kalam Itinerary
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 1: Travel via Swat Expressway & Malam Jabba Excursion</h3>
            <p className="text-gray-700 text-sm">
              Early morning departure from Lahore/Islamabad via M-1 Swat Expressway. Visit Fizagat Park & Malam Jabba Ski Resort for chairlift rides and zip-lining. Proceed to Kalam Valley for check-in and evening stay.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 2: 4x4 Jeep Safari to Ushu, Paloga, Mahodand & Shahi Bagh</h3>
            <p className="text-gray-700 text-sm">
              Full-day 4x4 jeep adventure starting with Ushu Forest, Paloga Village, Mahodand Lake, and Shahi Bagh meadows. Enjoy boating and trout fish lunch by the river. Return to Kalam Bazaar for evening shopping.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 3: Bahrain Bazaar, Historical Sightseeing & Return</h3>
            <p className="text-gray-700 text-sm">
              Visit Bahrain riverside market for handicrafts and local shawls, explore historic watchtowers and spots along Mingora, and safely return to Islamabad/Lahore by midnight.
            </p>
          </div>
        </div>

        {/* WhatsApp Booking Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-2xl my-12 shadow-xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Book Your Swat & Kalam Tour Package with Royal Route
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Hassle-free family and group tour packages from Lahore & Islamabad. Includes executive Grand Cabin / Coaster transport, luxury hotel stays, 4x4 jeep transfers, and expert tour management.
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
