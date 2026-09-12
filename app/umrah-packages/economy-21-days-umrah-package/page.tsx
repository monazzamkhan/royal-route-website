'use client'

import { useState } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/site'

// Fixed Flight Schedules & Hotel Data from Chart
const scheduleOptions = [
  {
    id: '01',
    label: 'Option 01: 04 Oct to 24 Oct (Airblue)',
    dates: '04-Oct to 24-Oct (Flight PA 470 / 471)',
    makkahHotel: 'Mukaram Hijra or similar (850M)',
    madinahHotel: 'Diyar al aws or similar (500M)',
    prices: { sharing: '275,600', quad: '278,900', triple: '295,600', double: '329,100' },
  },
  {
    id: '02',
    label: 'Option 02: 04 Oct to 24 Oct (Economy Saver)',
    dates: '04-Oct to 24-Oct (Flight PA 470 / 471)',
    makkahHotel: 'Jadda Khalil or similar (1200M)',
    madinahHotel: 'Safeer sakni 2 x Firdous 4 (700M)',
    prices: { sharing: '260,200', quad: '264,100', triple: '275,900', double: '299,400' },
  },
  {
    id: '03',
    label: 'Option 03: 06 Oct to 26 Oct (Shuttle Option)',
    dates: '06-Oct to 26-Oct (Flight PA 470 / 471)',
    makkahHotel: 'Hotel number one 3 or similar (Shuttle 1800M)',
    madinahHotel: 'Retaj al Madina or similar (Shuttle)',
    prices: { sharing: '242,400', quad: '245,800', triple: '251,500', double: '262,900' },
  },
  {
    id: '07',
    label: 'Option 07: 11 Oct to 31 Oct (Closest Madinah)',
    dates: '11-Oct to 31-Oct (Flight PA 470 / 471)',
    makkahHotel: 'Jafria or similar (600M)',
    madinahHotel: 'Rou Khair or similar (400M)',
    prices: { sharing: '281,900', quad: '295,600', triple: '318,700', double: '364,600' },
  },
  {
    id: '15',
    label: 'Option 15: 20 Oct to 09 Nov (Premium Close Haram)',
    dates: '20-Oct to 09-Nov (Flight PA 470 / 471)',
    makkahHotel: 'Blora Moazan or similar (350M)',
    madinahHotel: 'Rou Taiba or similar (200M)',
    prices: { sharing: '322,400', quad: '332,100', triple: '367,700', double: '438,500' },
  },
  {
    id: '33',
    label: 'Option 33: 27 Oct to 18 Nov (Late October)',
    dates: '27-Oct to 18-Nov (Flight PA 470 / 471)',
    makkahHotel: 'Mather Al Jewar or similar (550M)',
    madinahHotel: 'Safeer sakni 1 x Salam palace (500M)',
    prices: { sharing: '298,200', quad: '300,900', triple: '325,000', double: '373,100' },
  },
]

export default function Economy21DaysUmrahPage() {
  const [selectedScheduleId, setSelectedScheduleId] = useState('01')
  const [adults, setAdults] = useState('2')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [roomType, setRoomType] = useState('Quad Sharing')

  const activeSchedule = scheduleOptions.find((s) => s.id === selectedScheduleId) || scheduleOptions[0]

  const handleInquiry = () => {
    const message = `Assalam-o-Alaikum Royal Route Travel & Tours!\n\nI am interested in *21 Days Economy Airblue Umrah Package*.\n\n*Selected Group Schedule:*\n- ${activeSchedule.label}\n- Makkah Hotel: ${activeSchedule.makkahHotel}\n- Madinah Hotel: ${activeSchedule.madinahHotel}\n\n*Passenger Details:*\n- Adults: ${adults}, Child: ${child}, Infant: ${infant}\n- Room Preference: ${roomType}\n\nPlease confirm seat availability and booking procedure.`
    
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Fixed Group Departures (Airblue)
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2">
          21 Days Economy Umrah Packages 2026
        </h1>
        <p className="text-emerald-600 font-bold text-xl">LHE - JED | JED - LHE Fixed Flight Dates</p>
      </div>

      {/* Main Cover Banner */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop"
          alt="Makkah Holy Kaaba"
          className="w-full h-80 md:h-[380px] object-cover"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Interactive Schedule Selector */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Select Flight Schedule & Package Option</h2>
            
            <select
              value={selectedScheduleId}
              onChange={(e) => setSelectedScheduleId(e.target.value)}
              className="w-full bg-emerald-50/50 border border-emerald-300 text-emerald-950 font-semibold rounded-xl p-3 text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none mb-6"
            >
              {scheduleOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Active Selected Schedule Details */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Flight Route</span>
                <span className="text-sm font-bold text-gray-900">{activeSchedule.dates}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Makkah Stay (12 Nights)</span>
                <span className="text-sm font-semibold text-gray-800 text-right">{activeSchedule.makkahHotel}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Madinah Stay (8 Nights)</span>
                <span className="text-sm font-semibold text-gray-800 text-right">{activeSchedule.madinahHotel}</span>
              </div>

              {/* Rate Chart */}
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

          <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100 space-y-2 text-sm text-gray-700">
            <h3 className="font-bold text-base text-emerald-900">Standard Package Inclusions:</h3>
            <p>• Airblue Return Flight Tickets (Lahore - Jeddah - Lahore)</p>
            <p>• Complete Umrah Visa processing with Medical Insurance</p>
            <p>• Complete Hotel Stays (12 Nights Makkah + 8 Nights Madinah)</p>
            <p>• Complete Transport & Guided Ziyarat Transfers</p>
          </div>
        </div>

        {/* Right Column: Passenger & WhatsApp Booking Box */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-50/80 border border-emerald-200 p-6 rounded-2xl shadow-md sticky top-24">
            <h3 className="text-xl font-bold text-emerald-900 mb-1">Book Schedule Seat</h3>
            <p className="text-xs text-emerald-700 mb-4">Select passengers to send WhatsApp query</p>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
                  className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Sharing Room">Sharing Room</option>
                  <option value="Quad Room (4 Persons)">Quad Room (4 Beds)</option>
                  <option value="Triple Room (3 Persons)">Triple Room (3 Beds)</option>
                  <option value="Double Room (2 Persons)">Double Room (2 Beds)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleInquiry}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm mt-2"
              >
                Inquire Selected Option via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
