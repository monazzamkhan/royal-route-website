'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import type { ItineraryDay } from '@/lib/packages'

export function ItineraryTabs({ itinerary }: { itinerary: ItineraryDay[] }) {
  const [active, setActive] = useState(0)
  const day = itinerary[active]

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {itinerary.map((d, i) => (
          <button
            key={d.day}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              i === active
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground hover:bg-secondary'
            }`}
          >
            {d.day}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-display text-xl font-bold text-foreground">
          {day.day}: {day.title}
        </h3>
        <ul className="mt-4 space-y-3">
          {day.details.map((detail, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
