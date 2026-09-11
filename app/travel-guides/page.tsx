import Link from 'next/link'

export default function TravelGuidesPage() {
  const posts = [
    {
      slug: 'naran-kaghan-tour-guide',
      title: 'Naran Kaghan Travel Guide',
      excerpt: 'Discover Saif-ul-Muluk, Babusar Top, and key attractions in Naran Kaghan Valley.',
      date: '2026-09-10',
      image: '/guides/naran/siri-paye.png',
    },
    {
      slug: 'swat-kalam-tour-guide',
      title: 'Top Places to Visit in Swat & Kalam',
      excerpt: 'Explore Mahodand Lake, Ushu Forest, and Malam Jabba with our complete itinerary.',
      date: '2026-09-10',
     image: '/guides/swat/swat-kalam.png',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          Travel Guides & Destination Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore Northern Pakistan with expert tips, itineraries, and guides from Royal Route Travel & Tours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Travel Guide
              </span>
              <h2 className="text-2xl font-bold mt-3 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between border-t pt-4 mt-4">
                <span className="text-xs text-gray-400">{post.date}</span>
                <Link
                  href={`/travel-guides/${post.slug}`}
                  className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Read Full Guide →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
