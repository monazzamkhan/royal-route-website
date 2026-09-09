'use client'

import { useEffect, useState, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

type Review = {
  name: string
  location: string
  trip: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Ayesha Khan',
    location: 'Lahore',
    trip: 'Hunza Valley Expedition',
    text: 'Absolutely the best trip of my life! The coaster was luxurious, the guide was so caring, and every spot was breathtaking. Royal Route truly takes responsibility for everything.',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Islamabad',
    trip: 'Kashmir Arang Kel Tour',
    text: 'Went with my family and felt completely safe the whole time. Arang Kel was magical. Management stayed in touch and handled every detail. Highly recommended!',
  },
  {
    name: 'Sana & Hamza',
    location: 'Rawalpindi',
    trip: 'Naran Kaghan & Shogran',
    text: 'Our honeymoon trip was perfectly arranged. Saif ul Malook at sunrise was unforgettable. The couple room and food quality exceeded our expectations.',
  },
  {
    name: 'Usman Tariq',
    location: 'Faisalabad',
    trip: 'Skardu & Hunza Grand Tour',
    text: 'Eight days of pure adventure — Deosai, Shangrila, Attabad Lake, all covered smoothly. Experienced drivers on tough roads made us feel secure throughout.',
  },
  {
    name: 'Fatima Noor',
    location: 'Karachi',
    trip: 'Hunza Valley Expedition',
    text: 'As a solo female traveler I was a bit nervous, but the family environment and professional team put me at ease. Will definitely book again with Royal Route.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % reviews.length), [])
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const review = reviews[index]

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
        <Quote className="absolute -top-5 left-8 size-10 rounded-xl bg-gold p-2 text-gold-foreground" />
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-5 fill-current" />
          ))}
        </div>
        <blockquote className="mt-5 text-lg leading-relaxed text-foreground text-pretty">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-display font-bold text-foreground">{review.name}</p>
            <p className="text-sm text-muted-foreground">
              {review.location} &middot; {review.trip}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
