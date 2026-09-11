import Link from 'next/link'

export default function HunzaGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Complete Travel Guide & Itinerary
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Hunza Valley Travel Guide: Karakoram Highway, Passu Cones & China Border
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Complete Sightseeing Guide
        </p>
      </div>

      {/* Main Cover Banner - Hunza Valley */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="/guides/hunza/Hunza.jpg"
          alt="Hunza Valley Mountain Views"
          className="w-full h-[350px] md:h-[480px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Hunza Valley, situated in the breathtaking Gilgit-Baltistan region of Pakistan, is world-famous for its majestic snow-capped peaks, vibrant apricot orchards, turquoise lakes, and historic Silk Route heritage. Nestled along the iconic Karakoram Highway (KKH), Hunza offers an unmatched road trip adventure through the world's highest mountain ranges.
        </p>

        <p>
          From navigating through the high-speed <strong>Hazara Expressway</strong> and crossing high-altitude mountain passes like <strong>Babusar Top</strong> to standing at the world's highest paved border crossing at <strong>Khunjerab Pass (Pakistan-China Border)</strong>, this comprehensive travel roadmap curated by <strong>Royal Route Travel & Tours</strong> covers every iconic stop along the way.
        </p>

        <hr className="my-8 border-gray-200" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Journey Highlights & Scenic Highway Route
        </h2>

        {/* Route Highlights Section */}
        <div className="my-8 bg-blue-50/60 p-6 md:p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Road Route Highlights from Islamabad/Lahore</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            The road trip to Hunza is an epic journey through changing landscapes:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-800 font-medium list-disc pl-5">
            <li><strong>Hazara Expressway & Tunnels:</strong> Smooth transit through Abbottabad and Mansehra.</li>
            <li><strong>Kaghan Valley Drive:</strong> Balakot, Kaghan, Naran, Lulusar Lake & Babusar Top (13,690 ft).</li>
            <li><strong>Chilas & Indus River Flow:</strong> Joining the mighty River Indus along the Karakoram Highway.</li>
            <li><strong>3 Mountain Ranges Junction:</strong> Meeting point of the Himalayas, Karakoram, and Hindu Kush.</li>
            <li><strong>Tectonic Plate Junction:</strong> Collision point of Indian and Eurasian continental plates.</li>
            <li><strong>Old Silk Route Viewpoint:</strong> Historical trade route carved into sheer rock faces.</li>
            <li><strong>Nanga Parbat Viewpoint:</strong> Dramatic distant view of the "Killer Mountain" (8,126 m).</li>
          </ul>
        </div>

        {/* River Indus Viewpoint */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. The Mighty River Indus & Karakoram Highway</h2>
          <p className="text-gray-700 mb-4">
            As you cross Chilas and head towards Gilgit, the road runs alongside the roaring <strong>River Indus</strong>. Built along the ancient trade paths, the <strong>Majestic Karakoram Highway (KKH)</strong> is celebrated as the "8th Wonder of the World," carving through towering granite canyons and offer unforgettable road trips.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/hunza/Indus.jpg"
              alt="River Indus Along Karakoram Highway"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Key Stops: Rakaposhi View Point at Ghulmet (Minapin) for fresh cherry juice and ice-cold mountain stream views.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Top Places & Attractions in Central & Upper Hunza
        </h2>

        {/* Spot 2: Karimabad, Baltit Fort & Bazaar */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Karimabad, Baltit Fort & Local Bazaar</h2>
          <p className="text-gray-700 mb-4">
            <strong>Karimabad</strong> is the cultural heart of Central Hunza. Cobblestone streets lead up to the historic 700-year-old <strong>Baltit Fort</strong> and 900-year-old <strong>Altit Fort</strong>. The lively <strong>Karimabad Bazaar</strong> is famous for hand-carved gemstones, local walnut cakes, traditional Kashmiri/Hunza shawls, and dried organic fruits.
          </p>
          <p className="text-gray-700 font-medium">
            <strong>Must-Visit Spot:</strong> Eagle's Nest viewpoint at sunset for 360-degree views of Rakaposhi, Diran Peak, and Ladyfinger Peak.
          </p>
        </div>

        {/* Spot 3: Attabad Lake & Tunnels */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Attabad Lake & Attabad Tunnels</h2>
          <p className="text-gray-700 mb-4">
            Created in 2010, <strong>Attabad Lake</strong> is famous for its striking turquoise-blue glacial water. Nestled between massive mountain cliffs, travelers can enjoy jet skiing, motor boating, and kayaking. Passing through the 5-kilometer-long Pak-China Friendship (Attabad) Tunnels adds a modern touch to this wilderness adventure.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/hunza/Attabad-Lake.jpg"
              alt="Attabad Lake Hunza"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Activity Highlight:</strong> Speedboat rides across the crystal waters with dramatic cliff backdrops.
          </p>
        </div>

        {/* Spot 4: Hussaini Suspension Bridge */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Hussaini Suspension Bridge</h2>
          <p className="text-gray-700 mb-4">
            Cross the Hunza River on the world-famous <strong>Hussaini Suspension Bridge</strong> in Gojal Valley. Known as one of the most adventurous pedestrian bridges in the world, its widely spaced wooden planks over gushing river currents draw thrill-seekers from all across the globe.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/hunza/Hussaini_Suspension_Bridge.jpg"
              alt="Hussaini Suspension Bridge Gojal"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Pro Tip:</strong> Enjoy fresh apricot soup or yak burgers at local cafes right beside the bridge entrance.
          </p>
        </div>

        {/* Spot 5: Passu Cones (Passu Cathedral) */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Passu Cones & Passu Glacier</h2>
          <p className="text-gray-700 mb-4">
            The jagged, needle-like mountain peaks known as <strong>Passu Cones</strong> (Passu Cathedral) rise dramatically to over 6,106 meters along the highway. Whether viewed during summer green pastures or frozen under winter snow, Passu offers some of the most photographed mountain landscapes in Asia.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/guides/hunza/passu-cones-hunza-valley.jpg"
                alt="Passu Cones Summer View"
                className="w-full h-60 md:h-72 object-cover"
              />
              <p className="text-xs text-center py-2 bg-gray-100 font-semibold text-gray-600">Passu Cones along KKH</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/guides/hunza/PASSU WINTER.jpg"
                alt="Passu Cones Winter Snow"
                className="w-full h-60 md:h-72 object-cover"
              />
              <p className="text-xs text-center py-2 bg-gray-100 font-semibold text-gray-600">Passu Valley in Winter Snow</p>
            </div>
          </div>
        </div>

        {/* Spot 6: Sust Bazaar & Khunjerab Pass */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Sust Dry Port & Khunjerab Pass (China Border)</h2>
          <p className="text-gray-700 mb-4">
            Passing through <strong>Sust Bazaar</strong> (Pakistan's border customs town), the highway winds up through Khunjerab National Park to <strong>Khunjerab Pass</strong> at an altitude of <strong>15,397 feet (4,693 meters)</strong>. Here stands the iconic Pak-China Border monument and the world's highest ATM.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/hunza/Khunjerab-Pass-Gilgit-Baltistan.jpg"
              alt="Khunjerab Pass China Border Monument"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Travel Tip:</strong> Keep warm jackets ready even during peak summer, as temperatures at the border monument often drop below freezing.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Recommended 5-Day Hunza & Khunjerab Itinerary
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 1: Departure via Naran / Babusar to Chilas</h3>
            <p className="text-gray-700 text-sm">
              Early morning departure from Islamabad via Hazara Motorway, Naran Valley, Lulusar Lake, and Babusar Top. Overnight stay at Chilas or Gilgit.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 2: 3-Mountain Junction, Rakaposhi & Karimabad</h3>
            <p className="text-gray-700 text-sm">
              Stop at 3 Mountain Ranges Junction and Rakaposhi View Point. Arrive in Karimabad, visit Baltit Fort, explore local bazaar, and watch sunset from Eagle's Nest.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 3: Attabad Lake, Hussaini Bridge & Passu Cones</h3>
            <p className="text-gray-700 text-sm">
              Drive through Attabad Tunnels for boating at Attabad Lake. Walk on Hussaini Suspension Bridge and take photos at Passu Cones. Overnight stay at Passu or Gulmit.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 4: Sust Dry Port & Khunjerab Pass (China Border)</h3>
            <p className="text-gray-700 text-sm">
              Day excursion to Sust Bazaar and up to Khunjerab Pass (Pak-China Border). Return to Hunza/Gilgit for overnight stay.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 5: Return Journey to Islamabad / Lahore</h3>
            <p className="text-gray-700 text-sm">
              Begin return journey along Karakoram Highway back to Islamabad or Lahore by late night.
            </p>
          </div>
        </div>

        {/* WhatsApp Booking Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-2xl my-12 shadow-xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Book Your Hunza Tour Package with Royal Route
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Hassle-free family, honeymoon, and corporate group tours to Hunza from Lahore & Islamabad. Includes coaster/hiace transport, luxury hotel stays, and expert local guides.
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
