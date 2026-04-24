'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { MedalIconImg } from '@/components/ProgressAwardIcons';
import { useIsHydrated } from '@/hooks/useIsHydrated';
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

const SERVER_STATUS = '{"done":false,"medal":"none"}';

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
  const hydrated = useIsHydrated();
  const key = useSyncExternalStore(
    subscribe,
    () => {
      const done = doneSnapshot(lessonPath) === '1';
      const quizPath = `${lessonPath.replace(/\/$/, '')}/test`;
      const medal = getQuizMedalStatus(quizPath).medal;
      return JSON.stringify({ done, medal });
    },
    () => SERVER_STATUS,
  );
  const { done, medal } = JSON.parse(hydrated ? key : SERVER_STATUS) as { done: boolean; medal: QuizMedalTier };
  const showMedal = medal !== 'none';

  return (
    <Link href={href} className="block">
      <div className={`${cardClassName} flex items-center gap-3`}>
        <div className="min-w-0 flex-1">{children}</div>
        <div className="flex shrink-0 items-center gap-2 pr-0.5">
          <span
            className={`inline-flex h-6 w-6 items-center justify-center ${showMedal ? '' : 'opacity-0'}`}
            aria-label={showMedal ? `Quiz medal: ${medal}` : undefined}
            aria-hidden={!showMedal}
          >
            {showMedal ? <MedalIconImg tier={medal} className="h-6 w-6" /> : '•'}
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
