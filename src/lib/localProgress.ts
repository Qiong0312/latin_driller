import { DAILY_TEST_QUIZ_PATH } from '@/lib/trackedLessons';
import {
  areAllVocabularySubLessonsDone,
  getVocabularyCategoryForSubLesson,
  getVocabularySubLessonsForCategory,
  isVocabularyCategoryPath,
} from '@/lib/vocabularyCategoryTree';

const STORAGE_KEY = 'latin_driller_progress_v1';

export const PROGRESS_EVENT = 'latin-driller-progress';

export type QuizProgressEntry = {
  bestScore: number;
  bestTotal: number;
  lastScore: number;
  lastTotal: number;
  lastAt: string;
  attempts: number;
  totalCorrect?: number;
  totalQuestions?: number;
};

export type FlashcardProgressEntry = {
  visits: number;
  lastAt: string;
};

export type QuizMedalTier = 'none' | 'bronze' | 'silver' | 'gold';

/** Daily test: stellar dust and star / moon / sun meta (separate from lesson medals). */
export type DailyTestCelestialProgress = {
  /** Dust bank toward the next star (0–99). */
  dust: number;
  /** Stars toward the next moon (0–4). */
  stars: number;
  /** Moons toward the next sun (0–4). */
  moons: number;
  /** Lifetime suns. */
  suns: number;
};

export const DAILY_DUST_PER_STAR = 100;
export const DAILY_STARS_PER_MOON = 5;
export const DAILY_MOONS_PER_SUN = 5;

export type LocalProgressV1 = {
  version: 1;
  quizzes: Record<string, QuizProgressEntry>;
  flashcards: Record<string, FlashcardProgressEntry>;
  /** User explicitly marked these lesson paths (e.g. /vocabulary/animals/common) as “done for me.” */
  lessonsDone: Record<string, true>;
  /** Local-day keys in YYYY-MM-DD for usage/streak tracking. */
  activityDays: Record<string, true>;
  /** Daily test dust + star/moon/sun progression. */
  dailyTestCelestial: DailyTestCelestialProgress;
  /** Local random account nickname (e.g. pinkangryflamingo). */
  profileName?: string;
};

const emptyState = (): LocalProgressV1 => ({
  version: 1,
  quizzes: {},
  flashcards: {},
  lessonsDone: {},
  activityDays: {},
  dailyTestCelestial: { dust: 0, stars: 0, moons: 0, suns: 0 },
});

function localDayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function markActivityToday(data: LocalProgressV1): void {
  data.activityDays[localDayKey()] = true;
}

const NAME_COLORS = [
  'pink',
  'blue',
  'green',
  'purple',
  'gold',
  'silver',
  'orange',
  'teal',
  'crimson',
  'indigo',
  'scarlet',
  'violet',
  'amber',
  'azure',
  'jade',
  'coral',
  'ivory',
  'onyx',
  'copper',
  'bronze',
] as const;

const NAME_EMOTIONS = [
  'happy',
  'angry',
  'calm',
  'brave',
  'proud',
  'curious',
  'eager',
  'mighty',
  'cheerful',
  'fierce',
  'fearless',
  'gentle',
  'quiet',
  'playful',
  'steady',
  'joyful',
  'bold',
  'clever',
  'kind',
  'witty',
] as const;

const NAME_ANIMALS = [
  'flamingo',
  'tiger',
  'otter',
  'eagle',
  'fox',
  'wolf',
  'falcon',
  'dolphin',
  'rabbit',
  'panther',
  'lynx',
  'sparrow',
  'raven',
  'orca',
  'badger',
  'hawk',
  'puma',
  'gecko',
  'bison',
  'heron',
] as const;

const NAME_TRAITS = [
  'swift',
  'silent',
  'wild',
  'bright',
  'bold',
  'lucky',
  'clever',
  'storm',
  'ember',
  'frost',
  'steady',
  'nimble',
  'sharp',
  'mellow',
  'radiant',
  'sturdy',
  'glowing',
  'fearless',
  'wandering',
  'vivid',
] as const;

const NAME_PLACES = [
  'forest',
  'mountain',
  'river',
  'valley',
  'sky',
  'ocean',
  'desert',
  'island',
  'meadow',
  'canyon',
  'harbor',
  'tundra',
  'jungle',
  'cliff',
  'lagoon',
  'prairie',
  'glacier',
  'grove',
  'summit',
  'coast',
] as const;

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

