'use client'

import { useState } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/site'

// Promo Flights (Sep-Oct)
const promoFlightSchedules = [
  'SV739 LHE-JED 21SEP (02:40 - 05:45) | SV734 JED-LHE 11OCT (01:55 - 08:50)',
  'SV735 LHE-JED 21SEP (10:30 - 13:35) | SV738 JED-LHE 11OCT (18:05 - 01:00)',
  'SV739 LHE-JED 22SEP (02:40 - 05:45) | SV734 JED-LHE 12OCT (01:55 - 08:50)',
  'SV735 LHE-JED 22SEP (10:30 - 13:35) | SV738 JED-LHE 12OCT (18:05 - 01:00)',
  'SV739 LHE-JED 24SEP (02:40 - 05:45) | SV734 JED-LHE 14OCT (01:55 - 08:50)',
  'SV735 LHE-JED 24SEP (10:30 - 13:35) | SV738 JED-LHE 14OCT (18:05 - 01:00)',
]

// Regular Flights (Oct-Nov)
const regularFlightSchedules = [
  'SV735 LHE-JED 03OCT (10:30 - 13:35) | SV738 JED-LHE 23OCT (18:05 - 01:00)',
  'SV739 LHE-JED 05OCT (02:40 - 05:45) | SV732 JED-LHE 24OCT (09:30 - 16:25)',
  'SV735 LHE-JED 07OCT (10:30 - 13:35) | SV738 JED-LHE 27OCT (18:20 - 00:55)',
  'SV739 LHE-JED 09OCT (02:40 - 05:45) | SV734 JED-LHE 29OCT (03:05 - 09:45)',
  'SV739 LHE-JED 12OCT (02:40 - 05:45) | SV732 JED-LHE 31OCT (09:45 - 16:25)',
  'SV735 LHE-JED 14OCT (10:30 - 13:35) | SV738 JED-LHE 03NOV (18:05 - 01:00)',
]

// Complete Packages Dataset
const saudiaPackages = [
  {
    id: 'promo-01',
    category: 'Promo Offer',
    dates: '21 Sep - 11 Oct',
    name: 'Package 1 - Promo Economy (Shuttle)',
    makkah: 'Bait Al-Hajeej 2 (Shuttle Service)',
    madinah: 'Jood Al-Marjan (Shuttle Service)',
    type: 'promo',
    prices: { sharing: '232,000', quad: '236,000', triple: '241,000', double: '253,000' },
  },
  {
    id: 'promo-02',
    category: 'Promo Offer',
    dates: '21 Sep - 11 Oct',
    name: 'Package 2 - Promo Standard (Hijrah Road)',
    makkah: 'Hiba Hijrah 1 (800 Mtr - Hijrah Road)',
    madinah: 'Najoom Al-Khair Silver (550-600 Mtr)',
    type: 'promo',
    prices: { sharing: '260,000', quad: '269,000', triple: '286,000', double: '321,000' },
  },
  {
    id: 'promo-03',
    category: 'Promo Offer',
    dates: '22 Sep - 12 Oct',
    name: 'Package 3 - Promo Comfort (Manshiya Road)',
    makkah: 'Jalal Mutmaiza (600-650 Mtr - Manshiya Road)',
    madinah: 'Najoom Al-Khair Silver (550-600 Mtr)',
    type: 'promo',
    prices: { sharing: '264,000', quad: '276,000', triple: '296,000', double: '335,000' },
  },
  {
    id: 'reg-01',
    category: 'Saudia Direct',
    dates: '03 Oct - 23 Oct',
    name: 'Package 1 - Economy Shuttle',
    makkah: 'Bait Al-Hajeej 2 (Shuttle Service)',
    madinah: 'Jood Al-Marjan (Shuttle Service)',
    type: 'regular',
    prices: { sharing: '246,000', quad: '251,000', triple: '259,000', double: '274,000' },
  },
  {
    id: 'reg-02',
    category: 'Saudia Direct',
    dates: '05 Oct - 24 Oct',
    name: 'Package 2 - Land Premium',
    makkah: 'Land Premium / Similar (1100-1150 Mtr)',
    madinah: 'Jood Al-Marjan (1000-1100 Mtr - Shuttle)',
    type: 'regular',
    prices: { sharing: '263,000', quad: '274,000', triple: '287,000', double: '315,000' },
  },
  {
    id: 'reg-03',
    category: 'Saudia Direct',
    dates: '07 Oct - 27 Oct',
    name: 'Package 3 - Hiba Hijrah & Najoom Silver',
    makkah: 'Hiba Hijrah 1 (800 Mtr - Hijrah Road)',
    madinah: 'Najoom Al-Khair Silver (550-600 Mtr)',
    type: 'regular',
    prices: { sharing: '278,000', quad: '289,000', triple: '309,000', double: '350,000' },
  },
  {
    id: 'reg-04',
    category: 'Saudia Direct',
    dates: '09 Oct - 29 Oct',
    name: 'Package 4 - Jalal Mutmaiza & Najoom Silver',
    makkah: 'Jalal Mutmaiza (600-650 Mtr - Manshiya Road)',
    madinah: 'Najoom Al-Khair Silver (550-600 Mtr)',
    type: 'regular',
    prices: { sharing: '283,000', quad: '298,000', triple: '322,000', double: '368,000' },
  },
  {
    id: 'reg-05',
    category: 'Saudia Direct',
    dates: '12 Oct - 31 Oct',
    name: 'Package 5 - Executive Markazia (50 Mtr)',
    makkah: 'Mather Al-Jewar (500-550 Mtr - Hijrah Road)',
    madinah: 'Rua Al-Fakhama (50 Mtr - Markazia)',
    type: 'regular',
    prices: { sharing: '309,000', quad: '323,000', triple: '355,000', double: '418,000' },
  },
]

