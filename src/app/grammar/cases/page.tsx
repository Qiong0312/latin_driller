import Link from "next/link";

export default function Cases() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Cases
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          In Latin, nouns and adjectives change their endings depending on their function in the sentence. These specific forms and uses are organized into groups called cases. English also has cases, such as the genitive case indicating possession, "Marcus's book." Here the -s indicates possession.
        </p>
        <p>
          Latin has six cases with their own functions: Nominative, Genitive, Dative, Accusative, Ablative, and Vocative.
        </p>
        <ul className="list-disc list-inside space-y-4 pl-6">
          <li>
            <strong>Nominative:</strong> Used for the subject of the sentence (who or what does the action).
          </li>
          <li>
            <strong>Genitive:</strong> Shows possession ("of" something or someone).
          </li>
          <li>
            <strong>Dative:</strong> Used for the indirect object (to or for someone/something).
          </li>
          <li>
            <strong>Accusative:</strong> Used for the direct object (who or what receives the action).
          </li>
          <li>
            <strong>Ablative:</strong> Used for means, manner, or separation (by, with, from, etc.) and with certain prepositions.
          </li>
          <li>
            <strong>Vocative:</strong> Used for direct address (calling or speaking to someone).
          </li>
        </ul>
        <p>
          The particular ending of a word indicates its case and, consequently, its function in the sentence. For example: <em>Marcus Brūtī librum habet.</em> The -ī in <em>Brūtī</em> shows that it is the genitive case (possessive); the -um in <em>librum</em> marks the accusative (object of the action of having). Thus, the sentence means "Marcus has Brutus's book."
        </p>
      </div>
      <div className="text-center mt-8">
        <Link href="/cases/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}