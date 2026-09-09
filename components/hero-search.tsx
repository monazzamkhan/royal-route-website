'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import { packages } from '@/lib/packages'

export function HeroSearch() {
  const router = useRouter()
  const [slug, setSlug] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(slug ? `/packages/${slug}` : '/packages')
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-md sm:flex-row sm:items-center"
    >
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-background px-3">
        <MapPin className="size-5 shrink-0 text-primary" />
        <select
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          aria-label="Choose a destination"
          className="h-12 w-full bg-transparent text-sm font-medium text-foreground outline-none"
        >
          <option value="">Where do you want to go?</option>
          {packages.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name} — {p.duration}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
      >
        <Search className="size-4" />
        Find My Tour
      </button>
    </form>
  )
}
