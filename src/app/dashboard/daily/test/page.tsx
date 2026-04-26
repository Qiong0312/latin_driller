'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { CategoryVocabularyTest } from "@/components/CategoryVocabularyTest";
import { DAILY_TEST_MAX_QUESTIONS } from "@/lib/trackedLessons";
import { getDailyTestFullBank } from "@/lib/buildDailyTestDeck";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import type { QuizQuestion } from "@/lib/buildVocabularyQuestionBank";

export default function DailyTestPage() {
  const hydrated = useIsHydrated();
  const [bank, setBank] = useState<QuizQuestion[] | null>(null);
  const [error, setError] = useState<"no_lessons_done" | "no_questions" | null>(null);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    const r = getDailyTestFullBank();
    if (!r.ok) {
      setError(r.reason);
      return;
    }
    setBank(r.questions);
  }, [hydrated]);

  if (!hydrated) {
    return (
      <div className="app-panel">
        <p className="text-center text-zinc-600 dark:text-zinc-300">Loading…</p>
      </div>
    );
  }

  if (error === "no_lessons_done") {
    return (
      <div className="app-panel">
        <h1 className="mb-4 text-center text-3xl font-bold text-black sm:text-4xl dark:text-zinc-50">Daily test</h1>
        <p className="mb-4 text-center text-zinc-700 dark:text-zinc-200">
          Daily tests use questions from lessons you have already marked as done on each lesson page.
        </p>
        <p className="mb-6 text-center text-zinc-700 dark:text-zinc-200">
          You do not have any lessons marked as done yet. Open a few lessons, use “Mark this lesson as done for me”
          when you are ready, then come back here. Your first daily test can include up to {DAILY_TEST_MAX_QUESTIONS}{" "}
          questions.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/grammar/grammatical-gender"
            className="text-sky-700 underline-offset-2 hover:underline dark:text-sky-400"
          >
            Start with a grammar lesson →
          </Link>
          <Link
            href="/vocabulary/animals/common"
            className="text-sky-700 underline-offset-2 hover:underline dark:text-sky-400"
          >
            Or vocabulary →
          </Link>
        </div>
        <p className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm text-zinc-500 underline-offset-2 hover:underline dark:text-zinc-400">
            ← Back to My Progress
          </Link>
        </p>
      </div>
    );
  }

  if (error === "no_questions" || (bank && bank.length === 0)) {
    return (
      <div className="app-panel">
        <h1 className="mb-4 text-center text-3xl font-bold text-black dark:text-zinc-50">Daily test</h1>
        <p className="text-center text-zinc-700 dark:text-zinc-200">
          No questions could be built from your done lessons. Try marking another lesson on the list, or report this
          issue.
        </p>
        <p className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm text-zinc-500 underline-offset-2 hover:underline dark:text-zinc-400">
            ← Back to My Progress
          </Link>
        </p>
      </div>
    );
  }

  if (bank === null) {
    return (
      <div className="app-panel">
        <p className="text-center text-zinc-600 dark:text-zinc-300">Preparing your daily test…</p>
      </div>
    );
  }

  return (
    <CategoryVocabularyTest
      title="Daily test"
      resultsHeading="Daily test — results"
      backToCategoryHref="/dashboard"
      backToCategoryLabel="Back to My Progress"
      questions={bank}
      maxQuestions={DAILY_TEST_MAX_QUESTIONS}
    />
  );
}
