import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { ContactForm } from '@/components/contact-form'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/brand-icons'

export const metadata: Metadata = {
  title: 'Contact Us | Royal Route Travel & Tours',
  description:
    'Get in touch with Royal Route Travel & Tours. Call, email or WhatsApp us to plan your next adventure across Pakistan.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-medium text-primary">Contact Us</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold text-foreground text-balance">
          Let&apos;s plan your adventure
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Have a question or ready to book? Reach out — our team responds
          quickly, every day of the week.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Info + actions */}
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${site.phone}`}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">Call Us</span>
                <span className="block text-sm text-muted-foreground">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">Email</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {site.email}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Departure Cities
                </span>
                <span className="block text-sm text-muted-foreground">
                  Lahore &amp; Islamabad
                </span>
              </span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">Hours</span>
                <span className="block text-sm text-muted-foreground">
                  Mon–Sun · 9am–9pm
                </span>
              </span>
            </div>
          </div>

          <a
            href={whatsappLink('Hello Royal Route Travel & Tours! I would like to plan a trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <WhatsappIcon className="size-5" />
            Chat with us on WhatsApp
          </a>

          <div className="flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
            >
              <FacebookIcon className="size-4 text-primary" />
              Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
            >
              <InstagramIcon className="size-4 text-primary" />
              Instagram
            </a>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Royal Route Travel & Tours location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.0%2C31.4%2C74.5%2C33.8&layer=mapnik"
              className="h-56 w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            Send an Inquiry
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
