'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { primaryNavLinks, hotelDropdownLinks, moreDropdownLinks, navLinks, site, whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/brand-icons'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hotelsOpen, setHotelsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const hotelsRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setHotelsOpen(false)
    setMoreOpen(false)
  }, [pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (hotelsRef.current && !hotelsRef.current.contains(event.target as Node)) {
        setHotelsOpen(false)
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 shadow-sm'
          : 'border-transparent bg-background/60 backdrop-blur',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <img 
            src={site.logo || "/images/logo.png"} 
            alt={site.name} 
            className="h-10 w-auto object-contain" 
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              Royal Route
            </span>
            <span className="text-[0.66rem] font-medium tracking-wide text-muted-foreground">
              TRAVEL &amp; TOURS
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden items-center gap-1 ml-auto lg:flex">
          {primaryNavLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Hotels Dropdown Menu */}
          <div className="relative" ref={hotelsRef}>
            <button
              onClick={() => {
                setHotelsOpen((prev) => !prev)
                setMoreOpen(false)
              }}
              className={cn(
                'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none',
                hotelsOpen
                  ? 'text-primary bg-secondary/80'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span>Hotels</span>
              <ChevronDown className={cn('size-3.5 transition-transform duration-200', hotelsOpen && 'rotate-180')} />
            </button>

            {hotelsOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-popover p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur z-50">
                {hotelDropdownLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex items-center rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* More Dropdown Menu */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => {
                setMoreOpen((prev) => !prev)
                setHotelsOpen(false)
              }}
              className={cn(
                'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none',
                moreOpen
                  ? 'text-primary bg-secondary/80'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span>More</span>
              <ChevronDown className={cn('size-3.5 transition-transform duration-200', moreOpen && 'rotate-180')} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-popover p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur z-50">
                {moreDropdownLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex items-center rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone className="size-4 text-primary" />
            {site.phone}
          </a>
          <a
            href={whatsappLink('Hello Royal Route Travel & Tours! I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-90 shadow-sm"
            aria-label="Chat on WhatsApp"
          >
            <WhatsappIcon className="size-5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary font-bold'
                      : 'text-foreground hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-3 flex items-center gap-2 pt-2 border-t border-border">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 text-sm font-medium"
              >
                <Phone className="size-4 text-primary" />
                Call Now
              </a>
              <a
                href={whatsappLink('Hello Royal Route Travel & Tours! I have a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 text-sm font-medium text-white shadow-sm"
              >
                <WhatsappIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
