import Link from "next/link";

export default function Food() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Cibus (Food)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Here are some common Latin words for food and drink. Many English words related to food are derived from Latin, and learning these basic terms will help you understand both ancient Roman cuisine and modern food vocabulary.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🍞 Basic Foods (Cibus Communis)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>panis</strong> – bread</li>
              <li><strong>caseus</strong> – cheese</li>
              <li><strong>ovum</strong> – egg</li>
              <li><strong>cibus</strong> – food</li>
              <li><strong>cena</strong> – dinner / meal</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🍎 Fruits (Fructus)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>malum</strong> – apple</li>
              <li><strong>pirum</strong> – pear</li>
              <li><strong>uva</strong> – grape</li>
              <li><strong>ficus</strong> – fig</li>
              <li><strong>cerasum</strong> – cherry</li>
              <li><strong>prunum</strong> – plum</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🥕 Vegetables (Holera)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>carota</strong> – carrot</li>
              <li><strong>lactuca</strong> – lettuce</li>
              <li><strong>cepa</strong> – onion</li>
              <li><strong>allium</strong> – garlic</li>
              <li><strong>fungus</strong> – mushroom</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🍖 Meat & Protein (Caro)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>caro</strong> – meat</li>
              <li><strong>porcus</strong> – pork / pig</li>
              <li><strong>bos</strong> – cow / beef</li>
              <li><strong>gallina</strong> – chicken</li>
              <li><strong>piscis</strong> – fish</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🍯 Drinks & Others (Potus et Alia)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>aqua</strong> – water</li>
              <li><strong>lac</strong> – milk</li>
              <li><strong>vinum</strong> – wine</li>
              <li><strong>mel</strong> – honey</li>
              <li><strong>sal</strong> – salt</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/food/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}