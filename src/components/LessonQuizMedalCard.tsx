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

export function LessonQuizMedalCard({ quizPath }: { quizPath: string }) {
  const key = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(getQuizMedalStatus(quizPath)),
    () => '{"averagePercent":null,"medal":"none"}',
  );
  const status = JSON.parse(key) as { averagePercent: number | null; medal: QuizMedalTier };
  const avg = status.averagePercent === null ? 'N/A' : `${Math.round(status.averagePercent * 10) / 10}%`;

  return (
    <div className="w-full max-w-md rounded-lg border border-sky-200 bg-sky-50/80 p-3 text-center shadow-sm dark:border-sky-800 dark:bg-sky-950/40">
      <p className="text-xs font-medium uppercase tracking-wide text-sky-800 dark:text-sky-300">Quiz Medal</p>
      <p className="mt-1 flex items-center justify-center gap-2 text-lg font-bold text-sky-900 dark:text-sky-100">
        <MedalIconImg tier={status.medal} className="h-8 w-8" />
        <span>{medalLabel(status.medal)}</span>
      </p>
      <p className="mt-1 text-sm text-sky-800 dark:text-sky-200">Average score: <strong>{avg}</strong></p>
      <p className="mt-1 text-xs text-sky-700/90 dark:text-sky-300/90">Bronze 70%+ • Silver 85%+ • Gold 98%+</p>
    </div>
  );
}

