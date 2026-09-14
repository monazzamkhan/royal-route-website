export interface Hotel {
  id: string
  name: string
  city: 'Makkah' | 'Madinah'
  stars: 3 | 4 | 5
  distance: string // e.g., "300 meters from Haram", "2 Minutes Walk"
  locationDesc: string
  image: string
  gallery: string[]
  mapEmbedUrl: string
  amenities: string[]
  description: string
  featured?: boolean
}

export const hotelsData: Hotel[] = [
  // --- 5 STAR HOTELS ---
  {
    id: 'swissotel-makkah',
    name: 'Swissôtel Makkah',
    city: 'Makkah',
    stars: 5,
    distance: '0 meters (Direct Haram Access)',
    locationDesc: 'Abraj Al Bait Complex, King Abdul Aziz Endowment',
    image: '/images/hotels/swissotel.jpg',
    gallery: [
      '/images/hotels/swissotel.jpg',
      '/images/hotels/swissotel-room.jpg'
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.123!2d39.826!3d21.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzA4LjgiTiAzOWs0OSczMy42IkU!5e0!3m2!1sen!2spk!4v1',
    amenities: ['Free Wi-Fi', '24/7 Room Service', 'Restaurant', 'Coffee Shop', 'Laundry'],
    description: 'Part of the prestigious Abraj Al Bait complex, Swissôtel Makkah offers contemporary accommodation with views of the Holy Kaaba. Enjoy direct elevator access to the Haram.',
    featured: true,
  },
  {
    id: 'oberoi-madinah',
    name: 'The Oberoi, Madinah',
    city: 'Madinah',
    stars: 5,
    distance: '100 meters from Al-Masjid an-Nabawi',
    locationDesc: 'Central Area, Madinah',
    image: '/images/hotels/oberoi-madinah.jpg',
    gallery: [
      '/images/hotels/oberoi-madinah.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d39.611!3d24.467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI4JzAxLjIiTiAzOSUzNifMNS4yIkU!5e0!3m2!1sen!2spk!4v1',
    amenities: ['Luxury Spa', 'Fine Dining', 'Free Wi-Fi', 'Valet Parking', 'Concierge'],
    description: 'The Oberoi, Madinah offers luxury just steps away from Al-Masjid an-Nabawi, featuring elegant rooms, world-class dining, and panoramic views of the Prophet’s Mosque.',
    featured: true,
  },

  // --- 4 STAR HOTELS ---
  {
    id: 'voco-makkah',
    name: 'Voco Makkah',
    city: 'Makkah',
    stars: 4,
    distance: 'St. Ibrahim Al Khalil (Shuttle Service Provided)',
    locationDesc: 'Gaza District, Makkah',
    image: '/images/hotels/voco.jpg',
    gallery: [
      '/images/hotels/voco.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=',
    amenities: ['AC Rooms', 'Shuttle Service', 'Free Wi-Fi', 'Restaurant', '24/7 Front Desk'],
    description: 'Voco Makkah delivers comfortable 4-star hospitality with modern amenities and reliable 24-hour shuttle services directly to the Haram.',
  },
  {
    id: 'leader-al-marasim-madinah',
    name: 'Leader Al Muna Kareem / Al Marasim',
    city: 'Madinah',
    stars: 4,
    distance: '150 meters from Al-Masjid an-Nabawi',
    locationDesc: 'Northern Central Area, Madinah',
    image: '/images/hotels/leader-madinah.jpg',
    gallery: [
      '/images/hotels/leader-madinah.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=',
    amenities: ['Free Wi-Fi', 'Coffee Shop', 'Laundry Service', 'Conference Rooms'],
    description: 'Ideally situated in the northern central area of Madinah, offering quick access to the Prophet’s Mosque and comfortable rooms for families.',
  },

  // --- 3 STAR HOTELS ---
  {
    id: 'qaid-makkah',
    name: 'Emaar Grand Hotel',
    city: 'Makkah',
    stars: 3,
    distance: '600 meters from Haram',
    locationDesc: 'Ajyad Street, Makkah',
    image: '/images/hotels/emaar.jpg',
    gallery: [
      '/images/hotels/emaar.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=',
    amenities: ['Free Wi-Fi', 'Elevators', '24/7 Security', 'Room Service'],
    description: 'A budget-friendly yet clean and comfortable 3-star option located conveniently on Ajyad Street, ideal for pilgrims looking for value and accessibility.',
  },
  {
    id: 'dar-aqeelah-madinah',
    name: 'Ruve Al Madinah',
    city: 'Madinah',
    stars: 3,
    distance: '400 meters from Al-Masjid an-Nabawi',
    locationDesc: 'Central Area, Madinah',
    image: '/images/hotels/ruve.jpg',
    gallery: [
      '/images/hotels/ruve.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Luggage Storage'],
    description: 'Offering comfortable 3-star accommodation within short walking distance of Masjid an-Nabawi, suited for budget-conscious families.',
  },
]
