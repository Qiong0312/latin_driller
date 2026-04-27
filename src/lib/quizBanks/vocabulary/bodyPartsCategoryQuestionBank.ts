import { buildVocabularyQuestionBank, type QuizQuestion } from '@/lib/buildVocabularyQuestionBank';
import {
  BODY_PARTS_BASIC_ENTRIES,
  BODY_PARTS_FACE_ENTRIES,
  BODY_PARTS_INTERNAL_ENTRIES,
} from '@/lib/quizBanks/vocabulary/bodyPartsVocab';

const BASIC = buildVocabularyQuestionBank({
  categoryLabel: 'Body — basic (Corpus)',
  outsideCategoryLatin: ['Canis', 'mālum', 'fluvius', 'pānis', 'mercātus', 'lēo', 'cibus', 'terra'],
  entries: BODY_PARTS_BASIC_ENTRIES,
});
const FACE = buildVocabularyQuestionBank({
  categoryLabel: 'Body — face & features',
  outsideCategoryLatin: ['corpus', 'ūva', 'cūbiculum', 'brāchium', 'equus', 'cēna', 'lupus', 'fīcus'],
  entries: BODY_PARTS_FACE_ENTRIES,
});
const INTERNAL = buildVocabularyQuestionBank({
  categoryLabel: 'Body — internal organs',
  outsideCategoryLatin: ['cāput', 'lactūca', 'oculus', 'mūs', 'pēs', 'vīnum', 'hortus', 'Tigris'],
  entries: BODY_PARTS_INTERNAL_ENTRIES,
});

export const BODY_PARTS_BASIC_QUIZ: QuizQuestion[] = BASIC;
export const BODY_PARTS_FACE_QUIZ: QuizQuestion[] = FACE;
export const BODY_PARTS_INTERNAL_QUIZ: QuizQuestion[] = INTERNAL;

export const BODY_PARTS_CATEGORY_ALL_QUESTIONS: QuizQuestion[] = [...BASIC, ...FACE, ...INTERNAL];
