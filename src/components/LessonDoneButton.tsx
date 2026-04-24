'use client';

import { useSyncExternalStore } from 'react';
import { useIsHydrated } from '@/hooks/useIsHydrated';
import {
  isLessonDone,
  PROGRESS_EVENT,
  setLessonDone,
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

function snapshot(lessonPath: string): string {
  return isLessonDone(lessonPath) ? '1' : '0';
}

/**
 * Manual “I’m done with this lesson” control. Stored in localStorage; not implied by quiz/flashcards.
 */
export function LessonDoneButton({ lessonPath }: { lessonPath: string }) {
  const hydrated = useIsHydrated();
  const p = useSyncExternalStore(
    subscribe,
    () => snapshot(lessonPath),
    () => '0',
  );
  const done = (hydrated ? p : '0') === '1';

  return (
    <div className="flex max-w-md flex-col items-center gap-1.5 text-center">
      <button
        type="button"
        onClick={() => setLessonDone(lessonPath, !done)}
        className={
          done
            ? 'rounded-lg border-2 border-emerald-500 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-900 shadow-sm transition hover:bg-emerald-100/90 dark:border-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-100 dark:hover:bg-emerald-900/60'
            : 'rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50/80 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100/80 dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-zinc-500'
        }
        aria-pressed={done}
      >
        {done ? '✓ Done for me' : 'Mark this lesson as done for me'}
      </button>
      <p className="text-xs text-zinc-500 dark:text-zinc-500">
        {done
          ? 'Tap the button to undo if you want to keep studying this page.'
          : 'Use this when you are satisfied with the lesson, not from quiz or flashcards alone.'}
      </p>
    </div>
  );
}
