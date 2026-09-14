'use client'

import { useState } from 'react'
import Link from 'next/link'
import { hotelsData, Hotel } from '@/lib/hotels'
import { MapPin, Star, Building2, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function UmrahHotelsPage() {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Makkah' | 'Madinah'>('All')

  // Group hotels by city for "All" view
  const makkahHotels = hotelsData.filter(h => h.city === 'Makkah').sort((a, b) => b.stars - a.stars)
  const madinahHotels = hotelsData.filter(h => h.city === 'Madinah').sort((a, b) => b.stars - a.stars)
  const otherHotels = hotelsData.filter(h => h.city !== 'Makkah' && h.city !== 'Madinah').sort((a, b) => b.stars - a.stars)

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-primary/5 border-b border-border py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold font-display text-foreground sm:text-4xl">
          Approved Umrah Hotels Directory
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
          Explore verified 5-star, 4-star, and budget-friendly accommodations in Makkah and Madinah with walking distances to the Haram and Masjid-e-Nabawi.
        </p>

        {/* City Filter Tabs */}
        <div className="mt-6 flex justify-center gap-2">
          {(['All', 'Makkah', 'Madinah'] as const).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={cn(
                'rounded-lg px-4 py-2 text-xs font-bold transition-all',
                selectedCity === city
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-background border border-border text-foreground hover:bg-secondary'
              )}
            >
              {city === 'All' ? '🏨 All Hotels' : city === 'Makkah' ? '🕋 Makkah Hotels' : '🕌 Madinah Hotels'}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 space-y-12">
        {/* If 'All' is selected, show City Segments */}
        {selectedCity === 'All' ? (
          <>
            {/* Makkah Segment */}
            {makkahHotels.length > 0 && (
              <div>
                <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border">
                  <span className="text-xl">🕋</span>
                  <h2 className="text-2xl font-bold font-display text-foreground">Makkah Hotels</h2>
                  <span className="ml-auto text-xs font-bold bg-secondary px-3 py-1 rounded-full text-muted-foreground">{makkahHotels.length} Hotels</span>
                </div>
                <HotelGrid hotels={makkahHotels} />
              </div>
            )}

            {/* Madinah Segment */}
            {madinahHotels.length > 0 && (
              <div>
                <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border">
                  <span className="text-xl">🕌</span>
                  <h2 className="text-2xl font-bold font-display text-foreground">Madinah Hotels</h2>
                  <span className="ml-auto text-xs font-bold bg-secondary px-3 py-1 rounded-full text-muted-foreground">{madinahHotels.length} Hotels</span>
                </div>
                <HotelGrid hotels={madinahHotels} />
              </div>
            )}

            {/* Others Segment */}
            {otherHotels.length > 0 && (
              <div>
                <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border">
                  <span className="text-xl">🏨</span>
                  <h2 className="text-2xl font-bold font-display text-foreground">Other Hotels</h2>
                  <span className="ml-auto text-xs font-bold bg-secondary px-3 py-1 rounded-full text-muted-foreground">{otherHotels.length} Hotels</span>
                </div>
                <HotelGrid hotels={otherHotels} />
              </div>
            )}
          </>
        ) : (
          /* Single City Filter View */
          <div>
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border">
              <span className="text-xl">{selectedCity === 'Makkah' ? '🕋' : '🕌'}</span>
              <h2 className="text-2xl font-bold font-display text-foreground">{selectedCity} Hotels</h2>
            </div>
            <HotelGrid hotels={selectedCity === 'Makkah' ? makkahHotels : madinahHotels} />
          </div>
        )}
      </div>
    </div>
  )
}

function HotelGrid({ hotels }: { hotels: Hotel[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {hotels.map((hotel) => (
        <div 
          key={hotel.id}
          className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="relative h-52 w-full bg-muted overflow-hidden">
            <img 
              src={hotel.image} 
              alt={hotel.name}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
              }}
            />
            <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
              <span>{hotel.city === 'Makkah' ? '🕋' : '🕌'}</span>
              <span>{hotel.city}</span>
            </div>
            <div className="absolute top-3 right-3 bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
              <Star className="size-3.5 fill-current" />
              <span>{hotel.stars} Star</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {hotel.name}
            </h3>
            
            <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>{hotel.distance}</span>
            </p>

            <p className="mt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {hotel.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                <span 
                  key={idx}
                  className="rounded-md bg-secondary px-2 py-1 text-[10px] font-semibold text-secondary-foreground"
                >
                  {amenity}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-bold text-muted-foreground truncate max-w-[140px]">
                {hotel.locationDesc}
              </span>
              <Link
                href={`/umrah-hotels/${hotel.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm shrink-0"
              >
                <span>View Details</span>
                <ExternalLink className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
