import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { AppUsageTracker } from "@/components/AppUsageTracker";
import { ProgressStorageHint } from "@/components/ProgressStorageHint";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latin Driller",
  description: "Learn Latin grammar interactively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-zinc-50 dark:bg-black font-sans">
        <AppUsageTracker />
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <nav>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-zinc-50">Latin Lessons</h2>
            <div className="space-y-4">
              <ul className="space-y-1 ml-4">
                <li>
                  <Link
                    href="/dashboard"
                    className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                  >
                    🏅 My Progress
                  </Link>
                </li>
              </ul>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50">Grammar</h3>
                <ul className="space-y-1 ml-4">
                  <li>
                    <Link
                      href="/grammar/grammatical-gender"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Grammatical Gender
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grammar/cases"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grammar/declensions"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Declensions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grammar/present-tense-active"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Present Tense Active
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grammar/adjectives"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Adjectives
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50">Vocabulary</h3>
                <ul className="space-y-1 ml-4">
                  <li>
                    <Link
                      href="/vocabulary/animals"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Animals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vocabulary/food"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vocabulary/body-parts"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Body Parts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vocabulary/rooms"
                      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                    >
                      Rooms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ProgressStorageHint />
          </nav>
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