function makeRandomProfileName(): string {
  // Use multiple formats so generated names are less predictable than one fixed pattern.
  const variants = [
    () => `${pick(NAME_COLORS)}${pick(NAME_EMOTIONS)}${pick(NAME_ANIMALS)}`,
    () => `${pick(NAME_TRAITS)}${pick(NAME_ANIMALS)}${pick(NAME_PLACES)}`,
    () => `${pick(NAME_EMOTIONS)}${pick(NAME_PLACES)}${pick(NAME_ANIMALS)}`,
    () => `${pick(NAME_COLORS)}${pick(NAME_TRAITS)}${pick(NAME_ANIMALS)}`,
    () => `${pick(NAME_ANIMALS)}${pick(NAME_TRAITS)}${pick(NAME_COLORS)}`,
    () => `${pick(NAME_PLACES)}${pick(NAME_ANIMALS)}${pick(NAME_EMOTIONS)}`,
  ] as const;
  return pick(variants)();
}

function parse(raw: string | null): LocalProgressV1 {
  if (!raw) {
    return emptyState();
  }
  try {
    const data = JSON.parse(raw) as LocalProgressV1;
    if (data?.version === 1 && data.quizzes && data.flashcards) {
      return {
        ...data,
        lessonsDone: data.lessonsDone ?? {},
        activityDays: data.activityDays ?? {},
        dailyTestCelestial: data.dailyTestCelestial ?? { dust: 0, stars: 0, moons: 0, suns: 0 },
      };
    }
  } catch {
    /* ignore */
  }
  return emptyState();
}

export function loadProgress(): LocalProgressV1 {
  if (typeof window === 'undefined') {
    return emptyState();
  }
  return parse(localStorage.getItem(STORAGE_KEY));
}

function saveProgress(data: LocalProgressV1): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
  } catch {
    /* quota or private mode */
  }
}

function ratio(score: number, total: number): number {
  if (total <= 0) {
    return 0;
  }
  return score / total;
}

function isQuizPath(path: string): boolean {
  return path.endsWith('/test');
}

function isDailyTestQuizPath(path: string): boolean {
  return path === DAILY_TEST_QUIZ_PATH;
}

function defaultDailyCelestial(): DailyTestCelestialProgress {
  return { dust: 0, stars: 0, moons: 0, suns: 0 };
}

/**
 * Stellar dust earned for one daily test (highest band only). Under 70%: 0.
 * 70%+: 1, 85%+: 2, 98%+: 3.
 */
export function dailyDustFromScorePercent(percent: number): 0 | 1 | 2 | 3 {
  if (percent < 70) {
    return 0;
  }
  if (percent >= 98) {
    return 3;
  }
  if (percent >= 85) {
    return 2;
  }
  return 1;
}

function applyDailyCelestialDust(
  c: DailyTestCelestialProgress,
  add: number,
): DailyTestCelestialProgress {
  let { dust, stars, moons, suns } = c;
  dust += add;
  while (dust >= DAILY_DUST_PER_STAR) {
    dust -= DAILY_DUST_PER_STAR;
    stars += 1;
  }
  while (stars >= DAILY_STARS_PER_MOON) {
    stars -= DAILY_STARS_PER_MOON;
    moons += 1;
  }
  while (moons >= DAILY_MOONS_PER_SUN) {
    moons -= DAILY_MOONS_PER_SUN;
    suns += 1;
  }
  return { dust, stars, moons, suns };
}

function dailyCelestialFromData(data: LocalProgressV1): DailyTestCelestialProgress {
  const c = data.dailyTestCelestial;
  return c ? { ...c } : defaultDailyCelestial();
}

export function getDailyTestCelestialProgress(): DailyTestCelestialProgress {
  return dailyCelestialFromData(loadProgress());
}

/** Lesson / category quiz paths only (excludes the daily test path). */
function isLessonQuizPath(path: string): boolean {
  return isQuizPath(path) && !isDailyTestQuizPath(path);
}

function averagePercentFromQuizEntry(entry: QuizProgressEntry): number | null {
  const attempts = entry.attempts || 0;
  const inferredTotal = attempts * (entry.lastTotal || 0);
  const totalQuestions = entry.totalQuestions ?? inferredTotal;
  if (totalQuestions <= 0) {
    return null;
  }
  const inferredCorrect = attempts * (entry.lastScore || 0);
  const totalCorrect = entry.totalCorrect ?? inferredCorrect;
  return (totalCorrect / totalQuestions) * 100;
}

export function quizMedalTierFromAverage(averagePercent: number | null): QuizMedalTier {
  if (averagePercent === null) {
    return 'none';
  }
  if (averagePercent >= 98) {
    return 'gold';
  }
  if (averagePercent >= 85) {
    return 'silver';
  }
  if (averagePercent >= 70) {
    return 'bronze';
  }
  return 'none';
}

