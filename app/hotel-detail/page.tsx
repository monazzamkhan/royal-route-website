'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { hotelsData, Hotel } from '@/lib/hotels'
import { MapPin, Star, CheckCircle2, ArrowLeft, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { Suspense } from 'react'

function HotelDetailContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const hotel = hotelsData.find((h) => h.id === id) || hotelsData[0]

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary/5 border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link
            href="/umrah-hotels"
            className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Hotels Directory</span>
          </Link>
          <span className="text-xs font-semibold text-muted-foreground">
            {hotel.city} • {hotel.stars} Star Accommodation
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {hotel.city}
              </span>
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="size-3.5 fill-current" /> {hotel.stars} Star Hotel
              </span>
            </div>
            <h1 className="text-3xl font-bold font-display text-foreground sm:text-4xl">
              {hotel.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
              <MapPin className="size-4 text-primary shrink-0" />
              <span>{hotel.distance} ({hotel.locationDesc})</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(`Hello Royal Route! I want to book a stay at ${hotel.name} (${hotel.city}). Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-80 sm:h-96 rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000'
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-38 sm:h-46 rounded-xl overflow-hidden border border-border shadow-sm bg-muted relative">
              <img
                src={hotel.gallery[1] || hotel.image}
                alt={`${hotel.name} view 2`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col justify-center">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Need Assistance?</span>
              <p className="text-sm font-bold text-foreground mt-1">Call our support team for custom Umrah packages.</p>
              <a href={`tel:${site.phone}`} className="mt-3 inline-flex items-center gap-2 text-primary font-bold text-sm">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">About {hotel.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hotel.description}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Hotel Amenities & Services</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hotel.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-foreground bg-secondary/60 p-2.5 rounded-xl">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-foreground">Location & Map</h3>
              <p className="text-xs text-muted-foreground">
                {hotel.locationDesc}, {hotel.city}
              </p>
              {/* Real Google Maps Embed Iframe */}
              <div className="rounded-xl overflow-hidden border border-border h-64 w-full bg-muted">
                <iframe
                  src={hotel.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d39.611!3d24.467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI4JzAxLjIiTiAzOSUzNifMNS4yIkU!5e0!3m2!1sen!2spk!4v1"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${hotel.name} Map`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HotelDetailDirectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm font-medium">Loading hotel details...</div>}>
      <HotelDetailContent />
    </Suspense>
  )
}
