import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Users,
  Bus,
  Award,
  ArrowRight,
  Phone,
  Sparkles,
  Moon,
  CheckCircle2,
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

const featuredUmrah = [
  {
    slug: 'executive-5-star-umrah-package',
    title: 'Executive 5-Star Umrah',
    badge: 'VIP Executive',
    price: 'Starting Rs. 385,000',
    duration: 'Customizable (7, 10, 15, 21 Days)',
    makkah: '5-Star Clock Tower / Front Line',
    madinah: '5-Star Northern Courtyard',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'economy-umrah-package',
    title: '15 Days Economy Umrah',
    badge: 'Hotels Promo',
    price: 'Starting Rs. 66,000',
    duration: '15 Days (Land Package)',
    makkah: 'Bait Al-Hajeej 2 / Similar',
    madinah: 'Jood Al-Marjan / Similar',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'economy-21-days-umrah-package',
    title: '21 Days Saudia Direct',
    badge: 'Saudia Direct',
    price: 'Starting Rs. 232,000',
    duration: '21 Days (Fixed Group Flight)',
    makkah: '12 Nights Makkah Stay',
    madinah: '8 Nights Madinah Stay',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop',
  },
]

export default function HomePage() {
  // Includes 3-Day packages plus 5-Day Hunza package
  const featuredPackages = packages.filter(
    (pkg) => pkg.days === 3 || pkg.slug.includes('hunza')
  ).slice(0, 4)

  return (
    <>
      {/* Hero Section */}
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
            Curated adventures to Kashmir, Naran Kaghan, Hunza and Skardu as well as Sacred Umrah Packages.
            Luxury transport, expert guides and unforgettable memories — booked in minutes.
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
              href={whatsappLink('Hello Royal Route Travel & Tours! I would like to plan a trip / inquiry.')}
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

      {/* Featured Packages Section (Domestic Tours) */}
      <section id="packages" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-medium text-primary">Featured Tours</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Our Most Loved Packages
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Every trip includes luxury transport, comfortable stays and guided
            sightseeing. Pick your route and let us handle the rest.
          </p>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        {/* High-Contrast Standout "Browse All Packages" Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-gold/40 bg-slate-950 p-8 shadow-xl text-white relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left relative z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <Sparkles className="size-4 text-gold" /> Weekend Escapes &amp; Grand Expeditions
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                Explore All 1-Day, 2-Day &amp; Grand Tours
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed">
                Looking for quick 1-day hikes, weekend getaways or long holiday trips? Discover our complete collection.
              </p>
            </div>
            <Link
              href="/packages"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold px-7 py-4 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-yellow-400 hover:scale-105"
            >
              Browse All Packages <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SACRED UMRAH PACKAGES SECTION */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-20 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/60 border border-emerald-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                <Moon className="size-3 text-emerald-300" /> Sacred Pilgrimage
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Umrah Packages 2026
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-emerald-100/80">
              Complete Umrah Visa approval, direct flights (Saudia &amp; Airblue), luxury transfers, and accommodations right near Haram.
            </p>
          </div>

          {/* Umrah Cards Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {featuredUmrah.map((u) => (
              <div
                key={u.slug}
                className="flex flex-col justify-between rounded-2xl border border-emerald-700/40 bg-white text-gray-900 shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="relative h-52 w-full">
                    <img src={u.image} alt={u.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow">
                      {u.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{u.title}</h3>
                    <p className="text-base font-extrabold text-emerald-700 mb-4">{u.price}</p>

                    <ul className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Duration:</strong> {u.duration}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Makkah:</strong> {u.makkah}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        <span><strong>Madinah:</strong> {u.madinah}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/umrah-packages/${u.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-emerald-800 shadow-md"
                  >
                    View Details &amp; Inquire <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/umrah-packages"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-yellow-400 hover:scale-105"
            >
              Explore All Umrah Packages (15, 21 &amp; 28 Days) <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-medium text-primary">Why Travel With Us</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground text-balance sm:text-4xl">
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
