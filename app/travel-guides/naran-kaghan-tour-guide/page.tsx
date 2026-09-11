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
          Ultimate Naran Kaghan Travel Guide: Best Places, Road Route & 3-Day Itinerary
        </h1>
        <p className="text-gray-500 text-sm">
          Published by Royal Route Travel & Tours | Updated Season Guide
        </p>
      </div>

      {/* Main Cover Banner - Real Lake Saif-ul-Muluk */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop"
          alt="Lake Saif ul Muluk Naran Kaghan"
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
          Why Visit Naran Kaghan Valley?
        </h2>
        <p>
          The allure of Naran lies in its unique geographic diversity. From the historic legendary charm of Lake Saif-ul-Muluk to the high-altitude mountain pass of Babusar Top, every kilometer traveled offers breathtaking views. Key highlights include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Pleasant Summer Weather:</strong> Temperatures in Naran range between comfortable 10°C to 20°C during peak summer months.</li>
          <li><strong>Accessible Alpine Lakes:</strong> Home to some of the highest and most scenic alpine lakes in South Asia.</li>
          <li><strong>Adventure & Sports:</strong> Opportunities for river rafting in the Kunhar River, jeep trekking to Siri Paye, and horse riding.</li>
        </ul>

        {/* Spot 1: Siri Paye Meadows */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Shogran & Siri Paye Meadows</h2>
          <p className="text-gray-700 mb-4">
            Located just 34 km before Naran main bazaar, Shogran is a lush green plateau sitting at an elevation of 7,749 feet. From Shogran, a thrilling 4x4 jeep ride takes you up to <strong>Siri Paye Meadows</strong>—a high-altitude pasture surrounded by cloud-wrapped peaks including Makra Peak.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Siri Paye Meadows Shogran"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Tip: Rent horse rides at Paye Meadow for a classic mountain experience, or enjoy local tea from wooden tea stalls overlooking the valley.
          </p>
        </div>

        {/* Spot 2: Saif ul Muluk */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Lake Saif-ul-Muluk: The Jewel of Naran</h2>
          <p className="text-gray-700 mb-4">
            Situated at 10,578 feet above sea level, Lake Saif-ul-Muluk is world-renowned for its turquoise waters and the backdrop of the mighty <strong>Malika Parbat (5,290m)</strong>. According to local folklore, a Persian prince named Saif-ul-Muluk fell in love with a fairy princess here.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop"
              alt="Lake Saif ul Muluk Naran"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            <strong>How to Reach:</strong> It takes about 30–40 minutes on a 4x4 jeep from Naran Bazaar. Boating and horse riding are popular activities along the lake shoreline.
          </p>
        </div>

        {/* Spot 3: Babusar Top */}
        <div className="my-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Lulusar Lake & Babusar Top Pass</h2>
          <p className="text-gray-700 mb-4">
            Driving further north from Naran towards Gilgit, you will encounter <strong>Lulusar Lake</strong>, the primary source of the Kunhar River. Its mirror-like blue reflection surrounded by snow-capped mountains is a photographer's dream.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop"
              alt="Babusar Top Pass Naran Kaghan"
              className="w-full h-72 md:h-[400px] object-cover"
            />
          </div>
          <p className="text-gray-700">
            Continuing up the winding mountain road leads to <strong>Babusar Top (13,690 ft)</strong>, the highest point of the Kaghan Valley. On clear days, it offers panoramic vistas connecting Kaghan Valley to Chilas and the Karakoram Highway.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          Recommended 3-Day Tour Itinerary
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 1: Departure & Travel to Naran via Shogran</h3>
            <p className="text-gray-700 text-sm">
              Early morning departure from Lahore/Islamabad via Hazara Motorway (M-15). Stop at Balakot for river views, then head up to Shogran for a 4x4 jeep trip to Siri Paye Meadows. Drive to Naran main bazaar for evening check-in and hotel stay.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 2: Lake Saif-ul-Muluk & Local Sightseeing</h3>
            <p className="text-gray-700 text-sm">
              Morning jeep safari to Lake Saif-ul-Muluk. Spend 3-4 hours exploring the lake and boating. Afternoon return to Naran for rafting in the Kunhar River and shopping at Naran Bazaar for local handicrafts, dry fruits, and trout fish dinners.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h3 className="font-bold text-lg text-gray-900">Day 3: Lulusar Lake, Babusar Top & Return Journey</h3>
            <p className="text-gray-700 text-sm">
              Early drive to Lulusar Lake and Babusar Top for sightseeing and mountain tea. Enjoy the descent back through Kaghan Valley and return safely to Islamabad/Lahore by midnight.
            </p>
          </div>
        </div>

        {/* WhatsApp Booking Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-2xl my-12 shadow-xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Book Your Naran Tour Package with Royal Route
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Hassle-free family and group tour packages from Lahore & Islamabad. Package includes executive Toyota Coaster / Grand Cabin transport, premium hotel stay, 4x4 jeep transfers, and daily meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <a
              href="https://wa.me/923074326061"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition shadow-lg text-lg"
            >
              Book via WhatsApp (0307-4326061)
            </a>
            <Link
              href="/packages"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3.5 rounded-xl transition"
            >
              View All Tour Packages
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}
