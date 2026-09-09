import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import { formatPKR, type TourPackage } from '@/lib/packages'

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image || '/placeholder.svg'}
          alt={`${pkg.name} — ${pkg.region}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
          <Clock className="size-3.5" />
          {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          {pkg.region}
        </div>
        <h3 className="mt-2 font-display text-lg font-bold leading-tight text-foreground text-balance">
          {pkg.name}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] font-medium text-secondary-foreground"
            >
              {h}
            </li>
          ))}
          {pkg.highlights.length > 3 && (
            <li className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] font-medium text-secondary-foreground">
              +{pkg.highlights.length - 3} more
            </li>
          )}
        </ul>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="font-display text-xl font-bold text-primary">
                {formatPKR(pkg.soloPrice)}
                <span className="text-sm font-normal text-muted-foreground"> / person</span>
              </p>
            </div>
          </div>
          <Link
            href={`/packages/${pkg.slug}`}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Details &amp; Book
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
