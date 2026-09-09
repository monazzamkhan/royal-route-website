import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, X, Clock, MapPin, ChevronRight } from 'lucide-react'
import { getPackage, packages } from '@/lib/packages'
import { ItineraryTabs } from '@/components/itinerary-tabs'
import { BookingWidget } from '@/components/booking-widget'

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) return { title: 'Package Not Found | Royal Route Travel & Tours' }
  return {
    title: `${pkg.name} (${pkg.duration}) | Royal Route Travel & Tours`,
    description: pkg.summary,
  }
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) notFound()

  return (
    <>
      {/* Banner */}
      <section className="relative isolate">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
          <Image
            src={pkg.image || '/placeholder.svg'}
            alt={`${pkg.name} — ${pkg.region}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
            <nav className="mb-3 flex items-center gap-1.5 text-sm text-white/75">
              <Link href="/packages" className="hover:text-white">
                Packages
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-white">{pkg.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                <Clock className="size-3.5" />
                {pkg.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <MapPin className="size-3.5" />
                {pkg.region}
              </span>
            </div>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white text-balance sm:text-4xl lg:text-5xl">
              {pkg.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="min-w-0">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {pkg.summary}
            </p>

            {/* Highlights */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Trip Highlights
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pkg.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    <MapPin className="size-3.5 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Day-by-Day Itinerary
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap each day to see the full plan.
              </p>
              <div className="mt-5">
                <ItineraryTabs itinerary={pkg.itinerary} />
              </div>
            </div>

            {/* Included / Excluded */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">
                  What&apos;s Included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Not Included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {pkg.excluded.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky booking sidebar */}
          <aside className="lg:sticky lg:top-20 lg:h-fit">
            <BookingWidget pkg={pkg} />
          </aside>
        </div>
      </section>
    </>
  )
}
