import Link from 'next/link'

export default function UmrahPackagesPage() {
  const packages = [
    {
      slug: 'economy-umrah-package',
      title: 'Economy Umrah Package (15 Days)',
      price: 'Starting from Rs. 235,000',
      duration: '15 Days (7 Nights Makkah / 7 Nights Madinah)',
      hotelMakkah: '3-Star (walking / shuttle service)',
      hotelMadinah: '3-Star (walking / shuttle service)',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop',
    },
    {
      slug: 'executive-5-star-umrah-package',
      title: 'Executive 5-Star Umrah Package (10 Days)',
      price: 'Starting from Rs. 385,000',
      duration: '10 Days (5 Nights Makkah / 5 Nights Madinah)',
      hotelMakkah: '5-Star Clock Tower / Front Line',
      hotelMadinah: '5-Star Northern Courtyard',
      image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Sacred Journeys
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-3">
          Executive & Economy Umrah Packages 2026
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Perform your spiritual journey with comfort and peace of mind. Complete visa, luxury transport, and hotel accommodation services by Royal Route Travel & Tours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.slug} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white flex flex-col justify-between">
            <div>
              <div className="relative h-64 w-full">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {pkg.price}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h2>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li><strong>Duration:</strong> {pkg.duration}</li>
                  <li><strong>Makkah Hotel:</strong> {pkg.hotelMakkah}</li>
                  <li><strong>Madinah Hotel:</strong> {pkg.hotelMadinah}</li>
                  <li><strong>Includes:</strong> Visa + Transport </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/umrah-packages/${pkg.slug}`}
                className="block text-center bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition"
              >
                View Package Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
