import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  MARKETPLACE_CARRYING,
  MARKETPLACE_EQUIPMENT,
  MARKETPLACE_MONEY_TRADE,
  MARKETPLACE_PLACES_PEOPLE,
} from '@/lib/vocabulary/marketplaceVocab';

const PLACES_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Marketplace: places & people',
  outsideCategoryLatin: ['terra', 'pānis', 'merx', 'amphora', 'crumēna', 'canis', 'aqua', 'cūbiculum'],
  entries: MARKETPLACE_PLACES_PEOPLE,
});
const MONEY_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Marketplace: money & trade',
  outsideCategoryLatin: ['forum', 'taberna', 'saccus', 'mēnsa', 'equus', 'cibus', 'lūna', 'nāsus'],
  entries: MARKETPLACE_MONEY_TRADE,
});
const CARRYING_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Marketplace: carrying',
  outsideCategoryLatin: ['pecūnia', 'mercātor', 'dolium', 'cōpiae', 'lēo', 'pānis', 'fluvius', 'dēns'],
  entries: MARKETPLACE_CARRYING,
});
const EQUIPMENT_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Marketplace: equipment & setting',
  outsideCategoryLatin: ['nummus', 'cliēns', 'loculus', 'mundus', 'cāput', 'cēna', 'lupus', 'hortus'],
  entries: MARKETPLACE_EQUIPMENT,
});

export const MARKETPLACE_PLACES_PEOPLE_QUIZ: QuizQuestion[] = PLACES_BUILT;
export const MARKETPLACE_MONEY_TRADE_QUIZ: QuizQuestion[] = MONEY_BUILT;
export const MARKETPLACE_CARRYING_QUIZ: QuizQuestion[] = CARRYING_BUILT;
export const MARKETPLACE_EQUIPMENT_QUIZ: QuizQuestion[] = EQUIPMENT_BUILT;

export const MARKETPLACE_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...PLACES_BUILT,
  ...MONEY_BUILT,
  ...CARRYING_BUILT,
  ...EQUIPMENT_BUILT,
];
