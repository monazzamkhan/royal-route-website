import type { Metadata } from 'next'
import { packages } from '@/lib/packages'
import { PackageCard } from '@/components/package-card'

export const metadata: Metadata = {
  title: 'Tour Packages | Royal Route Travel & Tours',
  description:
    'Browse all Royal Route tour packages — Kashmir Arang Kel, Naran Kaghan & Shogran, Hunza Valley and the Skardu & Hunza Grand Tour.',
}

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-medium text-primary">Tour Packages</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold text-foreground text-balance">
          Choose Your Northern Adventure
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Four handcrafted routes across the most beautiful corners of Pakistan.
          All prices include luxury transport, stays and guided sightseeing.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  )
}
