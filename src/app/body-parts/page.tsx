import Link from "next/link";

export default function BodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        Corpus (Body Parts)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-6">
        <p>
          Here are some common Latin words for body parts. Many English medical and anatomical terms are derived from Latin, making this vocabulary essential for understanding both classical texts and modern scientific terminology.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🧍 Basic Body Parts (Corpus)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
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

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🙂 Face (Facies)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>facies</strong> – face</li>
              <li><strong>oculus</strong> – eye</li>
              <li><strong>auris</strong> – ear</li>
              <li><strong>nasus</strong> – nose</li>
              <li><strong>os</strong> – mouth</li>
              <li><strong>dens</strong> – tooth</li>
              <li><strong>lingua</strong> – tongue</li>
              <li><strong>labrum</strong> – lip</li>
              <li><strong>frons</strong> – forehead</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
              🧠 Inside the Body (Interiora)
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li><strong>cor</strong> – heart</li>
              <li><strong>cerebrum</strong> – brain</li>
              <li><strong>sanguis</strong> – blood</li>
              <li><strong>ossa</strong> (plural) – bones</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/body-parts/test">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}