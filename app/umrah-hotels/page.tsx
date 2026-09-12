'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Navigation, Hotel, Star, Building2 } from 'lucide-react'

const umrahHotelsList = [
  // MAKKAH HOTELS
  {
    name: 'Bait Al-Hajeej 2',
    city: 'Makkah',
    category: 'Economy Shuttle',
    distance: 'Shuttle Service (Hindawiyah)',
    specs: '24/7 Transport, Clean Family Rooms',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Bait+Al+Hajeej+2+Makkah',
  },
  {
    name: 'Land Premium / Similar',
    city: 'Makkah',
    category: 'Standard Hijrah Road',
    distance: '1100 - 1150 Meters',
    specs: 'Hijrah Road, Modern Amenities, Elevator',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Land+Premium+Hotel+Makkah',
  },
  {
    name: 'Hiba Hijrah 1',
    city: 'Makkah',
    category: 'Standard Plus',
    distance: '800 Meters (Hijrah Road)',
    specs: '10-12 Mins Walk, Free Wi-Fi, Express Check-in',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Hiba+Hijrah+Hotel+Makkah',
  },
  {
    name: 'Jalal Mutmaiza',
    city: 'Makkah',
    category: 'Comfort Category',
    distance: '600 - 650 Meters',
    specs: 'Manshiya Road, Fast Haram Access',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Jalal+Mutmaiza+Hotel+Makkah',
  },
  {
    name: 'Mather Al-Jewar',
    city: 'Makkah',
    category: 'Executive Premium',
    distance: '500 - 550 Meters',
    specs: 'Hijrah Road, 24/7 Room Service, Dining Hall',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Maather+Al+Jiwaar+Hotel+Makkah',
  },

  // MADINAH HOTELS
  {
    name: 'Jood Al-Marjan',
    city: 'Madinah',
    category: 'Economy Shuttle',
    distance: '1000M / Shuttle Service',
    specs: 'Qurban Area, Clean Beds, 24/7 Front Desk',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Jod+Al+Marjan+Hotel+Madinah',
  },
  {
    name: 'Najoom Al-Khair Silver',
    city: 'Madinah',
    category: 'Standard Plus',
    distance: '550 - 600 Meters',
    specs: 'Masjid Bilal Side, Renovated Rooms',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800&auto=format&fit=crop',
    googleMapUrl: 'https://maps.google.com/?q=Najoom+Al+Khair+Hotel+Madinah',
  },
  {
    name: 'Rua Al-Fakhama',
    city: 'Madinah',
    category: 'Executive Markazia',
    distance: '50 Meters (Markazia Zone)',
    specs: 'Northern Courtyard View, 1 Min Walk to Haram',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
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
          <Hotel className="size-3.5" /> Approved Accommodations
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-3">
          Our Selected Umrah Hotels
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore complete location details, Haram distances, and Google Maps directions for hotels included in our Executive & Economy Umrah Packages.
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-52 w-full">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                  📍 {hotel.city}
                </span>
                <span className="absolute top-3 right-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                  {hotel.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>

                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl font-medium">
                    <Navigation className="size-4 text-emerald-700 shrink-0" />
                    <span><strong>Distance:</strong> {hotel.distance}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <Building2 className="size-4 text-gray-400 shrink-0 mt-0.5" />
                    <span><strong>Features:</strong> {hotel.specs}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Direct Action */}
            <div className="p-5 pt-0">
              <a
                href={hotel.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow"
              >
                <MapPin className="size-3.5 text-amber-400" /> View Location on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
