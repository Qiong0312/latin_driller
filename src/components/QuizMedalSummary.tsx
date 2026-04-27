'use client';

import { useSyncExternalStore } from 'react';
import {
  CelestialMoonIcon,
  CelestialPlanetIcon,
  CelestialStarIcon,
  StellarDustIcon,
} from '@/components/DailyCelestialIcons';
import { MedalIconImg } from '@/components/ProgressAwardIcons';
import { useIsHydrated } from '@/hooks/useIsHydrated';
import {
  DAILY_DUST_PER_STAR,
  DAILY_MOONS_PER_SUN,
  DAILY_STARS_PER_MOON,
  getDailyTestRewardPanelSnapshot,
  getQuizMedalStatus,
  PROGRESS_EVENT,
  type QuizMedalTier,
} from '@/lib/localProgress';
import { DAILY_TEST_QUIZ_PATH } from '@/lib/trackedLessons';

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

const SERVER_MEDAL = '{"averagePercent":null,"medal":"none"}';
const SERVER_DAILY = '{"scorePercent":null,"dustThisRun":0,"celestial":{"dust":0,"stars":0,"moons":0,"suns":0}}';

export function QuizMedalSummary({ quizPath }: { quizPath: string | null }) {
  const hydrated = useIsHydrated();
  const isDaily = quizPath === DAILY_TEST_QUIZ_PATH;
  const key = useSyncExternalStore(
    subscribe,
    () => {
      if (isDaily) {
        return JSON.stringify(getDailyTestRewardPanelSnapshot());
      }
      return JSON.stringify(getQuizMedalStatus(quizPath ?? ''));
    },
    () => (isDaily ? SERVER_DAILY : SERVER_MEDAL),
  );

  if (isDaily) {
    const snap = JSON.parse(hydrated ? key : SERVER_DAILY) as {
      scorePercent: number | null;
      dustThisRun: number;
      celestial: { dust: number; stars: number; moons: number; suns: number };
    };
    const avg =
      snap.scorePercent === null
        ? 'N/A'
        : `${Math.round(snap.scorePercent * 10) / 10}%`;
    const c = snap.celestial;
    return (
      <div className="mx-auto mb-5 flex w-full max-w-md flex-col gap-2 text-left text-sm text-violet-900 dark:text-violet-100">
        <p className="text-center text-zinc-600 dark:text-zinc-300">
          Score (this test): <strong>{avg}</strong>
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-bold text-violet-700 dark:text-violet-300">
          <span className="inline-block w-24 shrink-0">This run:</span>
          <span className="inline-flex items-center gap-2">
            <StellarDustIcon className="h-8 w-8" />
            <span>
              <strong className="tabular-nums">{snap.dustThisRun}</strong> dust
            </span>
          </span>
        </p>
        <p className="text-xs text-violet-800/90 dark:text-violet-200/90">
          Each daily test adds dust from that test’s score only: 0 below 70%; 1 at 70%+; 2 at 85%+; 3 at 98%+.
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-bold text-violet-700 dark:text-violet-300">
          <span className="inline-block w-24 shrink-0">Dust bank:</span>
          <span className="inline-flex items-center gap-2">
            <StellarDustIcon className="h-8 w-8" />
            <span className="inline-block w-10 text-right tabular-nums">{c.dust}</span>
            <span className="font-medium text-violet-600 dark:text-violet-300">/ {DAILY_DUST_PER_STAR}</span>
          </span>
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-bold text-violet-700 dark:text-violet-300">
          <span className="inline-block w-24 shrink-0">Rewards:</span>
          <span className="inline-flex items-center gap-2">
            <CelestialStarIcon className="h-8 w-8" />
            <span className="inline-block w-10 text-right tabular-nums">{c.stars}</span>
          </span>
          <span className="text-violet-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <CelestialMoonIcon className="h-8 w-8" />
            <span className="inline-block w-10 text-right tabular-nums">{c.moons}</span>
          </span>
          <span className="text-violet-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <CelestialPlanetIcon className="h-8 w-8" />
            <span className="inline-block w-10 text-right tabular-nums">{c.suns}</span>
          </span>
        </p>
        <p className="text-xs text-violet-800/90 dark:text-violet-200/90">
          Progression: {DAILY_DUST_PER_STAR} dust {'->'} 1 star; {DAILY_STARS_PER_MOON} stars {'->'} 1 moon; {DAILY_MOONS_PER_SUN}{' '}
          moons {'->'} 1 planet.
        </p>
      </div>
    );
  }

  const status = JSON.parse(hydrated ? key : SERVER_MEDAL) as { averagePercent: number | null; medal: QuizMedalTier };
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

