import type { Metadata } from 'next'
import { Wallet, RefreshCcw, ShieldCheck, CalendarClock, Info } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Policy | Royal Route Travel & Tours',
  description:
    'Booking rules, advance payment (40%), refund conditions and safety regulations for Royal Route Travel & Tours.',
}

const sections = [
  {
    icon: Wallet,
    title: 'Booking & Advance Payment',
    points: [
      'A 40% advance payment is required to confirm any booking and reserve your seat.',
      'The remaining 60% must be cleared before departure, as advised by our team.',
      'Seats are only guaranteed once the advance is received and confirmed.',
      'Payments can be made via Safepay, UBL, MCB or JazzCash (0307-4326061).',
    ],
  },
  {
    icon: RefreshCcw,
    title: 'Cancellation & Refunds',
    points: [
      'Cancellations 7+ days before departure: advance is refundable minus processing charges.',
      'Cancellations 3–6 days before departure: 50% of the advance is refundable.',
      'Cancellations within 48 hours of departure: the advance is non-refundable.',
      'Refunds are processed within 7–10 working days to the original payment method.',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Schedule & Changes',
    points: [
      'Itineraries may be adjusted due to weather, road conditions or security advisories.',
      'Any spot that cannot be visited for safety reasons will be replaced where possible.',
      'Departure times are fixed; late arrivals may forfeit their seat without refund.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Conduct',
    points: [
      'All travelers must follow the tour manager’s safety instructions at all times.',
      'A respectful, family-friendly environment is maintained on every trip.',
      'Royal Route is not liable for losses caused by natural events or personal negligence.',
      'Valid CNIC / ID is mandatory for all travelers, especially near border areas.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="text-center">
        <p className="font-medium text-primary">Policy &amp; Terms</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold text-foreground text-balance">
          Booking Rules &amp; Conditions
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Please read these terms carefully before confirming your booking with
          {' '}
          {site.name}.
        </p>
      </header>

      <div className="mt-10 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
        <Info className="size-6 shrink-0 text-primary" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">Key rule:</span> A{' '}
          <span className="font-semibold">40% advance payment</span> is required to
          confirm every booking. The balance is due before departure.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-foreground">
                {s.title}
              </h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Questions about these terms? Call or WhatsApp us at{' '}
        <a href={`tel:${site.phone}`} className="font-medium text-primary">
          {site.phone}
        </a>
        .
      </p>
    </div>
  )
}
