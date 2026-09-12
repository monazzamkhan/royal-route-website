'use client'

import { useState } from 'react'
import { MapPin, Navigation, Hotel, Star, Building2, Wifi, Coffee, ShieldCheck } from 'lucide-react'

const umrahHotelsList = [
  // MAKKAH HOTELS
  {
    name: 'Bait Al-Hajeej 2',
    city: 'Makkah',
    starRating: '3 Star Standard (Shuttle)',
    categoryBadge: 'Economy Shuttle',
    distance: '2.6 km (24/7 Free Shuttle Service)',
    specs: 'Quad & Triple Rooms, Air Conditioning, Attached Baths, Shared Kitchen, Elevator, 24/7 Front Desk.',
    description: 'Located in Hindawiyah (Omar Bin Al Khattab Road), offering clean family quad rooms with non-stop 24-hour shuttle buses directly to Haram.',
    hotelImage: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Bait+Al+Hajeej+2+Makkah',
  },
  {
    name: 'Land Premium Hotel 1',
    city: 'Makkah',
    starRating: '3 Star Deluxe',
    categoryBadge: 'Standard Hijrah Road',
    distance: '1100 - 1150 Meters (Al Taysir)',
    specs: 'Plush Bedding, City View Windows, On-site Restaurant, Free High-Speed Wi-Fi, 24/7 Room Service.',
    description: 'Situated on Al Taysir / Hijrah Road area with 891 spacious rooms. Features high-pressure hot/cold water, fast elevators, and shuttle options.',
    hotelImage: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Land+Premium+Hotel+Makkah',
  },
  {
    name: 'Hiba Hijrah 1 Hotel',
    city: 'Makkah',
    starRating: '3 Star Plus',
    categoryBadge: 'Standard Plus',
    distance: '800 Meters (Hijrah Road Direct)',
    specs: '10-12 Mins Direct Walk, Express Check-in, Flat Screen TV, Mini Fridge, Family Seating.',
    description: 'Prime walking distance location on Hijrah Road. Straight easy walk to Al-Masjid Al-Haram courtyard without steep slopes.',
    hotelImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Hiba+Hijrah+Hotel+Makkah',
  },
  {
    name: 'Jalal Mutmaiza Hotel',
    city: 'Makkah',
    starRating: '4 Star Comfort',
    categoryBadge: 'Comfort Category',
    distance: '600 - 650 Meters (Manshiya Road)',
    specs: 'Soundproofed Family Suite, Modern Bathrooms, Daily Housekeeping, Card Access Security.',
    description: 'Located along Manshiya main road area. Offers quick access to Haram with comfortable double, triple, and quad accommodation options.',
    hotelImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Jalal+Mutmaiza+Hotel+Makkah',
  },
  {
    name: 'Mather Al-Jewar Hotel',
    city: 'Makkah',
    starRating: '4 Star Premium',
    categoryBadge: 'Executive Premium',
    distance: '500 - 550 Meters (Hijrah Road)',
    specs: 'Luxury Dining Hall, 24/7 Concierge, Executive Double & Triple Rooms, High-Speed Elevators.',
    description: 'Top-tier 4-star hotel close to Ibrahim Al Khalil / Hijrah Road. Famous for clean rooms, luxury lobby, and proximity to Haram gates.',
    hotelImage: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Maather+Al+Jiwaar+Hotel+Makkah',
  },

  // MADINAH HOTELS
  {
    name: 'Jood Al-Marjan Hotel',
    city: 'Madinah',
    starRating: '3 Star Standard',
    categoryBadge: 'Economy Shuttle',
    distance: '1000 - 1100 Meters (Qurban Area)',
    specs: 'Air Conditioned, Clean Linen, 24/7 Front Desk, Nearby Pakistani & Arab Restaurants.',
    description: 'Located in the popular Qurban area of Madinah with convenient shuttle access to Masjid-e-Nabwi courtyard for daily prayers.',
    hotelImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Jod+Al+Marjan+Hotel+Madinah',
  },
  {
    name: 'Najoom Al-Khair Silver',
    city: 'Madinah',
    starRating: '3 Star Plus (Newly Renovated)',
    categoryBadge: 'Standard Plus',
    distance: '550 - 600 Meters (Masjid Bilal Side)',
    specs: 'Freshly Furnished Rooms, Free Wi-Fi, Flat TVs, Direct Lift Access, Soundproofed Windows.',
    description: 'Newly renovated property situated on the Masjid Bilal side. Just a short 6-7 minutes easy walk to Masjid-e-Nabwi courtyard.',
    hotelImage: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Najoom+Al+Khair+Hotel+Madinah',
  },
  {
    name: 'Rua Al-Fakhama Hotel',
    city: 'Madinah',
    starRating: '5 Star VIP / Markazia',
    categoryBadge: 'Executive Markazia',
    distance: '50 Meters (Northern Courtyard)',
    specs: 'Front Courtyard View, Luxury Interiors, Breakfast Dining, Marble Bathrooms, VIP Check-in.',
    description: 'Ultra-luxurious hotel located directly in the Central Markazia Zone of Madinah. Steps away from Ladies & Gents Entrance of Masjid-e-Nabwi.',
    hotelImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    roomImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Rua+Al+Fakhama+Hotel+Madinah',
  },
]

