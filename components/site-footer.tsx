import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { navLinks, paymentMethods, site } from '@/lib/site'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <img 
                src={site.logo || "/images/logo.png"} 
                alt={site.name} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold">Royal Route</span>
                <span className="text-[0.66rem] tracking-wide opacity-80">
                  TRAVEL &amp; TOURS
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{site.tagline}</p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={`https://wa.me/${site.phoneIntl.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <WhatsappIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide opacity-90">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide opacity-90">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li>
                <a href={`tel:${site.phone}`} className="flex items-center gap-2.5 hover:opacity-100">
                  <Phone className="size-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all hover:opacity-100">
                  <Mail className="size-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-gold" />
                {site.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide opacity-90">
              We Accept
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed opacity-70">
              Secure online payments via Safepay, or direct bank transfer to UBL,
              MCB &amp; JazzCash.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-xs opacity-70 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
