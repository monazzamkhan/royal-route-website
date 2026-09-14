import { notFound } from 'next/navigation'
import Link from 'next/link'
import { hotelsData } from '@/lib/hotels'
import { MapPin, Star, CheckCircle2, ArrowLeft, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

interface PageProps {
  params: {
    id: string
  }
}

// Generate static routes for all hotels to prevent 404 errors
export function generateStaticParams() {
  return hotelsData.map((hotel) => ({
    id: hotel.id,
  }))
}

export default function HotelDetailPage({ params }: PageProps) {
  const hotel = hotelsData.find((h) => h.id === params.id)

  if (!hotel) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Navigation Back Bar */}
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
        {/* Header Title & Badges */}
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

        {/* Main Image Gallery Preview */}
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

        {/* Details & Amenities Section */}
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

          {/* Sidebar Box */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-foreground">Location & Map</h3>
              <p className="text-xs text-muted-foreground">
                Conveniently located in {hotel.city}, offering easy access for pilgrims.
              </p>
              <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                <div className="text-center p-4">
                  <MapPin className="size-8 text-primary mx-auto mb-2" />
                  <span>{hotel.locationDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
