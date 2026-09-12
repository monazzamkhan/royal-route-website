'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/site'

// 15 Days Hotels Promo Packages Dataset (Without Ticket)
const economy15DaysPackages = [
  {
    id: '15d-01',
    category: 'Hotels Promo',
    dates: 'Check-out till 15 Oct',
    name: 'Package 1 - Economy Shuttle',
    makkah: 'Bait Al-Hajeej 2 (Shuttle Service)',
    madinah: 'Jood Al-Marjan (Shuttle Service)',
    prices: { sharing: '66,000', quad: '70,000', triple: '75,000', double: '85,000' },
  },
  {
    id: '15d-02',
    category: 'Hotels Promo',
    dates: 'Check-out till 15 Oct',
    name: 'Package 2 - Land Premium (Hijrah Road)',
    makkah: 'Land Premium / Similar (1100-1150M)',
    madinah: 'Jood Al-Marjan (1000-1100M Shuttle)',
    prices: { sharing: '76,000', quad: '82,000', triple: '91,000', double: '110,000' },
  },
  {
    id: '15d-03',
    category: 'Hotels Promo',
    dates: 'Check-out till 15 Oct',
    name: 'Package 3 - Hiba Hijrah & Najoom Silver',
    makkah: 'Hiba Hijrah 1 (800M - Hijrah Road)',
    madinah: 'Najoom Al-Khair Silver (550-600M)',
    prices: { sharing: '87,000', quad: '95,000', triple: '109,000', double: '136,000' },
  },
  {
    id: '15d-04',
    category: 'Hotels Promo',
    dates: 'Check-out till 15 Oct',
    name: 'Package 4 - Jalal Mutmaiza (Manshiya Road)',
    makkah: 'Jalal Mutmaiza (600-650M - Manshiya)',
    madinah: 'Najoom Al-Khair Silver (550-600M)',
    prices: { sharing: '90,000', quad: '99,000', triple: '113,000', double: '143,000' },
  },
  {
    id: '15d-05',
    category: 'Hotels Promo',
    dates: 'Check-out till 15 Oct',
    name: 'Package 5 - Executive Markazia (50M)',
    makkah: 'Mather Al-Jewar (500-550M - Hijrah Road)',
    madinah: 'Rua Al-Fakhama (50M - Markazia)',
    prices: { sharing: '109,000', quad: '118,000', triple: '139,000', double: '183,000' },
  },
]

