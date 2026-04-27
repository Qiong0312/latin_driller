'use client';

import { useMemo, useSyncExternalStore } from 'react';
import {
  CelestialMoonIcon,
  CelestialPlanetIcon,
  CelestialStarIcon,
  StellarDustIcon,
} from '@/components/DailyCelestialIcons';
import { MedalIconImg, TrophyIconImg } from '@/components/ProgressAwardIcons';
import { useIsHydrated } from '@/hooks/useIsHydrated';
import {
  clearAllLocalProgress,
  DAILY_DUST_PER_STAR,
  DAILY_MOONS_PER_SUN,
  DAILY_STARS_PER_MOON,
  getDailyTestCelestialProgress,
  getLessonQuizMedalCounts,
  getQuizTrophyCounts,
  hasAnyStoredProgress,
  isLessonDone,
  loadProgress,
  PROGRESS_EVENT,
  QuizProgressEntry,
} from '@/lib/localProgress';
import {
  DAILY_TEST_QUIZ_PATH,
  GRAMMAR_LESSON_PATHS,
  VOCABULARY_LESSON_PATHS,
} from '@/lib/trackedLessons';

const STREAK_MILESTONES = [1, 3, 5, 10, 20, 30, 60, 100] as const;

type QuizNode = {
  attempts: number;
  correct: number;
  questions: number;
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

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function parseDayKey(key: string): Date {
  const [y, m, d] = key.split('-').map((x) => Number.parseInt(x, 10));
  return new Date(y, (m || 1) - 1, d || 1);
}

function shiftDays(date: Date, delta: number): Date {
  const x = new Date(date);
  x.setDate(x.getDate() + delta);
  return x;
}

function percent(correct: number, total: number): string {
  if (total <= 0) {
    return '0%';
  }
  return `${Math.round((correct / total) * 100)}%`;
}

function lessonAchievement(done: number, total: number): { title: string; icon: string; pct: number } | null {
  if (total <= 0) {
    return null;
  }
  const pct = Math.round((done / total) * 100);
  if (pct >= 100) return { title: 'Legendary Master', icon: '👑', pct };
  if (pct >= 90) return { title: 'Grand Scholar', icon: '🏆', pct };
  if (pct >= 70) return { title: 'Knowledge Champion', icon: '🎯', pct };
  if (pct >= 50) return { title: 'Steady Learner', icon: '📘', pct };
  if (pct >= 30) return { title: 'Rising Learner', icon: '🌱', pct };
  if (pct >= 10) return { title: 'Curious Starter', icon: '✨', pct };
  return { title: 'Novice Explorer', icon: '🧭', pct };
}

function nextMilestoneTarget(current: number): number | null {
  for (const step of STREAK_MILESTONES) {
    if (current < step) return step;
  }
  return null;
}

function normalizeQuizStats(entry: QuizProgressEntry) {
  const attempts = entry.attempts || 0;
  const inferredTotal = attempts * (entry.lastTotal || 0);
  const inferredCorrect = attempts * (entry.lastScore || 0);
  const questions = entry.totalQuestions ?? inferredTotal;
  const correct = entry.totalCorrect ?? inferredCorrect;
  return { attempts, correct, questions };
}

function quizGroup(path: string): 'Grammar' | 'Vocabulary' | 'Daily test' | null {
  if (path === '/dashboard/daily/test') {
    return 'Daily test';
  }
  const parts = path.split('/').filter(Boolean);
  if (parts.length < 2 || parts[parts.length - 1] !== 'test') {
    return null;
  }

  if (parts[0] === 'grammar') {
    return 'Grammar';
  }

  if (parts[0] === 'vocabulary') {
    return 'Vocabulary';
  }

  return null;
}

const SERVER_SNAPSHOT = '{"lessonsDone":{},"quizzes":{},"activityDays":{},"hasAny":false}';

type ProgressSnapshot = {
  lessonsDone: Record<string, true>;
  quizzes: Record<string, QuizProgressEntry>;
  activityDays: Record<string, true>;
  hasAny: boolean;
};

function buildSnapshotKey(): string {
  const d = loadProgress();
  return JSON.stringify({
    lessonsDone: d.lessonsDone,
    quizzes: d.quizzes,
    activityDays: d.activityDays,
    dailyTestCelestial: d.dailyTestCelestial,
    hasAny: hasAnyStoredProgress(),
  });
}

export function LocalProgressSummary() {
  const hydrated = useIsHydrated();
  const key = useSyncExternalStore(subscribe, buildSnapshotKey, () => SERVER_SNAPSHOT);
  const data = useMemo((): ProgressSnapshot => {
    if (!hydrated) {
      return JSON.parse(SERVER_SNAPSHOT) as ProgressSnapshot;
    }
    return JSON.parse(key) as ProgressSnapshot;
  }, [hydrated, key]);

  const grammarDone = useMemo(
    () => (hydrated ? GRAMMAR_LESSON_PATHS.filter((p) => isLessonDone(p)).length : 0),
    [hydrated, key],
  );
  const vocabDone = useMemo(
    () => (hydrated ? VOCABULARY_LESSON_PATHS.filter((p) => isLessonDone(p)).length : 0),
    [hydrated, key],
  );
  const totalLessonsDone = grammarDone + vocabDone;
  const totalLessons = GRAMMAR_LESSON_PATHS.length + VOCABULARY_LESSON_PATHS.length;
  const lessonTitle = lessonAchievement(totalLessonsDone, totalLessons);

  const days = Object.keys(data.activityDays).sort();
  const daysUsed = days.length;

  const daySet = new Set(days);
  let currentStreak = 0;
  let probe = new Date();
  while (daySet.has(dayKey(probe))) {
    currentStreak += 1;
    probe = shiftDays(probe, -1);
  }

  let bestStreak = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const k of days) {
    const now = parseDayKey(k);
    if (!prev) {
      run = 1;
    } else {
      const prevPlusOne = dayKey(shiftDays(prev, 1));
      run = prevPlusOne === k ? run + 1 : 1;
    }
    if (run > bestStreak) {
      bestStreak = run;
    }
    prev = now;
  }

  const streakHits = STREAK_MILESTONES.filter((m) => currentStreak >= m);
  const topStreakMilestone = streakHits[streakHits.length - 1] ?? 0;
  const nextDaysMilestone = nextMilestoneTarget(daysUsed);
  const nextStreakBadge = nextMilestoneTarget(currentStreak);

  const quizTree: Record<string, QuizNode> = {};
  let totalLessonQuizAttempts = 0;
  for (const [path, entry] of Object.entries(data.quizzes)) {
    const groupName = quizGroup(path);
    if (!groupName || groupName === 'Daily test') {
      continue;
    }
    const stat = normalizeQuizStats(entry);
    totalLessonQuizAttempts += stat.attempts;

    const group = (quizTree[groupName] ??= {
      attempts: 0,
      correct: 0,
      questions: 0,
    });
    group.attempts += stat.attempts;
    group.correct += stat.correct;
    group.questions += stat.questions;
  }

  const dailyEntry = data.quizzes[DAILY_TEST_QUIZ_PATH];
  const dailyTestStat = dailyEntry ? normalizeQuizStats(dailyEntry) : { attempts: 0, correct: 0, questions: 0 };

  const lessonMedalCounts = useMemo(
    () => (hydrated ? getLessonQuizMedalCounts() : { bronze: 0, silver: 0, gold: 0 }),
    [hydrated, key],
  );
  const lessonTrophyCounts = useMemo(
    () =>
      hydrated
        ? getQuizTrophyCounts(lessonMedalCounts.gold)
        : { bronzeTrophies: 0, silverTrophies: 0, goldTrophies: 0 },
    [hydrated, lessonMedalCounts.gold],
  );

  const dailyCelestial = useMemo(
    () =>
      hydrated
        ? getDailyTestCelestialProgress()
        : { dust: 0, stars: 0, moons: 0, suns: 0 },
    [hydrated, key],
  );

  return (
    <div className="space-y-4 text-left text-sm text-zinc-700 dark:text-zinc-200">
      <section className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">1) Lesson Progress</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <p>Grammar lessons done: <strong>{grammarDone}/{GRAMMAR_LESSON_PATHS.length}</strong></p>
          <p>Vocabulary lessons done: <strong>{vocabDone}/{VOCABULARY_LESSON_PATHS.length}</strong></p>
        </div>
        <p className="mt-1 text-lg font-bold text-emerald-700 dark:text-emerald-300">
          {lessonTitle
            ? `${lessonTitle.icon} Title: ${lessonTitle.title} (${lessonTitle.pct}%)`
            : 'No title yet'}
        </p>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">2) Continuous Effort</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          <p>Days used: <strong>{daysUsed}</strong></p>
          <p>Current streak: <strong>{currentStreak} day(s)</strong></p>
          <p>Best streak: <strong>{bestStreak} day(s)</strong></p>
        </div>
        <p className="mt-3 text-lg font-bold text-amber-700 dark:text-amber-300">
          {topStreakMilestone > 0
            ? `🎯 Milestone: ${topStreakMilestone} ${topStreakMilestone === 1 ? 'Day' : 'Days'}`
            : '🎯 Milestone: Not reached yet'}
        </p>
        <p className="text-xs text-amber-800/90 dark:text-amber-200/90">
          Milestone = total number of days you have used the app.
        </p>
        <p className="mt-1 text-xs text-amber-800/90 dark:text-amber-200/90">
          {nextDaysMilestone
            ? `Next milestone: ${nextDaysMilestone} days (${nextDaysMilestone - daysUsed} to go)`
            : 'Next milestone: All milestone tiers completed'}
        </p>
        <p className="mt-1 text-lg font-bold text-amber-700 dark:text-amber-300">
          {topStreakMilestone > 0 ? `🏅 Streak Badge: ${topStreakMilestone}-Day` : '🏅 Streak Badge: Not reached yet'}
        </p>
        <p className="text-xs text-amber-800/90 dark:text-amber-200/90">
          Streak Badge = continuous days in a row. It resets when a day is missed.
        </p>
        <p className="mt-1 text-xs text-amber-800/90 dark:text-amber-200/90">
          {nextStreakBadge
            ? `Next streak badge: ${nextStreakBadge}-Day (${nextStreakBadge - currentStreak} to go)`
            : 'Next streak badge: All badge tiers completed'}
        </p>
      </section>

      <section className="rounded-lg border border-sky-200 bg-sky-50/70 p-4 dark:border-sky-900 dark:bg-sky-950/30">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">3) Quiz Progress</h3>
        <p className="mt-2">Total quizzes taken: <strong>{totalLessonQuizAttempts}</strong></p>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold text-sky-700 dark:text-sky-300">
          <span className="mr-1 inline-block w-24 shrink-0">Medals:</span>
          <span className="inline-flex items-center gap-2">
            <MedalIconImg tier="bronze" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonMedalCounts.bronze}</span>
          </span>
          <span className="text-sky-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <MedalIconImg tier="silver" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonMedalCounts.silver}</span>
          </span>
          <span className="text-sky-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <MedalIconImg tier="gold" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonMedalCounts.gold}</span>
          </span>
        </p>
        <p className="text-xs text-sky-800/90 dark:text-sky-200/90">
          One medal per lesson quiz path, based on average score: Bronze (70%+), Silver (85%+), Gold (98%+).
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold text-sky-700 dark:text-sky-300">
          <span className="mr-1 inline-block w-24 shrink-0">Trophies:</span>
          <span className="inline-flex items-center gap-2">
            <TrophyIconImg kind="bronze" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonTrophyCounts.bronzeTrophies}</span>
          </span>
          <span className="text-sky-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <TrophyIconImg kind="silver" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonTrophyCounts.silverTrophies}</span>
          </span>
          <span className="text-sky-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <TrophyIconImg kind="gold" className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{lessonTrophyCounts.goldTrophies}</span>
          </span>
        </p>
        <p className="text-xs text-sky-800/90 dark:text-sky-200/90">
          Trophy conversion: 20 gold medals {'->'} 1 bronze trophy; 10 bronze trophies {'->'} 1 silver trophy; 5
          silver trophies {'->'} 1 gold trophy.
        </p>
        <div className="mt-3 space-y-2">
          {Object.keys(quizTree).length === 0 && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">No lesson quiz attempts yet.</p>
          )}
          {Object.entries(quizTree).map(([category, node]) => (
            <div key={category} className="rounded-md border border-sky-200/80 bg-white/70 p-3 dark:border-sky-800 dark:bg-zinc-900/40">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                {category}: {node.attempts} quiz attempts, accuracy {percent(node.correct, node.questions)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-violet-200 bg-violet-50/70 p-4 dark:border-violet-900 dark:bg-violet-950/30">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">4) Daily test</h3>
        <p className="mt-2">Total daily tests taken: <strong>{dailyTestStat.attempts}</strong></p>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold text-violet-700 dark:text-violet-300">
          <span className="mr-1 inline-block w-24 shrink-0">Dust bank:</span>
          <span className="inline-flex items-center gap-2">
            <StellarDustIcon className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{dailyCelestial.dust}</span>
            <span className="font-medium text-violet-600 dark:text-violet-300">/ {DAILY_DUST_PER_STAR}</span>
          </span>
        </p>
        <p className="text-xs text-violet-800/90 dark:text-violet-200/90">
          Each daily test you finish adds stellar dust from that test’s score only: 0 below 70%; 1 at 70%+; 3 at 85%+; 5 at
          98%+.
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold text-violet-700 dark:text-violet-300">
          <span className="mr-1 inline-block w-24 shrink-0">Rewards:</span>
          <span className="inline-flex items-center gap-2">
            <CelestialStarIcon className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{dailyCelestial.stars}</span>
          </span>
          <span className="text-violet-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <CelestialMoonIcon className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{dailyCelestial.moons}</span>
          </span>
          <span className="text-violet-400" aria-hidden>
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <CelestialPlanetIcon className="h-9 w-9" />
            <span className="inline-block w-10 text-right tabular-nums">{dailyCelestial.suns}</span>
          </span>
        </p>
        <p className="text-xs text-violet-800/90 dark:text-violet-200/90">
          Progression: {DAILY_DUST_PER_STAR} dust {'->'} 1 star; {DAILY_STARS_PER_MOON} stars {'->'} 1 moon;{' '}
          {DAILY_MOONS_PER_SUN} moons {'->'} 1 planet.
        </p>
        {dailyTestStat.attempts > 0 ? (
          <div className="mt-3 rounded-md border border-violet-200/80 bg-white/70 p-3 dark:border-violet-800 dark:bg-zinc-900/40">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Daily test: {dailyTestStat.attempts} attempt{dailyTestStat.attempts === 1 ? '' : 's'}, accuracy{' '}
              {percent(dailyTestStat.correct, dailyTestStat.questions)}
            </p>
          </div>
        ) : (
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">No daily test attempts yet.</p>
        )}
      </section>

      {data.hasAny && (
        <div>
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Clear all local dashboard data for this browser?')) {
                clearAllLocalProgress();
              }
            }}
            className="text-xs text-red-600 underline-offset-2 hover:underline dark:text-red-400"
          >
            Clear all local data
          </button>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Local to this browser only. Your data does not leave this device.
          </p>
        </div>
      )}
    </div>
  );
}
