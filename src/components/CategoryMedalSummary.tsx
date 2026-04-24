'use client';

import { useSyncExternalStore } from 'react';
import { MedalIconImg } from '@/components/ProgressAwardIcons';
import { getQuizMedalStatus, PROGRESS_EVENT, type QuizMedalTier } from '@/lib/localProgress';

type Props = {
  title?: string;
  lessonPaths: string[];
};

function subscribe(onChange: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }
  const h = () => onChange();
  window.addEventListener(PROGRESS_EVENT, h);
  window.addEventListener('storage', h);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, h);
    window.removeEventListener('storage', h);
  };
}

function countsForLessonPaths(lessonPaths: string[]): { bronze: number; silver: number; gold: number } {
  const out = { bronze: 0, silver: 0, gold: 0 };
  for (const lessonPath of lessonPaths) {
    const quizPath = `${lessonPath.replace(/\/$/, '')}/test`;
    const medal = getQuizMedalStatus(quizPath).medal;
    if (medal === 'bronze') out.bronze += 1;
    if (medal === 'silver') out.silver += 1;
    if (medal === 'gold') out.gold += 1;
  }
  return out;
}

export function CategoryMedalSummary({ title = 'Category Medals', lessonPaths }: Props) {
  const key = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(countsForLessonPaths(lessonPaths)),
    () => '{"bronze":0,"silver":0,"gold":0}',
  );
  const counts = JSON.parse(key) as { bronze: number; silver: number; gold: number };

  return (
    <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-3 dark:border-sky-800 dark:bg-sky-950/35">
      <p className="text-xs font-medium uppercase tracking-wide text-sky-800 dark:text-sky-300">{title}</p>
      <p className="mt-1 flex flex-wrap items-center justify-center gap-2 text-lg font-bold text-sky-900 dark:text-sky-100">
        <span className="inline-flex items-center gap-1">
          <MedalIconImg tier="bronze" className="h-5 w-5" /> {counts.bronze}
        </span>
        <span className="text-sky-500/80" aria-hidden>
          |
        </span>
        <span className="inline-flex items-center gap-1">
          <MedalIconImg tier="silver" className="h-5 w-5" /> {counts.silver}
        </span>
        <span className="text-sky-500/80" aria-hidden>
          |
        </span>
        <span className="inline-flex items-center gap-1">
          <MedalIconImg tier="gold" className="h-5 w-5" /> {counts.gold}
        </span>
      </p>
    </div>
  );
}

