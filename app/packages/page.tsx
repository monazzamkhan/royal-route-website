import type { Metadata } from 'next'
import { packages } from '@/lib/packages'
import { PackageCard } from '@/components/package-card'

export const metadata: Metadata = {
  title: 'Tour Packages | Royal Route Travel & Tours',
  description:
    'Browse all Royal Route tour packages — Kashmir Arang Kel, Naran Kaghan & Shogran, Hunza Valley, Swat, Malam Jabba and Day Trips.',
}

export default function PackagesPage() {
  // Grouping packages by duration
  const threeDayPackages = packages.filter((pkg) => pkg.days === 3)
  const twoDayPackages = packages.filter((pkg) => pkg.days === 2)
  const oneDayPackages = packages.filter((pkg) => pkg.days === 1)
  const longPackages = packages.filter((pkg) => pkg.days >= 5)

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-medium text-primary">Tour Packages</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold text-foreground text-balance">
          Choose Your Northern Adventure
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Handcrafted routes across the most beautiful corners of Pakistan.
          All prices include luxury transport, stays and guided sightseeing.
        </p>
      </header>

      <div className="mt-12 space-y-14">
        {/* 1. 3-Day Packages */}
        {threeDayPackages.length > 0 && (
          <section className="rounded-2xl border border-border/70 bg-secondary/10 p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                3D
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  3 Days & 2 Nights Packages
                </h2>
                <p className="text-xs text-muted-foreground">Standard weekend escapes and valley circuits</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {threeDayPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>
        )}

        {/* 2. 2-Day Packages */}
        {twoDayPackages.length > 0 && (
          <section className="rounded-2xl border border-border/70 bg-primary/5 p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                2D
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  2 Days & 1 Night Packages
                </h2>
                <p className="text-xs text-muted-foreground">Short weekend breaks & quick escapes</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {twoDayPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>
        )}

        {/* 3. 1-Day Packages */}
        {oneDayPackages.length > 0 && (
          <section className="rounded-2xl border border-border/70 bg-secondary/10 p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                1D
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  1 Day Excursions & Day Trips
                </h2>
                <p className="text-xs text-muted-foreground">Single-day waterfalls, hikes & dam tours</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {oneDayPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>
        )}

        {/* 4. Long Expeditions (5 - 8 Days) */}
        {longPackages.length > 0 && (
          <section className="rounded-2xl border border-border/70 bg-primary/5 p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                5D+
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Long Expeditions (5 - 8 Days)
                </h2>
                <p className="text-xs text-muted-foreground">Grand multi-valley holidays & long tours</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {longPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
