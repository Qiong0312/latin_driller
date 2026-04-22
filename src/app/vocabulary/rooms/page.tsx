import Link from "next/link";

export default function RoomsVocabulary() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🏠 Cubicula et Loca Domus (Rooms in Latin)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Learn Latin words for parts of a house and other spaces. Choose a category below to begin:
        </p>

        <div className="space-y-4">
          <Link href="/vocabulary/rooms/living-sleeping">
            <div className="p-4 bg-rose-50 dark:bg-rose-900 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛏️ Living &amp; Sleeping Areas</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Bedroom, dormitory, bed</p>
            </div>
          </Link>

          <Link href="/vocabulary/rooms/eating-cooking">
            <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🍽️ Eating &amp; Cooking</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Kitchen and dining room</p>
            </div>
          </Link>

          <Link href="/vocabulary/rooms/general">
            <div className="p-4 bg-amber-50 dark:bg-amber-900 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🚪 General House Spaces</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Atrium, study, rooms and chambers</p>
            </div>
          </Link>

          <Link href="/vocabulary/rooms/washing">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🛁 Washing &amp; Bathing</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Bath, washing room</p>
            </div>
          </Link>

          <Link href="/vocabulary/rooms/study-work">
            <div className="p-4 bg-violet-50 dark:bg-violet-900 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">📚 Study &amp; Work</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Library and workshop</p>
            </div>
          </Link>

          <Link href="/vocabulary/rooms/outdoor">
            <div className="p-4 bg-lime-50 dark:bg-lime-900 rounded-lg hover:bg-lime-100 dark:hover:bg-lime-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">🌳 Outdoor / Extra Spaces</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Garden and peristyle</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
