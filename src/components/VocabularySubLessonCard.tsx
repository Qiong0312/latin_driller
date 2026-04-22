'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { isLessonDone, PROGRESS_EVENT } from '@/lib/localProgress';

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

function doneSnapshot(lessonPath: string): string {
  return isLessonDone(lessonPath) ? '1' : '0';
}

type VocabularySubLessonCardProps = {
  href: string;
  lessonPath: string;
  cardClassName: string;
  children: React.ReactNode;
};

/**
 * Sub-lesson row on a vocabulary category hub: shows a tick on the right when the lesson is marked done.
 */
export function VocabularySubLessonCard({ href, lessonPath, cardClassName, children }: VocabularySubLessonCardProps) {
  const done =
    useSyncExternalStore(
      subscribe,
      () => doneSnapshot(lessonPath),
      () => '0',
    ) === '1';

  return (
    <Link href={href} className="block">
      <div className={`${cardClassName} flex items-center gap-3`}>
        <div className="min-w-0 flex-1">{children}</div>
        {done && (
          <span
            className="shrink-0 pr-0.5 text-2xl leading-none text-emerald-600 dark:text-emerald-400"
            aria-label="Marked done for you"
          >
            ✓
          </span>
        )}
      </div>
    </Link>
  );
}
