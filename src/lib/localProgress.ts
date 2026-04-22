const STORAGE_KEY = 'latin_driller_progress_v1';

export const PROGRESS_EVENT = 'latin-driller-progress';

export type QuizProgressEntry = {
  bestScore: number;
  bestTotal: number;
  lastScore: number;
  lastTotal: number;
  lastAt: string;
  attempts: number;
};

export type FlashcardProgressEntry = {
  visits: number;
  lastAt: string;
};

export type LocalProgressV1 = {
  version: 1;
  quizzes: Record<string, QuizProgressEntry>;
  flashcards: Record<string, FlashcardProgressEntry>;
  /** User explicitly marked these lesson paths (e.g. /vocabulary/animals/common) as “done for me.” */
  lessonsDone: Record<string, true>;
};

const emptyState = (): LocalProgressV1 => ({
  version: 1,
  quizzes: {},
  flashcards: {},
  lessonsDone: {},
});

function parse(raw: string | null): LocalProgressV1 {
  if (!raw) {
    return emptyState();
  }
  try {
    const data = JSON.parse(raw) as LocalProgressV1;
    if (data?.version === 1 && data.quizzes && data.flashcards) {
      return { ...data, lessonsDone: data.lessonsDone ?? {} };
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
  };
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
  saveProgress(data);
}

const normLessonPath = (p: string) => (p.startsWith('/') ? p : `/${p}`);

export function isLessonDone(lessonPath: string): boolean {
  if (!lessonPath) {
    return false;
  }
  return loadProgress().lessonsDone[normLessonPath(lessonPath)] === true;
}

export function setLessonDone(lessonPath: string, done: boolean): void {
  if (typeof window === 'undefined' || !lessonPath) {
    return;
  }
  const path = normLessonPath(lessonPath);
  const data = loadProgress();
  if (done) {
    data.lessonsDone[path] = true;
  } else {
    delete data.lessonsDone[path];
  }
  saveProgress(data);
}

export function getProgressCounts(): {
  lessonsMarkedDone: number;
} {
  const data = loadProgress();
  return { lessonsMarkedDone: Object.keys(data.lessonsDone).length };
}

export function hasAnyStoredProgress(): boolean {
  const d = loadProgress();
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
