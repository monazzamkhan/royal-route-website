'use client'

import { useState } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/site'

export default function ExecutiveUmrahPage() {
  const [adults, setAdults] = useState('2')
  const [child, setChild] = useState('0')
  const [infant, setInfant] = useState('0')
  const [roomType, setRoomType] = useState('Double Room')

  const handleInquiry = () => {
    const message = `Assalam-o-Alaikum Royal Route Travel & Tours!\n\nI want to inquire about *10 Days Executive 5-Star Umrah Package*.\n\n*Passenger Details:*\n- Adults (12+ yrs): ${adults}\n- Child (2-11 yrs): ${child}\n- Infant (<2 yrs): ${infant}\n- Room Sharing Type: ${roomType}\n\nPlease share customized pricing and available dates.`
    
    window.open(whatsappLink(message), '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Executive 5-Star Package
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2">
          10 Days Executive 5-Star Umrah Package
        </h1>
        <p className="text-2xl font-bold text-emerald-600">Starting from Rs. 385,000 / person</p>
      </div>

      {/* Main Cover Photo - Verified Madinah Clock Tower / Prophet's Mosque */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1200&auto=format&fit=crop"
          alt="Madinah Clock Tower 5 Star"
          className="w-full h-80 md:h-[400px] object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="md:col-span-2 space-y-6 text-gray-800">
          <div>
            <h2 className="text-2xl font-bold mb-3">Executive Package Overview</h2>
            <p className="leading-relaxed text-gray-600">
              Designed for travelers seeking premium comfort, proximity to Haram courtyard, and luxury private transfers. Stay at top-tier 5-star hotels right at the steps of Makkah Clock Tower and Madinah Northern Courtyard.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-emerald-800">VIP Package Inclusions</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li><strong>VIP Visa Services:</strong> Priority visa approval & comprehensive medical insurance.</li>
              <li><strong>Makkah 5-Star Hotel (5 Nights):</strong> Abraj Al Bait (Clock Tower) / Pullman Zamzam front-line facing Haram.</li>
              <li><strong>Madinah 5-Star Hotel (5 Nights):</strong> Dar Al Taqwa / Oberoi / Frontel Madinah facing Masjid-an-Nabawi courtyard.</li>
              <li><strong>Private Transport:</strong> Private GMC / Camry transfers (Jeddah Airport to Makkah, Madinah, Airport).</li>
              <li><strong>Exclusive Ziyarat:</strong> Private VIP guided tours of historical holy sites with private driver.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Passenger Query Box */}
        <div className="md:col-span-1">
          <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-2xl shadow-md sticky top-24">
            <h3 className="text-xl font-bold text-emerald-900 mb-1">Package Inquiry</h3>
            <p className="text-xs text-emerald-700 mb-4">Select passengers & room type to get instant quote</p>

            {/* Dropdowns */}
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

              {/* Passenger Types Guide */}
              <div className="bg-white/80 p-3 rounded-lg text-xs text-gray-600 space-y-1 border border-emerald-100">
                <p className="font-semibold text-emerald-800">Passenger Age Criteria:</p>
                <p>• <strong>Adult:</strong> Ages 12 and up</p>
                <p>• <strong>Child:</strong> 2 to under 12 years</p>
                <p>• <strong>Infant:</strong> Less than 2 years</p>
              </div>

              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Room Preference</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Double Room (2 Persons)">Double Room (2 Beds)</option>
                  <option value="Triple Room (3 Persons)">Triple Room (3 Beds)</option>
                  <option value="Quad Room (4 Persons)">Quad Room (4 Beds)</option>
                  <option value="Executive Suite">Executive Suite</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleInquiry}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm mt-2"
              >
                Inquire Price on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
