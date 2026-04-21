import Link from "next/link";

export default function Animals() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Animalia (Animals)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Here are some common Latin words for animals. Latin animal names often reflect their characteristics or origins, and many English words for animals are derived from Latin.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🐾 Animalia Communia (Common Animals)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>Canis</strong> – Dog</li>
              <li><strong>Feles</strong> – Cat</li>
              <li><strong>Equus</strong> – Horse</li>
              <li><strong>Vacca</strong> – Cow</li>
              <li><strong>Porcus</strong> – Pig</li>
              <li><strong>Ovis</strong> – Sheep</li>
              <li><strong>Capra</strong> – Goat</li>
              <li><strong>Asinus</strong> – Donkey</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🐅 Animalia Fera (Wild Animals)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>Leo</strong> – Lion</li>
              <li><strong>Tigris</strong> – Tiger</li>
              <li><strong>Ursus</strong> – Bear</li>
              <li><strong>Lupus</strong> – Wolf</li>
              <li><strong>Vulpes</strong> – Fox</li>
              <li><strong>Cervus</strong> – Deer</li>
              <li><strong>Elephantus</strong> – Elephant</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🐦 Aves (Birds)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>Avis</strong> – Bird</li>
              <li><strong>Aquila</strong> – Eagle</li>
              <li><strong>Columba</strong> – Dove / Pigeon</li>
              <li><strong>Corvus</strong> – Crow</li>
              <li><strong>Passer</strong> – Sparrow</li>
              <li><strong>Gallina</strong> – Hen</li>
              <li><strong>Gallus</strong> – Rooster</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🐟 Animalia Marina (Sea Animals)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>Piscis</strong> – Fish</li>
              <li><strong>Delphinus</strong> – Dolphin</li>
              <li><strong>Cetus</strong> – Whale</li>
              <li><strong>Canis Marinus</strong> – Shark</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🐍 Animalia Parva (Small Creatures)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>Mus</strong> – Mouse</li>
              <li><strong>Rana</strong> – Frog</li>
              <li><strong>Serpens</strong> – Snake</li>
              <li><strong>Apis</strong> – Bee</li>
              <li><strong>Formica</strong> – Ant</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/animals/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}