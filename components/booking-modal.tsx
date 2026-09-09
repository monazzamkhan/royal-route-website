'use client'

import { useEffect, useState } from 'react'
import { X, CreditCard, Building2, ShieldCheck, ChevronLeft } from 'lucide-react'
import { formatPKR, type TourPackage } from '@/lib/packages'
import { bankAccounts, site, whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/brand-icons'

type Counts = { solo: number; couple: number; child: number }

type Props = {
  open: boolean
  onClose: () => void
  pkg: TourPackage
  date: string
  counts: Counts
  total: number
}

export function BookingModal({ open, onClose, pkg, date, counts, total }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pickup, setPickup] = useState<'Lahore' | 'Islamabad'>('Lahore')
  const [view, setView] = useState<'form' | 'bank'>('form')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setView('form')
  }, [open])

  if (!open) return null

  const passengers = `${counts.solo} Adult(s), ${counts.couple} Couple(s), ${counts.child} Child(ren)`
  const displayDate = date || 'To be confirmed'
  const valid = name.trim().length > 1 && phone.trim().length >= 7

  const message = `Hello Royal Route Travel & Tours! I want to book:
- Package: ${pkg.name}
- Departure Date: ${displayDate}
- Passengers: ${passengers}
- Pickup: ${pickup}
- Total Calculated Amount: ${formatPKR(total)}
- Client Name: ${name || '—'} | Phone: ${phone || '—'}
Please confirm my booking.`

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-card p-6 shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {view === 'bank' && (
              <button
                type="button"
                onClick={() => setView('form')}
                className="mb-2 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
                Back
              </button>
            )}
            <h2 id="booking-title" className="font-display text-xl font-bold text-foreground">
              {view === 'form' ? 'Complete Your Booking' : 'Payment Details'}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">{pkg.name}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground hover:bg-secondary"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Summary */}
        <dl className="mt-4 space-y-1.5 rounded-xl bg-secondary/50 p-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Departure</dt>
            <dd className="font-medium text-foreground">{displayDate}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Passengers</dt>
            <dd className="font-medium text-foreground">{passengers}</dd>
          </div>
          <div className="flex justify-between border-t border-border pt-1.5">
            <dt className="font-medium text-foreground">Total</dt>
            <dd className="font-display text-lg font-bold text-primary">
              {formatPKR(total)}
            </dd>
          </div>
        </dl>

        {view === 'form' ? (
          <>
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ali Raza"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-foreground">
                  Contact Number
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                  placeholder="e.g. 03xx-xxxxxxx"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <div>
                <span className="mb-1.5 block text-sm font-medium text-foreground">
                  Preferred Pickup
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(['Lahore', 'Islamabad'] as const).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setPickup(city)}
                      className={`h-11 rounded-lg border text-sm font-medium transition-colors ${
                        pickup === city
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-foreground hover:bg-secondary'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {!valid && (
              <p className="mt-3 text-xs text-muted-foreground">
                Enter your name and contact number to continue.
              </p>
            )}

            <div className="mt-5 grid gap-2.5">
              <button
                type="button"
                disabled={!valid}
                onClick={() => setView('bank')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                <CreditCard className="size-4" />
                Pay Online / Bank Transfer
              </button>
              <a
                href={valid ? whatsappLink(message) : undefined}
                aria-disabled={!valid}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!valid) e.preventDefault()
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white transition-opacity ${
                  valid ? 'bg-[#25D366] hover:opacity-90' : 'cursor-not-allowed bg-[#25D366]/50'
                }`}
              >
                <WhatsappIcon className="size-4" />
                Book via WhatsApp
              </a>
            </div>
          </>
        ) : (
          <div className="mt-5">
            <div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm text-foreground">
              <ShieldCheck className="size-5 shrink-0 text-primary" />
              Pay 40% advance ({formatPKR(Math.round(total * 0.4))}) to confirm.
              Send the receipt on WhatsApp.
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-secondary/40 p-4 text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                  <CreditCard className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Credit / Debit Card (Visa & Mastercard)
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Cards, wallets &amp; bank — instant confirmation
                  </span>
                </span>
              </span>
            </button>

            <p className="mt-5 mb-2 text-sm font-semibold text-foreground">
              Or direct bank / wallet transfer
            </p>
            <ul className="space-y-2.5">
              {bankAccounts.map((acc) => (
                <li
                  key={acc.bank}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {acc.bank}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Title: {acc.title}
                  </p>
                  <p className="text-sm font-medium tabular-nums text-foreground">
                    {acc.number}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                `${message}\n\nI will pay the 40% advance (${formatPKR(
                  Math.round(total * 0.4),
                )}) and share the receipt.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <WhatsappIcon className="size-4" />
              Send Booking &amp; Receipt on WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Questions? Call {site.phone}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
