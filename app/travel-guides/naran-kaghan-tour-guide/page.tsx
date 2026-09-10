import Link from 'next/link';

export default function NaranGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Ultimate Naran Kaghan Travel Guide: Best Places & Tips
      </h1>
      
      <p className="text-gray-600 mb-6 italic">
        Published by Royal Route Travel & Tours | Complete Sightseeing & Route Plan
      </p>

      <div className="prose max-w-none text-gray-800 space-y-6">
        <p>
          Naran Kaghan Valley is one of the most breathtaking destinations in Northern Pakistan. Surrounded by pine forests, crystal-clear rivers, and alpine lakes, it offers an unforgettable trip for families and group tours.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Top Attractions to Visit in Naran</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Lake Saif-ul-Muluk:</strong> Famous for its emerald-green waters and stunning views of Malika Parbat.</li>
          <li><strong>Babusar Top:</strong> Situated at 13,690 feet, providing panoramic mountain views.</li>
          <li><strong>Lulusar Lake:</strong> A large, scenic high-altitude lake on the way to Babusar Pass.</li>
          <li><strong>Siri Paye Meadows:</strong> Lush green pastures accessible via Shogran.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Best Time to Visit</h2>
        <p>
          The best time to explore Naran Kaghan is from <strong>May to September</strong>, when Babusar Pass remains open and weather conditions are pleasant.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Book Your Naran Tour with Royal Route</h3>
          <p className="text-blue-800 mb-4">
            Enjoy a hassle-free tour package including luxury transport, hotel stay, and guided sightseeing!
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
