"use client";

import Link from "next/link";
import { ProgressStorageHint } from "@/components/ProgressStorageHint";

const linkClass =
  "block rounded p-2 text-black hover:bg-gray-100 dark:text-zinc-200 dark:hover:bg-gray-700";

type AppNavigationProps = {
  onLinkClick?: () => void;
};

export function AppNavigation({ onLinkClick }: AppNavigationProps) {
  return (
    <nav
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) onLinkClick?.();
      }}
    >
      <h2 className="mb-4 text-xl font-bold text-black dark:text-zinc-50">Latin Lessons</h2>
      <div className="space-y-4">
        <ul className="ml-4 space-y-1">
          <li>
            <Link href="/dashboard" className={linkClass}>
              🏅 My Progress
            </Link>
          </li>
        </ul>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">Grammar</h3>
          <ul className="ml-4 space-y-1">
            <li>
              <Link href="/grammar/grammatical-gender" className={linkClass}>
                Grammatical Gender
              </Link>
            </li>
            <li>
              <Link href="/grammar/cases" className={linkClass}>
                Cases
              </Link>
            </li>
            <li>
              <Link href="/grammar/declensions" className={linkClass}>
                Declensions
              </Link>
            </li>
            <li>
              <Link href="/grammar/present-tense-active" className={linkClass}>
                Present Tense Active
              </Link>
            </li>
            <li>
              <Link href="/grammar/adjectives" className={linkClass}>
                Adjectives
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">Vocabulary</h3>
          <ul className="ml-4 space-y-1">
            <li>
              <Link href="/vocabulary/animals" className={linkClass}>
                Animals
              </Link>
            </li>
            <li>
              <Link href="/vocabulary/food" className={linkClass}>
                Food
              </Link>
            </li>
            <li>
              <Link href="/vocabulary/body-parts" className={linkClass}>
                Body Parts
              </Link>
            </li>
            <li>
              <Link href="/vocabulary/rooms" className={linkClass}>
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/vocabulary/landscape" className={linkClass}>
                Land &amp; landscape
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ProgressStorageHint />
    </nav>
  );
}
