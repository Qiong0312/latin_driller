/**
 * Sub-lesson paths where “Mark as done for me” and daily-test pools apply.
 * Keep in sync with navigation / dashboard lesson lists.
 */
export const GRAMMAR_LESSON_PATHS = [
  '/grammar/grammatical-gender',
  '/grammar/cases',
  '/grammar/declensions',
  '/grammar/present-tense-active',
  '/grammar/adjectives',
] as const;

export const VOCABULARY_LESSON_PATHS = [
  '/vocabulary/animals/common',
  '/vocabulary/animals/wild',
  '/vocabulary/animals/birds',
  '/vocabulary/animals/sea',
  '/vocabulary/animals/small',
  '/vocabulary/food/basic',
  '/vocabulary/food/fruits',
  '/vocabulary/food/vegetables',
  '/vocabulary/food/meat',
  '/vocabulary/food/drinks',
  '/vocabulary/body-parts/basic',
  '/vocabulary/body-parts/face',
  '/vocabulary/body-parts/internal',
  '/vocabulary/rooms/living-sleeping',
  '/vocabulary/rooms/eating-cooking',
  '/vocabulary/rooms/general',
  '/vocabulary/rooms/washing',
  '/vocabulary/rooms/study-work',
  '/vocabulary/rooms/outdoor',
  '/vocabulary/landscape/land',
  '/vocabulary/landscape/mountains',
  '/vocabulary/landscape/water',
  '/vocabulary/landscape/plants',
  '/vocabulary/landscape/sky-weather',
  '/vocabulary/landscape/elements',
] as const;

export const TRACKED_LESSON_PATHS: readonly string[] = [
  ...GRAMMAR_LESSON_PATHS,
  ...VOCABULARY_LESSON_PATHS,
];

export const DAILY_TEST_MAX_QUESTIONS = 30;

export const DAILY_TEST_QUIZ_PATH = '/dashboard/daily/test';