export function getQuizMedalStatus(quizPath: string): {
  averagePercent: number | null;
  medal: QuizMedalTier;
} {
  if (!quizPath) {
    return { averagePercent: null, medal: 'none' };
  }
  const entry = loadProgress().quizzes[quizPath];
  if (!entry) {
    return { averagePercent: null, medal: 'none' };
  }
  if (isDailyTestQuizPath(quizPath)) {
    if (!entry.lastTotal) {
      return { averagePercent: null, medal: 'none' };
    }
    const lastPercent = (entry.lastScore / entry.lastTotal) * 100;
    return {
      averagePercent: lastPercent,
      medal: 'none',
    };
  }
  const averagePercent = averagePercentFromQuizEntry(entry);
  return {
    averagePercent,
    medal: quizMedalTierFromAverage(averagePercent),
  };
}

/**
 * Medals for lesson and category quizzes only (`…/test` paths), not the daily test.
 * One medal per quiz path, tier from lifetime average: Bronze 70%+, Silver 85%+, Gold 98%+.
 */
export function getLessonQuizMedalCounts(): { bronze: number; silver: number; gold: number } {
  const out = { bronze: 0, silver: 0, gold: 0 };
  const quizzes = loadProgress().quizzes;
  for (const [path, entry] of Object.entries(quizzes)) {
    if (!isLessonQuizPath(path)) {
      continue;
    }
    const tier = quizMedalTierFromAverage(averagePercentFromQuizEntry(entry));
    if (tier === 'bronze') out.bronze += 1;
    if (tier === 'silver') out.silver += 1;
    if (tier === 'gold') out.gold += 1;
  }
  return out;
}

/**
 * Daily test result panel: this run’s score, dust granted, and current celestial progress.
 */
export function getDailyTestRewardPanelSnapshot(): {
  scorePercent: number | null;
  dustThisRun: number;
  celestial: DailyTestCelestialProgress;
} {
  const data = loadProgress();
  const entry = data.quizzes[DAILY_TEST_QUIZ_PATH];
  const celestial = dailyCelestialFromData(data);
  if (!entry?.lastTotal) {
    return { scorePercent: null, dustThisRun: 0, celestial };
  }
  const scorePercent = (entry.lastScore / entry.lastTotal) * 100;
  return {
    scorePercent,
    dustThisRun: dailyDustFromScorePercent(scorePercent),
    celestial,
  };
}

/**
 * Trophy conversion:
 * - 20 gold medals => 1 bronze trophy
 * - 10 bronze trophies => 1 silver trophy
 * - 5 silver trophies => 1 gold trophy
 */
export function getQuizTrophyCounts(goldMedals: number): {
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
} {
  const bronzeTrophies = Math.floor(goldMedals / 20);
  const silverTrophies = Math.floor(bronzeTrophies / 10);
  const goldTrophies = Math.floor(silverTrophies / 5);
  return { bronzeTrophies, silverTrophies, goldTrophies };
}

/** Call when a quiz is scored. Updates best result by percentage (then by raw score on tie). */
export function recordQuizResult(quizPath: string, score: number, total: number): void {
  if (typeof window === 'undefined' || !quizPath) {
    return;
  }
  const data = loadProgress();
  const prev = data.quizzes[quizPath];
  const at = new Date().toISOString();
  const newRatio = ratio(score, total);
  const prevRatio = prev && prev.bestTotal > 0 ? ratio(prev.bestScore, prev.bestTotal) : -1;

  let bestScore = score;
  let bestTotal = total;
  if (prev) {
    if (newRatio < prevRatio || (newRatio === prevRatio && score <= prev.bestScore)) {
      bestScore = prev.bestScore;
      bestTotal = prev.bestTotal;
    }
  }

  data.quizzes[quizPath] = {
    bestScore,
    bestTotal,
    lastScore: score,
    lastTotal: total,
    lastAt: at,
    attempts: (prev?.attempts ?? 0) + 1,
    totalCorrect: (prev?.totalCorrect ?? 0) + score,
    totalQuestions: (prev?.totalQuestions ?? 0) + total,
  };

  if (isDailyTestQuizPath(quizPath) && total > 0) {
    const attemptPercent = (score / total) * 100;
    const add = dailyDustFromScorePercent(attemptPercent);
    data.dailyTestCelestial = applyDailyCelestialDust(dailyCelestialFromData(data), add);
  }

  markActivityToday(data);
  saveProgress(data);
}

