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
  '/vocabulary/landscape': [
    '/vocabulary/landscape/land',
    '/vocabulary/landscape/mountains',
    '/vocabulary/landscape/water',
    '/vocabulary/landscape/plants',
    '/vocabulary/landscape/sky-weather',
    '/vocabulary/landscape/elements',
  ],
  '/vocabulary/marketplace': [
    '/vocabulary/marketplace/places-people',
    '/vocabulary/marketplace/money-trade',
    '/vocabulary/marketplace/carrying',
    '/vocabulary/marketplace/equipment',
  ],
  '/vocabulary/family': [
    '/vocabulary/family/immediate-family',
    '/vocabulary/family/extended-family',
    '/vocabulary/family/other-relations',
  ],
  '/vocabulary/occupations': [
    '/vocabulary/occupations/general',
    '/vocabulary/occupations/military-government',
    '/vocabulary/occupations/education',
    '/vocabulary/occupations/crafts-trades',
    '/vocabulary/occupations/arts-entertainment',
  ],
  '/vocabulary/core-actions': [
    '/vocabulary/core-actions/daily-actions',
    '/vocabulary/core-actions/senses-perception',
    '/vocabulary/core-actions/communication',
    '/vocabulary/core-actions/thinking-knowing',
    '/vocabulary/core-actions/emotion-desire',
  ],
  '/vocabulary/environment-interaction': [
    '/vocabulary/environment-interaction/home-actions',
    '/vocabulary/environment-interaction/marketplace-money',
    '/vocabulary/environment-interaction/military-government',
    '/vocabulary/environment-interaction/nature-movement',
    '/vocabulary/environment-interaction/weather-phenomena',
  ],
  '/vocabulary/society-relationships': [
    '/vocabulary/society-relationships/family-relationships',
    '/vocabulary/society-relationships/learning-teaching',
    '/vocabulary/society-relationships/travel-exploration',
    '/vocabulary/society-relationships/religion-ritual',
    '/vocabulary/society-relationships/law-society',
  ],
  '/vocabulary/irregular-verbs': [
    '/vocabulary/irregular-verbs/essential',
    '/vocabulary/irregular-verbs/common-irregulars',
    '/vocabulary/irregular-verbs/compound',
  ],
  '/vocabulary/deponent-verbs': [
    '/vocabulary/deponent-verbs/communication-speech',
    '/vocabulary/deponent-verbs/movement-action',
    '/vocabulary/deponent-verbs/emotion-thought',
    '/vocabulary/deponent-verbs/social-legal',
    '/vocabulary/deponent-verbs/semi-deponent',
  ],
  '/vocabulary/core-descriptions': [
    '/vocabulary/core-descriptions/size-quantity',
    '/vocabulary/core-descriptions/quality-value',
    '/vocabulary/core-descriptions/physical-properties',
    '/vocabulary/core-descriptions/condition-state',
    '/vocabulary/core-descriptions/appearance-color',
    '/vocabulary/core-descriptions/personality',
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
