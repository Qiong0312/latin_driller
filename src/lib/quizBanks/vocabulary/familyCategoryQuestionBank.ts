import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  FAMILY_EXTENDED,
  FAMILY_IMMEDIATE,
  FAMILY_OTHER_RELATIONS,
} from '@/lib/quizBanks/vocabulary/familyVocab';

const IMMEDIATE_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Family: immediate family',
  outsideCategoryLatin: ['canis', 'aqua', 'forum', 'luna', 'taberna', 'hortus', 'piscis', 'mensa'],
  entries: FAMILY_IMMEDIATE,
});
const EXTENDED_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Family: extended family',
  outsideCategoryLatin: ['terra', 'vinum', 'mercator', 'cubiculum', 'equus', 'silva', 'nummus', 'ager'],
  entries: FAMILY_EXTENDED,
});
const OTHER_RELATIONS_BUILT = buildVocabularyQuestionBank({
  categoryLabel: 'Family: other relations',
  outsideCategoryLatin: ['panis', 'cena', 'dolium', 'flumen', 'lupus', 'nauta', 'pecunia', 'lectus'],
  entries: FAMILY_OTHER_RELATIONS,
});

export const FAMILY_IMMEDIATE_QUIZ: QuizQuestion[] = IMMEDIATE_BUILT;
export const FAMILY_EXTENDED_QUIZ: QuizQuestion[] = EXTENDED_BUILT;
export const FAMILY_OTHER_RELATIONS_QUIZ: QuizQuestion[] = OTHER_RELATIONS_BUILT;

export const FAMILY_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...IMMEDIATE_BUILT,
  ...EXTENDED_BUILT,
  ...OTHER_RELATIONS_BUILT,
];
