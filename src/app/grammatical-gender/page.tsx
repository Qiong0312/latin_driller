import Link from "next/link";

export default function GrammaticalGender() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Grammatical Gender
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Latin nouns (i.e. persons or objects) all have either a natural or grammatical gender. These genders do not always follow logic like in English (where people have genders, but objects do not). Instead, in Latin, the gender of a noun is just part of the word itself.
        </p>
        <p>
          There are three grammatical genders: masculine, feminine, and neuter.
        </p>
        <ul className="list-disc list-inside space-y-4 pl-6">
          <li>
            <strong>Masculine:</strong> These can be words for male people or animals, like <em>vir</em> ("man") or <em>puer</em> ("boy"). Some objects are also masculine, like <em>fluvius</em> ("river"). Many masculine nouns end in -us or -r in the nominative singular.
          </li>
          <li>
            <strong>Feminine:</strong> These are sometimes words for female people or animals, like <em>puella</em> ("girl") or <em>māter</em> ("mother"), but objects can also be feminine, like <em>tabula</em> ("tablet"). Many feminine nouns end in -a in the nominative singular.
          </li>
          <li>
            <strong>Neuter:</strong> These are often objects or things that do not have a specific gender, like <em>templum</em> ("temple") or <em>bellum</em> ("war"). Many neuter nouns end in -um in the nominative singular.
          </li>
        </ul>
      </div>
      <div className="text-center mt-8">
        <Link href="/grammatical-gender/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}