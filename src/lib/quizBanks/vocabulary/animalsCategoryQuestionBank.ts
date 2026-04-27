import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  ANIMALS_BIRDS_ENTRIES,
  ANIMALS_COMMON_ENTRIES,
  ANIMALS_SEA_ENTRIES,
  ANIMALS_SMALL_ENTRIES,
  ANIMALS_WILD_ENTRIES,
} from '@/lib/quizBanks/vocabulary/animalsVocab';

const COMMON = buildVocabularyQuestionBank({
  categoryLabel: 'Common animals (Animalia)',
  outsideCategoryLatin: ['lēo', 'mālum', 'Piscis', 'pānis', 'fluvius', 'merx', 'taberna', 'nāsus'],
  entries: ANIMALS_COMMON_ENTRIES,
});
const WILD = buildVocabularyQuestionBank({
  categoryLabel: 'Wild animals',
  outsideCategoryLatin: ['Canis', 'ūva', 'culīna', 'mercātor', 'Vacca', 'cēna', 'equus', 'pānis'],
  entries: ANIMALS_WILD_ENTRIES,
});
const BIRDS = buildVocabularyQuestionBank({
  categoryLabel: 'Birds',
  outsideCategoryLatin: ['Ursus', 'cārōta', 'fluvius', 'Tigris', 'lēctus', 'bōs', 'canis', 'terra'],
  entries: ANIMALS_BIRDS_ENTRIES,
});
const SEA = buildVocabularyQuestionBank({
  categoryLabel: 'Sea animals',
  outsideCategoryLatin: ['Lupus', 'mālum', 'āger', 'Gallus', 'cibus', 'sōl', 'apis', 'hortus'],
  entries: ANIMALS_SEA_ENTRIES,
});
const SMALL = buildVocabularyQuestionBank({
  categoryLabel: 'Small creatures',
  outsideCategoryLatin: ['Aquila', 'pīrum', 'cūbiculum', 'Delphīnus', 'corpus', 'vīnum', 'rīvus', 'frōns'],
  entries: ANIMALS_SMALL_ENTRIES,
});

export const ANIMALS_COMMON_QUIZ: QuizQuestion[] = COMMON;
export const ANIMALS_WILD_QUIZ: QuizQuestion[] = WILD;
export const ANIMALS_BIRDS_QUIZ: QuizQuestion[] = BIRDS;
export const ANIMALS_SEA_QUIZ: QuizQuestion[] = SEA;
export const ANIMALS_SMALL_QUIZ: QuizQuestion[] = SMALL;

/** All Animalia sub-lesson banks concatenated (full category quiz). */
export const ANIMALS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [
  ...COMMON,
  ...WILD,
  ...BIRDS,
  ...SEA,
  ...SMALL,
];
