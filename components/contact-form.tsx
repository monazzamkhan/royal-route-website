'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/brand-icons'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const waMessage = `Hello Royal Route Travel & Tours!
- Name: ${form.name || '—'}
- Phone: ${form.phone || '—'}
- Inquiry: ${form.message || '—'}`

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Thanks, {form.name || 'traveler'}!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your inquiry has been noted. For the fastest response, send it to us
          directly on WhatsApp and our team will reply shortly.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          <WhatsappIcon className="size-4" />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-3 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Your Name</span>
          <input
            required
            value={form.name}
            onChange={set('name')}
            placeholder="e.g. Ali Raza"
            className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Contact Number</span>
          <input
            required
            inputMode="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="e.g. 03xx-xxxxxxx"
            className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            How can we help?
          </span>
          <textarea
            required
            value={form.message}
            onChange={set('message')}
            rows={4}
            placeholder="Tell us your destination, dates and group size…"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send className="size-4" />
        Send Inquiry
      </button>
    </form>
  )
}
