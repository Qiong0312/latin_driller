'use client';

import { useSyncExternalStore } from 'react';
import {
  clearAllLocalProgress,
  getProgressCounts,
  hasAnyStoredProgress,
  PROGRESS_EVENT,
} from '@/lib/localProgress';

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

function progressSnapshotKey(): string {
  const c = getProgressCounts();
  const h = hasAnyStoredProgress() ? 1 : 0;
  return `${c.lessonsMarkedDone}\t${h}`;
}

/**
 * Home summary + optional reset. Counts from `localStorage` (not on the server).
 */
export function LocalProgressSummary() {
  const key = useSyncExternalStore(
    subscribe,
    progressSnapshotKey,
    () => '0\t0',
  );
  const [nStr, hasAnyStr] = key.split('\t');
  const lessons = Number.parseInt(nStr ?? '0', 10);
  const hasAny = (hasAnyStr ?? '0') === '1';

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4 text-left text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200">
      <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Your progress (this device)</h2>
      <p className="mb-3">
        Lessons you marked as done: <strong>{lessons}</strong>
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        You choose when a lesson is “done” on each lesson page. Stored in your browser only; another device
        or clearing site data won’t show it.
      </p>
      {hasAny && (
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                'Clear everything stored in this browser for this site? This removes marked lessons, quiz history, and flashcard open counts.',
              )
            ) {
              clearAllLocalProgress();
            }
          }}
          className="mt-3 text-xs text-red-600 underline-offset-2 hover:underline dark:text-red-400"
        >
          Clear all local data
        </button>
      )}
    </div>
  );
}
