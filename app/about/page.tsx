import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Award, Users, Bus, ShieldCheck, Building2, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | Royal Route Travel & Tours',
  description:
    'Learn about Royal Route Travel & Tours — a registered Pakistani tour operator with 200+ successful trips, experienced guides and a safe, family-friendly approach.',
}

const stats = [
  { icon: Award, value: '200+', label: 'Successful Trips' },
  { icon: Users, value: '5,000+', label: 'Happy Travelers' },
  { icon: Bus, value: '4', label: 'Signature Routes' },
  { icon: ShieldCheck, value: '100%', label: 'Safety Focus' },
]

const clients = [
  'University of the Punjab',
  'UET Lahore',
  'COMSATS University',
  'Government College University',
  'National Bank of Pakistan',
  'Nestlé Pakistan',
  'Descon Engineering',
  'Local Corporate Retreats',
]

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-medium text-primary">About Royal Route</p>
            <h1 className="mt-1 font-display text-4xl font-extrabold text-foreground text-balance">
              Crafting safe, unforgettable journeys across Pakistan
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Royal Route Travel &amp; Tours was founded with a simple promise —
              <span className="font-medium text-foreground"> {site.tagline} </span>
              We are a registered Pakistani tour operator specialising in the
              northern areas, from the emerald valleys of Kashmir to the mighty
              Karakoram of Skardu and Hunza.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over 200 successful trips have taught us that great travel is about
              trust. That is why we invest in experienced local guides, well-maintained
              luxury coasters, quality accommodation and a respectful family
              environment where solo travelers, couples and families all feel at ease.
            </p>
            <Link
              href="/packages"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Our Tours
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/hunza-valley.png"
              alt="Royal Route travelers exploring Hunza Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <s.icon className="mx-auto size-7 text-primary" />
              <p className="mt-3 font-display text-3xl font-extrabold text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-medium text-primary">Registration &amp; Trust</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-foreground text-balance">
                A registered, accountable operator
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Royal Route Travel &amp; Tours operates as a registered travel
                business in Pakistan, working with verified hotels and licensed
                transport partners. Every booking is documented and every trip is
                led by a responsible tour manager — because your adventure is our
                responsibility.
              </p>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="size-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Trusted by institutions
                </h3>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {clients.map((c) => (
                  <li
                    key={c}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Representative list of the universities and organisations we have
                arranged group tours and corporate retreats for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
