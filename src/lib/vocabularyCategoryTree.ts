/** Top-level vocabulary hub paths → sub-lesson paths (for “done” sync). */
export const VOCABULARY_CATEGORY_TO_SUBLESSONS: Record<string, readonly string[]> = {
  '/vocabulary/animals': [
    '/vocabulary/animals/common',
    '/vocabulary/animals/wild',
    '/vocabulary/animals/birds',
    '/vocabulary/animals/sea',
    '/vocabulary/animals/small',
  ],
  '/vocabulary/food': [
    '/vocabulary/food/basic',
    '/vocabulary/food/fruits',
    '/vocabulary/food/vegetables',
    '/vocabulary/food/meat',
    '/vocabulary/food/drinks',
  ],
  '/vocabulary/body-parts': [
    '/vocabulary/body-parts/basic',
    '/vocabulary/body-parts/face',
    '/vocabulary/body-parts/internal',
  ],
  '/vocabulary/rooms': [
    '/vocabulary/rooms/living-sleeping',
    '/vocabulary/rooms/eating-cooking',
    '/vocabulary/rooms/general',
    '/vocabulary/rooms/washing',
    '/vocabulary/rooms/study-work',
    '/vocabulary/rooms/outdoor',
  ],
} as const;

const norm = (p: string) => (p.startsWith('/') ? p : `/${p}`);

function buildSubToCategory(): Map<string, string> {
  const m = new Map<string, string>();
  for (const [cat, subs] of Object.entries(VOCABULARY_CATEGORY_TO_SUBLESSONS)) {
    for (const s of subs) {
      m.set(s, cat);
    }
  }
  return m;
}

const SUB_TO_CATEGORY = buildSubToCategory();

export function isVocabularyCategoryPath(lessonPath: string): boolean {
  return Object.prototype.hasOwnProperty.call(VOCABULARY_CATEGORY_TO_SUBLESSONS, norm(lessonPath));
}

export function getVocabularySubLessonsForCategory(categoryPath: string): readonly string[] {
  return VOCABULARY_CATEGORY_TO_SUBLESSONS[norm(categoryPath)] ?? [];
}

export function getVocabularyCategoryForSubLesson(subLessonPath: string): string | null {
  return SUB_TO_CATEGORY.get(norm(subLessonPath)) ?? null;
}

export function areAllVocabularySubLessonsDone(
  subLessons: readonly string[],
  isDone: (p: string) => boolean,
): boolean {
  return subLessons.length > 0 && subLessons.every((p) => isDone(p));
}
