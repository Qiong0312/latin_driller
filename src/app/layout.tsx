import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <nav>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-zinc-50">Latin Lessons</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/grammatical-gender"
                  className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                >
                  Grammatical Gender
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-zinc-200"
                >
                  Cases
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
