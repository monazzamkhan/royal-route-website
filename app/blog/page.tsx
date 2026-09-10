import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'naran-kaghan-tour-guide',
      title: 'Ultimate Naran Kaghan Travel Guide',
      excerpt: 'Discover Saif-ul-Muluk, Babusar Top, and key attractions in Naran Kaghan Valley.',
      date: '2026-09-10',
    },
    {
      slug: 'swat-kalam-tour-guide',
      title: 'Top Places to Visit in Swat & Kalam',
      excerpt: 'Explore Mahodand Lake, Ushu Forest, and Malam Jabba with our complete itinerary.',
      date: '2026-09-10',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Travel Guides & Blog</h1>
      <p className="text-gray-600 mb-8">Plan your trip to Northern Pakistan with Royal Route Travel & Tours.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