export default function UmrahHotelsPage() {
  const [filterCity, setFilterCity] = useState('ALL')

  const filteredHotels = umrahHotelsList.filter((hotel) => {
    if (filterCity === 'ALL') return true
    return hotel.city === filterCity
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Hotel className="size-3.5" /> Approved Accommodations Directory
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-3">
          Our Approved Umrah Hotels
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Detailed breakdown of hotel categories, room pictures, Haram distances, and Google Maps directions included in Royal Route Umrah Packages.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        <button
          onClick={() => setFilterCity('ALL')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${
            filterCity === 'ALL'
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Hotels ({umrahHotelsList.length})
        </button>
        <button
          onClick={() => setFilterCity('Makkah')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${
            filterCity === 'Makkah'
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          🕋 Makkah Hotels
        </button>
        <button
          onClick={() => setFilterCity('Madinah')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${
            filterCity === 'Madinah'
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          🕌 Madinah Hotels
        </button>
      </div>

      {/* Hotels Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Dual Image Grid (Hotel Exterior + Room View) */}
              <div className="grid grid-cols-2 h-52 w-full gap-0.5 relative bg-gray-100">
                <div className="relative h-full w-full">
                  <img src={hotel.hotelImage} alt={`${hotel.name} Building`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[9px] font-bold px-2 py-0.5 rounded shadow">
                    Building Exterior
                  </span>
                </div>
                <div className="relative h-full w-full">
                  <img src={hotel.roomImage} alt={`${hotel.name} Room View`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[9px] font-bold px-2 py-0.5 rounded shadow">
                    Room View
                  </span>
                </div>

                <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow backdrop-blur">
                  📍 {hotel.city}
                </span>
                <span className="absolute top-3 right-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                  {hotel.categoryBadge}
                </span>
              </div>

              {/* Content Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-3">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <span>{hotel.starRating}</span>
                </div>

                {/* Distance Badge */}
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-950 p-2.5 rounded-xl font-bold text-xs mb-4 border border-emerald-200/60">
                  <Navigation className="size-4 text-emerald-700 shrink-0" />
                  <span>Distance: {hotel.distance}</span>
                </div>

                {/* Description & Specs */}
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  {hotel.description}
                </p>

                <div className="border-t border-gray-100 pt-3 text-xs text-gray-700 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <Building2 className="size-4 text-gray-400 shrink-0 mt-0.5" />
                    <span><strong>Room Amenities:</strong> {hotel.specs}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Direct Action */}
            <div className="p-6 pt-0">
              <a
                href={hotel.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition shadow-md"
              >
                <MapPin className="size-4 text-amber-400" /> View Exact Location on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
