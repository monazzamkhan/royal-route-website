export type ItineraryDay = {
  day: string
  title: string
  details: string[]
}

export type TourPackage = {
  slug: string
  name: string
  region: string
  duration: string
  days: number
  nights: number
  image: string
  summary: string
  highlights: string[]
  /** Price per single adult (per head) */
  soloPrice: number
  /** Price for a couple sharing a room */
  couplePrice: number
  /** Discounted price per child */
  childPrice: number
  itinerary: ItineraryDay[]
  included: string[]
  excluded: string[]
}

const commonIncluded = [
  'Luxury AC coaster / saloon transport throughout the trip',
  'Accommodation in standard hotels (rooms on sharing basis)',
  'Daily breakfast & dinner',
  'Experienced tour guide & driver',
  'All tolls, fuel & parking charges',
  'Sightseeing at every mentioned spot',
]

const commonExcluded = [
  'Lunch & personal snacks',
  'Jeep / 4x4 charges for off-road points',
  'Entry tickets & boating fees',
  'Any personal expenses or shopping',
  'Anything not mentioned in the "Included" list',
]

export const packages: TourPackage[] = [
  {
    slug: 'kashmir-arang-kel',
    name: 'Kashmir Arang Kel Tour',
    region: 'Azad Kashmir — Neelum Valley',
    duration: '3 Days & 2 Nights',
    days: 3,
    nights: 2,
    image: '/images/kashmir-arang-kel.png',
    summary:
      'Chase emerald meadows, thundering waterfalls and the fairy-tale hilltop village of Arang Kel through the lush Neelum Valley.',
    highlights: [
      'Dhani Waterfall',
      'Kutton / Jagran Valley',
      'Sharda',
      'Arang Kel',
      'Upper Neelum',
    ],
    soloPrice: 15499,
    couplePrice: 36000,
    childPrice: 8999,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: [
          'Pickup from Lahore & Islamabad in the evening.',
          'Overnight travel towards Azad Kashmir with rest stops.',
        ],
      },
      {
        day: 'Day 1',
        title: 'Kutton & Dhani Waterfall',
        details: [
          'Arrive at Muzaffarabad, freshen up and breakfast.',
          'Drive along the Neelum River to Kutton (Jagran) Valley.',
          'Visit Dhani Waterfall and enjoy the riverside.',
          'Dinner and overnight stay in Kutton / Keran.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Sharda & Arang Kel',
        details: [
          'Drive to Sharda, explore the ancient ruins.',
          'Chairlift & trek up to the stunning Arang Kel meadows.',
          'Photography at Upper Neelum viewpoints.',
          'Dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Return Journey',
        details: [
          'Breakfast and final shopping for souvenirs.',
          'Departure back towards Islamabad & Lahore.',
          'Arrive late night, tour concludes.',
        ],
      },
    ],
    included: commonIncluded,
    excluded: [...commonExcluded, 'Arang Kel chairlift & trek charges'],
  },
  {
    slug: 'naran-kaghan-shogran',
    name: 'Naran Kaghan & Shogran Tour',
    region: 'Khyber Pakhtunkhwa — Kaghan Valley',
    duration: '3 Days & 2 Nights',
    days: 3,
    nights: 2,
    image: '/images/naran-kaghan.png',
    summary:
      'Alpine lakes, meadows in the clouds and the legendary Saif ul Malook — the most loved short escape into the Kaghan Valley.',
    highlights: [
      'Balakot',
      'Kawai & Shogran',
      'Siri Paye Meadows',
      'Lulusar Lake',
      'Babusar Top',
      'Saif Ul Malook',
    ],
    soloPrice: 15499,
    couplePrice: 36000,
    childPrice: 8999,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: [
          'Evening pickup from Lahore & Islamabad.',
          'Overnight journey towards Balakot.',
        ],
      },
      {
        day: 'Day 1',
        title: 'Shogran & Siri Paye',
        details: [
          'Breakfast at Balakot, then drive to Kawai.',
          'Jeep track up to Shogran and the Siri Paye meadows.',
          'Continue to Naran for dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Saif ul Malook & Lake Circuit',
        details: [
          'Morning jeep ride to the majestic Lake Saif ul Malook.',
          'Optional drive towards Lulusar Lake & Babusar Top.',
          'Evening back at Naran, dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Return Journey',
        details: [
          'Breakfast and departure towards home cities.',
          'Scenic stops along the way, arrive late night.',
        ],
      },
    ],
    included: commonIncluded,
    excluded: [...commonExcluded, 'Jeep charges to Saif ul Malook & Siri Paye'],
  },
  {
    slug: 'swat-kalam-malam-jabba',
    name: 'Swat, Kalam & Malam Jabba Tour',
    region: 'Khyber Pakhtunkhwa — Swat Valley',
    duration: '3 Days & 2 Nights',
    days: 3,
    nights: 2,
    image: '/images/swat-kalam.png',
    summary:
      'Lush green valleys, roaring rivers, snow-capped peaks and ski resorts — a perfect 3-day getaway to Swat, Kalam and Malam Jabba.',
    highlights: [
      'Fizagat',
      'Malam Jabba Resort',
      'Bahrain',
      'Kalam Bazaar',
      'Ushu Forest',
      'Mahudand Lake',
      'Paloga Village',
    ],
    soloPrice: 15499,
    couplePrice: 36000,
    childPrice: 8999,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: [
          'Evening pickup from Lahore & Islamabad.',
          'Overnight journey towards Swat via Hazara / Swat Motorway.',
        ],
      },
      {
        day: 'Day 1',
        title: 'Fizagat & Malam Jabba Sightseeing',
        details: [
          'Arrival & breakfast at Fizagat.',
          'Drive towards Malam Jabba Resort (enjoy Chairlift & Zipline).',
          'Travel back to Fizagat / Kalam for dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Jeep Safari to Ushu Forest & Mahudand Lake',
        details: [
          'Breakfast at hotel in Kalam.',
          'Transfer to 4x4 Jeeps for Mahudand Lake excursion.',
          'Visit Ushu Forest, Paloga Village, and Mahudand Lake.',
          'Evening back to Kalam Bazaar for dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Shamozai Tower & Return Journey',
        details: [
          'Early breakfast and departure towards Shamozai Tower.',
          'Visit Shamozai Tower and start return journey.',
          'Dinner stopover at Shinwari Rawat.',
          'Late night arrival back in Islamabad & Lahore.',
        ],
      },
    ],
    included: commonIncluded,
    excluded: [...commonExcluded, 'Jeep charges to Mahudand Lake', 'Malam Jabba entry/activities fees'],
  },
  {
    slug: 'swat-malam-jabba',
    name: 'Swat & Malam Jabba Tour',
    region: 'Khyber Pakhtunkhwa — Swat Valley',
    duration: '2 Days & 1 Night',
    days: 2,
    nights: 1,
    image: '/images/malam-jabba.png',
    summary:
      'Explore the breathtaking Swat Valley, scenic Fizagat, Shamozai Tower, and the thrilling ski resort of Malam Jabba.',
    highlights: [
      'Fizagat',
      'Malam Jabba Ski Resort',
      'Chairlift & Zipline Activities',
      'Shamozai Tower',
    ],
    soloPrice: 12000,
    couplePrice: 27000,
    childPrice: 7000,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: [
          'Pickup from Lahore & Islamabad (26 Number Daewoo Terminal).',
          'Short stopover at Mian Gee.',
          'Overnight drive towards Fizagat, Swat.',
        ],
      },
      {
        day: 'Day 1',
        title: 'Fizagat & Malam Jabba Exploration',
        details: [
          'Arrival and fresh-up with breakfast at Fizagat.',
          'Drive towards Malam Jabba Hill Station & Resort.',
          'Enjoy scenic mountain views, Chairlift, and Zipline (personal expense).',
          'Travel back to Fizagat for dinner and overnight hotel stay.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Shamozai Tower & Return Journey',
        details: [
          'Early morning breakfast at 07:00 AM.',
          'Visit the historic Shamozai Tower.',
          'Start return journey towards hometowns.',
          'Dinner stop at Shinwari Rawat (personal expense).',
          'Late night arrival back in Islamabad & Lahore.',
        ],
      },
    ],
    included: commonIncluded,
    excluded: [
      ...commonExcluded,
      'Chairlift, Zipline & activity tickets at Malam Jabba',
    ],
  },
  {
    slug: 'shogran-siri-paye-2-days',
    name: 'Shogran & Siri Paye Tour',
    region: 'Khyber Pakhtunkhwa — Kaghan Valley',
    duration: '2 Days & 1 Night',
    days: 2,
    nights: 1,
    image: '/images/shogran.png',
    summary:
      'Escape into the lush green plateau of Shogran, Kawai Waterfall, and the majestic Siri Paye Meadows surrounded by mountain peaks.',
    highlights: [
      'Balakot',
      'Kawai Waterfall',
      'Shogran Hill Station',
      'Siri Paye Meadows & Lake',
      'Jeep Safari Included',
    ],
    soloPrice: 12000,
    couplePrice: 27000,
    childPrice: 7000,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: [
          'Late night pickup from Lahore & Islamabad (26 Number Daewoo Terminal).',
          'Short stopover at Mian Gee.',
          'Overnight drive towards Balakot.',
        ],
      },
      {
        day: 'Day 1',
        title: 'Kawai Waterfall & Siri Paye Meadows',
        details: [
          'Arrival and fresh-up with breakfast at Balakot.',
          'Drive to Kawai Waterfall.',
          'Jeep ride up to Shogran and explore Siri Paye Meadows.',
          'Evening back at Shogran hotel for dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Shogran Exploration & Return Journey',
        details: [
          'Breakfast at hotel at 07:00 AM.',
          'Explore Shogran Plateau and stop back at Kawai Waterfall.',
          'Start return journey towards hometowns.',
          'Dinner stop at Shinwari Rawat.',
          'Late night arrival back in Islamabad & Lahore.',
        ],
      },
    ],
    included: [
      ...commonIncluded,
      'Jeep Charges for Shogran & Siri Paye',
    ],
    excluded: commonExcluded,
  },
  {
    slug: 'hunza-valley-expedition',
    name: 'Hunza Valley Expedition',
    region: 'Gilgit-Baltistan — Hunza',
    duration: '5 Days & 4 Nights',
    days: 5,
    nights: 4,
    image: '/images/hunza-valley.png',
    summary:
      'The grand northern classic — Rakaposhi views, ancient forts, the turquoise Attabad Lake and the China border at Khunjerab Pass.',
    highlights: [
      'Naran',
      'Babusar Top',
      'Rakaposhi Viewpoint',
      'Baltit & Altit Fort',
      'Attabad Lake',
      'Passu Cones',
      'Khunjerab Pass',
    ],
    soloPrice: 23000,
    couplePrice: 52000,
    childPrice: 13999,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: ['Evening pickup from Lahore & Islamabad, overnight travel to Naran.'],
      },
      {
        day: 'Day 1',
        title: 'Naran to Hunza via Babusar Top',
        details: [
          'Breakfast at Naran, cross the scenic Babusar Top.',
          'Drive along the Karakoram Highway to Hunza.',
          'Dinner and overnight stay in Karimabad, Hunza.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Central Hunza & Forts',
        details: [
          'Rakaposhi viewpoint at Nagar.',
          'Explore the historic Baltit & Altit Forts.',
          'Sunset at Duikar / Eagle’s Nest viewpoint.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Upper Hunza & Khunjerab',
        details: [
          'Boating at the turquoise Attabad Lake.',
          'Photo stop at the iconic Passu Cones.',
          'Drive up to Khunjerab Pass — the Pak-China border.',
        ],
      },
      {
        day: 'Day 4',
        title: 'Hunza to Naran',
        details: ['Return journey across Babusar Top, overnight stay at Naran.'],
      },
      {
        day: 'Day 5',
        title: 'Return Journey',
        details: ['Breakfast and departure back to Islamabad & Lahore.'],
      },
    ],
    included: commonIncluded,
    excluded: [...commonExcluded, 'Khunjerab National Park entry & Attabad boating'],
  },
  {
    slug: 'skardu-hunza-grand',
    name: 'Skardu & Hunza Grand Tour',
    region: 'Gilgit-Baltistan — Skardu & Hunza',
    duration: '8 Days & 7 Nights',
    days: 8,
    nights: 7,
    image: '/images/skardu-hunza.png',
    summary:
      'Our flagship expedition — Shangrila, Kachura Lakes, the vast Deosai plains, the cold desert and the best of Hunza in one epic loop.',
    highlights: [
      'Shangrila Resort',
      'Kachura Lakes',
      'Deosai Plains',
      'Cold Desert Skardu',
      'Shigar Fort',
      'Hunza Valley',
      'Attabad Lake',
    ],
    soloPrice: 36000,
    couplePrice: 78000,
    childPrice: 22000,
    itinerary: [
      {
        day: 'Day 0',
        title: 'Departure Night',
        details: ['Evening pickup from Lahore & Islamabad, overnight travel.'],
      },
      {
        day: 'Day 1',
        title: 'Journey to Chilas',
        details: ['Drive along the Karakoram Highway, overnight stay near Chilas.'],
      },
      {
        day: 'Day 2',
        title: 'Chilas to Skardu',
        details: [
          'Scenic drive to Skardu along the Indus River.',
          'Evening at leisure, dinner and overnight stay.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Shangrila & Kachura Lakes',
        details: [
          'Visit Shangrila (Lower Kachura) Resort.',
          'Boating & photography at Upper Kachura Lake.',
          'Cold Desert (Katpana) at sunset.',
        ],
      },
      {
        day: 'Day 4',
        title: 'Deosai Plains',
        details: [
          'Full-day excursion to the Deosai National Park.',
          'Sheosar Lake, wildflowers and highland wildlife.',
        ],
      },
      {
        day: 'Day 5',
        title: 'Shigar & Skardu to Hunza',
        details: [
          'Visit the historic Shigar Fort.',
          'Drive towards Hunza, overnight stay in Karimabad.',
        ],
      },
      {
        day: 'Day 6',
        title: 'Hunza Exploration',
        details: [
          'Baltit & Altit Forts, Rakaposhi viewpoint.',
          'Attabad Lake boating & Passu Cones.',
        ],
      },
      {
        day: 'Day 7',
        title: 'Hunza to Naran',
        details: ['Return across Babusar Top, overnight stay at Naran.'],
      },
      {
        day: 'Day 8',
        title: 'Return Journey',
        details: ['Breakfast and departure back to Islamabad & Lahore.'],
      },
    ],
    included: commonIncluded,
    excluded: [...commonExcluded, 'Jeep charges for Deosai & Shigar excursions'],
  },
]

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug)
}

export function formatPKR(amount: number) {
  return `PKR ${amount.toLocaleString('en-PK')}`
}
