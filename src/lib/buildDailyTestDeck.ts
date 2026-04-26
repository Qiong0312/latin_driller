import type { QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import { TRACKED_LESSON_PATHS } from '@/lib/trackedLessons';
import { isLessonDone } from '@/lib/localProgress';
import { getQuizPoolForLesson } from '@/lib/lessonQuizPoolRegistry';

function dedupeByQuestion(questions: QuizQuestion[]): QuizQuestion[] {
  const seen = new Set<string>();
  const out: QuizQuestion[] = [];
  for (const q of questions) {
    if (seen.has(q.question)) {
      continue;
    }
    seen.add(q.question);
    out.push(q);
  }
  return out;
}

export type GetDailyTestFullBankResult =
  | { ok: true; questions: QuizQuestion[] }
  | { ok: false; reason: 'no_lessons_done' | 'no_questions' };

/** Combined quiz pool for done lessons (deduped by question text) for the daily test UI. */
export function getDailyTestFullBank(): GetDailyTestFullBankResult {
  const donePaths = TRACKED_LESSON_PATHS.filter((p) => isLessonDone(p));
  if (donePaths.length === 0) {
    return { ok: false, reason: 'no_lessons_done' };
  }

  const combined: QuizQuestion[] = [];
  for (const p of donePaths) {
    const pool = getQuizPoolForLesson(p);
    if (pool) {
      combined.push(...pool);
    }
  }

  const unique = dedupeByQuestion(combined);
  if (unique.length === 0) {
    return { ok: false, reason: 'no_questions' };
  }

  return { ok: true, questions: unique };
}