export default function Economy15DaysUmrahPage() {
  const [selectedPkgId, setSelectedPkgId] = useState('15d-01')
  const [adults, setAdults] = useState('2')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [roomType, setRoomType] = useState('Quad Sharing')

  // Excel-Style Header Filters State
  const [filterMakkah, setFilterMakkah] = useState('ALL')
  const [filterMadinah, setFilterMadinah] = useState('ALL')

  const activePkg = economy15DaysPackages.find((p) => p.id === selectedPkgId) || economy15DaysPackages[0]

  const uniqueMakkahHotels = useMemo(() => Array.from(new Set(economy15DaysPackages.map((p) => p.makkah))), [])
  const uniqueMadinahHotels = useMemo(() => Array.from(new Set(economy15DaysPackages.map((p) => p.madinah))), [])

  const filteredPackages = useMemo(() => {
    return economy15DaysPackages.filter((pkg) => {
      const matchMakkah = filterMakkah === 'ALL' || pkg.makkah === filterMakkah
      const matchMadinah = filterMadinah === 'ALL' || pkg.madinah === filterMadinah
      return matchMakkah && matchMadinah
    })
  }, [filterMakkah, filterMadinah])

  const hasActiveFilters = filterMakkah !== 'ALL' || filterMadinah !== 'ALL'

  const resetFilters = () => {
    setFilterMakkah('ALL')
    setFilterMadinah('ALL')
  }

  const handleInquiry = (overridePkg?: typeof activePkg) => {
    const pkg = overridePkg || activePkg
    const message = `Assalam-o-Alaikum Royal Route Travel & Tours!\n\nI want to inquire about *15 Days Hotels Promo Umrah Package (Without Ticket)*.\n\n*Selected Option:* ${pkg.name}\n- Makkah Hotel: ${pkg.makkah}\n- Madinah Hotel: ${pkg.madinah}\n- Validity: ${pkg.dates}\n\n*Passenger Details:*\n- Adults: ${adults}, Child: ${child}, Infant: ${infant}\n- Room Type: ${roomType}\n\nPlease share customized quotation and booking procedure.`
    
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-8">
      {/* Title Header */}
      <div className="mb-6">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Hotels Promo Package (Without Air Ticket)
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-2">
          15 Days Economy Umrah Packages 2026
        </h1>
        <p className="text-emerald-700 font-bold text-base md:text-xl">
          8 Nights Makkah | 6 Nights Madinah (No Group Restriction — Book Ticket as per your desired dates)
        </p>
      </div>

      {/* Main Cover Banner */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
          alt="15 Days Umrah Package Makkah"
          className="w-full h-64 md:h-[350px] object-cover"
        />
      </div>

      {/* Info Notice Banner */}
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <span className="block text-xs font-bold text-emerald-800 uppercase">Special Promo Validity</span>
          <span className="text-base font-extrabold text-emerald-950">Check-Out Valid Till 15th October</span>
        </div>
        <div className="text-xs text-emerald-800 font-medium">
          Includes: <strong>Visa + Hotel Accommodation + AC Transport</strong>
        </div>
      </div>

      {/* TOP SELECTOR & INQUIRY SIDEBAR */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Select Package Option</h2>
            
            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Select 15 Days Package Option</label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => setSelectedPkgId(e.target.value)}
                  className="w-full bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold rounded-xl p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {economy15DaysPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — Starting Rs. {pkg.prices.sharing}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Package Details */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 text-xs md:text-sm">
              <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                <span className="font-bold uppercase text-gray-500">Duration Breakdown</span>
                <span className="font-bold text-emerald-800">8 Nights Makkah / 6 Nights Madinah</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                <span className="font-bold uppercase text-gray-500">Makkah Hotel (8 Nights)</span>
                <span className="font-semibold text-gray-900 text-right">{activePkg.makkah}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                <span className="font-bold uppercase text-gray-500">Madinah Hotel (6 Nights)</span>
                <span className="font-semibold text-gray-900 text-right">{activePkg.madinah}</span>
              </div>

              <h3 className="font-bold text-gray-900 pt-1">Package Price Without Ticket (PKR / Person):</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-[11px] text-gray-500 font-semibold">Sharing</span>
                  <span className="block text-xs md:text-sm font-extrabold text-emerald-700 mt-0.5">Rs. {activePkg.prices.sharing}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-[11px] text-gray-500 font-semibold">Quad</span>
                  <span className="block text-xs md:text-sm font-extrabold text-emerald-700 mt-0.5">Rs. {activePkg.prices.quad}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-[11px] text-gray-500 font-semibold">Triple</span>
                  <span className="block text-xs md:text-sm font-extrabold text-emerald-700 mt-0.5">Rs. {activePkg.prices.triple}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-[11px] text-gray-500 font-semibold">Double</span>
                  <span className="block text-xs md:text-sm font-extrabold text-emerald-700 mt-0.5">Rs. {activePkg.prices.double}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right WhatsApp Booking Box */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-50/90 border border-emerald-200 p-5 rounded-2xl shadow-md sticky top-24">
            <h3 className="text-lg font-bold text-emerald-900 mb-1">Book 15 Days Package</h3>
            <p className="text-xs text-emerald-700 mb-3">Select passengers & room type to get quote</p>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-1.5 text-xs font-medium focus:outline-none"
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
                    className="w-full bg-white border border-gray-300 rounded-lg p-1.5 text-xs font-medium focus:outline-none"
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
                    className="w-full bg-white border border-gray-300 rounded-lg p-1.5 text-xs font-medium focus:outline-none"
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
                  className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs font-medium focus:outline-none"
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs md:text-sm mt-2"
              >
                Inquire Selected Package on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* FULL FIT TABLE WITH HEADER FILTERS */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
              15 Days Hotels Promo Rate Chart (Land Package)
            </h2>
            <p className="text-gray-600 text-xs mt-0.5">
              Filter by hotel distance or click on any row to send a direct WhatsApp booking inquiry.
            </p>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-1.5 px-3 rounded-lg shadow transition"
            >
              Reset Filters ✕
            </button>
          )}
        </div>

        {/* Responsive Table */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-emerald-800 text-white text-[11px] uppercase">
              <tr>
                <th className="p-2 w-[12%] align-top pt-3">Category</th>
                <th className="p-2 w-[18%] align-top pt-3">Package Name</th>

                {/* Makkah Hotel Filter */}
                <th className="p-2 w-[20%]">
                  <div className="flex flex-col gap-1">
                    <span>Makkah (8N)</span>
                    <select
                      value={filterMakkah}
                      onChange={(e) => setFilterMakkah(e.target.value)}
                      className="bg-emerald-950 text-white border border-emerald-600 rounded p-1 text-[10px] font-normal focus:outline-none w-full"
                    >
                      <option value="ALL">All Makkah</option>
                      {uniqueMakkahHotels.map((h) => (
                        <option key={h} value={h}>{h.split(' (')[0]}</option>
                      ))}
                    </select>
                  </div>
                </th>

                {/* Madinah Hotel Filter */}
                <th className="p-2 w-[20%]">
                  <div className="flex flex-col gap-1">
                    <span>Madinah (6N)</span>
                    <select
                      value={filterMadinah}
                      onChange={(e) => setFilterMadinah(e.target.value)}
                      className="bg-emerald-950 text-white border border-emerald-600 rounded p-1 text-[10px] font-normal focus:outline-none w-full"
                    >
                      <option value="ALL">All Madinah</option>
                      {uniqueMadinahHotels.map((h) => (
                        <option key={h} value={h}>{h.split(' (')[0]}</option>
                      ))}
                    </select>
                  </div>
                </th>

                <th className="p-2 text-center align-top pt-3 w-[7%]">Sharing</th>
                <th className="p-2 text-center align-top pt-3 w-[7%]">Quad</th>
                <th className="p-2 text-center align-top pt-3 w-[7%]">Triple</th>
                <th className="p-2 text-center align-top pt-3 w-[7%]">Double</th>
                <th className="p-2 text-center align-top pt-3 w-[6%]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[11px]">
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-emerald-50/50 transition">
                    <td className="p-2 font-bold text-emerald-800 text-[10px]">{pkg.category}</td>
                    <td className="p-2 font-semibold text-gray-900">{pkg.name}</td>
                    <td className="p-2 text-gray-700">{pkg.makkah}</td>
                    <td className="p-2 text-gray-700">{pkg.madinah}</td>
                    <td className="p-2 text-center font-bold text-gray-900">{pkg.prices.sharing}</td>
                    <td className="p-2 text-center font-bold text-emerald-700">{pkg.prices.quad}</td>
                    <td className="p-2 text-center font-bold text-gray-900">{pkg.prices.triple}</td>
                    <td className="p-2 text-center font-bold text-gray-900">{pkg.prices.double}</td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => {
                          setSelectedPkgId(pkg.id)
                          handleInquiry(pkg)
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold py-1 px-2 rounded shadow transition"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-gray-500">
                    No matching packages found.{' '}
                    <button onClick={resetFilters} className="text-emerald-700 underline font-bold">
                      Reset Filters
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
