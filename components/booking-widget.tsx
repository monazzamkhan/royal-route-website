'use client'

import { useMemo, useState } from 'react'
import { Minus, Plus, Calendar } from 'lucide-react'
import { formatPKR, type TourPackage } from '@/lib/packages'
import { BookingModal } from '@/components/booking-modal'

type Counts = { solo: number; couple: number; child: number }

const rows = [
  { key: 'solo' as const, label: 'Solo Adult', note: 'per head' },
  { key: 'couple' as const, label: 'Couple', note: 'separate room' },
  { key: 'child' as const, label: 'Child', note: 'discounted' },
]

export function BookingWidget({ pkg }: { pkg: TourPackage }) {
  const [counts, setCounts] = useState<Counts>({ solo: 1, couple: 0, child: 0 })
  const [date, setDate] = useState('')
  const [open, setOpen] = useState(false)

  const prices = {
    solo: pkg.soloPrice,
    couple: pkg.couplePrice,
    child: pkg.childPrice,
  }

  const total = useMemo(
    () =>
      counts.solo * prices.solo +
      counts.couple * prices.couple +
      counts.child * prices.child,
    [counts, prices.solo, prices.couple, prices.child],
  )

  const totalTravelers = counts.solo + counts.couple * 2 + counts.child

  const update = (key: keyof Counts, delta: number) =>
    setCounts((c) => ({ ...c, [key]: Math.max(0, c[key] + delta) }))

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/5">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-lg font-bold text-foreground">
          Booking Calculator
        </h3>
        <span className="text-xs font-medium text-muted-foreground">
          {totalTravelers} traveler{totalTravelers === 1 ? '' : 's'}
        </span>
      </div>

      {/* Date */}
      <label className="mt-4 block">
        <span className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
          <Calendar className="size-4 text-primary" />
          Departure Date
        </span>
        <input
          type="date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </label>

      {/* Counters */}
      <div className="mt-5 space-y-3">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-3"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">{row.label}</p>
              <p className="text-xs text-muted-foreground">
                {formatPKR(prices[row.key])}{' '}
                <span className="opacity-70">· {row.note}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update(row.key, -1)}
                aria-label={`Decrease ${row.label}`}
                disabled={counts[row.key] === 0}
                className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-6 text-center text-sm font-bold text-foreground tabular-nums">
                {counts[row.key]}
              </span>
              <button
                type="button"
                onClick={() => update(row.key, 1)}
                aria-label={`Increase ${row.label}`}
                className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/10 px-4 py-3.5">
        <span className="text-sm font-medium text-foreground">Total Amount</span>
        <span className="font-display text-2xl font-extrabold text-primary tabular-nums">
          {formatPKR(total)}
        </span>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        40% advance ({formatPKR(Math.round(total * 0.4))}) confirms your booking.
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={totalTravelers === 0}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gold px-4 py-3 text-sm font-bold text-gold-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        Proceed to Book
      </button>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        pkg={pkg}
        date={date}
        counts={counts}
        total={total}
      />
    </div>
  )
}
