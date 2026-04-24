'use client';

import { useSyncExternalStore } from 'react';
import { MedalIconImg } from '@/components/ProgressAwardIcons';
import { getQuizMedalStatus, PROGRESS_EVENT, type QuizMedalTier } from '@/lib/localProgress';

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

function medalLabel(medal: QuizMedalTier): string {
  if (medal === 'gold') return 'Gold';
  if (medal === 'silver') return 'Silver';
  if (medal === 'bronze') return 'Bronze';
  return 'None';
}

function medalStyles(medal: QuizMedalTier): string {
  if (medal === 'gold') {
    return 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100';
  }
  if (medal === 'silver') {
    return 'border-slate-300 bg-slate-50 text-slate-900 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-100';
  }
  if (medal === 'bronze') {
    return 'border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-700 dark:bg-orange-950/40 dark:text-orange-100';
  }
  return 'border-zinc-300 bg-zinc-50 text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-300';
}

export function QuizMedalSummary({ quizPath }: { quizPath: string | null }) {
  const key = useSyncExternalStore(
    subscribe,
    () => {
      const status = getQuizMedalStatus(quizPath ?? '');
      return JSON.stringify(status);
    },
    () => '{"averagePercent":null,"medal":"none"}',
  );

  const status = JSON.parse(key) as { averagePercent: number | null; medal: QuizMedalTier };
  const avg =
    status.averagePercent === null
      ? 'N/A'
      : `${Math.round(status.averagePercent * 10) / 10}%`;
  const medal = medalLabel(status.medal);

  return (
    <div className="mb-5 flex flex-col items-center gap-2 text-center">
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Average score: <strong>{avg}</strong>
      </p>
      <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-base font-bold shadow-sm ${medalStyles(status.medal)}`}>
        <span className="inline-flex shrink-0 items-center justify-center" aria-hidden>
          <MedalIconImg tier={status.medal} className="h-7 w-7" />
        </span>
        <span>Medal: {medal}</span>
      </div>
    </div>
  );
}