export default function Economy21DaysUmrahPage() {
  const [selectedPkgId, setSelectedPkgId] = useState('reg-01')
  const [tableFilter, setTableFilter] = useState('all')
  const [adults, setAdults] = useState('2')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [roomType, setRoomType] = useState('Quad Sharing')

  const activePkg = saudiaPackages.find((p) => p.id === selectedPkgId) || saudiaPackages[3]

  // Dynamic linked flight schedules based on selected package type
  const activeFlights = activePkg.type === 'promo' ? promoFlightSchedules : regularFlightSchedules
  const [selectedFlight, setSelectedFlight] = useState(activeFlights[0])

  const handlePackageChange = (pkgId: string) => {
    setSelectedPkgId(pkgId)
    const pkg = saudiaPackages.find((p) => p.id === pkgId)
    if (pkg) {
      const flights = pkg.type === 'promo' ? promoFlightSchedules : regularFlightSchedules
      setSelectedFlight(flights[0])
    }
  }

  const filteredPackages = tableFilter === 'all' 
    ? saudiaPackages 
    : saudiaPackages.filter((p) => p.type === tableFilter)

  const handleInquiry = (overridePkg?: typeof activePkg) => {
    const pkg = overridePkg || activePkg
    const message = `Assalam-o-Alaikum Royal Route Travel & Tours!\n\nI want to inquire about *21 Days Saudia Umrah Package*.\n\n*Selected Package:* ${pkg.name} (${pkg.category})\n- Travel Dates: ${pkg.dates}\n- Makkah Hotel: ${pkg.makkah}\n- Madinah Hotel: ${pkg.madinah}\n- Flight Schedule: ${selectedFlight}\n\n*Passenger Details:*\n- Adults: ${adults}, Child: ${child}, Infant: ${infant}\n- Room Type: ${roomType}\n\nPlease confirm seat availability and booking procedure.`
    
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title Header */}
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Saudia Airlines Direct Flights (21 Days)
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-2">
          21 Days Saudia Umrah Packages 2026
        </h1>
        <p className="text-emerald-700 font-bold text-lg md:text-xl">
          12 Nights Makkah | 8 Nights Madinah (LHE - JED - LHE)
        </p>
      </div>

      {/* Main Cover Banner */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop"
          alt="Makkah Holy Kaaba Saudia"
          className="w-full h-72 md:h-[380px] object-cover"
        />
      </div>

      {/* Child & Infant Rates Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="block text-xs font-bold text-amber-800 uppercase">Child Package (Visa + Ticket)</span>
            <span className="text-xl font-extrabold text-amber-900">Rs. 202,000 / child</span>
          </div>
          <span className="text-xs text-amber-700 font-medium">Ages 2 to under 12 yrs</span>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="block text-xs font-bold text-blue-800 uppercase">Infant Package (Visa + Ticket)</span>
            <span className="text-xl font-extrabold text-blue-900">Rs. 77,500 / infant</span>
          </div>
          <span className="text-xs text-blue-700 font-medium">Under 2 yrs</span>
        </div>
      </div>

      {/* TOP SELECTOR & INQUIRY SIDEBAR */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Select Package & Flight Schedule</h2>
            
            <div className="space-y-4 mb-6">
              {/* Package Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Select Umrah Package Option</label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => handlePackageChange(e.target.value)}
                  className="w-full bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold rounded-xl p-3.5 text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {saudiaPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      [{pkg.category}] {pkg.name} — Starting Rs. {pkg.prices.sharing}
                    </option>
                  ))}
                </select>
              </div>

              {/* Linked Flight Schedule Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Linked Saudia Flight Departure Date ({activePkg.category})
                </label>
                <select
                  value={selectedFlight}
                  onChange={(e) => setSelectedFlight(e.target.value)}
                  className="w-full bg-white border border-emerald-500 text-gray-900 font-semibold rounded-xl p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {activeFlights.map((flight, idx) => (
                    <option key={idx} value={flight}>
                      {flight}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Package Details */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Approx. Travel Dates</span>
                <span className="text-sm font-bold text-emerald-800">{activePkg.dates}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Makkah Accommodation (12 Nights)</span>
                <span className="text-sm font-semibold text-gray-900 text-right">{activePkg.makkah}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Madinah Accommodation (8 Nights)</span>
                <span className="text-sm font-semibold text-gray-900 text-right">{activePkg.madinah}</span>
              </div>

              {/* Price Table */}
              <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Package Price (PKR / Person):</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Sharing</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activePkg.prices.sharing}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Quad</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activePkg.prices.quad}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Triple</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activePkg.prices.triple}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Double</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activePkg.prices.double}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right WhatsApp Booking Box */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-50/90 border border-emerald-200 p-6 rounded-2xl shadow-md sticky top-24">
            <h3 className="text-xl font-bold text-emerald-900 mb-1">Book Saudia Package</h3>
            <p className="text-xs text-emerald-700 mb-4">Select passengers & room type to get quote</p>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:outline-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Child</label>
                  <select
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:outline-none"
                  >
                    {[0,1,2,3,4,5].map((n) => (
                      <option key={n} value={n}>{n === 0 ? '-' : n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Infant</label>
                  <select
                    value={infant}
                    onChange={(e) => setInfant(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:outline-none"
                  >
                    {[0,1,2,3,4,5].map((n) => (
                      <option key={n} value={n}>{n === 0 ? '-' : n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Room Sharing Preference</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:outline-none"
                >
                  <option value="Sharing Room">Sharing Room</option>
                  <option value="Quad Room (4 Beds)">Quad Room (4 Beds)</option>
                  <option value="Triple Room (3 Beds)">Triple Room (3 Beds)</option>
                  <option value="Double Room (2 Beds)">Double Room (2 Beds)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => handleInquiry()}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm mt-2"
              >
                Inquire Selected Package on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      {/* FULL PACKAGES TABLE WITH FILTER BUTTONS */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Saudia Airlines 21 Days Complete Packages Chart
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Filter packages by category or click on any row to send a WhatsApp inquiry.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => setTableFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                tableFilter === 'all'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setTableFilter('promo')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                tableFilter === 'promo'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Promo Offers
            </button>
            <button
              onClick={() => setTableFilter('regular')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                tableFilter === 'regular'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Saudia Direct (Oct-Nov)
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-emerald-800 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">Travel Dates</th>
                <th className="p-4">Package Name</th>
                <th className="p-4">Makkah Hotel (12 Nights)</th>
                <th className="p-4">Madinah Hotel (8 Nights)</th>
                <th className="p-4 text-center">Sharing</th>
                <th className="p-4 text-center">Quad</th>
                <th className="p-4 text-center">Triple</th>
                <th className="p-4 text-center">Double</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredPackages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-emerald-50/50 transition">
                  <td className="p-4 font-bold text-emerald-800 text-xs whitespace-nowrap">{pkg.category}</td>
                  <td className="p-4 font-bold text-gray-900 text-xs whitespace-nowrap">{pkg.dates}</td>
                  <td className="p-4 font-semibold text-gray-900">{pkg.name}</td>
                  <td className="p-4 text-gray-800">{pkg.makkah}</td>
                  <td className="p-4 text-gray-800">{pkg.madinah}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {pkg.prices.sharing}</td>
                  <td className="p-4 text-center font-bold text-emerald-700">Rs. {pkg.prices.quad}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {pkg.prices.triple}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {pkg.prices.double}</td>
                  <td className="p-4 text-center whitespace-nowrap">
                    <button
                      onClick={() => {
                        handlePackageChange(pkg.id)
                        handleInquiry(pkg)
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg shadow transition"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
