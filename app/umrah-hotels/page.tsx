'use client'

import { useState } from 'react'
import Link from 'next/link'
import { hotelsData, Hotel } from '@/lib/hotels'
import { MapPin, Star, Building2, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function UmrahHotelsPage() {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Makkah' | 'Madinah'>('All')

  // Filter hotels based on selected city tab
  const filteredHotels = selectedCity === 'All' 
    ? hotelsData 
    : hotelsData.filter(h => h.city === selectedCity)

  // Group or sort by stars (5 Star -> 4 Star -> 3 Star)
  const sortedHotels = [...filteredHotels].sort((a, b) => b.stars - a.stars)

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

      {/* Hotels Grid */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              {/* Image & Star Badge */}
              <div className="relative h-52 w-full bg-muted overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback placeholder if image path doesn't exist yet
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
                  }}
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="text-primary">{hotel.city === 'Makkah' ? '🕋' : '🕌'}</span>
                  <span>{hotel.city}</span>
                </div>
                <div className="absolute top-3 right-3 bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="size-3.5 fill-current" />
                  <span>{hotel.stars} Star</span>
                </div>
              </div>

              {/* Content */}
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

                {/* Amenities Tags */}
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

                {/* Action Button / Link */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground">
                    {hotel.locationDesc}
                  </span>
                  <Link
                    href={`/umrah-hotels/${hotel.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span>View Details</span>
                    <ExternalLink className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
