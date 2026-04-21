import Link from "next/link";

export default function BasicBodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        🧍 Basic Body Parts (Corpus)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>corpus</strong> – body</li>
          <li><strong>caput</strong> – head</li>
          <li><strong>collum</strong> – neck</li>
          <li><strong>umerus</strong> – shoulder</li>
          <li><strong>brachium</strong> – arm</li>
          <li><strong>manus</strong> – hand</li>
          <li><strong>digitus</strong> – finger</li>
          <li><strong>pectus</strong> – chest</li>
          <li><strong>venter</strong> – belly / stomach</li>
          <li><strong>tergum</strong> – back</li>
          <li><strong>crus</strong> – leg</li>
          <li><strong>pes</strong> – foot</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/body-parts/basic/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
        <Link href="/body-parts">
          <button className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Body Parts
          </button>
        </Link>
      </div>
    </div>
  );
}