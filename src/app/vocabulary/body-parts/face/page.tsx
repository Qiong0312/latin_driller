import Link from "next/link";

export default function FaceBodyParts() {
  return (
    <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg rounded-lg mx-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
        😊 Face Parts (Facies)
      </h1>
      <div className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-4">
        <ul className="list-disc list-inside space-y-3 pl-6">
          <li><strong>facies</strong> – face</li>
          <li><strong>frons</strong> – forehead</li>
          <li><strong>oculus</strong> – eye</li>
          <li><strong>cilium</strong> – eyelash</li>
          <li><strong>nasus</strong> – nose</li>
          <li><strong>aures</strong> – ears</li>
          <li><strong>maxilla</strong> – jaw</li>
          <li><strong>dents</strong> – tooth / teeth</li>
          <li><strong>lingua</strong> – tongue</li>
        </ul>
      </div>
      <div className="text-center mt-8 space-x-4">
        <Link href="/body-parts/face/test">
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