'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { getQuizMedalStatus, isLessonDone, PROGRESS_EVENT, type QuizMedalTier } from '@/lib/localProgress';

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

function medalIcon(medal: QuizMedalTier): string {
  if (medal === 'gold') return '🥇';
  if (medal === 'silver') return '🥈';
  if (medal === 'bronze') return '🥉';
  return '';
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
  const status = useSyncExternalStore(
    subscribe,
    () => {
      const done = doneSnapshot(lessonPath) === '1';
      const quizPath = `${lessonPath.replace(/\/$/, '')}/test`;
      const medal = getQuizMedalStatus(quizPath).medal;
      return JSON.stringify({ done, medal });
    },
    () => '{"done":false,"medal":"none"}',
  );
  const { done, medal } = JSON.parse(status) as { done: boolean; medal: QuizMedalTier };
  const icon = medalIcon(medal);

  return (
    <Link href={href} className="block">
      <div className={`${cardClassName} flex items-center gap-3`}>
        <div className="min-w-0 flex-1">{children}</div>
        <div className="flex shrink-0 items-center gap-2 pr-0.5">
          <span
            className={`inline-flex h-6 w-6 items-center justify-center text-xl leading-none ${icon ? '' : 'opacity-0'}`}
            aria-label={icon ? `Quiz medal: ${medal}` : undefined}
          >
            {icon || '•'}
          </span>
          <span
            className={`inline-flex h-6 w-6 items-center justify-center text-2xl leading-none text-emerald-600 dark:text-emerald-400 ${done ? '' : 'opacity-0'}`}
            aria-label={done ? 'Marked done for you' : undefined}
          >
            ✓
          </span>
        </div>
      </div>
    </Link>
  );
}