const FLASH_DEDUP_PREFIX = 'latin_driller_flash_dedup:';

/** Call when a user opens a flashcard deck. Rapid duplicate calls (e.g. React Strict Mode) are ignored within a few seconds. */
export function recordFlashcardSession(flashPath: string): void {
  if (typeof window === 'undefined' || !flashPath) {
    return;
  }
  const k = `${FLASH_DEDUP_PREFIX}${flashPath}`;
  const now = Date.now();
  const prev = sessionStorage.getItem(k);
  if (prev !== null && now - parseInt(prev, 10) < 4000) {
    return;
  }
  sessionStorage.setItem(k, String(now));

  const data = loadProgress();
  const was = data.flashcards[flashPath];
  const at = new Date().toISOString();
  data.flashcards[flashPath] = {
    visits: (was?.visits ?? 0) + 1,
    lastAt: at,
  };
  markActivityToday(data);
  saveProgress(data);
}

const normLessonPath = (p: string) => (p.startsWith('/') ? p : `/${p}`);

export function isLessonDone(lessonPath: string): boolean {
  if (!lessonPath) {
    return false;
  }
  const path = normLessonPath(lessonPath);
  const data = loadProgress();
  if (data.lessonsDone[path] === true) {
    return true;
  }
  if (isVocabularyCategoryPath(path)) {
    const subs = getVocabularySubLessonsForCategory(path);
    return areAllVocabularySubLessonsDone(subs, (p) => data.lessonsDone[p] === true);
  }
  return false;
}

/**
 * Mark a lesson or vocabulary category hub as done. For vocabulary categories:
 * - Marking a **category** done marks every sub-lesson under it; unmarking clears the category and all subs.
 * - Marking a **sub-lesson** done sets the **category** done when all its sub-lessons are done; unmarking a sub clears the category.
 */
export function setLessonDone(lessonPath: string, done: boolean): void {
  if (typeof window === 'undefined' || !lessonPath) {
    return;
  }
  const path = normLessonPath(lessonPath);
  const data = loadProgress();

  if (isVocabularyCategoryPath(path)) {
    const subs = getVocabularySubLessonsForCategory(path);
    if (done) {
      data.lessonsDone[path] = true;
      for (const s of subs) {
        data.lessonsDone[s] = true;
      }
    } else {
      delete data.lessonsDone[path];
      for (const s of subs) {
        delete data.lessonsDone[s];
      }
    }
  } else {
    const cat = getVocabularyCategoryForSubLesson(path);
    if (done) {
      data.lessonsDone[path] = true;
    } else {
      delete data.lessonsDone[path];
      if (cat) {
        delete data.lessonsDone[cat];
      }
    }
    if (cat && done) {
      const subs = getVocabularySubLessonsForCategory(cat);
      if (subs.every((s) => data.lessonsDone[s] === true)) {
        data.lessonsDone[cat] = true;
      }
    }
  }

  markActivityToday(data);
  saveProgress(data);
}

/** Mark that the user used the app today (once/day). */
export function touchUsageToday(): void {
  if (typeof window === 'undefined') {
    return;
  }
  const data = loadProgress();
  const key = localDayKey();
  if (data.activityDays[key]) {
    return;
  }
  data.activityDays[key] = true;
  saveProgress(data);
}

export function getOrCreateProfileName(): string {
  if (typeof window === 'undefined') {
    return 'locallearner';
  }
  const data = loadProgress();
  if (data.profileName) {
    return data.profileName;
  }
  data.profileName = makeRandomProfileName();
  saveProgress(data);
  return data.profileName;
}

export function rerollProfileName(): string {
  if (typeof window === 'undefined') {
    return 'locallearner';
  }
  const data = loadProgress();
  data.profileName = makeRandomProfileName();
  saveProgress(data);
  return data.profileName;
}

export function getProgressCounts(): {
  lessonsMarkedDone: number;
} {
  const data = loadProgress();
  return { lessonsMarkedDone: Object.keys(data.lessonsDone).length };
}

export function hasAnyStoredProgress(): boolean {
  const d = loadProgress();
  if (Object.keys(d.activityDays).length > 0) {
    return true;
  }
  if (Object.keys(d.lessonsDone).length > 0) {
    return true;
  }
  if (Object.keys(d.quizzes).length > 0) {
    return true;
  }
  return Object.values(d.flashcards).some((f) => f.visits > 0);
}

export function clearAllLocalProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
  } catch {
    /* ignore */
  }
}
