import Link from 'next/link';

export default function SwatGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Top Places to Visit in Swat & Kalam Valley: Travel Guide
      </h1>
      
      <p className="text-gray-600 mb-6 italic">
        Published by Royal Route Travel & Tours | Complete Sightseeing & Itinerary Plan
      </p>

      <div className="prose max-w-none text-gray-800 space-y-6">
        <p>
          Swat, often called the Switzerland of the East, is famous for its lush green valleys, rushing rivers, and snow-capped peaks. Kalam Valley serves as the crown jewel of Swat tourism.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Must-Visit Attractions in Swat & Kalam</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Malam Jabba:</strong> Famous for ski resorts, zip-lining, and chairlift rides.</li>
          <li><strong>Mahodand Lake:</strong> A mesmerizing lake accessible via 4x4 jeep from Kalam.</li>
          <li><strong>Ushu Forest:</strong> Dense pine forests offering scenic nature walks and photography spots.</li>
          <li><strong>Fizagat Park:</strong> Located near Mingora, ideal for riverside relaxation.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Best Time to Visit</h2>
        <p>
          Swat Valley is a year-round destination. Visit between <strong>May and October</strong> for pleasant summer weather, or in <strong>January to February</strong> for snowfall and skiing in Malam Jabba.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Book Your Swat Tour with Royal Route</h3>
          <p className="text-blue-800 mb-4">
            Explore Swat & Kalam with our all-inclusive family and group tour packages!
          </p>
          <div className="mt-4">
            <a 
              href="https://wa.me/923074326061" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-bold px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
