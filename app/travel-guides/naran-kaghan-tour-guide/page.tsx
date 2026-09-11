import Link from 'next/link'

export default function NaranGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Complete Travel Guide & Itinerary
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
          Naran Kaghan Travel Guide: Best Places, Road Route & 3-Day Itinerary
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Complete Sightseeing Guide
        </p>
      </div>

      {/* Main Cover Banner - Siri Paye */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="/guides/naran/siri-paye.png"
          alt="Naran Kaghan Valley Tourism"
          className="w-full h-[350px] md:h-[480px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
        
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Naran Kaghan Valley, nestled in the Mansehra District of Khyber Pakhtunkhwa, remains Pakistan's ultimate mountain getaway. Rising to over 2,400 meters above sea level, this majestic valley draws thousands of tourists every summer with its alpine lakes, pine-forested slopes, rushing Kunhar River, and snow-capped peaks.
        </p>

        <p>
          Whether you are planning a family vacation, a romantic honeymoon, or a road trip with friends, having a well-structured travel guide ensures you don't miss out on the top attractions and hidden gems. Below is the ultimate comprehensive roadmap curated by <strong>Royal Route Travel & Tours</strong>.
        </p>

        <hr className="my-8 border-gray-200" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Top Places & Key Attractions to Visit
        </h2>

        {/* Spot 1: Siri Paye Meadows */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Shogran & Siri Paye Meadows</h2>
          <p className="text-gray-700 mb-4">
            Located just 34 km before Naran main bazaar, Shogran is a lush green plateau sitting at an elevation of 7,749 feet. From Shogran, a thrilling 4x4 jeep ride takes you up to <strong>Siri Paye Meadows</strong>—a high-altitude pasture surrounded by cloud-wrapped peaks including Makra Peak.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/naran/siri-paye.png"
              alt="Siri Paye Meadows Shogran"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Tip: Rent horse rides at Paye Meadow for a classic mountain experience, or enjoy local tea from wooden tea stalls overlooking the valley.
          </p>
        </div>

        {/* Spot 2: River Rafting */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Kunhar River Rafting</h2>
          <p className="text-gray-700 mb-4">
            The cold, gushing waters of the <strong>Kunhar River</strong> flow through the heart of Naran Valley, providing world-class white-water rafting experiences. Guided rafting trips with professional equipment and safety gear operate along the river banks near Balakot and Naran Bypass.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/naran/rafting.jpg"
              alt="River Rafting in Kunhar River Naran"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Activity Highlight:</strong> Suitable for beginners and adrenaline lovers alike, offering scenic views of pine trees and mountains while riding the rapids.
          </p>
        </div>

        {/* Spot 3: Lalazar Plateau */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Lalazar Meadows & Plateau</h2>
          <p className="text-gray-700 mb-4">
            Perched at an altitude of 10,490 feet, <strong>Lalazar</strong> is famous for its dense pine pine forests, wildflower fields, and serene atmosphere. Accessible via an adventurous 4x4 jeep track from Battakundi, it offers panoramic views of Falak-Sar peak and deep mountain gorges.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/naran/Lalazar.jpg"
              alt="Lalazar Plateau Naran Kaghan"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Pro Tip:</strong> Perfect spot for nature walks, camping, and escape from main city crowds.
          </p>
        </div>

        {/* Spot 4: Lulusar Lake */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Lulusar Lake</h2>
          <p className="text-gray-700 mb-4">
            Located about 48 km from Naran, <strong>Lulusar Lake</strong> is the largest natural lake in Kaghan Valley and the primary source of the Kunhar River. Its crystal-clear, deep blue waters reflect snow-clad mountain peaks like a giant natural mirror.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/naran/lulusar.jpg"
              alt="Lulusar Lake Kaghan Valley"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Key Feature:</strong> Located directly along the Naran-Babusar road, making it an extremely accessible stopover for breathtaking photography.
          </p>
        </div>

        {/* Spot 5: Babusar Top */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Babusar Top (Pass)</h2>
          <p className="text-gray-700 mb-4">
            Situated at a high elevation of <strong>13,690 feet (4,173 meters)</strong>, Babusar Pass is the highest viewpoint in Kaghan Valley. It connects Khyber Pakhtunkhwa to Gilgit-Baltistan via Chilas.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/guides/naran/Babusar.jpg"
              alt="Babusar Top Mountain Pass"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>Highlights:</strong> Panoramic views above clouds, freezing winds even during summer, and local tea stalls at the summit.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Recommended 3-Day Tour Itinerary
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 1: Travel to Naran, Rafting & Shogran</h3>
            <p className="text-gray-700 text-sm">
              Early morning departure from Lahore/Islamabad via Hazara Motorway (M-15). Stop at Balakot for river rafting in Kunhar River, visit Shogran & Siri Paye Meadows via 4x4 jeep, and arrive at Naran Bazaar for overnight hotel stay.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 2: Lake Saif-ul-Muluk & Lalazar Plateau</h3>
            <p className="text-gray-700 text-sm">
              Morning jeep trip to Lake Saif-ul-Muluk for boating. Afternoon excursion to Lalazar Plateau via Battakundi. Evening walk at Naran Bazaar with local trout fish dinner.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 3: Lulusar Lake, Babusar Top & Return</h3>
            <p className="text-gray-700 text-sm">
              Drive up to Lulusar Lake and Babusar Top for sightseeing. Begin return journey through Kaghan Valley back to Islamabad/Lahore by night.
            </p>
          </div>
        </div>

        {/* WhatsApp Booking Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-2xl my-12 shadow-xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Book Your Naran Tour Package with Royal Route
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Hassle-free family and group tour packages from Lahore & Islamabad. Package includes executive transport, hotel stay, 4x4 jeep transfers, and expert tour guidance.
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
