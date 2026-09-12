import Link from 'next/link'

export default function EconomyUmrahPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Economy Package
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2">
          15 Days Economy Umrah Package
        </h1>
        <p className="text-2xl font-bold text-emerald-600">Rs. 235,000 / person</p>
      </div>

      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
          alt="Makkah Holy Kaaba"
          className="w-full h-80 md:h-[400px] object-cover"
        />
      </div>

      <div className="space-y-8 text-gray-800">
        <div>
          <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
          <p className="leading-relaxed">
            Our 15-day Economy Umrah Package is carefully crafted to offer an affordable yet comfortable pilgrimage. It includes complete visa issuance, 3-star hotel stays in Makkah and Madinah with shuttle services, shared air-conditioned transport, and complete guided Ziyarat.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold mb-4">Package Inclusions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Umrah Visa Processing:</strong> Complete Saudi Ministry Umrah Visa fees and Insurance.</li>
            <li><strong>Makkah Stay (7 Nights):</strong> 3-Star accommodation with 24/7 transport shuttle to Haram.</li>
            <li><strong>Madinah Stay (7 Nights):</strong> 3-Star hotel within walking distance to Markaziah/Masjid-an-Nabawi.</li>
            <li><strong>Transport:</strong> Full AC Coaster / Bus transport (Jeddah - Makkah - Madinah - Jeddah).</li>
            <li><strong>Ziyarat:</strong> Guided visits to holy historical sites in Makkah (Jabal al-Nour, Mina, Arafat) & Madinah (Masjid Quba, Uhud).</li>
          </ul>
        </div>

        <div className="bg-emerald-600 text-white p-8 rounded-2xl shadow-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Book Economy Umrah Package</h3>
          <p className="text-emerald-100 mb-6">
            Contact Royal Route Travel & Tours team on WhatsApp to confirm customized dates and group bookings.
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
