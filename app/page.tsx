import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Users,
  Bus,
  Award,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { packages } from '@/lib/packages'
import { site, whatsappLink } from '@/lib/site'
import { PackageCard } from '@/components/package-card'
import { Testimonials } from '@/components/testimonials'
import { HeroSearch } from '@/components/hero-search'
import { WhatsappIcon } from '@/components/brand-icons'

const reasons = [
  {
    icon: Award,
    title: '200+ Successful Trips',
    text: 'Hundreds of happy travelers guided across Pakistan’s north with a spotless track record.',
  },
  {
    icon: Users,
    title: 'Experienced Guides',
    text: 'Local experts who know every turn, viewpoint and hidden gem along the route.',
  },
  {
    icon: Bus,
    title: 'Luxury Coaster Saloons',
    text: 'Comfortable, air-conditioned coasters and saloons for a smooth mountain journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Family Environment',
    text: 'A respectful, secure atmosphere where families and solo travelers feel at home.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-pakistan.png"
          alt="Panoramic view of northern Pakistan's mountains at golden hour"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            {site.tagline}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
            Explore Pakistan with Royal Route Travel &amp; Tours
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
            Curated adventures to Kashmir, Naran Kaghan, Hunza and Skardu.
            Luxury transport, expert guides and unforgettable memories — booked
            in minutes.
          </p>

          <div className="mt-8 max-w-2xl">
            <HeroSearch />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View All Packages
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink('Hello Royal Route Travel & Tours! I would like to plan a trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <WhatsappIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="packages" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-medium text-primary">Featured Tours</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Our Most Loved Packages
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Every trip includes luxury transport, comfortable stays and guided
            sightseeing. Pick your route and let us handle the rest.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-medium text-primary">Why Travel With Us</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Your Adventure, Our Responsibility
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We take care of every detail so you can focus on the memories.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-primary">Happy Travelers</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            What Our Guests Say
          </h2>
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
            Ready for your next adventure?
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-85 leading-relaxed">
            Talk to our team today and reserve your seat. A 40% advance confirms
            your booking.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
            >
              Browse Packages
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
