"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { isLessonDone, loadProgress, PROGRESS_EVENT } from "@/lib/localProgress";
import { getVocabularySubLessonsForCategory } from "@/lib/vocabularyCategoryTree";
import { VOCABULARY_CATEGORY_NAV } from "@/lib/vocabularyLessonNavigation";

/** Inactive nav row */
const navLinkBase =
  "block rounded px-2 py-2 text-black transition-colors hover:bg-gray-100 dark:text-zinc-200 dark:hover:bg-gray-700";

/** Active = same surface as hovered row (persistent “hover” look). */
const navLinkActive =
  "block rounded px-2 py-2 text-black bg-gray-100 transition-colors dark:bg-gray-700 dark:text-zinc-200";

function normalizePath(pathname: string): string {
  const p = pathname.split("?")[0] ?? pathname;
  if (p.length > 1 && p.endsWith("/")) {
    return p.replace(/\/+$/, "") ?? p;
  }
  return p;
}

/** Lesson or category hub: active on exact path or any sub-route (quiz, flashcards, nested vocab). */
function routeMatchesSubtree(href: string, pathname: string): boolean {
  const p = normalizePath(pathname);
  const h = normalizePath(href);
  return p === h || p.startsWith(`${h}/`);
}

function linkClass(active: boolean, layoutClass?: string): string {
  const base = active ? navLinkActive : navLinkBase;
  return layoutClass ? `${base} ${layoutClass}` : base;
}

function ariaCurrent(active: boolean): "page" | undefined {
  return active ? "page" : undefined;
}

type AppNavigationProps = {
  onLinkClick?: () => void;
};

const GRAMMAR_LINKS = [
  { href: "/grammar/grammatical-gender", label: "Grammatical Gender" },
  { href: "/grammar/cases", label: "Cases" },
  { href: "/grammar/ablative-case", label: "Ablative Case" },
  { href: "/grammar/declensions", label: "Declensions" },
  { href: "/grammar/present-tense-active", label: "Present Tense Active" },
  { href: "/grammar/present-tense-passive", label: "Present Tense Passive" },
  { href: "/grammar/perfect-tense-active", label: "Perfect Tense Active" },
  { href: "/grammar/adjectives", label: "Adjectives" },
  { href: "/grammar/relative-pronoun", label: "Relative Pronoun" },
  { href: "/grammar/adjectives-adverbial-force", label: "Adjectives with adverbial force" },
  { href: "/grammar/imperative", label: "Imperative" },
  { href: "/grammar/ne-questions", label: "-ne Questions" },
  { href: "/grammar/demonstrative-pronouns-i", label: "Demonstrative pronouns I" },
  { href: "/grammar/demonstrative-pronouns-ii", label: "Demonstrative pronouns II" },
  { href: "/grammar/demonstrative-pronouns-iii", label: "Demonstrative pronouns III" },
  { href: "/grammar/demonstrative-pronouns-iv", label: "Demonstrative pronouns IV" },
  { href: "/grammar/prepositions", label: "Prepositions" },
] as const;

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }
  const h = () => onChange();
  window.addEventListener(PROGRESS_EVENT, h);
  window.addEventListener("storage", h);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, h);
    window.removeEventListener("storage", h);
  };
}

function ProgressMark({ done, inProgress }: { done: boolean; inProgress?: boolean }) {
  if (done) {
    return <span className="inline-block min-w-5 text-center text-emerald-600 dark:text-emerald-400">✓</span>;
  }
  if (inProgress) {
    return <span className="inline-block min-w-5 text-center text-amber-600 dark:text-amber-400">◔</span>;
  }
  return <span className="inline-block min-w-5 text-center">&nbsp;</span>;
}

export function AppNavigation({ onLinkClick }: AppNavigationProps) {
  const pathname = usePathname() ?? "";
  const hydrated = useIsHydrated();
  useSyncExternalStore(
    subscribe,
    () => (hydrated ? JSON.stringify(loadProgress().lessonsDone) : "{}"),
    () => "{}",
  );

  const normalized = normalizePath(pathname);
  const dashboardRootActive = normalized === "/dashboard";
  const dashboardDailyActive = normalized.startsWith("/dashboard/daily");

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
            <Link
              href="/dashboard"
              className={linkClass(dashboardRootActive, "flex items-center gap-2")}
              aria-current={ariaCurrent(dashboardRootActive)}
            >
              <span className="inline-flex w-5 justify-center" aria-hidden>
                🏆
              </span>
              <span>My Progress</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/daily/test"
              className={linkClass(dashboardDailyActive, "flex items-center gap-2")}
              aria-current={ariaCurrent(dashboardDailyActive)}
            >
              <span className="inline-flex w-5 justify-center" aria-hidden>
                ✏️
              </span>
              <span>Daily test</span>
            </Link>
          </li>
        </ul>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">Grammar</h3>
          <ul className="ml-4 space-y-1">
            {GRAMMAR_LINKS.map((item) => {
              const gActive = routeMatchesSubtree(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={linkClass(gActive, "flex items-center justify-between gap-2")}
                    aria-current={ariaCurrent(gActive)}
                  >
                    <span>{item.label}</span>
                    <ProgressMark done={hydrated ? isLessonDone(item.href) : false} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-zinc-50">Vocabulary</h3>
          <ul className="ml-4 space-y-1">
            {VOCABULARY_CATEGORY_NAV.map((item) => {
              const subs = hydrated ? getVocabularySubLessonsForCategory(item.href) : [];
              const doneCount = subs.filter((s) => isLessonDone(s)).length;
              const done = subs.length > 0 && doneCount === subs.length;
              const inProgress = doneCount > 0 && !done;
              const vActive = routeMatchesSubtree(item.href, pathname);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={linkClass(vActive, "flex items-center justify-between gap-2")}
                    aria-current={ariaCurrent(vActive)}
                  >
                    <span>{item.label}</span>
                    <ProgressMark done={done} inProgress={inProgress} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
