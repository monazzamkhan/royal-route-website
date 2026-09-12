'use client'

import { useState } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/site'

// Complete 43 Flight Departure Packages Dataset from Flyers
const scheduleOptions = [
  { id: '01', label: 'Option 01: 04 Oct - 24 Oct', dates: '04 Oct - 24 Oct', makkah: 'Mukaram Hijra or similar (850M)', madinah: 'Diyar al aws or similar (500M)', prices: { sharing: '275,600', quad: '278,900', triple: '295,600', double: '329,100' } },
  { id: '02', label: 'Option 02: 04 Oct - 24 Oct', dates: '04 Oct - 24 Oct', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '260,200', quad: '264,100', triple: '275,900', double: '299,400' } },
  { id: '03', label: 'Option 03: 06 Oct - 26 Oct', dates: '06 Oct - 26 Oct', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '04', label: 'Option 04: 06 Oct - 26 Oct', dates: '06 Oct - 26 Oct', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '267,300', quad: '274,300', triple: '289,500', double: '319,900' } },
  { id: '05', label: 'Option 05: 08 Oct - 28 Oct', dates: '08 Oct - 28 Oct', makkah: 'Haris or similar (900M)', madinah: 'Diyar al aws or similar (500M)', prices: { sharing: '270,100', quad: '276,600', triple: '292,600', double: '324,500' } },
  { id: '06', label: 'Option 06: 08 Oct - 28 Oct', dates: '08 Oct - 28 Oct', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '260,800', quad: '264,800', triple: '276,900', double: '300,900' } },
  { id: '07', label: 'Option 07: 11 Oct - 31 Oct', dates: '11 Oct - 31 Oct', makkah: 'Jafria or similar (600M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '281,900', quad: '295,600', triple: '318,700', double: '364,600' } },
  { id: '08', label: 'Option 08: 12 Oct - 01 Nov', dates: '12 Oct - 01 Nov', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '09', label: 'Option 09: 12 Oct - 01 Nov', dates: '12 Oct - 01 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '261,200', quad: '265,200', triple: '277,400', double: '301,700' } },
  { id: '10', label: 'Option 10: 13 Oct - 02 Nov', dates: '13 Oct - 02 Nov', makkah: 'Mukaram Hijra or similar (850M)', madinah: 'Abraj taiba silver or similar (200M)', prices: { sharing: '291,400', quad: '298,700', triple: '322,000', double: '368,600' } },
  { id: '11', label: 'Option 11: 13 Oct - 02 Nov', dates: '13 Oct - 02 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '265,800', quad: '272,700', triple: '287,400', double: '316,700' } },
  { id: '12', label: 'Option 12: 15 Oct - 04 Nov', dates: '15 Oct - 04 Nov', makkah: 'Jawrat Bait or similar (600M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '289,200', quad: '305,100', triple: '330,300', double: '382,600' } },
  { id: '13', label: 'Option 13: 20 Oct - 09 Nov', dates: '20 Oct - 09 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '14', label: 'Option 14: 20 Oct - 09 Nov', dates: '20 Oct - 09 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '269,500', quad: '277,000', triple: '293,100', double: '325,300' } },
  { id: '15', label: 'Option 15: 20 Oct - 09 Nov', dates: '20 Oct - 09 Nov', makkah: 'Blora Moazan or similar (350M)', madinah: 'Rou Taiba or similar (200M)', prices: { sharing: '322,400', quad: '332,100', triple: '367,700', double: '438,500' } },
  { id: '16', label: 'Option 16: 20 Oct - 09 Nov', dates: '20 Oct - 09 Nov', makkah: 'Jafria or similar (600M)', madinah: 'Ansar Plus or similar (600M)', prices: { sharing: '273,100', quad: '284,700', triple: '303,800', double: '342,700' } },
  { id: '17', label: 'Option 17: 21 Oct - 10 Nov', dates: '21 Oct - 10 Nov', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '18', label: 'Option 18: 21 Oct - 10 Nov', dates: '21 Oct - 10 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '19', label: 'Option 19: 21 Oct - 10 Nov', dates: '21 Oct - 10 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '269,500', quad: '277,000', triple: '293,100', double: '325,300' } },
  { id: '20', label: 'Option 20: 21 Oct - 10 Nov', dates: '21 Oct - 10 Nov', makkah: 'Jafria or similar (600M)', madinah: 'Ansar Plus or similar (600M)', prices: { sharing: '273,100', quad: '284,700', triple: '303,800', double: '342,700' } },
  { id: '21', label: 'Option 21: 24 Oct - 13 Nov', dates: '24 Oct - 13 Nov', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '22', label: 'Option 22: 24 Oct - 13 Nov', dates: '24 Oct - 13 Nov', makkah: 'Jawrat Bait or similar (600M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '289,200', quad: '305,100', triple: '330,300', double: '382,600' } },
  { id: '23', label: 'Option 23: 24 Oct - 13 Nov', dates: '24 Oct - 13 Nov', makkah: 'Blora Moazan or similar (350M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '310,200', quad: '316,900', triple: '347,600', double: '408,100' } },
  { id: '24', label: 'Option 24: 24 Oct - 13 Nov', dates: '24 Oct - 13 Nov', makkah: 'Jafria or similar (600M)', madinah: 'Ansar Plus or similar (600M)', prices: { sharing: '273,100', quad: '284,700', triple: '303,800', double: '342,700' } },
  { id: '25', label: 'Option 25: 25 Oct - 14 Nov', dates: '25 Oct - 14 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '26', label: 'Option 26: 25 Oct - 14 Nov', dates: '25 Oct - 14 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '266,800', quad: '274,000', triple: '289,000', double: '319,200' } },
  { id: '27', label: 'Option 27: 25 Oct - 14 Nov', dates: '25 Oct - 14 Nov', makkah: 'Jafria or similar (600M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '282,900', quad: '296,800', triple: '320,300', double: '367,100' } },
  { id: '28', label: 'Option 28: 25 Oct - 14 Nov', dates: '25 Oct - 14 Nov', makkah: 'Jawrat Bait or similar (600M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '289,200', quad: '305,100', triple: '330,300', double: '382,600' } },
  { id: '29', label: 'Option 29: 26 Oct - 15 Nov', dates: '26 Oct - 15 Nov', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '30', label: 'Option 30: 26 Oct - 15 Nov', dates: '26 Oct - 15 Nov', makkah: 'Blora Moazan or similar (350M)', madinah: 'Rou Khair or similar (400M)', prices: { sharing: '310,200', quad: '316,900', triple: '347,600', double: '408,100' } },
  { id: '31', label: 'Option 31: 26 Oct - 15 Nov', dates: '26 Oct - 15 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '32', label: 'Option 32: 26 Oct - 15 Nov', dates: '26 Oct - 15 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '269,500', quad: '277,000', triple: '293,100', double: '325,300' } },
  { id: '33', label: 'Option 33: 27 Oct - 18 Nov', dates: '27 Oct - 18 Nov', makkah: 'Mather Al Jewar or similar (550M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '298,200', quad: '300,900', triple: '325,000', double: '373,100' } },
  { id: '34', label: 'Option 34: 27 Oct - 18 Nov', dates: '27 Oct - 18 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '35', label: 'Option 35: 27 Oct - 18 Nov', dates: '27 Oct - 18 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '266,800', quad: '274,000', triple: '289,000', double: '319,200' } },
  { id: '36', label: 'Option 36: 28 Oct - 17 Nov', dates: '28 Oct - 17 Nov', makkah: 'Hotel number one 3 or similar (Shuttle 1800M)', madinah: 'Retaj al Madina or similar (Shuttle)', prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' } },
  { id: '37', label: 'Option 37: 28 Oct - 17 Nov', dates: '28 Oct - 17 Nov', makkah: 'Jawrat Bait or similar (600M)', madinah: 'Ansar Plus or similar (600M)', prices: { sharing: '279,500', quad: '292,900', triple: '313,900', double: '358,300' } },
  { id: '38', label: 'Option 38: 28 Oct - 17 Nov', dates: '28 Oct - 17 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
  { id: '39', label: 'Option 39: 28 Oct - 17 Nov', dates: '28 Oct - 17 Nov', makkah: 'Lolo Toheed or similar (900M)', madinah: 'Safeer sakni 1 x salam palace (500M)', prices: { sharing: '269,500', quad: '277,000', triple: '293,100', double: '325,300' } },
  { id: '40', label: 'Option 40: 30 Oct - 19 Nov', dates: '30 Oct - 19 Nov', makkah: 'Mukaram Hijra or similar (850M)', madinah: 'Shaza Zafrani or similar (350M)', prices: { sharing: '279,200', quad: '283,500', triple: '301,700', double: '338,200' } },
  { id: '41', label: 'Option 41: 30 Oct - 19 Nov', dates: '30 Oct - 19 Nov', makkah: 'Mukaram Hijra or similar (850M)', madinah: 'Abraj taiba silver or similar (200M)', prices: { sharing: '291,400', quad: '298,700', triple: '322,000', double: '368,600' } },
  { id: '42', label: 'Option 42: 30 Oct - 19 Nov', dates: '30 Oct - 19 Nov', makkah: 'Haris or similar (900M)', madinah: 'Diyar al aws or similar (500M)', prices: { sharing: '270,100', quad: '276,600', triple: '292,600', double: '324,500' } },
  { id: '43', label: 'Option 43: 30 Oct - 19 Nov', dates: '30 Oct - 19 Nov', makkah: 'Jadda Khalil or similar (1200M)', madinah: 'Safeer sakni 2 x Firdous 4 (700M)', prices: { sharing: '262,900', quad: '267,100', triple: '279,900', double: '305,500' } },
]

export default function Economy21DaysUmrahPage() {
  const [selectedScheduleId, setSelectedScheduleId] = useState('01')
  const [adults, setAdults] = useState('2')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [roomType, setRoomType] = useState('Quad Sharing')

  const activeSchedule = scheduleOptions.find((s) => s.id === selectedScheduleId) || scheduleOptions[0]

  const handleInquiry = (overrideSchedule?: typeof activeSchedule) => {
    const targetSchedule = overrideSchedule || activeSchedule
    const message = `Assalam-o-Alaikum Royal Route Travel & Tours!\n\nI am interested in *21 Days Economy Airblue Umrah Package*.\n\n*Selected Option (${targetSchedule.id}):*\n- Dates: ${targetSchedule.dates}\n- Makkah Hotel: ${targetSchedule.makkah}\n- Madinah Hotel: ${targetSchedule.madinah}\n\n*Passenger Details:*\n- Adults: ${adults}, Child: ${child}, Infant: ${infant}\n- Room Preference: ${roomType}\n\nPlease confirm seat availability and booking procedure.`
    
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title & Header */}
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Airblue Fixed Group Departures (43 Options)
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-2">
          21 Days Economy Umrah Packages 2026
        </h1>
        <p className="text-emerald-700 font-bold text-lg md:text-xl">
          LHE – JED | JED – LHE (Flight PA 470 / PA 471)
        </p>
      </div>

      {/* Main Banner Photo */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop"
          alt="Makkah Holy Kaaba"
          className="w-full h-72 md:h-[380px] object-cover"
        />
      </div>

      {/* TOP FEATURED INTERACTIVE SELECTOR */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Search & Select Flight Option</h2>
            
            <select
              value={selectedScheduleId}
              onChange={(e) => setSelectedScheduleId(e.target.value)}
              className="w-full bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold rounded-xl p-3.5 text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none mb-6"
            >
              {scheduleOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label} — (Makkah: {opt.makkah.split(' (')[0]})
                </option>
              ))}
            </select>

            {/* Active Display Card */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Flight Route & Dates</span>
                <span className="text-sm font-bold text-gray-900">{activeSchedule.dates}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Makkah Hotel (12 Nights)</span>
                <span className="text-sm font-semibold text-gray-800 text-right">{activeSchedule.makkah}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Madinah Hotel (8 Nights)</span>
                <span className="text-sm font-semibold text-gray-800 text-right">{activeSchedule.madinah}</span>
              </div>

              {/* Price Cards */}
              <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Package Rates (PKR Per Person):</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Sharing</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activeSchedule.prices.sharing}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Quad</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activeSchedule.prices.quad}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Triple</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activeSchedule.prices.triple}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <span className="block text-xs text-gray-500 font-semibold">Double</span>
                  <span className="block text-sm font-extrabold text-emerald-700 mt-1">Rs. {activeSchedule.prices.double}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Query Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-50/90 border border-emerald-200 p-6 rounded-2xl shadow-md sticky top-24">
            <h3 className="text-xl font-bold text-emerald-900 mb-1">Book Schedule Seat</h3>
            <p className="text-xs text-emerald-700 mb-4">Select passengers & room type to inquire</p>

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
                Inquire Selected Option on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      {/* FULL 43 PACKAGES LIST / TABLE DISPLAY SECTION */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            All 43 Airblue 21 Days Group Schedules & Rate Chart
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Browse through all fixed departure packages below. Click on any option to inquire directly.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-emerald-800 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Flight Dates</th>
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
              {scheduleOptions.map((opt, index) => (
                <tr key={opt.id} className="hover:bg-emerald-50/50 transition">
                  <td className="p-4 font-bold text-emerald-800">{opt.id}</td>
                  <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{opt.dates}</td>
                  <td className="p-4 text-gray-800">{opt.makkah}</td>
                  <td className="p-4 text-gray-800">{opt.madinah}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {opt.prices.sharing}</td>
                  <td className="p-4 text-center font-bold text-emerald-700">Rs. {opt.prices.quad}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {opt.prices.triple}</td>
                  <td className="p-4 text-center font-bold text-gray-900">Rs. {opt.prices.double}</td>
                  <td className="p-4 text-center whitespace-nowrap">
                    <button
                      onClick={() => {
                        setSelectedScheduleId(opt.id)
                        handleInquiry(opt)
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg shadow transition"
                    >
                      Inquire Option {opt.id}
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
