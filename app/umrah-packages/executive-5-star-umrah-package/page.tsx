import Link from 'next/link'

export default function ExecutiveUmrahPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Executive 5-Star Package
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2">
          10 Days Executive 5-Star Umrah Package
        </h1>
        <p className="text-2xl font-bold text-emerald-600">Rs. 385,000 / person</p>
      </div>

      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1200&auto=format&fit=crop"
          alt="Madinah Clock Tower 5 Star"
          className="w-full h-80 md:h-[400px] object-cover"
        />
      </div>

      <div className="space-y-8 text-gray-800">
        <div>
          <h2 className="text-2xl font-bold mb-4">Executive Package Overview</h2>
          <p className="leading-relaxed">
            Designed for travelers seeking premium comfort, proximity to Haram courtyard, and luxury private transfers. Stay at top-tier 5-star hotels right at the steps of Makkah Clock Tower and Madinah Northern Courtyard.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold mb-4">Package Inclusions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>VIP Visa Services:</strong> Priority visa approval & comprehensive medical insurance.</li>
            <li><strong>Makkah 5-Star Hotel (5 Nights):</strong> Abraj Al Bait (Clock Tower) / Pullman Zamzam front-line facing Haram.</li>
            <li><strong>Madinah 5-Star Hotel (5 Nights):</strong> Dar Al Taqwa / Oberoi / Frontel Madinah facing Masjid-an-Nabawi courtyard.</li>
            <li><strong>Private Transport:</strong> Private GMC / Camry transfers (Jeddah Airport to Makkah, Madinah, Airport).</li>
            <li><strong>Exclusive Ziyarat:</strong> Private VIP guided tours of historical holy sites.</li>
          </ul>
        </div>

        <div className="bg-emerald-600 text-white p-8 rounded-2xl shadow-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Book Executive 5-Star Umrah</h3>
          <p className="text-emerald-100 mb-6">
            Get instant assistance for customized flight dates and VIP arrangements.
          </p>
          <a
            href="https://wa.me/923074326061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition shadow"
          >
            Book via WhatsApp (0307-4326061)
          </a>
        </div>
      </div>
    </div>
  )
}
